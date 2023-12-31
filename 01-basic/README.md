# Basic Block
Simple block, renders and saves the same content without interactivity. Using inline styles - no external stylesheet needed. Not recommended because all of these styles will appear in `post_content`.

"Hello World: Step 1" from [Writing Your First Block Type](https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type/).

This is the version without ESNext, the version with it can be found [here](https://github.com/WordPress/gutenberg-examples/tree/master/01-basic-esnext).

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
* [@wordpress/element](https://wordpress.org/gutenberg/handbook/packages/packages-element/)