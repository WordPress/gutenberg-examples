module.exports = {
	entry: './block.js',
	output: {
		path: __dirname,
		filename: 'block.build.js',
	},
	module: {
		rules: [
			{
				test: /.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
		],
	}
};
