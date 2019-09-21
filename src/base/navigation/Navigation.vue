<template>
  <div class="nav-bar" :style="navStyle">
    <div class="left">
      <!-- 默认状态 -->
      <img v-if="isShowBack" src="@img/back.svg" alt  @click="goback"/>
      <slot name="left"></slot>
    </div>
    <div class="center">
      <!-- 默认状态 -->
      <span class="page-title" v-if="isDefault">{{pageName}}</span>
      <slot name="center"></slot>
    </div>
    <div class="right">
        <slot name="right"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'Navbar',
  props: {
    // 是否展示默认后退按钮
    isShowBack: {
      type: Boolean,
      default: true
    },
    // 是否展示默认状态
    isDefault: {
      default: true,
      type: Boolean
    },
    // 默认状态下页面标题的名称
    pageName: {
      default: '',
      type: String
    },
    // 背景颜色之类的,定位等 
    navStyle:null
  },
  data() {
    return {

    }
  },
  components: {

  },
  methods:{
    goback(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@css/dimens.scss";
@import "@css/colors.scss";
.nav-bar {
  width: 100%;
  height: $navBarHeight;
  line-height: $navBarHeight;
  display: flex;
  justify-content: space-between;
  // 适配手机 stateBar
  padding-top: $stateBarHeight;
  z-index: 999;
  .left,
  .right {
    display: flex;
    height: 100%;
    width: px2rem(26);
    padding: 0 8px;
    img {
      width: 100%;
      align-self: center;
    }
  }

  .center {
    display: flex;
    height: 100%;
    flex-grow: 1;
    .page-title {
      align-self: center;
      margin: 0 auto;
      font-size: 20px;
      color:#333;
    }
  }
}

.bottom-line {
  border-bottom: 1px solid $lineColor;
}
</style>
