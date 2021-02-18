<!--
 * @,@Author: ,: your name
 * @,@Date: ,: 2021-02-10 15:24:39
 * @,@LastEditTime: ,: 2021-02-18 14:33:47
 * @,@LastEditors: ,: Please set LastEditors
 * @,@Description: ,: In User Settings Edit
 * @,@FilePath: ,: \miaomiao\src\views\Mine\index.vue
 -->
<template>
   <div id="main">
       <Header title="我的喵喵" />
       <div id="content">
           <Login />
           <router-view />
       </div>
       <TabBar />
   </div>
</template>

<script>
import Header from '@/components/Header';
import TabBar from '@/components/TabBar';
import Login from '@/components/Login';

export default {
   name : 'Mine',
   components : {
       Header,
       TabBar,
       Login
   }
}
</script>

<style>

</style>
