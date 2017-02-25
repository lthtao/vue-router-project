<template>
	<div>
		<!-- 表达式绑定程序数据 -->
		<p>{{message}}</p>
		<!-- 通过v-model指令绑定程序的数据 -->
		<input type="text" v-model="message">

		<!-- 使用 router-link 组件来导航. -->  
        <!-- 通过传入 `to` 属性指定链接. -->  
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->  
		<router-link to="/foo">Go to Foo</router-link>
		<router-link to="/bar">Go to Bar</router-link>
		<!-- 路由出口 -->  
    	<!-- 路由匹配到的组件将渲染在这里 -->  
		<router-view></router-view>
	</div>
</template>

<script>
	//引入vue-router模块
	import VueRouter from 'vue-router';
	import Vue from 'vue';
	//使用这个模块
	Vue.use(VueRouter);
	//export是ES6的写法, 用于将当前这整个文件的内容作为一个模块输出, 以供别的文件使用
	export default{
		//组件中的data必须以函数的形式, 并且在函数中返回对象
		data: function(){
			return {
				message: 'Hello Vue.js!!'
			}
		}
	}
</script>