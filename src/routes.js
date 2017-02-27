//引入vue框架和vue-router模块
import Vue from 'vue'
import VueRouter from 'vue-router';
import Foo from './component/foo.vue';
import Bar from './component/bar.vue'

const foo1 = { template: '<div>What\'t doesnt kill you</div>'};
//2. 定义路由对象routes,用来映射路由信息,每个路由应该映射一个组件.
//其中"component" 可以是通过 Vue.extend() 创建的组件构造器, 或者，只是一个组件配置对象。 
//component指该路径映射的组件
const routes = [
	{path: '/foo', name:"foo", component: Foo},
	{path: '/bar', name:"bar", component: Bar}
]

console.log(foo1);
console.log(Foo);

// 3. 创建 router 实例，然后传 `routes` 配置  
const router = new VueRouter({
	routes: routes,
	linkActiveClass: 'active'
});

// 4. 通过export将这个router实例输出, 供给main.js使用
export default router;