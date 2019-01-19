<!--实例中的渲染区域-->
<template>
  <!-- 多个标签必须使用一个跟元素包裹 -->
  <div id="app">
    <!-- 头部 -->
    <van-nav-bar title="长沙黑马十三期" left-text="返回" left-arrow class="asd"/>

    <!-- 占坑  -->
    <!-- 底部 -->
    <van-tabbar v-model="active">
      <!-- 首页 -->
      <!-- to主要是改变地址栏后面的哈希值 路由是检测哈希值的改变做相应的跳转 -->
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <!-- dot -->
      <!-- 会员 -->
      <van-tabbar-item icon="envelop-o" to="/envelop">会员</van-tabbar-item>
      <!--购物车  -->
      <van-tabbar-item icon="shopping-cart-o" info="0" to="shopping">购物车</van-tabbar-item>
      <!--  -->
      <van-tabbar-item icon="setting-o" info tag="div" to="search">搜索</van-tabbar-item>
    </van-tabbar>
    <!-- node 集成 v8 引 擎    node main.js -->
    <transition enter-active-class="animated title"  leave-active-class="animated fadeIn"> 
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<!--普通的style只支持普通标签如果想启用less sass 需要设置lang属性-->
<!--scoped设置只在当前作用域有用-->

<style lang="less">
@fff: #fff;
.asd {
  width: 100%;
  height: 40px;
  color: @fff;
  background: #26a2ff;

  .van-nav-bar__left {
    line-height: 40px;
  }

  .van-nav-bar__text {
    color: @fff;
    display: none;
  }
  .van-icon {
    color: @fff;
  }
  .van-nav-bar__title,
  .van-nav-bar__text {
    height: 40px;
    line-height: 40px;
    font-size: 14px;
  }
}
// 页面切换动画
.v-enter,
.v-leave-to  {
  opacity: 0;
   transform: translateX(100%);
   
}

.v-leave-to {
  opacity: 0;
  position: absolute;
  transform: translateX(-100%);
  left: -200%;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}
#app{
  padding-bottom: 50px;
}
</style>
