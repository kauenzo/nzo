// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
    devtools: { enabled: true },
    buildModules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/pwa',
    ],
    pwa: {
        icon: true
    }
});
