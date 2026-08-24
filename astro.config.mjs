// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Inter",
      cssVariable: "--font-inter",
      options: {
        variants: [
          {
            src: ["./src/assets/fonts/Inter_18pt-Regular.ttf"],
            weight: 400,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Inter_18pt-Medium.ttf"],
            weight: 500,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Inter_18pt-SemiBold.ttf"],
            weight: 600,
            style: "normal",
          },
          {
            src: ["./src/assets/fonts/Inter_18pt-Bold.ttf"],
            weight: 700,
            style: "normal",
          },
        ],
      },
    },
  ],
});
