import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './lib/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
],
  theme: {
    extend: {
      fontFamily: {
        futura: ['futura', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
