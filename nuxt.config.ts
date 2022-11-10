// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        [
        '@pinia/nuxt',
            {
                autoImports: [
                        'defineStore', 
                        ['defineStore', 'definePiniaStore'], 
                ]
            },
        ],
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
      ],

    i18n: {
    },

    imports: {
        dirs: ['./stores'],
    },
})
