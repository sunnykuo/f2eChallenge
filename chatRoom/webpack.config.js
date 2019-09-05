const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs');

const moduleConfig = {
	rules: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			include: __dirname,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-react','@babel/preset-env']
				}
			}
		},
		{
			test: /\.(scss|css)$/, 
            // use: ExtractTextPlugin.extract({
            //     fallback: 'style-loader',
            //     use: ['css-loader', 'sass-loader']
            // })			
	        use: [
	        	{ loader: 'style-loader'},
	        	{
	            	loader: 'css-loader',
	            	options: {
	              		modules: false
	            	}	
	        	},
	        	{
	        		loader: 'sass-loader'
	        	}
	        ]				
		},			
		{ 
			test: /\.(woff|woff2|eot|ttf)$/, 
			include: [path.resolve(__dirname, 'fonts')],
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'fonts/',							
						publicPath: 'dist/fonts/',
					}
				}
			] 
		},			
		{
			test: /\.(png|jpg)$/, 
			include: [path.resolve(__dirname, 'image')],
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'image/',							
						publicPath: 'dist/image/',
					}
				}
			] 
		}
	]
}

module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
    	path: path.resolve(__dirname, 'dist'),
    	publicPath: '/',    	
    	filename: 'bundle.js'
	},
  	module: moduleConfig,
	devServer: {
		hot: true,
		contentBase: path.join(__dirname, ''),
		publicPath: '/dist',
		stats: { colors: true },
		port: 9000
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()	       
	]		
};