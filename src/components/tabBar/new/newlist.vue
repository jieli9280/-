<template>
  <div>
    <router-link class="golf" v-for="item in list" :key="item.id" :to="'/home/details/'+item.id">
      <div class="photo">
        <img :src="item.img_url" alt>
      </div>
      <div class="intro">
        <h3>{{item.zhaiyao}}</h3>
        <h5>{{item.title}}</h5>

        <p>{{item.content}}</p>
        <span>{{item.add_time | moments('YYY-MMM-DDD')}}</span>
        <a href>点击：{{item.click}}</a>
      </div>

      <div style="clear:both"></div>
    </router-link>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      list: []
      // pran:this.list.item.id
    };
  },
  created() {
    this.getNew();
  },
  methods: {
    getNew() {
      this.axiso.get("api/getnewslist").then(
        res => {
          this.list = res.data.message;
        },
        error => {
          Toast.success("请求失败");
        }
      );
    }
  }
};
</script>

<style lang="less"  scoped>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
.golf {
  width: 100%;
  // height: 90px;
  margin-top: 10px;
  background: #ccc;

  .photo {
    float: left;
    width: 20%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .intro {
    float: left;
    width: 80%;
    padding-left: 10px;
    height: 100%;
    h5,
    h3 {
      text-align: center;
      margin: 10px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    h3 {
      color: red;
    }
    p {
      font-size: 14px;

      word-wrap: break-word;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      text-align: right;
    }
    a {
      margin-top: 10px;
      float: right;
    }
  }
}
</style>




