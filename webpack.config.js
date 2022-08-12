
module.exports = {
	entry: __dirname + "/app/main.js",
	mode: 'development',
	devtool: false,
	output: {
		path: __dirname + '/dist',
		filename: "bundle.js"
	}
}