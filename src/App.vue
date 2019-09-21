<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive >
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name:'App',
  data(){
    return {
      transitionName:'fold-left',
      keepAliveNames:['hw']
    }
  },
  watch:{
    '$route':function (to) {
      const routerType = to.params.routerType;
      // let keepAlivename =  to.name
      // console.log(routerType)
      if( routerType == 'push') {
        // console.log(this.keepAliveNames)
        this.transitionName = 'fold-left'
      }else {
        // console.log(this.keepAliveNames)
        this.transitionName = 'fold-right'
      }
    }
  }
}
</script>  
<style scoped lang="scss">
@import "@css/dimens.scss";
@import "@css/colors.scss";
@import "@css/mixin.scss";
#app {
  width: 100%;
  height: 100%;
  background-color: $bgColor;
}
  // push页面时：新页面的进入动画
  .fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: .4s;
  }
  // push页面时：老页面的退出动画
  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .4s;
  }
  @keyframes fold-left-in {
    0% {
      transform: translate(100%,0)
    }
    100% {
      transform: translate(0,0)
    }
  }

 // push页面时：老页面的退出动画
  @keyframes fold-left-out {
    0% {
      transform:translate(0,0)
    }
    100% {
      transform:translate(-100%,0)
    }
  }

  // 后退页面时：即将展示的页面动画
  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .4s;
  }
  // 后退页面时：后退的页面执行的动画
  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: .4s;
  }
  @keyframes fold-right-in {
    0% {
        transform:translate(-100%,0)
    }
    100% {
        transform:translate(0,0)
    }
  }

  // 后退页面时：老页面退出
  @keyframes fold-right-out {
    0% {
      transform:translate(0,0)
    }
    100% {
      transform:translate(100%,0)
    }
  }
 
</style>
