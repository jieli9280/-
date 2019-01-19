<template>
<div>
  <div class="publish">
    <h2>发表评论</h2>
    <textarea
      rows="2"
      cols="20"
      maxlength="120"
      class="fields"
      placeholder="请输入要评论的内容"
      ref="textarea"
    ></textarea>
    <van-button type="default" class="default" @click="gsubmitdata">发表评论</van-button>
    <div class="comment" v-for="item in message" :key="item.id">
      <header>
        <span>第一楼</span>
        <span>用户：{{item.user_name}}</span>
        <span>发表时间：</span>
        {{item.add_time}}
      </header>
      <body>{{item.content}}</body>
      <!-- add_time: "2019-01-19 13:40:57"
artid: 0
content: "发送到发送到"
id: 17
isdel: 0     
      user_name: "匿名用户"-->
    </div>
    <van-button plain type="danger" class="primary" @click="primary">加载更多</van-button>
  </div>
</div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({
    pagination: 1,
    content: "",
    message: [],
    arr:[]
  }),
  created() {
    this.getdiscuss();
  },
  props: ["id"],
  methods: {
    //   提交评论
    gsubmitdata() {
      // 判断评论是否为空
      if (this.$refs.textarea.value.trim().length == 0) {
        Toast("评论不能为空哟");
        return;
      }
      // 不为空则发送请求
      // 获取评论域里面的值
      this.content = this.$refs.textarea.value;
      //    发送请求
      this.axiso
        .post("/api/postcomment/:" + this.id, {
          // 参数
          content: this.content
        })
        .then(res => {
          Toast(res.data.message);
        });
    },
    // 页面加载获取评论
    getdiscuss() {
      this.axiso
        .get(
          "/api/getcomments/:" + this.id + "?pageindex=" + this.pagination + ""
        )
        .then(res => {
          if (res.status == 200) {
            //   俩个数组合并一个数组
            this.message = this.message.concat(res.data.message);
            console.log(this.message);
          } else {
            console.log("获取失败");
          }
        });
    },
    // 点击加载更多评论
    primary() {
        this.pagination++;
    this.getdiscuss();
      console.log();
    }
  }
};
</script>

<style lang='less' scoped>
* {
  padding: 0;
  margin: 0;
}
h2 {
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
}
.fields {
  width: 100%;
  height: 100px;
  border-radius: 10px;
  margin-top: 10px;
}
.publish {
  padding: 0 5px;
}
.default {
  width: 100%;
  margin-top: 10px;
  background: #26a2ff;
  color: #fff;
  font-size: 20px;
}
.primary {
  width: 100%;
  font-size: 20px;
  margin-top: 10px;
  color: red;
}
.comment {
  header {
    margin: 5px 0;
    background: #aaa;
    color: #fff;
    border: 1px solid black;
  }
  body {
  }
}
</style>