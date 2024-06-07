import { defineConfig } from 'astro/config';
import { fontPlugin } from "@strawr/astro-fonts";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), fontPlugin([{
    font: "Lora",
    className: "lora"
  }])]
});