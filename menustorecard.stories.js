import './menustorecard.js';
import '../button/button.js';

// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                  DEFINE THE STORY CONTROLS / PROPS / ETC                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

export default {
	title: 'LondonParkour/Cards/MenuStoreCard',
	component: '<ldnpk-menustorecard></ldnpk-menustorecard>',
	tags: ['autodocs'],

	// Docs Page Description
	parameters: {
		docs: {
			description: {
				component:
					'The LondonParkour menustorecard Component.',
			},
		},
	},

	// ╭─────────────────────────────────────────────────────╮
	// │                 ARGUMENTS (CONTROLS)                │
	// ╰─────────────────────────────────────────────────────╯
	argTypes: {

	}

};



// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                                                                           ║
// ║                                  STORIES                                  ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝



// ╭───────────────────────────────────────────────────────╮
// │                                                       │
// │                     Default Style                     │
// │                                                       │
// ╰───────────────────────────────────────────────────────╯
export const Default = ({ }) => {

	let htmlString = /* html */`
	<style>
	
	</style>

	<div class="w-1/5 mr-auto">
		<ldnpk-menustorecard 
			title="T-Shirts" 
			subtitle="Unisex tees built for movement"
			textposition="bottom"
			class="h-40"
			>

			<picture>
				<img class="
					object-scale-down 
					object-center
					ls-is-cached
					lazyloaded
					"
					src="https://store.londonparkour.com/wp-content/uploads/2023/04/INSIGNIA-GREY-Front-1.jpg" 
					alt="T-shirt category image of man wearing londonparkour tee" 
					width="1280" 
					height="1280">
			</picture>

		</ldnpk-menustorecard>
	</div>

	`


	htmlString += /* html */`
	`

	return htmlString;

};


// Change the argument defaults for this example
Default.args = {
	label: 'DEFAULT',
};

