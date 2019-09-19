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
    // 1为圆点
    paginationType: {
      type: String,
      default: "1"
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
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    swiper,
    swiperSlide
  }
};
</script>

<style scoped lang="scss">
@import "@css/variable.scss";
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
}
</style>
