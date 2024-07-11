// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  compatibilityDate: "2024-07-10",
  runtimeConfig: {
    public: {
      hook: process.env.HOOK
    }
  }

})