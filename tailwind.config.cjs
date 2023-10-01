/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        oregano: ["Oregano", "cursive"]
      }
    }
  },
  plugins: ["tailwind-scrollbar-hide"]
}
