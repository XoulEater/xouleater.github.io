/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 'node_modules/flowbite-react/lib/esm/**/*.js',],
	theme: {
		extend: {
			colors: {
				'primary-dark': '#1E293B',
				'primary-light': '#3064D4',
			},
			screens: {
				'lgn': '1050px',
			}
		},
	},
	plugins: [
		require('flowbite/plugin')
	]

}
