const path = require('path');
const webpack = require('webpack');

module.exports = {
	rules: [
		{ 
			test: /\.svg$/, 
			include: [path.resolve(__dirname, 'src/project/freeCell/svg')],
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'freeCell/svg/',							
						publicPath: 'dist/freeCell/svg/',
					}
				}
			] 
		},			
		{
			test: /\.(png|jpg|svg)$/, 
			include: [path.resolve(__dirname, 'src/project/freeCell/image')],
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'freeCell/image/',							
						publicPath: 'dist/freeCell/image/',
					}
				}
			] 
		}
	]	
};