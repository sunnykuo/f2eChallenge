const path = require('path');
const webpack = require('webpack');

module.exports = {
	rules: [
	{ 
		test: /\.mp3$/,
		include: [path.resolve(__dirname, 'src/project/tomatoClock')],
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					outputPath: 'tomatoClock/ringtones/',							
					publicPath: 'dist/tomatoClock/ringtones/',
				}
			}
		] 
	}	
	]	
};