# Recipe Block
Basic recipe block with space for an ingredient list, a set of instructions, and an image.

This is the version with ESNext, the version without it can be found [here](https://github.com/WordPress/gutenberg-examples/tree/master/05-recipe-card).

## Screenshots
(screenshots)

## Uses
### Wordpress Packages
These are exposed via `window.wp`.
* [@wordpress/i18n](https://wordpress.org/gutenberg/handbook/packages/packages-i18n/)
* [@wordpress/blocks](https://wordpress.org/gutenberg/handbook/packages/packages-blocks/)
* [@wordpress/editor](https://wordpress.org/gutenberg/handbook/packages/packages-editor/)
* [@wordpress/components](https://wordpress.org/gutenberg/handbook/packages/packages-components/)

### Wordpress Components
These are exposed via `window.wp.components`.
* [Button](https://wordpress.org/gutenberg/handbook/components/button/)

### NPM Packages
* [babel-core](https://www.npmjs.com/package/babel-core)
* [babel-loader](https://www.npmjs.com/package/babel-loader)
* [babel-plugin-transform-react-jsx](https://www.npmjs.com/package/babel-plugin-transform-react-jsx)
* [babel-preset-env](https://www.npmjs.com/package/babel-preset-env)
* [cross-env](https://www.npmjs.com/package/cross-env)
* [webpack](https://www.npmjs.com/package/webpack)

## Building
First, make sure you have [Node.js](https://nodejs.org/en/) installed and run `npm install` to install the dependencies.
* `npm run dev` builds a development version of the plugin and watches for changes for automatic rebuild.
* `npm run build` builds a production version of the plugin.