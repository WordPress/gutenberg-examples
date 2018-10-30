# Editable Block
Simple block with editable content. Introduces the concept of attributes and extracting them, and the default text formatting added by RichText.

"Hello World: Step 3" from [Introducing Attributes and Editable Fields](https://wordpress.org/gutenberg/handbook/blocks/introducing-attributes-and-editable-fields/).

This is the version without ESNext, the version with it can be found [here](https://github.com/WordPress/gutenberg-examples/tree/master/03-editable-esnext).

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
* [@wordpress/element](https://wordpress.org/gutenberg/handbook/packages/packages-element/)
* [@wordpress/editor](https://wordpress.org/gutenberg/handbook/packages/packages-editor/)