# nuxt-gmaps-module

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![Standard JS][standard-js-src]][standard-js-href]

> Nuxt module allowing you to inject google maps javascript api to the project

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add the `nuxt-gmaps-module` dependency with `yarn` or `npm` to your project
2. Add `nuxt-gmaps-module` to the `modules` section of `nuxt.config.js`
3. Configure it:

```js
{
  modules: [
    // Simple usage
    'nuxt-gmaps-module',

    // With options
    ['nuxt-gmaps-module', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Felix DENOIX <felix.denoix@bonjour.agency>
