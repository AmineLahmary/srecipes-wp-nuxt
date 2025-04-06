import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@nuxtjs/apollo',
  ],
  ui: {
    colors: {
      primary: 'amber',
      secondary: 'black',
    },
    colorMode: false
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://srecipes.blog/graphql',
      }
    },
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    proxyCookies: true,
  },
  vite: {
    plugins: [tailwindcss()]
  },
  future: {
    compatibilityVersion: 4,
  },
  nitro: {
    preset: 'cloudflare-pages'
  },
})