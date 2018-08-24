# gutenberg-examples

Examples for extending
[Gutenberg](https://github.com/WordPress/gutenberg)
with plugins which create blocks.

See also:
[Gutenberg developer documentation](https://wordpress.org/gutenberg/handbook/)

## Build `esnext` Examples

For each of the examples that include an `esnext` example the following commands are required to build the plugins:

- `npm install` to install the node packages
- `npm run build` to build the production version of the plugin or `npm run dev` to build a development version of the plugin and watch changes for automatic rebuild

## Local Environment

First, you need a WordPress Environment to run the plugin on. The quickest way to get up and running is to use the provided docker setup. Install [docker-ce](https://store.docker.com/search?type=edition&offering=community) and [docker-compose](https://docs.docker.com/compose/install/) by following the most recent instructions on the docker site.

In the folder of your preference, clone this project and enter the working directory:

```
git clone git@github.com:WordPress/gutenberg-examples.git
cd gutenberg-examples 
```

To bring up this local WordPress instance run:

```
docker-compose up -d
```

The WordPress should be available at http://localhost:9999

To stop this local WordPress instance later run:

```
docker-compose stop
```


