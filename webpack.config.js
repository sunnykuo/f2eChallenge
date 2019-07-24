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
				test: /\.scss$/, 
				include: [path.resolve(__dirname, 'src')],
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
				test: /\.svg$/, 
				include: [path.resolve(__dirname, 'src/freeCell/svg')],
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
				include: [path.resolve(__dirname, 'src/freeCell/image')],
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
			},						
			{ 
				test: /\.mp3$/,
				include: [path.resolve(__dirname, 'src/tomatoClock')],
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