<template>
  <div class="swiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(item,index) in imgList" :key="index">
        <img :src="item" alt :style="{height:height}" class="swiper-slide-img" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/javascript">
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "mySwiper",
  props: {
    imgList: {
      type: Array,
      default: null
    },
    height: {
      type: String,
      default: "auto"
    },
    // 1为圆点 2为数字
    paginationType: {
      type: String,
      default:'1'
    }
  },
  data() {
    return {
      swiperOption: {
        autoplay: {
          disableOnInteraction: false,
          delay: 3000,
          stopOnLastSlide: false
        },
        autoHeight: true,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          type: 'fraction',
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  },
  created(){
    this.initPaginationLayout()
  },
  methods: {
    initPaginationLayout() {
      switch (this.paginationType) {
        case '1':
          this.swiperOption.pagination = {
            el: '.swiper-pagination',
            type: 'bullets',
            // bulletClass: 'custom-bullet-class'
          }
          break;
        case '2':
          this.swiperOption.pagination = {
            el: '.swiper-pagination',
            type: 'fraction',
          }
          break;
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@css/variable.scss";
@import "@css/dimens.scss";
@import "@css/colors.scss";
@import "@css/mixin.scss";
.swiper {
  .swiper-slide-img {
    display: block;
    width: 100%;
  }
  .swiper-pagination-current {
    font-size: $font-small-s;
    font-weight: bold;
  }
  & /deep/ .swiper-pagination-bullet-active {
    background: skyblue;
  }
  .swiper-pagination {
    bottom: px2rem(12);
    .custom-bullet-class {
      box-sizing: border-box;
      border-radius: 100%;
      height: px2rem(6);
      width: px2rem(6);
      border: px2rem(1) solid #fff;
      margin: 0 px2rem(4);
      display: inline-block;
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      background: white;
    }
  }

  .swiper-pagination-fraction {
    left: auto;
    right: 0;
    width: auto;
    font-size: $infoSize;
    background-color: rgba(0, 0, 0, 0.3);
    padding: px2rem(6) px2rem(18);
    border-top-left-radius: px2rem(16);
    border-bottom-left-radius: px2rem(16);
    bottom: px2rem(32);
    color: white;

    .swiper-pagination-current {
      font-size: $titleSize;
      font-weight: bold;
    }
  }
}
</style>
