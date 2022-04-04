const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const fs = require('fs');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// The directory where the non-block examples live.
const otherFolder = 'non-block-examples';

const copyWebPackPattens = process.env.WP_COPY_PHP_FILES_TO_DIST
	? '**/{block.json,*.php}'
	: '**/block.json';

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		...fs.readdirSync(`./${otherFolder}`).reduce((acc, path) => {
			acc[`${otherFolder}-${path}`] = `./${otherFolder}/${path}`;
			return acc;
		}, {}),
	},
	output: {
		...defaultConfig.output,
		filename: (pathData) => {
			if (!pathData.chunk.name.match(otherFolder)) {
				return '[name].js';
			}
			const dirname = pathData.chunk.name.replace(`${otherFolder}-`, '');
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
					context: otherFolder,
					noErrorOnMissing: true,
				},
			],
		}),
	],
};
