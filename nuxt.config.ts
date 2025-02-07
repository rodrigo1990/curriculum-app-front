// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /*components: [
   {
     path: '~/components',
     pathPrefix: false,
   },
 ],*/
  modules: [
      '@bootstrap-vue-next/nuxt',
      'nuxt-auth-sanctum'
  ],

  sanctum: {
    baseUrl: 'http://localhost:80',
    mode: 'cookie',
    endpoints: {
      login: 'api/admin/login',
      logout: 'api/admin/logout'
    },// Laravel API
  },

  css: [
    'animate.css/animate.min.css',
    'bootstrap/dist/css/bootstrap.min.css',
  ],

  vite:{
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler' // or "modern"
        }
      }
    }
  },

  compatibilityDate: '2024-12-26'
})