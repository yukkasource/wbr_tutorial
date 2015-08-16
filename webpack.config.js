var Clean = require('clean-webpack-plugin');

module.exports = {
	entry: [
	"./client/index.js"
	],
	output: {
		path: "./dist",
		filename: "bundle.js"
	},
		resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new Clean(['dist'])
	]
};