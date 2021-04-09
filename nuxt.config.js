export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'finpedia-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //foundations
    '@/assets/css/foundations/color.css',
    '@/assets/css/foundations/helper.css',
    '@/assets/css/foundations/section.css',
    '@/assets/css/foundations/slickCarousel.css',
    '@/assets/css/foundations/spacingMargin.css',
    '@/assets/css/foundations/spacingPadding.css',
    '@/assets/css/foundations/typography.css',

    //plugins
    '@/assets/plugins/bulma-0.9.1/css/bulma.min.css',
    '@/assets/plugins/fontawesome-free-5.15.2-web/css/all.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://www.npmjs.com/package/nuxt-device-detect
    'nuxt-device-detect',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
