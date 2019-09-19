<template>
  <div class="scroll" ref="ware">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">

import BScroll from 'better-scroll';
export default {
  name: 'scroll',
  props: {
    probeType: {
      type: Number,
      default: 3
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  mounted(){
      setTimeout(() => {
          this.init()
      }, 20);
  },
  methods:{
      init(){
          if(!this.$refs.ware){
              return 
          }
          this.scroll  = new BScroll(this.$refs.ware,{
              probeType:this.probeType,
              click:this.click
          })
        
      },
      refresh(){
          this.scroll && this.scroll.refresh()
      }
  },
  watch:{
      data(){
          setTimeout(() => {
            this.refresh()
          }, 20);
      }
  }
}
</script>

<style scoped>
</style>
