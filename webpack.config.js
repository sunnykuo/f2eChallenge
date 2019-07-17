const path = require('path');
const webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
    	path: path.resolve(__dirname, 'dist'),
    	publicPath: '/',    	
    	filename: 'bundle.js'
	},
  	module: {
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
				test: /\.scss$/, include: [path.resolve(__dirname, 'src')],
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
				test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
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
				test: /\.mp3$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: 'ringtones/',							
							publicPath: 'dist/ringtones/',
						}
					}
				] 
			}
	  	]
	},
	devServer: {
		hot: true,
		contentBase: path.join(__dirname, ''),
		publicPath: '/dist',
		stats: { colors: true },
		port: 9000
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]		
};