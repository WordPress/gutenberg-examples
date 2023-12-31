# Basic Block
Simple block, renders and saves the same content without interactivity. Using inline styles - no external stylesheet needed. Not recommended because all of these styles will appear in `post_content`.

"Hello World: Step 1" from [Writing Your First Block Type](https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/).

This is the version with ESNext, the version without it can be found [here](https://github.com/WordPress/gutenberg-examples/tree/master/01-basic).

## Screenshots
### Editor
![A red block with the text "Hello World, step 1 (from the editor)"](../images/basic-editor.png)
### Front-End
![A red block with the text "Hello World, step 1 (from the frontend)"](../images/basic-client.png)

## Uses
### Wordpress Packages
These are exposed via `window.wp`.
* [@wordpress/i18n](https://wordpress.org/gutenberg/handbook/packages/packages-i18n/)
* [@wordpress/blocks](https://wordpress.org/gutenberg/handbook/packages/packages-blocks/)

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