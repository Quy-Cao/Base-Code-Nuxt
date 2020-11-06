import webpack from 'webpack';

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'base-code',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/style/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/axios.js',
    '@/plugins/utils.js',
    '@/plugins/constant.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      'nuxt-i18n',
      {
        lazy: true,
        locales: [
          { code: 'en', iso: 'en-US', file: 'en.js' },
        ],
        defaultLocale: 'en',
        langDir: 'languages/',
        vueI18n: {
          fallbackLocale: 'en'
        }
      }
    ],
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  // axios: {
  //   proxy: true
  // },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    plugins: [
      new webpack.ProvidePlugin({
        // global modules
        _: 'lodash'
      })
    ]
  },

  server: {
    port: 8000, // default: 3000
  },

  env: {
    baseURL: 'https://playful-archduke.glitch.me/api/story/',
  }
}
