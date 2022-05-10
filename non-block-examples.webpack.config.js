const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const fs = require( 'fs' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );

// The directory where the non-block examples live.
const nonBlockExamplesDir = 'non-block-examples';

module.exports = {
	...defaultConfig,
	entry: {
		...defaultConfig.entry,
		...fs
			.readdirSync( `./${ nonBlockExamplesDir }` )
			.reduce( ( acc, path ) => {
				acc[
					`${ nonBlockExamplesDir }-${ path }`
				] = `./${ nonBlockExamplesDir }/${ path }`;
				return acc;
			}, {} ),
	},
	output: {
		...defaultConfig.output,
		filename: ( pathData ) => {
			if ( ! pathData.chunk.name.includes( nonBlockExamplesDir ) ) {
				return '[name].js';
			}
			const dirname = pathData.chunk.name.replace(
				`${ nonBlockExamplesDir }-`,
				''
			);
			return `${ dirname }/index.js`;
		},
	},
	plugins: [
		...defaultConfig.plugins,
		new CopyWebpackPlugin( {
			patterns: [
				{
					from: '**/{block.json,*.php,*.css}',
					context: nonBlockExamplesDir,
					noErrorOnMissing: true,
				},
			],
		} ),
	],
};
