<template>
	<div>
		<p>{{message}}</p>
		<input type="text" v-model="message">
		<router-link to="/foo">Go to Foo</router-link>
		<router-link to="/bar">Go to Bar</router-link>
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

<style>
	.active{
		background-color: skyblue;
		color: #fff;
	}
</style>