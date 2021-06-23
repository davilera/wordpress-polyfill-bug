const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = [
	{
		...defaultConfig,
		entry: {
			main: './src/main.js',
		},
		output: {
			path: path.resolve( __dirname, './dist/' ),
			filename: '[name].js',
		},
	},
];
