//引入vue框架和vue-router模块
import Vue from 'vue'
import VueRouter from 'vue-router';

//1. 定义两个路由组件, 这里的const是es6的语法,用来定义常量(不能被修改)
const Foo = {template: '<div>This is Foo page</div>'};
const Bar = {template: '<div>This is Bar page</div>'};

//2. 定义路由对象routes,用来映射路由信息,每个路由应该映射一个组件.
//其中"component" 可以是通过 Vue.extend() 创建的组件构造器, 或者，只是一个组件配置对象。 
//component指该路径映射的组件
const routes = [
	{path: '/foo', component: Foo},
	{path: '/bar', component: Bar}
]

// 3. 创建 router 实例，然后传 `routes` 配置  
const router = new VueRouter({
	routes: routes
});

// 4. 通过export将这个router实例输出, 供给main.js使用
export default router;