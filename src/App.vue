<template>
  <div id="app">
    <div class="container">
      <div class="box" v-for="item in imageData" :key="item.id">
        <div class="img-box">
          <img v-lazy="item.src" :alt="item.title" />
        </div>
        <div class="content-box">
          <h1>{{item.title}}</h1>
          <p>{{item.teacher}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";

// // 全局 注册指令
// Vue.directive('lazy', {
//   bind(el, binding, vnode) {},
//   inserted(el, binding, vnode) {},
//   update(el, binding, vnode, oldVnode) {},
//   componentUpdated(el, binding, vnode) {},
//   unbind(el, binding, vnode) {},
// });

// // 封装成插件
// const VueLazyload = {
//   //  bind(el, binding, vnode) {},
//   install (Vue,options){
//     Vue.directive('lazy', {
//       bind(el, binding, vnode) {},
//       inserted(el, binding, vnode) {},
//       update(el, binding, vnode, oldVnode) {},
//       componentUpdated(el, binding, vnode) {},
//       unbind(el, binding, vnode) {},
//     });
//   }
// }

export default {
  name: 'App',
  // directives:{
  //   // 单个注册
  //   VueLazyload
  // },
  data(){
    return {
      imageData:[],
    }
  },
  async mounted(){
    const res = await axios('http://localhost:3000/imgs');
    this.imageData = res.data;
  }
}
</script>

<style lang="scss">
  html,
  body,
  #app,
  .container{
    height: 100%;
    margin: 0;
  }
  .container{
    overflow: auto;
    .box{
      position: relative;
      height: 100px;
      padding: 5px 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #ededed;
    }
    .img-box{
      height: 100%;
      img{
        height: 100%;
      }
    }
    .content-box{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding-left: 160px;
      box-sizing: border-box;

      h1{
        font-size: 16px;
      }
      p{
        font-size: 14px;
        color: #666;
      }
    }
  }
</style>
