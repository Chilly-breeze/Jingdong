<template>
  <div class="goods-detail">
    <!-- 第一个盒子 -->
    <Nav :isShowBack="false" :isDefault="false" :navStyle="navStyle1">
      <template slot="left">
        <div class="goods-detail-nav-left" @click="goback">
          <img src="@img/back-2.svg" :style="{opacity: leftImgOpacity}" />
          <img src="@img/back-white.svg" :style="{opacity: navBarOpactity}" />
        </div>
      </template>
      <template slot="center">
        <p class="goods-detail-nav-title" :style="{opacity:navBarOpactity}">商品详情</p>
      </template>
    </Nav>

    <!-- 第二个盒子content -->
    <div class="goods-detail-content" ref="c">
        <Parallax @changescroll="changescroll">
        <!-- 轮播图 -->
        <div slot="swiper">
        <Swiper
          :imgList="goodsdetail.swiperImgs"
          :height="SWIPER_IMAGE_HEIGHT+'px'"
          :paginationType="'2'"
        ></Swiper>
        </div>

        <!--content  -->
          <div class="goods-detail-content-desc" slot="content">
            <div class="goods-detail-content-desc-item">
              <p class="goods-detail-content-desc-item-price">￥{{goodsdetail.price | tofix2}}</p>
              <p class="goods-detail-content-desc-item-name">
                <direct v-if="goodsdetail.isDirect"></direct>
                {{goodsdetail.name}}
              </p>
            </div>

            <div class="goods-detail-content-desc-item">
              <p class="goods-detail-content-desc-item-select">
                已选
                <span class="single-row-text">{{goodsdetail.name}}</span>
              </p>
              <div class="goods-detail-content-desc-item-support">
                <ul class="goods-detail-content-desc-item-support-list">
                  <li
                    class="goods-detail-content-desc-item-support-list-item"
                    v-for="(item, index) in supportDatas"
                    :key="index"
                  >
                    <img src="@img/support.svg" alt srcset />
                    <span>{{item}}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="goods-detail-content-desc-detail">
              <img
                v-for="(item, index) in goodsdetail.detailImgs"
                :key="index"
                :src="item"
                alt
                srcset
              />
            </div>
          </div>
        </Parallax>
    </div>

    <!-- 第三个盒子底部 -->
    <div class="goods-detail-buy" :class="{'iphonex-bottom' : isIphoneX}">
      <div class="goods-detail-buy-add" @click="onAddGoodsClick">加入购物车</div>
      <div class="goods-detail-buy-now" @click="onBuyClick">立即购买</div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Nav from '@b/navigation/Navigation.vue';
import Swiper from '@b/swiper/Swiper.vue';
import Direct from '@b/pubu/Direct.vue';
import Parallax from '@b/parallax/Parallax.vue';
export default {
  name: 'goodsDetail',
  // mounted() {
  //   this.$nextTick(() => {
  //     this.onscrollYY()
  //   })
  // },
  data() {
    return {
      goodsdetail: null,
      // 定制swiper高度
      SWIPER_IMAGE_HEIGHT: 364,
      supportDatas: [
        '可配送海外', '京东发货&售后', '京准达', '211限时达', '可自提', '不可使用优惠卷',
      ],
      isIphoneX: false,
      scrollY: 0,
      Nav_Scrolly: 310,
    }
  },
  components: {
    Nav,
    Swiper,
    Direct,
    Parallax
  },

  methods: {
    getDetail(){
      this.goodsdetail = this.$route.params.goods
    },
    scrollYYY(){
      document.documentElement.scrollTop = 0
    },
    goback() {
      this.$router.go(-1)
    },
    changescroll(Y) {
      this.scrollY = Y
    },
    onAddGoodsClick() {
      let that = this

       this.$store.commit('addShoppiongData', this.goodsdetail);
      //  console.log(this.goodsdetail)
      // alert("添加成功")
      this.$toast.success({
            duration:300,
            message:'加入成功'
      })
      setTimeout(()=>{
      that.$router.push({
        name:'home',
        params:{
            routerType: 'push',
            componentIndex: 1
        }
      })
      },400)
    
    },
    onBuyClick() {
      let item = this.goodsdetail
      // console.log(item)
      this.$router.push({
        path:'/buy',
        query:{
          goodsDetail:item
        }
      })

    },
  },
  computed: {
    leftImgOpacity() {
      return 1 - this.scrollY / this.Nav_Scrolly
    },
    navBarOpactity() {
      return 1 - this.leftImgOpacity
    },
    navStyle1() {
      return {
        background: `rgba(216, 30, 6,${this.navBarOpactity})`,
        position: 'fixed',
        top: '0'
      }
    }
  },
  beforeRouteEnter(to,from,next){
    // console.log(to.name)
    if(from.name == 'goodList') {
      next(vm => {
        vm.getDetail()
        vm.scrollYYY()
      })
    }else {
      next()
    }
  }
}
</script>

<style scoped lang="scss">
@import "@css/dimens.scss";
@import "@css/colors.scss";
@import "@css/mixin.scss";
.goods-detail {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;

  &-nav-left {
    position: relative;
    width: 100%;
    img {
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: px2rem(-13);
    }
  }

  &-nav-title {
    width: 100%;
    height: 100%;
    font-size: $titleSize;
    font-weight: bold;
    text-align: center;
    color: white;
  }

  &-content {
    height: 100%;

    &-desc {
      width: 100%;
      background-color: $bgColor;
      box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
    //   overflow: hidden;
      &-item {
        background-color: white;
        padding: $marginSize;
        margin-bottom: $marginSize;

        &-price {
          font-size: px2rem(20);
          color: $mainColor;
          font-weight: 500;
        }

        &-name {
          margin-top: $marginSize;
          font-size: $titleSize;
          font-weight: 500;
          line-height: px2rem(20);

          &-hint {
            color: $textHintColor;
          }
        }

        &-select {
          font-size: $infoSize;
          color: $textHintColor;
          height: px2rem(44);
          display: flex;
          align-items: center;
          border-bottom: px2rem(1) solid $lineColor;

          span {
            color: $textColor;
            font-size: $titleSize;
            font-weight: bolder;
            margin-left: px2rem(4);
            width: 80%;
          }
        }

        &-support {
          margin-top: $marginSize;

          &-list {
            display: flex;
            flex-wrap: wrap;

            &-item {
              display: flex;
              align-items: center;
              padding: px2rem(6) 0;
              margin-right: $marginSize;

              img {
                width: px2rem(12);
                margin-right: px2rem(4);
              }

              span {
                font-size: $minInfoSize;
                color: $textHintColor;
              }
            }
          }
        }
      }

      &-detail {
        img {
          width: 100%;
        }
      }
    }
  }

  &-buy {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: white;
    // border-top: px2rem(1) solid $lineColor;
    box-shadow: 0 0 20px #ccc;
    text-align: right;
    z-index: 999;
    div {
      display: inline-block;
      width: px2rem(100);
      text-align: center;
      font-size: $infoSize;
      line-height: px2rem(46);
      color: white;
      margin: auto 0;
    }

    &-add {
      background-color: $mainColor;
    }

    &-now {
      background-color: darkgoldenrod;
    }
  }
}
.goods-detail-content-desc-item-select span[data-v-06d54242] {
  font-size: 0.34rem;
  line-height: 0.5rem;
}
.z-index2 {
    z-index: 999;
}
</style>
