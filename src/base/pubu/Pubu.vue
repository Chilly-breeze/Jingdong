<template>
  <div class="goods" :style="{height:sumHeight}" :class="layoutClass" ref="goods" @scroll="onScrollChange">
    <div
      class="goods-item"
      v-for="(item, index) in sortArr"
      :key="index"
      :style="itemStyle[index]"
      :class="layoutItemClass"
      ref="goodsItem"
      @click="go(item)"
    >
      <img class="goods-item-img" :src="item.img" alt :style="arr[index]" />
      <div class="goods-item-desc">
        <p class="goods-item-desc-name" :class="{'goods-item-desc-name-hint' : !item.isHave}">
          <Direct v-if="item.isDirect"></Direct>
          <Nohave v-if="!item.isHave"></Nohave>
          {{item.name}}
        </p>
        <div class="goods-item-desc-data">
          <p class="goods-item-desc-data-price">￥{{item.price | tofix2}}</p>
          <p class="goods-item-desc-data-volume">销量：{{item.volume}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Direct from './Direct';
import Nohave from './NoHave';
export default {
  props: {
    // 数据源
    sortGoodsData: {
      type: Array,
      default: function () {
        return []
      }
    },
    layoutType: {
      type: String,
      default: '1'
    },
    sort: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      // 最小高度
      min_height: 178,
      // 最大高度
      max_height: 230,
      // 存高度的数组
      arr: [],
      //top样式
      itemStyle: [],
      //整体高度
      sumHeight: '100%',
      //距离上面box的margintop
      margintop: 8,
      layoutClass: 'goods-list',
      layoutItemClass: 'goods-list-item',
      imgStyles: [],
      // 存储排序的数组
      sortArr: [],
      scrollTopValue:0
    }
  },
  components: {
    Direct,
    Nohave
  },
  mounted() {
    this.imgHeight();
    this.$nextTick(() => {
      this.initWaterfall()
      this.setSortGoodsData()
    }, 20)
    this.initLayout()
  },
  activated: function () {
        /**
         * 定位页面滑动位置，需要配合keepAlive 来使用
         */
        // console.log(this.scrollTopValue)
        this.$refs.goods.scrollTop = this.scrollTopValue;
    },
  methods: {
    // 跳转页面
    go(item){
      this.$emit('godetail',item)
    },
    // 一个随机高度
    randomHeight() {
      let result = 0;
      result = Math.floor(Math.random() * (this.max_height - this.min_height) + this.min_height);
      return result
    },
    // 加到数组里
    imgHeight() {
      this.sortGoodsData.forEach(() => {
        this.arr.push({ height: this.randomHeight() + 'px' })
      })
    },
    /**
     * 1. 创建html,css,让item相对于顶级盒子定位布局
     * 2. 生成不同高度的图片,撑起不同高度的item
     * 3. 计算item位置,来达到从上到下,从左到右的布局
    */
    initWaterfall() {
      let goodsItems = this.$refs.goodsItem
      // console.log(goodsItems)
      if (!goodsItems) return;
      let leftHeight = 0, rightHeight = 0;
      goodsItems.forEach(item => {
        let topHeight = item.clientHeight + this.margintop;
        let itemStyles = {}
        if (leftHeight <= rightHeight) {
          itemStyles = {
            left: '0',
            top: leftHeight + 'px'
          }
          leftHeight += topHeight
        } else {
          itemStyles = {
            right: '0',
            top: rightHeight + 'px'
          }
          rightHeight += topHeight
        }
        this.itemStyle.push(itemStyles)
      })

      this.sumHeight = (leftHeight > rightHeight ? leftHeight : rightHeight) + 'px'
    },
    /**
     * 商品列表排序
    */
    setSortGoodsData() {
      switch (this.sort) {
        case '1':
          this.sortArr = this.sortGoodsData.slice(0)
          break
        case '1-2':
          this.getSort('price')
          break
        case '1-3':
          this.getSort('volume')
          break
        case '2':
          this.getSort('isHave')
          break
        case '3':
          this.getSort('isDirect')
          break
      }
    },
    /**
     * 如果返回-1 则v1在v2前面
     * 反之
    */
    getSort(key) {
      this.sortArr.sort((goods1, goods2) => {
        let v1 = goods1[key], v2 = goods2[key];
        if (typeof v1 === Boolean) {
          if (v1) {
            return -1
          }
          if (v2) {
            return 1
          }
          return 0
        }
        if (parseFloat(v1) >= parseFloat(v2)) {
          return -1
        }
        return 1
      })
    },
    /**
    * 设置布局
     */
    initLayout: function () {
      this.goodsViewHeight = '100%';
      this.itemStyle = [];
      this.arr = [];
      switch (this.layoutType) {
        case '1':
          this.layoutClass = 'goods-list',
            this.layoutItemClass = 'goods-list-item';
          break;
        case '2':
          this.layoutClass = 'goods-grid',
            this.layoutItemClass = 'goods-grid-item';
          break;
        case '3':
          this.layoutClass = 'goods-waterfall',
            this.layoutItemClass = 'goods-waterfall-item';
          this.imgHeight();
          setTimeout(() => {
            this.initWaterfall();
          }, 20);
          break;
      }
    },
    onScrollChange(e){
      this.scrollTopValue = e.target.scrollTop
    }

  },
  watch: {
    sort: function () {
      this.setSortGoodsData();
    },
    /**
     * 监听布局类型切换
     * 1：列表布局
     * 2：网格布局
     * 3：瀑布流布局
     */
    layoutType: function () {
      this.initLayout();
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@css/dimens.scss";
@import "@css/colors.scss";
@import "@css/mixin.scss";
.goods {
  background-color: $bgColor;
  &-scroll {
    overflow-y: auto;
  }
  &-item {
    background-color: white;
    padding: $marginSize;
    box-sizing: border-box;

    &-desc {
      width: 100%;
      &-name {
        font-size: $infoSize;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        line-height: px2rem(18);

        &-hint {
          color: $textHintColor;
        }
      }

      &-data {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: $marginSize;
        &-price {
          font-size: $titleSize;
          color: $mainColor;
          font-weight: 500;
        }

        &-volume {
          font-size: $infoSize;
          color: $textHintColor;
        }
      }
    }
  }
}

.goods-list {
  &-item {
    display: flex;
    border-bottom: 1px solid $lineColor;
    .goods-item-img {
      width: px2rem(120);
      height: px2rem(120);
    }
    .goods-item-desc {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: $marginSize;
    }
  }
}

.goods-grid {
  margin: $marginSize;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &-item {
    width: 49%;
    border-radius: $radiusSize;
    margin-bottom: $marginSize;
    .goods-item-img {
      width: 100%;
    }
  }
}

.goods-waterfall {
  position: relative;
  margin: $marginSize;
  &-item {
    width: 49%;
    border-radius: $radiusSize;
    position: absolute;

    .goods-item-img {
      width: 100%;
    }
  }
}
</style>
