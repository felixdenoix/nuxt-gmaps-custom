const { resolve } = require('path')

module.exports = function (moduleOptions) {
  const defaults = {
    defer: false,
    async: true,
    body: true,
    key: null,
    libraries: [
      'places'
    ]
  }

  const options = {
    ...defaults,
    ...this.options['nuxt-gmaps-module'],
    ...moduleOptions
  }

  const libraries = options.libraries.join(',')

  /**
   * Make sure the initMap function is created in the DOM
   * before we even think to initialize the Google Maps API
   */
  // eslint-disable-next-line
  this.options.head.__dangerouslyDisableSanitizers = ['script'];
  this.options.head.script.push({
    innerHTML: `window.initMap = function(){
      window.dispatchEvent(new Event('maps-module:loaded'));
      window.addEventListener('maps-module:initiated', function(){
        setTimeout(function(){
          window.dispatchEvent(new Event('maps-module:loaded'));
        });
      });
    }`,
    type: 'text/javascript'
  })

  this.options.head.script.push({
    id: 'google-maps-api',
    src: `//maps.googleapis.com/maps/api/js?key=${options.key}&libraries=${libraries}&callback=initMap`,
    defer: options.defer,
    async: options.async
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-gmaps-module.js',
    options
  })
}

module.exports.meta = require('../package.json')
