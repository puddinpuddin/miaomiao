/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2021-02-10 13:38:43
 * @,@LastEditTime: ,: 2021-02-17 22:18:02
 * @,@LastEditors: ,: your name
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \miaomiao\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
Vue.prototype.axios = axios;

Vue.filter('setWH',(url , arg)=>{
    return url.replace(/w\.h/,arg);
});

import Scroller from '@/components/Scroller'
Vue.component('Scroller' , Scroller);

import Loading from '@/components/Loading'
Vue.component('Loading',Loading);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
createApp(App).use(store).use(router).mount('#app')

