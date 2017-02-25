//import是ES6的语法, 用于从别的文件中引入模块.
//第1行代码用于引入vue框架, 由于vue的路径已经在前面的webpack.config.js里面的alias中声明了, 
//因此在这里不需要详细写清楚vue.js在哪个路径
import Vue from 'vue';
//引入index组件(自己创建的)
import App from './component/index.vue';
//引入路由配置文件(自己创建的)
import router from './routes.js'

//创建Vue实例
new Vue({
	el: '#app',
	//将路由配置信息挂载到DOM元素上
	router: router,
	//用来在视图中渲染组件, 如果没有这一句话的话, 将无法在index.html中看到任何内容
	render: h => h(App)
})