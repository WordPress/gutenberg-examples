# Gutenberg Examples

<a href="https://github.com/WordPress/block-development-examples"><img src="https://user-images.githubusercontent.com/422576/292488399-6dc23f79-b971-427d-af6b-f39db99955fd.png" alt="Demo"></a>

<!-- <p align="center"><img src="https://user-images.githubusercontent.com/1039236/47116000-fd775000-d27d-11e8-9c46-761a90cb30a2.gif" alt="Demo"></p> -->

> **Warning**
> The repo https://github.com/WordPress/gutenberg-examples/ is no longer maintained. Please check **https://github.com/WordPress/block-development-examples** for examples of block development. Additionally, you can also check https://github.com/WordPress/block-theme-examples for examples of theme development.

<!--

Examples for extending
[Gutenberg](https://github.com/WordPress/gutenberg)
with plugins which create blocks.

See also:
[Gutenberg developer documentation](https://wordpress.org/gutenberg/handbook/)

## Installation

Gutenberg Examples are distributed as WordPress plugin.

1. [Download the gutenberg-examples.zip archive of the latest release](https://github.com/WordPress/gutenberg-examples/releases).
    > Do not download from the "Clone or download" GitHub button, as this includes the source material only. Read the [Development](#development) instructions below if you’re interested in building your own copy of the plugin.
2. Navigate to the **Plugins > Add new** screen in your WordPress administrative dashboard.
3. Click **Add New** at the top of the page.
4. Click **Upload Plugin** at the top of the page.
5. Click **Choose File**, then find and **Upload** the downloaded zip file.
6. After the plugin finishes installing, click **Activate**.
7. You’re done!

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

To install the node packages

```
npm install
```

This repository does not version the built files for any of the examples. You can build all of the examples by running `npm run build:all` in the project root.

## Local Development

In this repository, there are block and non-block examples and each have their own build process.

Block examples are stored in the `blocks-jsx` and `blocks-non-jsx` directories while and other non-block examples are stored in the `non-block-examples` directory.

> **Note**
> The blocks stored in `blocks-non-jsx` do not use JSX and therefore do not require a build process

#### Build and watch

-   **`npm run start`** - Builds development versions of ALL the examples that require a build process (`blocks-jsx` and `non-block-examples`) and watches for changes to files to automatically rebuild as you develop.
-   `npm run start:block` - Builds development versions of the examples at `blocks-jsx` folder and watches for changes to files to automatically rebuild as you develop.
-   `npm run start:non-block` - Builds development versions of the examples at `non-block-examples` folder and watches for changes to files to automatically rebuild as you develop.


#### Build

-   **`npm run build`** - Generates production files for ALL the examples that require a build process (`blocks-jsx` and `non-block-examples`).
-   `npm run build:block` - Generates production files for the examples at `blocks-jsx` folder.
-   `npm run build:non-block` - Generates production files for the examples at `non-block-examples` folder.

<br/><br/><p align="center"><img src="https://s.w.org/style/images/codeispoetry.png?1" alt="Code is Poetry." /></p>
-->
