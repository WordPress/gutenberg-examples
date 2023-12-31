# Editable Block
Simple block with editable content. Introduces the concept of attributes and extracting them, and the default text formatting added by RichText.

"Hello World: Step 3" from [Introducing Attributes and Editable Fields](https://wordpress.org/gutenberg/handbook/blocks/introducing-attributes-and-editable-fields/).

This is the version with ESNext, the version without it can be found [here](https://github.com/WordPress/gutenberg-examples/tree/master/03-editable).

## Screenshots
### Editor
![A green block with the text "This text is editable!" in progress of being edited, with a toolbar containing various format options.](../images/editable-editor.png)
### Front-End
![A red block with the text "This text is editable!"](../images/editable-client.png)

## Uses
### Wordpress Packages
These are exposed via `window.wp`.
* [@wordpress/i18n](https://wordpress.org/gutenberg/handbook/packages/packages-i18n/)
* [@wordpress/blocks](https://wordpress.org/gutenberg/handbook/packages/packages-blocks/)
* [@wordpress/editor](https://wordpress.org/gutenberg/handbook/packages/packages-editor/)

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