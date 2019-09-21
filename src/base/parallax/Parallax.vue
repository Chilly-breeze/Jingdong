<template>
  <div class="parallax">
    <div class="parallax-slow" ref="slow" :style="{top: slowTop}">
      <slot name="swiper"></slot>
    </div>
    <div class="parallax-content z-index-2">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  data() {
    return {
        scrollY:0
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.onscrollYY()
    })
  },
  computed:{
      slowTop(){
          return (this.scrollY - (this.scrollY / 2)) + 'px'
      }
  },
  methods:{
      onscrollYY(){
          window.addEventListener('scroll',(e)=>{
              this.scrollY = e.target.documentElement.scrollTop;
              this.$emit('changescroll',this.scrollY)
              // console.log(this.slowTop)
          })
      }
  }
}
</script>

<style scoped lang="scss">
@import "@css/variable.scss";
@import "@css/dimens.scss";
@import "@css/colors.scss";
@import "@css/mixin.scss";
.parallax {
  width: 100%;
  height: 100%;
  .parallax-slow {
    width: 100%;
    position: relative;
  }

  .parallax-content {
    height: 100%;
    z-index: 99;
    position: relative;
  }
}
</style>
