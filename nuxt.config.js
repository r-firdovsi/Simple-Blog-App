const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#666' },

  // transitions : [
  //   name : "layout",
  //   mode : "out-in"
  // ],
  /*
  ** Global CSS
  */
  css: [
    "~/assets/style/bootstrap.min.css",
    "~/assets/style/transition.css"
  ],


  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      "~/plugins/Components.js"
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
      "@nuxtjs/axios"
  ],

  axios : [

  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
