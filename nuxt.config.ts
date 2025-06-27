// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'shadcn-nuxt',
    "@nuxtjs/tailwindcss"
  ],
  plugins: [
  ],
  shadcn: {
    componentDir: './components/ui',
    prefix: ''
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    "~/assets/base.scss",
     "~/assets/base.css",
     '~/assets/tailwind.css',
  ],
  googleFonts: {
    families: {
      "Montserrat": [400, 500, 600, 700, 800],
      "Montserrat Alternates": [400, 500, 600, 700, 800],
      "Encode Sans Condensed": [400, 500, 600, 700, 800],
    },
    preload: true,
  },
})