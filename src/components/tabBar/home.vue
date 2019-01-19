<template>
  <div class="hello">
    <!-- 轮播图 -->
    <van-swipe :autoplay="1000 " indicator-color="white">
      <!-- 遍历数据生成图片 -->
      <van-swipe-item v-for="item in LunBoTu" :key="item.img">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>
    <home-son></home-son>
  </div>
</template>

<script>
import { Toast } from "vant";
import homeSon from "./homeSon/homeSon.vue";
export default {
  data() {
    return {
      LunBoTu: []
    };
  },
  // 所有实例完成以后调用ajax请求
  created() {
    this.getLunBoTu();
  },
  // 方法
  methods: {
    
   
    //  定义方法发送请求
    getLunBoTu() {
      
      this.axiso.get("api/getlunbo").then(
        res => {
          this.LunBoTu = res.data.message;
          // Toast.success("请求成功");
            
            
          
        },
        error => {
          console.log("数据失败");
        }
      );
    }
  },

  components: {
    homeSon

    
  }
};

</script>

<style lang="less">
.van-swipe {
  height: 200px;
  // background:red;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>

