// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'shadcn-nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: ''
  },
  plugins: [
    '~/plugins/dark-mode.client.ts',
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
    '~/assets/tailwind.css',
    "~/assets/base.scss",
    "~/assets/base.css",
  ],
  googleFonts: {
    families: {
      "Montserrat": [400, 500, 600, 700, 800],
      "Montserrat Alternates": [400, 500, 600, 700, 800],
      "Encode Sans Condensed": [400, 500, 600, 700, 800],
    },
    preload: true,
  },
  i18n: {
    defaultLocale: "en",
    strategy: "no_prefix",
    langDir: "",
    locales: [
      { code: "en", file: 'en/index.js' },
      { code: "kz", file: 'kz/index.js' },
      { code: "ru", file: 'ru/index.js' },
    ],
    lazy: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "language",
      alwaysRedirect: true,
      fallbackLocale: "en",
      redirectOn: 'root',
    },
  }
})