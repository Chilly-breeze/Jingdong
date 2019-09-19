<template>
  <div class="count-down">
    <!-- 12点场 00:32:18 -->
    <span class="count-down-end-time">{{endHours}}点场</span>
    <span class="count-down-surplus">{{surplus | firstTime}}</span>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "countDown",
  props: {
    endHours: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      // 展示活动状态
      surplus: "",
      // 活动开始差距秒数
      diffSeconds: 0,
      interval: null
    };
  },
  components: {},
  created(){
      this.init()
  },
  methods:{
      init(){
          if(this.interval) clearInterval(this.interval)
          let data  = new Date();

          //当活动结束时候
          if(data.getHours() > this.endHours) {
               this.surplus = '活动已结束'
               return 
          }

            //当活动进行中
            if ( data.getHours() == this.endHours ) {
                this.surplus = '活动进行中'
                return
            }

            // 当活动那个进行中时候
            const diffHours = this.endHours - data.getHours() - 1
            const diffMinutes = 60 - data.getMinutes() - 1
            const diffSeconds = 60 - data.getSeconds()

            //总秒
            this.diffSeconds = diffHours * 3600 + diffMinutes * 60 + diffSeconds  
            this.interval = setInterval(()=>{
                this.diffSeconds -= 1
            },1000)
      }
  },
  watch:{
      diffSeconds(newval){
          const hours = Math.floor(newval / 3600)
          const minutes = Math.floor(newval/60) % 60 
          const seconds = newval % 60
          this.surplus  = hours+':'+ minutes+':' + seconds
          if(newval === 0) {
              this.init()
          }
      },
      endHours() {
          this.init()
      }
  }
};
</script>


<style lang="scss" scoped>
@import "@css/dimens.scss";
@import "@css/colors.scss";

.count-down {
  display: flex;
  font-size: px2rem(14);
  margin-left: $marginSize;

  span {
    display: inline-block;
    padding: px2rem(2) px2rem(4) px2rem(2) px2rem(4);
  }

  &-end-time {
    background-color: $mainColor;
    border-top-left-radius: px2rem(4);
    border-bottom-left-radius: px2rem(4);
    border: px2rem(1) solid $mainColor;
    color: white;
  }

  &-surplus {
    background-color: white;
    border-top-right-radius: px2rem(4);
    border-bottom-right-radius: px2rem(4);
    color: $mainColor;
    border: px2rem(1) solid $mainColor;
  }
}
</style>
