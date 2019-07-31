const path = require('path');
const webpack = require('webpack');

module.exports = {
	rules: [
	{ 
		test: /\.svg$/, 
		include: [path.resolve(__dirname, 'src/project/mp3Player/svg')],
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'mp3Player/svg/',							
					publicPath: 'dist/mp3Player/svg/',
				}
			}
		] 
	},			
	{
		test: /\.(png|jpg)$/, 
		include: [path.resolve(__dirname, 'src/project/mp3Player/image')],
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'mp3Player/image/',							
					publicPath: 'dist/mp3Player/image/',
				}
			}
		] 
	}
	]	
};