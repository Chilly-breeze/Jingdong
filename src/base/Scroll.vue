<template>
  <div ref="ware">
      <slot></slot>
  </div>
</template>

<script type="text/javascript">
import BScroll from 'better-scroll'
export default {
    name:"scroll",
    props:{
        click:{
            type:Boolean,
            default:true
        },
        probeType:{
            type:Number,
            default:1
        },
        data:{
            type:Array,
            default:[]
        },
        listenScroll:{
            type:Boolean,
            default:false
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
            this.scroll = new BScroll(this.$refs.ware,{
                probeType:this.probeType,
                click:this.click
            })
            if(this.listenScroll){
                let that =this;
                this.scroll.on('scroll',pos=>{
                    that.$emit('scroll',pos)
                })
            }
        },
        enable(){
            this.scroll && this.scroll.enable()
        },
        disable(){
            this.scroll && this.scroll.disable()
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        scrollToElement(){
            this.scroll && this.scroll.scrollToElement.apply(this.scroll,arguments)
        },
        scrollTo(){
            this.scroll && this.scroll.scrollTo.apply(this.scroll,arguments)
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
