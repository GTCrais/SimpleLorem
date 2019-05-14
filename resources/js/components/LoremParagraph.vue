<template>
	<div class="paragraph-container d-flex justify-content-between">
		<p :class="paragraphClass">
			{{ composedParagraph }}
		</p>

		<div class="controls right-controls d-flex flex-column align-items-center">
			<button type="button"
					class="btn btn-outline-success btn-copy control-button"
					v-clipboard:copy="composedParagraph"
					v-clipboard:success="flashParagraph"
			>
				<i class="fa fa-copy"></i>
			</button>
			<button type="button"
					class="btn btn-outline-primary btn-increase control-button mb-1"
					@click="increaseSentences"
			>
				<i class="fa fa-expand"></i>
			</button>
			<button type="button"
					class="btn btn-outline-primary btn-reduce control-button"
					@click="reduceSentences"
					:class="{ disabled: !canReduce }"
			>
				<i class="fa fa-compress"></i>
			</button>

			<button type="button"
					class="btn btn-outline-warning btn-remove control-button"
					:class="{ disabled: !canRemove }"
					@click="removeParagraph"
			>
				<i class="fa fa-trash-o"></i>
			</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: [
			'paragraph',
			'composedParagraph',
			'index',
			'paragraphCount'
		],

		data: function() {
			return {
				paragraphClass: '',
				flashTimeout: null
			}
		},

		mounted: function() {

		},

		methods: {
			flashParagraph(e) {
				clearTimeout(this.flashTimeout);
				this.paragraphClass = '';
				this.paragraphClass = 'flash';

				this.flashTimeout = setTimeout(() => {
					this.paragraphClass = '';
				}, 300);
			},

			increaseSentences() {
				this.$store.commit('updateParagraphLength', {
					paragraphIndex: this.index,
					action: 'increase'
				});
			},

			reduceSentences() {
				if (!this.canReduce) {
					return;
				}

				this.$store.commit('updateParagraphLength', {
					paragraphIndex: this.index,
					action: 'reduce'
				});
			},

			removeParagraph() {
				if (!this.canRemove) {
					return;
				}

				this.$store.commit('removeParagraph', this.index);
			}
		},

		computed: {
			canReduce() {
				return (this.paragraph.length > 1) || (this.$parent.paragraphs.length > 1);
			},

			canRemove() {
				return this.paragraphCount > 1;
			}
		},

		created: function() {
			eventHub.$on('copied-all', this.flashParagraph);
		},

		beforeDestroy: function() {
			eventHub.$off('copied-all', this.flashParagraph);
		}
	}
</script>