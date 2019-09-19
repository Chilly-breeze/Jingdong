<template>
  <div class="mode-options">
    <div class="mode-options-item" v-for="(item,idnex) in dataSource" :key="idnex" @click="go(item.id)">
      <img :src="item.icon" alt class="mode-options-item-icon" />
      <p class="mode-options-item-title">{{item.title}}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "mode-options",
  data() {
    return {
      dataSource: [
        {
          id: "1",
          icon: require("@img/jingDongChaoShi.png"),
          title: "京东超市"
        },
        {
          id: "2",
          icon: require("@img/haiTunQuanQiu.png"),
          title: "海屯全球"
        },
        {
          id: "3",
          icon: require("@img/jingDongFuShi.png"),
          title: "京东服饰"
        },
        {
          id: "4",
          icon: require("@img/jingDongShengXian.png"),
          title: "京东生鲜"
        },
        {
          id: "5",
          icon: require("@img/jingDongDaoJia.png"),
          title: "京东到家"
        },
        {
          id: "6",
          icon: require("@img/chongZhiJiaoFei.png"),
          title: "充值缴费"
        },
        {
          id: "7",
          icon: require("@img/jingDongPinGou.png"),
          title: "9.9元拼"
        },
        {
          id: "8",
          icon: require("@img/lingJuan.png"),
          title: "领劵"
        },
        {
          id: "9",
          icon: require("@img/zhuanQian.png"),
          title: "赚钱"
        },
        {
          id: "10",
          icon: require("@img/quanBu.png"),
          title: "全部"
        }
      ]
    };
  },
  methods:{
    go(index){
      // console.log(index)
      this.$emit('goback',index)
    }
  },
  components: {},
};
</script>

<style scoped lang="scss">
@import "@css/variable.scss";
.mode-options {
  display: flex;
  flex-wrap: wrap;
  background: white;
  padding-bottom: 0.373333rem;
  &-item {
    width: 20%;
    text-align: center;
    margin-top: 0.266667rem;
    &-icon {
      width: 1.066667rem;
      height: 1.066667rem;
    }
    &-title {
      font-size: $font-small-s;
      margin-top: 0.16rem;
    }
  }
}
</style>
