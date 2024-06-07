import { defineConfig } from 'astro/config';
import { fontPlugin } from "@strawr/astro-fonts";
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  trailingSlash: 'always',
  prefetch: {
    defaultStrategy: "load",
    prefetchAll: true
  },
  experimental: {
    clientPrerender: true
  },
  integrations: [fontPlugin([{
    font: "Lora",
    className: "lora"
  }])]
});