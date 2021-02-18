/*
 * @,@Author: ,: your name
 * @,@Date: ,: 2021-02-10 13:38:43
 * @,@LastEditTime: ,: 2021-02-18 13:23:53
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \miaomiao\src\routers\index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'

 const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
 ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    movieRouter,
    cinemaRouter,
    mineRouter,
    {
      path : '/*',
      redirect : '/movie'
    }
  ]
})

export default router
