// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    'nuxt-auth-utils'
  ],

  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL || 'http://localhost:8080'
    }
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { 
          rel: 'stylesheet', 
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100..900;1,100..900&display=swap'
        }
      ]
    }
  },

  experimental: {
    viewTransition: true
  },

  compatibilityDate: '2025-01-01',

  ui: {
    primary: '#1456f0',
    gray: 'neutral',
    icons: 'ph'
  },

  vite: {
    optimizeDeps: {
      include: ['striptags']
    }
  }
})