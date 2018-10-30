# Basic Block with Stylesheets
Simple block, renders and saves the same content without interactivity. Unlike [01-basic](https://github.com/WordPress/gutenberg-examples/tree/master/01-basic), this one moves styles to stylesheets - both edit and front-end.

"Hello World: Step 2" from [Applying Styles With Stylesheets](https://wordpress.org/gutenberg/handbook/blocks/applying-styles-with-stylesheets/).

This version does not use ESNext.

## Screenshots
### Editor
![A green block with the text "Hello World, step 2 (from the editor, in green)."](../images/stylesheets-editor.png)
### Front-End
![A red block with the text "Hello World, step 2 (from the frontend, in red)."](../images/stylesheets-client.png)

## Uses
### Wordpress Packages
These are exposed via `window.wp`.
* [@wordpress/i18n](https://wordpress.org/gutenberg/handbook/packages/packages-i18n/)
* [@wordpress/blocks](https://wordpress.org/gutenberg/handbook/packages/packages-blocks/)
* [@wordpress/element](https://wordpress.org/gutenberg/handbook/packages/packages-element/)