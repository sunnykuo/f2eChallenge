const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackIconfontPluginNodejs = require('webpack-iconfont-plugin-nodejs');

// const merge = require('webpack-merge');
// const tomatoClock_config = require('./webpackConfig/webpack.tomatoClock.js')
// const freeCell_config = require('./webpackConfig/webpack.freeCell.js')
// const mp3Player_config = require('./webpackConfig/webpack.mp3Player.js')

// const moduleConfig = merge.multiple(tomatoClock_config,freeCell_config,mp3Player_config, {
// 	rules: [
// 		{
// 			test: /\.js$/,
// 			exclude: /node_modules/,
// 			include: __dirname,
// 			use: {
// 				loader: 'babel-loader',
// 				options: {
// 					presets: ['@babel/preset-react','@babel/preset-env']
// 				}
// 			}
// 		},
// 	{
// 		test: /\.scss$/, 
// 		include: [path.resolve(__dirname, 'src')],
//         use: [
//         	{ loader: 'style-loader'},
//         	{
//             	loader: 'css-loader',
//             	options: {
//               		modules: false
//             	}	
//         	},
//         	{
//         		loader: 'sass-loader'
//         	}
//         ]				
// 	},			
// 	{ 
// 		test: /\.(woff|woff2|eot|ttf)$/, 
// 		include: [path.resolve(__dirname, 'src/fonts')],
// 		use: [
// 			{
// 				loader: 'file-loader',
// 				options: {
// 					name: '[name].[ext]',
// 					outputPath: 'fonts/',							
// 					publicPath: 'dist/fonts/',
// 				}
// 			}
// 		] 
// 	}]
// })

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
			test: /\.(scss)$/, 
			include: [path.resolve(__dirname, 'src')],
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
			include: [path.resolve(__dirname, 'src/fonts')],
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
		},		
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
		},
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
			test: /\.(png|jpg|svg)$/, 
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
		},			
		{
			test: /\.(png|jpg|svg)$/, 
			include: [path.resolve(__dirname, 'src/project/payment/image')],
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'payment/image/',							
						publicPath: 'dist/payment/image/',
					}
				}
			] 
		},	
		{ 
			test: /\.(woff|woff2|eot|ttf|svg)$/, 
			include: [path.resolve(__dirname, 'src/project/payment/font')],
			use: [
				{
					loader: 'file-loader',
					options: {
						name: '[name].[ext]',
						outputPath: 'payment/font/',							
						publicPath: 'dist/payment/font/',
					}
				}
			] 
		},											
	]
}

let paymentFontDir = 'src/project/payment';
module.exports = {
	mode: 'development',
	entry: './src/index.js',
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
		new webpack.HotModuleReplacementPlugin(),
        // new WebpackIconfontPluginNodejs({
        //     fontName: 'payfont',
        //     // template: path.join(dir, 'src/fonts/css.njk'),
        //     svgs: path.join(paymentFontDir, 'svg/*.svg'),
        //     fontsOutput: path.join(paymentFontDir, 'font/'),
        //     cssOutput: path.join(paymentFontDir, 'css/payfont.scss'),
        //     htmlOutput: false,
        //     //formats: ['ttf', 'woff2', 'woff', 'svg'],
        //     cssPrefix: ''
        // })		       
	]		
};