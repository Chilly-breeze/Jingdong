<template>
  <div class="goods-options z-index-2">
    <ul class="goods-options-list">
      <li class="goods-options-item" v-for="(item, index) in optionsDatas" :key="index">
        <a class="goods-options-item-content" @click="onchangeli(item,index)">
          <span
            class="goods-options-item-content-name"
            :class="{'goods-options-item-content-name-active' : selectOption.id === item.id}"
          >{{item.name}}</span>
          <span
            class="goods-options-item-content-caret caret"
            v-if="item.subs.length > 0"
            :class="[isShowSubContent && selectOption.id === item.id ? 'goods-options-item-content-caret-open' : 'goods-options-item-content-caret-close']"
          ></span>
        </a>
      </li>
    </ul>
    <transition name="fold-height">
      <div class="options-sub-content z-index-2" v-show="isShowSubContent">
        <ul class="options-sub-content-list">
          <li
            class="options-sub-content-list-item"
            v-for="(item, index) in selectOption.subs"
            :key="index"
             @click="onchange(item)"
          >
            <a class="options-sub-content-list-item-content">
              <span
                class="options-sub-content-list-item-content-name"
                :class="{'options-sub-content-list-item-content-name-active' : selectOption.id === item.id}"
              >{{item.name}}</span>
              <img
                class="options-sub-content-list-item-content-select"
                v-show="selectOption.id === item.id"
                src="@img/options-select.svg"
                alt
                srcset
              />
            </a>
          </li>
        </ul>
      </div>
    </transition>

    <div class="cover" v-show="isShowSubContent" @click="gai"></div>
  </div>
</template>


<script>
export default {
  data: function () {
    return {
      // 数据源
      optionsDatas: [
        {
          id: '1',
          name: '默认',
          subs: [
            {
              id: '1',
              name: '默认',
            },
            {
              id: '1-2',
              name: '价格由高到低',
            },
            {
              id: '1-3',
              name: '销量由高到低',
            },
          ]
        },
        {
          id: '2',
          name: '有货优先',
          subs: []
        }, {
          id: '3',
          name: '直营优先',
          subs: []
        }
      ],
      // 选中的筛选项
      selectOption: {},
      // 是否展开子筛选项
      isShowSubContent: false
    }
  },
  created: function () {
    // 设置初始选中项
    this.selectOption = this.optionsDatas[0];
  },
  methods: {
      onchangeli(item){
            // console.log(item)
        //   console.log(item,index)
        if(this.isShowSubContent){
            this.isShowSubContent = false
            return 
        }
        //2个条件 一被选中 二有子选项
        if(item.subs.length > 0 && this.selectOption.id === item.id) {
            this.isShowSubContent = true
            return 
        }

        this.selectOption = item;
      },
      onchange(item){
        //   console.log(item)
        //   this.selectOption = item
            this.selectOption = item
            this.optionsDatas.forEach(oitem=>{
                this.selectOption = oitem.subs
                oitem.subs.forEach(sitem=>{
                    if(sitem.id == item.id){
                        oitem.id = sitem.id
                        oitem.name = sitem.name
                    }
                })
            })
          this.isShowSubContent = false;
      },
      gai(){
        this.isShowSubContent = false
      }
  }

}
</script>


<style lang="scss" scoped>
@import "@css/dimens.scss";
@import "@css/colors.scss";
.goods-options {
  width: 100%;
  border-bottom: 1px solid $lineColor;
  &-list {
    display: flex;
    width: 100%;
    height: $goodsOptionsHeight;
    background-color: white;
    .goods-options-item {
      flex-grow: 1;

      &-content {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        &-name {
          font-size: $infoSize;
          margin-right: $marginSize;

          &-active {
            color: $mainColor;
          }
        }

        // 子选项展开时，三角形的动画
        &-caret {
          &-open {
            transform: rotate(180deg);
            transition: all 0.3s;
          }

          &-close {
            transform: rotate(0deg);
            transition: all 0.3s;
          }
        }
      }
    }
  }

  // 子选项内容区
  .options-sub-content {
    // 脱离标准文档流
    position: absolute;
    width: 100%;
    max-height: px2rem(180);
    overflow: hidden;
    overflow-y: auto;
    background-color: white;
    &-list {
      &-item {
        &-content {
          display: flex;
          align-items: center;
          border-top: 1px solid $lineColor;
          padding: $marginSize;
          height: px2rem(44);
          box-sizing: border-box;
          &-name {
            font-size: $infoSize;
            display: inline-block;
            flex-grow: 1;

            &-active {
              color: $mainColor;
            }
          }

          &-select {
            width: px2rem(18);
            height: px2rem(18);
          }
        }
      }
    }
  }

  /**
            子选项内容区展开动画，当 v-if=“true” 的时候调用
            当子选项部分展开时，初始状态max-height为0，结束状态max-height为180
        */
  .fold-height-enter-active {
    animation-duration: 0.3s;
    animation-name: fold-height-open;
  }

  @keyframes fold-height-open {
    0% {
      max-height: 0;
    }
    100% {
      max-height: px2rem(180);
    }
  }

  /**
            子选项内容区关闭动画，当 v-if=false 的时候调用
            当子选项部分关闭时，初始状态max-height为180，结束状态max-height为0
        */
  .fold-height-leave-active {
    animation-duration: 0.3s;
    animation-name: fold-height-close;
  }

  @keyframes fold-height-close {
    0% {
      max-height: px2rem(180);
    }
    100% {
      max-height: 0;
    }
  }
}
.goods-options-item-content-caret-open {
    width: 0;
    height: 0;
    display: block;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom:6px solid red;
}
.goods-options-item-content-caret-close {
    width: 0;
    height: 0;
    display: block;
    border-top: 6px solid transparent;
    border-left: 6px solid red;
    border-bottom:6px solid transparent;
}
.cover {
  width: 100%;
  height: calc(100% - 2.666667rem);
  position:fixed;
  background: rgba(0,0,0,.3);
  z-index: 100;
}
.z-index-2 {
  z-index: 999;
}
</style>
