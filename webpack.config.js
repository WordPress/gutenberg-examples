const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// The directory where the non-block examples live.
const nonBlockExamplesDir = 'non-block-examples';

// This is the default set from the scripts package.
const copyWebPackPattens = process.env.WP_COPY_PHP_FILES_TO_DIST
	? '**/{block.json,*.php}'
	: '**/block.json';

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		...fs.readdirSync(`./${nonBlockExamplesDir}`).reduce((acc, path) => {
			acc[
				`${nonBlockExamplesDir}-${path}`
			] = `./${nonBlockExamplesDir}/${path}`;
			return acc;
		}, {}),
	},
	output: {
		...defaultConfig.output,
		filename: (pathData) => {
			if (!pathData.chunk.name.match(nonBlockExamplesDir)) {
				return '[name].js';
			}
			const dirname = pathData.chunk.name.replace(
				`${nonBlockExamplesDir}-`,
				''
			);
			return `${dirname}/index.js`;
		},
	},
	plugins: [
		...defaultConfig.plugins,
		new CopyWebpackPlugin({
			patterns: [
				{
					from: copyWebPackPattens,
					context: 'src',
					noErrorOnMissing: true,
				},
				{
					from: '**/{block.json,*.php,*.css}',
					context: nonBlockExamplesDir,
					noErrorOnMissing: true,
				},
			],
		}),
	],
};
