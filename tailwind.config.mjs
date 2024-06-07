/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        plex: ['"IBM Plex Mono"', "sans-serif"],
        plexbold: ['"IBM Plex Mono Bold"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: "mocha",
    }),
  ],
};
