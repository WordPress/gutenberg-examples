# Gutenberg Examples

<p align="center"><img src="https://user-images.githubusercontent.com/1039236/47116000-fd775000-d27d-11e8-9c46-761a90cb30a2.gif" alt="Demo"></p>


Examples for extending
[Gutenberg](https://github.com/WordPress/gutenberg)
with plugins which create blocks.

See also:
[Gutenberg developer documentation](https://wordpress.org/gutenberg/handbook/)

## Installation

Gutenberg Examples are distributed as WordPress plugin.

1. [Download a pre-built zip archive of the latest release](https://github.com/WordPress/gutenberg-examples/releases).
   > Do not download from the "Clone or download" GitHub button, as this includes the source material only. Read the [Development](#development) instructions below if you’re interested in building your own copy of the plugin.
2. Navigate to the __Plugins > Add new__ screen in your WordPress administrative dashboard.
3. Click __Add New__ at the top of the page.
3. Click __Upload Plugin__ at the top of the page.
4. Click __Choose File__, then find and __Upload__ the downloaded zip file.
5. After the plugin finishes installing, click __Activate__.
6. You’re done!

## Development

This project uses the [`@wordpress/env`](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/) package to provide a local development environment. Before you can use the development environment, you must install [Docker](https://docs.docker.com/get-docker/).

Once Docker is installed, clone this project and enter the working directory:

```
git clone git@github.com:WordPress/gutenberg-examples.git
cd gutenberg-examples
```

Then, install the project dependencies:

```
npm install
```

Once installed, start the local WordPress instance with one of two commands:

1. `npm run env:start` - Starts the instance normally.
2. `npm run env:start:debug` - Starts the instance with debugging enabled.

The WordPress instance will be available at http://localhost:8888/. You can login with the username and password "admin" and the password "password" at http://localhost:8888/wp-login.php. The plugin should be automatically activated.

To stop this local WordPress instance later run:

```
npm run env:stop
```

The block examples should be built and ready to use, however you can rebuild all of the ESNext examples by running `npm run build` from the project root.


For each of the examples that include an esnext example the following commands are required to build the plugins:

To install the node packages
```
npm install
```

To build the production version of the plugin
```
npm run build
```

To build a development version, change to the local directory of the block you are working on, and run `npm start` to watch for changes and automatically rebuild as you develop.
```
cd 01-basic-esnext/
npm start
```

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
