<template>
  <div class="tab">
      <div class="tab-box" v-for="(item,index) in box" :key="item.name" @click="changeTab(item,index)">
          <img :src="index === setIndex ? item.hicon : item.nicon" alt="">
          <span :class="{'active': index == setIndex}">{{item.name}}</span>
      </div>
  </div>
</template>

<script type="text/javascript">
export default {    
  data() {
    return {
        box:[
            {
                nicon:require('@img/home-n.svg'),
                hicon:require('@img/home-h.svg'),
                name:'首页',
                componentName:'home'
            },
             {
                nicon:require('@img/shopping-n.svg'),
                hicon:require('@img/shopping-h.svg'),
                name:'购物车',
                componentName:'shopping'
            },
             {
                nicon:require('@img/my-n.svg'),
                hicon:require('@img/my-h.svg'),
                name:'我的',
                componentName:'my'
            }
        ],
        setIndex:0
    }
  },
  components: {

  },
  methods:{
      changeTab(item,index){
          this.setIndex = index
          this.$emit('changeComponent',item.componentName)
      },
       onChangeComponent: function (index) {
            this.changeTab(this.box[index], index);
    }
  }
}
</script>

<style scoped lang="scss">
@import '@css/variable.scss';
.active {
    color: $color-tab;
}
.tab {
    position: fixed;
    bottom: 0;
    height: 1.226667rem;
    width: 100%;
    display: flex;
    z-index: 99;
    background: #fff;
    .tab-box {
        flex:1;
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction: column;
        img {
            display: block;
            width: 20px;
            height: 20px;
            margin-bottom: 2px;
        }
        span {
            font-size: $font-small-s;
        }
    }
}
</style>
