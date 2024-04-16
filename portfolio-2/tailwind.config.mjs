import defaultTheme from 'tailwindcss/defaultTheme'
import customFonts from './lib/fonts/fonts.json'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './lib/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
                serif: [customFonts.serif.garamond, ...defaultTheme.fontFamily.serif],
                mono: [...defaultTheme.fontFamily.mono]
              }
        },
	},
	plugins: [],
}
