<template>
  <div>
    <div class="newdata" v-for="item in newdatails" :key="item.id">
      <h3>{{item.title}}</h3>
      <p>
        <span>发表时间：{{item.add_time | moments}}</span>
        <span>点赞次数：{{item.click}}</span>
      </p>
      <div class="content">{{item.content}}</div>
    </div>
    <discuss :id="this.id"></discuss>
    
  </div>
</template>

<script>
// 引入评论组件
import discuss from "../new/discuss.vue";

export default {
  data: () => ({
    id: "",
    newdatails: []
  }),
  created() {
    this.getnew();
  },
  methods: {
    getnew() {
      this.id = this.$route.params.id; //获取上个页面传递的id,在下面获取数据的时候先提交id
      this.axiso.get("/api/getnew/" + this.id).then(res => {
        this.newdatails.push(res.data.message);
       this.id=res.data.message.id;
       
       
      });
    }
  },
  components:{
      'discuss':discuss
  }
  
};
// <!--评论组件-->

</script>




<style lang="less"  scoped>
.newdata {
    padding: 0 5px;
  h3 {
      color: red;
    text-align: center;
border-bottom: 1px solid black;
  }
  p{
       margin-bottom:20px;
      :first-child{
          float: left;
          color: skyblue;
      }
      :last-child{
          float: right;
          color: red;
      }
  }
  .content{
    margin-top: 10px;
  }
}

</style>