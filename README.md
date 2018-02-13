# gutenberg-examples

Examples for extending
[Gutenberg](https://github.com/WordPress/gutenberg)
with plugins which create blocks.

See also:
[Gutenberg developer documentation](https://wordpress.org/gutenberg/handbook/)

Note that each plugin is configured with it's own Node-based setup. To Build the plugins you must go into each `esnext` directory and run the following commands:

- **npm install** to install the node packages
- **npm run build** to build the production version of the plugin or **npm run dev** to build a development version of the plugin and watch changes for automatic rebuild

Not all directories have an `esnext` version. The ones without don't need to follow these steps
