var Clean = require('clean-webpack-plugin');

module.exports = {
	entry: [
	"./client/index.js"
	],
	output: {
		path: "./dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.less$/i, loader: "style!css!less" },
			{ test: /\.jpe?g$|\.gif$|\.eot(\?v=\d+\.\d+\.\d+)?$|\.png$|\.wav$|\.mp3$/,loader: "file" },
			{ test: /\.woff[0-9]?(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
			{ test: /\.jsx?$/, loaders: ['babel?stage=1'] },
		]
	},
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new Clean(['dist'])
	]
};