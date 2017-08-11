### 使用vue+vue-router+webpack的demo
该项目为一个小demo, 使用vue2.0和vue-router以及webpack的项目

项目目录如下:  
vue-router-project  
dist​
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp; 
-- 打包后自动生成的文件  
node_modules​ 
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp; 
-- 项目依赖模块  
src
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​​&nbsp;&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​			  		
-- 静态资源  
&nbsp;&nbsp;
|--components
​​&nbsp;&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​
-- 项目中用到的组件  
​​​&nbsp;&nbsp;&nbsp;&nbsp;​&nbsp;​&nbsp;&nbsp;
|-- foo.vue		
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;
-- foo页面  
​​​&nbsp;&nbsp;&nbsp;&nbsp;​&nbsp;​&nbsp;​&nbsp;
|-- bar.vue				
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​
-- bar页面  
​​&nbsp;&nbsp;&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;
|-- index.vue	
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​
-- 首页    
&nbsp;&nbsp;
|--main.js
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​
-- 打包时的入口js文件    
&nbsp;&nbsp;
|--routes.js
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​
-- 路由信息配置文件      
index.html
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;
-- 首页  
package.json
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;
-- 项目信息  
webpack.config.js
​&nbsp;​&nbsp;​&nbsp;
-- webpack打包的相关配置

所用到的技术栈包括:

基本的HTML/CSS/JS, jQuery, gulp, webpack, vue.js2.0