/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2021-02-10 13:38:43
 * @,@LastEditTime: ,: 2021-02-18 12:53:59
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \miaomiao\src\stores\index.js
 */
import { createStore } from 'vuex'
import Vue from 'vue'
import city from './city'
import user from './user'
export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    city,
    user
  }

})
