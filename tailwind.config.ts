import type { Config } from "tailwindcss";
import { uico } from "uico";
import { fluidExtractor, fluidCorePlugins, defaultThemeScreensInRems, defaultThemeFontSizeInRems  } from 'fluid-tailwind'



export default {
	
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	extract: fluidExtractor(),
	theme: {
		fontSize: defaultThemeFontSizeInRems,
		screens: defaultThemeScreensInRems,
		extend: {
			backgroundImage: {
				'rover': "url('/public/rover.jpg')"
			  },
			colors: {
				'silver': {
					'50': '#f6f6f7',
					'100': '#efeff0',
					'200': '#e1e1e4',
					'300': '#d0cfd2',
					'400': '#bcbabf',
					'500': '#a29fa6',
					'600': '#959299',
					'700': '#817e84',
					'800': '#69676c',
					'900': '#575659',
					'950': '#333234',
					'990': '#262626'
    },
    
			}
		},
	},
	plugins: [    
		fluidCorePlugins,    
		uico({
		// optional configuration
		// these are the default values
		components: true,
		fonts: true,
		colorFunction: false,
		colorPalette: "oklch",
	}),
	({addComponents}) => {
		addComponents({
			'.bg': {
			content: `""`,
			width:"80%",
			height:"100%",
			top:"15%",
			left:"7%",
			position: "absolute",
			zIndex: "-1",
			background: "url(rover.jpg)",
			transform: "rotate(2deg)",
			},
			'.underline-silver': {
				textDecoration: 'underline solid 3px #959299',
				textUnderlineOffset: '4px'
			},
		})
	}
],
} satisfies Config
