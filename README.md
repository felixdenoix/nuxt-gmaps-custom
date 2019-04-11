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

Copyright (c) Felix DENOIX <felix.denoix@gmail.com>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/dt/nuxt-gmaps-module.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-gmaps-module

[npm-downloads-src]: https://img.shields.io/npm/v/nuxt-gmaps-module/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-gmaps-module

[circle-ci-src]: https://img.shields.io/circleci/project/github/felixdenoix.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/felixdenoix

[codecov-src]: https://img.shields.io/codecov/c/github/felixdenoix.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/felixdenoix

[david-dm-src]: https://david-dm.org/felixdenoix/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/felixdenoix

[standard-js-src]: https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square
[standard-js-href]: https://standardjs.com
