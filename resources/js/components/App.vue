<template>
	<div class="wrapper" :class="containerClass">
		<button type="button"
				class="btn btn-switch-mode control-button"
				:class="modeButtonClass"
				@click="toggleMode"
		>
			<i class="fa" :class="modeButtonIcon"></i>
		</button>

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
								title="Add paragraph"
								class="btn btn-outline-primary control-button btn-add"
								@click="addParagraph"
						>
							<i class="fa fa-plus"></i>
						</button>
					</div>
				</div>

				<div class="col-12 col-lg-4 d-flex justify-content-center mb-5 mb-lg-0">

					<div class="reset-container d-flex justify-content-end">
						<button type="button"
								title="Reset"
								class="btn btn-outline-warning btn-reset control-button"
								:class="{ disabled: !paragraphsCookie }"
								@click="reset"
						>
							<i class="fa fa-undo"></i>
						</button>
					</div>


					<button type="button"
							title="Copy all"
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
					&copy; {{ currentYear }} Simple Lorem by

					<a v-if="linkToPortfolio" href="https://gtcrais.net" target="_blank">GTCrais</a>

					<span v-else>GTCrais</span>
				</div>
			</footer>
		</div>
	</div>

</template>

<script type="text/babel">
	export default {
		props: [

		],

		data: function() {
			return {
				paragraphsCookie: null,
				modeCookie: null,
			}
		},

		mounted: function() {
			this.setCookies();
			this.setInitMode();
			this.setDefaultParagraphs();
		},

		methods: {
			reset: function() {
				this.$cookie.delete('slparagraphs');
				this.paragraphsCookie = null;
				this.$store.commit('removeParagraphs');
				this.setDefaultParagraphs();
			},

			saveSettings: function() {
				this.$cookie.set('slparagraphs', JSON.stringify(this.paragraphs), { expires: '2Y' });
				this.setParagraphsCookie();
			},

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

				this.saveSettings();
			},

			setDefaultParagraphs: function() {
				let defaultParagraphs = this.paragraphsCookie ? JSON.parse(this.paragraphsCookie) : this.defaultParagraphs;

				for (let defaultParagraph of defaultParagraphs) {
					this.$store.commit('addParagraph', Object.assign({}, defaultParagraph));
				}
			},

			setCookies: function() {
				this.setParagraphsCookie();
				this.setModeCookie();
			},

			setParagraphsCookie: function() {
				this.paragraphsCookie = this.$cookie.get('slparagraphs');
			},

			setModeCookie: function() {
				this.modeCookie = this.$cookie.get('slmode');
			},

			getReducedParagraphIndex: function(index) {
				return index % 3;
			},

			getReducedSentenceIndex: function(index, paragraphIndex) {
				let count = this.baseParagraphs[paragraphIndex].length;

				return index % count;
			},

			toggleMode: function() {
				this.$store.commit('toggleMode');
				this.$cookie.set('slmode', this.$store.getters.mode, { expires: '2Y' });
			},

			setInitMode: function() {
				if (this.modeCookie === 'dark') {
					this.$store.commit('setMode', 'dark');
				}
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
			},

			linkToPortfolio: function() {
				return this.$store.getters.linkToPortfolio;
			},

			mode: function() {
				return this.$store.getters.mode;
			},

			containerClass: function() {
				return this.mode + '-mode';
			},

			modeButtonClass: function() {
				return this.mode === 'dark' ? 'btn-light' : 'btn-dark';
			},

			modeButtonIcon: function() {
				return this.mode === 'dark' ? 'fa-sun-o' : 'fa-moon-o';
			}
		},

		created: function() {
			eventHub.$on('save-settings', this.saveSettings);
		},

		beforeDestroy: function() {
			eventHub.$off('save-settings', this.saveSettings);
		}
	}
</script>