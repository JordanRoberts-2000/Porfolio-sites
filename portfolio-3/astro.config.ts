import { defineConfig } from 'astro/config';
import { fontPlugin } from '@strawr/astro-fonts';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [fontPlugin([{
    font: "Yellowtail",
    className: "tom",
    weight: "400"
  }, {
    font: "Playfair_Display",
    weight: "400",
    className: "leg"
  }]), tailwind()]
});