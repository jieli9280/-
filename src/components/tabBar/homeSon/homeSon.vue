<template>
  <div>
    <div class="demo-icon">
      <router-link class="van-col" v-for="item in list" :key="item.id" :to="item.to" tag="div">
        <i class="van-icon">
          <img :src="item.url" alt>
        </i>
        <p>{{item.text}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
     list: [
      { url: "../../../../static/gird/menu1.png", text: "定位",to:"home/newlist"},
      { url: "../../../../static/gird/menu2.png", text: "点餐",to:"home/newlist"},
      { url: "../../../../static/gird/menu3.png", text: "购物",to:"home/newlist"},
      { url: "../../../../static/gird/menu4.png", text: "支付",to:"home/newlist"},
      { url: "../../../../static/gird/menu5.png", text: "吃喝",to:"home/newlist"},
      { url: "../../../../static/gird/menu6.png", text: "菜单",to:"home/newlist"}
    ]
  }),
 
};
</script>

<style lang="less" scoped>
.demo-icon {
  div {
    text-align: center;
  }
}
.van-col {
  width: 33.333%;
  float: left;
  margin-top: 20px;
  img {
    height: 40px;
    width: 40px;
  }
  p {
    margin: 0;
    padding: 0;
  }
}
</style>