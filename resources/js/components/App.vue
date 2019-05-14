<template>

	<div class="main-container container-fluid d-flex flex-column justify-content-between">
		<div class="row">
			<div class="col-12 col-lg-8">
				<h1 class="text-center">Simple Lorem Ipsum</h1>
				<lorem-paragraph v-for="(paragraph, index) in paragraphs"
								 :key="'paragraph-' + index"
								 :paragraph="paragraph"
								 :composed-paragraph="composedSentences[index]"
								 :index="index"
								 :paragraph-count="paragraphs.length"
								 :ref=""
				>
				</lorem-paragraph>

				<div class="d-flex flex-row justify-content-center mb-5">
					<button type="button"
							class="btn btn-outline-primary control-button btn-add"
							@click="addParagraph"
					>
						<i class="fa fa-plus"></i>
					</button>
				</div>
			</div>

			<div class="col-12 col-lg-4 d-flex justify-content-center mb-5 mb-lg-0">

				<button type="button"
						class="btn btn-outline-success btn-copy-all control-button"
						@click="copyAll"
				>
					<span class="icon-container">
						<i class="fa fa-file-o first"></i>
						<i class="fa fa-file-o second"></i>
						<i class="fa fa-file-o third"></i>
					</span>

				</button>

			</div>
		</div>

		<footer class="row">
			<div class="col-12 col-lg-8 text-center">
				&copy; {{ currentYear }} Simple Lorem by <a href="https://gtcrais.net" target="_blank">GTCrais</a>
			</div>
		</footer>
	</div>

</template>

<script type="text/babel">
	export default {
		props: [

		],

		data: function() {
			return {

			}
		},

		mounted: function() {
			this.setDefaultParagraphs();
		},

		methods: {
			copyAll: function() {
				let comp = this;
				let text = this.composedSentences.join("\n\n");

				this.$copyText(text).then(function (e) {
					eventHub.$emit('copied-all');
				}, function (e) {
					setTimeout(function() {
						comp.$copyText(text).then(function (e) {
							eventHub.$emit('copied-all');
						}, function (e) {
							console.error(e);
						});
					}, 15);
				});
			},

			addParagraph: function() {
				let nextIndex = (this.paragraphs.length % 3);

				this.$store.commit('addParagraph', { length: this.defaultParagraphs[nextIndex].length });

				setTimeout(() => {
					window.scrollTo(0, document.body.scrollHeight);
				}, 2);
			},

			setDefaultParagraphs: function() {
				for (let defaultParagraph of this.defaultParagraphs) {
					this.$store.commit('addParagraph', Object.assign({}, defaultParagraph));
				}
			},

			getReducedParagraphIndex: function(index) {
				return index % 3;
			},

			getReducedSentenceIndex: function(index, paragraphIndex) {
				let count = this.baseParagraphs[paragraphIndex].length;

				return index % count;
			}
		},

		computed: {
			composedSentences: function() {
				let composedSentences = [];
				let baseIndex;
				let baseParagraph;
				let baseSentenceIndex;
				let composed;
				let paragraph;

				Object.keys(this.paragraphs).forEach((paragraphIndex) => {
					paragraph = this.paragraphs[paragraphIndex];
					baseIndex = this.getReducedParagraphIndex(paragraphIndex);
					baseParagraph = this.baseParagraphs[baseIndex];
					composed = [];

					for (let sentenceIndex = 0; sentenceIndex < paragraph.length; sentenceIndex++) {
						baseSentenceIndex = this.getReducedSentenceIndex(sentenceIndex, baseIndex);
						composed.push(baseParagraph[baseSentenceIndex]);
					}

					composedSentences.push(composed.join(" "));
				});

				return composedSentences;
			},

			paragraphs: function() {
				return this.$store.getters.paragraphs;
			},

			defaultParagraphs: function() {
				return this.$store.getters.defaultParagraphs;
			},

			baseParagraphs: function() {
				return this.$store.getters.baseParagraphs;
			},

			currentYear: function() {
				return this.$store.getters.currentYear;
			}
		}
	}
</script>