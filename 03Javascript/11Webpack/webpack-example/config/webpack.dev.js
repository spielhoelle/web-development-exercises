const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		main: ['./src/main.js']		
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	devServer: {
		contentBase: "dist",
		overlay: true,
		hot: true,
		stats: {
			colors: true
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{ 
						loader: 'babel-loader'
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					},						
				]
			},
			{
				test: /\.css$/,
				use: [
					{ 
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},		
			{
				test: /\.html$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].html'
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'html-loader',
						options: {
							attrs: ['img:src']
						}
					}
				]
			},
			{
				test: /\.(jpg|gif|png)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'images/[name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	]
}