<template>
  <div class="shopping">
    <Nav :navStyle="navStyle" :pageName="'购物车'" :isShowBack="false"></Nav>
    <!-- {{this.$store.state.shoppingDatas[0].number}} -->
    <div class="cars">

      <!-- vant -->
      <van-card
        v-for="(item,index) in shopping"
        :key="index"
        :num="item.number"
        :price="item.price"
        :title="item.name"
        :thumb="item.img"
      >
        <div slot="footer">
          <van-button size="small" @click="jia(index)">+</van-button>
          <van-button size="small" @click="jian(index)">-</van-button>
          <van-button type="warning" size="small" text="删除" @click="deleteBuy(index)"></van-button>

        </div>
      </van-card>
        <!-- {{this.$store.state.shoppingDatas}} -->
    </div>
    <!-- 底部购买 -->
    <div class="footer">
      <div class="jia">总价:<span class="span">{{ totalPrice | tofix2}}</span></div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Nav from '@b/navigation/Navigation.vue'
export default {
  data() {
    return {
      navStyle:{
        background:'rgba(216, 30, 6,.8)',
        width:'100%'
      },
      // 商品数据源
      shopping:[],
      //vant 的 num
      vanNum:1,
      totalDatas:{},
      
    }
  },
  components: {
    Nav,
  },
  created(){
    this.getShopping();
  },
  methods:{
    getShopping(){
      this.shopping = this.$store.state.shoppingDatas
    },
    jia(index){
      this.$store.commit('jia',index)
    },
    jian(index){
      if(this.$store.state.shoppingDatas[index].number == 1){
        return
      }
       this.$store.commit('jian',index)
    },
    //删除成功
    deleteBuy(index){

      this.$toast.loading({
        mask: true,
        duration:300
      });

      this.shopping.splice(index,1);
      // let bendi = JSON.parse(localStorage.getItem('shoppingDatas'))
      // let newVal = bendi.splice(index,1)
      this.$store.commit('removeBuy',index)


      // 提示
      setTimeout(()=>{
      this.$notify(
            { 
              type: 'success', 
              message: '删除成功',
              duration:1000
            }
          );
      },300)
   
    }
  },
  computed:{
    totalPrice(){
      let c = 0;
        this.shopping.forEach(item=>{
          c += item.price * item.number
        })
      return c
    }
  }
}
</script>

<style scoped lang="scss">

.shopping {
  position: absolute;
  font-size: 16px;
  width: 100%;
  height: 100%;

  // 底部
  .footer {
    position: fixed;
    height: 1.333333rem;
    bottom: 1.226667rem;
    width: 100%;
    background: #fff;
    box-shadow:  0 0 23px #ccc;
    border-bottom:1px solid #e5e5e5;
    display: flex;
    justify-content: flex-end;
    .buy {
      width: 2.666667rem;
      background: orangered;
      color: #fff;
      text-align: center;
      line-height: 1.226667rem;
      font-size: 16px;
      height: 100%;
    }
    .jia {
      width: 130px;
      line-height: 1.226667rem;
      font-size: 18px;
    }
    .span {
      margin-left: 10px;
      color: red;
    }
  }
}
// vant
.van-button--small{
  font-size: 23px;
}
.van-card__bottom {
  line-height: 52px;
  font-size: 18px;
}
.van-card__title {
  font-size: 16px;
  margin-top: 10px;
}
.van-button__text {
  font-size: 18px;
}
</style>
