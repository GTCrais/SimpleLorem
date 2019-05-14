
class StoreManager
{
	static setupStore()
	{
		return new Vuex.Store({
			state: Object.assign(
				StoreManager.storeState()
			),

			getters: Object.assign(
				StoreManager.storeGetters()
			),

			mutations: Object.assign(
				StoreManager.storeMutations()
			),

			actions: Object.assign(
				StoreManager.storeActions()
			)
		});
	}

	static storeState()
	{
		return {
			currentYear: currentYear,
			defaultParagraphs: [
				{
					length: 8
				},
				{
					length: 4
				},
				{
					length: 16
				}
			],
			paragraphs: [],
			baseParagraphs: [
				[
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					"Donec tincidunt tortor non efficitur egestas.",
					"Integer maximus dui ut porta efficitur.",
					"Nullam consectetur tincidunt scelerisque.",
					"In facilisis varius ullamcorper.",
					"Phasellus nibh odio, vehicula non commodo vel, ullamcorper eu quam.",
					"Nunc at congue elit, ac gravida velit.",
					"Cras eu quam eget augue vehicula faucibus ac sed enim.",
					"Integer non ipsum in nisi sagittis aliquam.",
					"Nullam at porta ex.",
					"Fusce gravida, neque sit amet ultricies semper, magna magna lobortis nunc, sit amet varius elit risus vel turpis.",
					"Mauris augue lacus, aliquam et leo quis, tempor eleifend massa.",
					"Cras elementum arcu nec turpis accumsan, vel laoreet nisi elementum.",
					"Praesent laoreet urna eget orci eleifend fermentum.",
					"Cras congue fermentum enim, id elementum magna pretium vitae.",
					"Etiam mollis tincidunt semper.",
					"Proin auctor turpis eu erat auctor, a placerat libero lacinia.",
					"Interdum et malesuada fames ac ante ipsum primis in faucibus.",
					"Curabitur urna felis, imperdiet vel vulputate eget, sagittis eu ipsum.",
					"In augue lacus, pellentesque in lacus ac, bibendum vestibulum sem.",
					"Ut finibus pretium efficitur."
				],

				[
					"Etiam tristique mauris eu elit rutrum, vitae vehicula nunc gravida.",
					"Vestibulum ornare metus eget semper vestibulum.",
					"Integer auctor arcu eget mi cursus luctus non ac orci.",
					"Donec eu mi egestas, volutpat dolor ut, cursus arcu.",
					"Praesent blandit turpis interdum, feugiat risus quis, efficitur lorem.",
					"Duis blandit quis ligula a dignissim.",
					"Morbi consectetur ante sit amet sapien porta ornare.",
					"Nullam tristique nisi tortor, viverra euismod leo tincidunt id.",
					"Vestibulum tempor ante a felis interdum, id placerat metus ultrices.",
					"Suspendisse in aliquet sem.",
					"In ut leo ipsum.",
					"Donec sollicitudin risus a odio finibus tempus.",
					"Nunc dignissim mi eu tristique hendrerit.",
					"Vestibulum laoreet vitae arcu sit amet condimentum.",
					"Aenean risus ipsum, fringilla at blandit nec, convallis eu turpis.",
					"Morbi erat nibh, tempor sit amet lorem vitae, gravida tincidunt elit.",
					"Suspendisse vitae dapibus augue, quis dignissim lectus.",
					"Aenean mattis nibh et diam pharetra, in tincidunt nisi lobortis.",
					"Donec feugiat velit eget sollicitudin fringilla.",
					"Quisque ornare sit amet velit id eleifend.",
					"Vivamus aliquet accumsan urna, vel tempus nulla aliquet bibendum.",
				],

				[
					"Phasellus tincidunt elementum tristique.",
					"Aliquam erat volutpat.",
					"Donec at suscipit risus, sit amet vehicula ipsum.",
					"Sed ac enim fringilla enim lacinia pretium.",
					"Phasellus volutpat mauris massa, vel auctor magna ullamcorper ac.",
					"Pellentesque dignissim auctor sem ac vestibulum.",
					"Pellentesque non sem in nunc porttitor consectetur.",
					"Quisque quis mattis urna, et venenatis nibh.",
					"Etiam auctor quis velit in malesuada.",
					"Phasellus ut dui ut enim placerat bibendum nec eleifend dui.",
					"Phasellus ex orci, bibendum vitae mattis in, imperdiet eu quam.",
					"Vivamus sed consectetur lacus.",
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
					"Integer mollis, ante nec consequat accumsan, odio arcu lacinia justo, sit amet gravida purus est vel leo.",
					"Etiam ac pretium nunc.",
					"Donec sit amet sagittis tortor.",
					"In efficitur augue sed magna venenatis, sed ornare ex venenatis.",
					"Nunc erat lectus, imperdiet id ante faucibus, placerat feugiat massa.",
					"Aliquam molestie volutpat ligula sit amet ultrices.",
					"Fusce vitae elit volutpat, commodo nulla in, consequat magna.",
					"Aenean mattis nibh et diam pharetra, in tincidunt nisi lobortis.",
				]
			]
		}
	}

	static storeGetters()
	{
		return {
			currentYear: function(state) {
				return state.currentYear;
			},

			paragraphs: function(state) {
				return state.paragraphs;
			},

			defaultParagraphs: function(state) {
				return state.defaultParagraphs;
			},

			baseParagraphs: function(state) {
				return state.baseParagraphs;
			}
		}
	}

	static storeMutations()
	{
		return {
			addParagraph: function(state, paragraph) {
				state.paragraphs.push(paragraph);
			},

			removeParagraph: function(state, paragraphIndex) {
				state.paragraphs.splice(paragraphIndex, 1);
			},

			updateParagraphLength: function(state, data) {
				let paragraph = state.paragraphs[data.paragraphIndex];

				if (data.action === 'increase') {
					paragraph.length++;
				} else {
					paragraph.length--;
				}

				if (!paragraph.length) {
					this.commit('removeParagraph', data.paragraphIndex);
				}
			}
		}
	}

	static storeActions()
	{
		return {

		}
	}
}

export default StoreManager