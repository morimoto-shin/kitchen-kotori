import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - app',
    title: 'app',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          '岡山県・津山市カフェ/キッチン小鳥/キッチン小鳥 ランチ テイクアウトあります。',
      },
      {
        name: 'keyword',
        content: 'キッチン小鳥,きっちん小鳥,岡山,津山,カフェ,県北,ランチ',
      },
      { hid: 'og-url', property: 'og:url', content: 'URL' }, // contentに本番URLを記述
      {
        hid: 'og-site-name',
        property: 'og:site_name',
        content: 'キッチン小鳥',
      },
      {
        hid: 'og-title',
        property: 'og:title',
        content: 'キッチン小鳥 - 岡山県津山市カフェ -',
      },
      { hid: 'og-type', property: 'og:type', content: 'website' },
      {
        hid: 'og-description',
        property: 'og:description',
        content:
          'スイーツからカフェご飯まで、手作りの味をいただける「キッチン小鳥」。野菜の旬に合わせた季節メニュー、デザートメニュー、子ども用メニューもあり、さまざまなシーンで「小鳥」の味を楽しめる。',
      },
      {
        hid: 'og-image',
        property: 'og:image',
        content: '@/static/img/home_1.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/firebase'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/dotenv'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      light: true,
      themes: {
        light: {
          primary: '#0B3364',
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
