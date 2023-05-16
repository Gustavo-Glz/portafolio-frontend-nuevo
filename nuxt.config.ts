// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "nuxt-icon"],
  app: {
    head: {
      charset: "utf-8",
      title: "Portafolio Frontend Gustavo",
      htmlAttrs: {
        lang: "es",
      },
      meta: [{ name: "description", content: "Mi pagina personal" }],
    },
  },
  tailwindcss: {
    viewer: false,
  },
});
