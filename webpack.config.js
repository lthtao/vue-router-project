module.exports = {
	entry: './src/main.js',
	// 编译输出的文件路径
	output: {
		path: "./dist",
		filename: 'build.js'	
	},
	//加载器
	module: {
		loaders: [
			{test: /\.vue$/, loader: 'vue-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.js$/, loader: 'babel-loader'}
		]
	},
	resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    }
}