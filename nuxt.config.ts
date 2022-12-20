// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "NUXT3 Diego Zito - Ecommerce",
      meta: [
        {
          name: "description",
          content:
            "Ecommerce webshop using NUXT3, tailwindCSS to learn about NUXT3. Built with ❤️ by Diego Zito",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
});
