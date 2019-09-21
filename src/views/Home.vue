<template>
  <div class="home1">
      <Component :is="current"></Component>
      <Tabbar @changeComponent="changeComponent" ref="toolBar"></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@c/tabbar/Tabbar.vue';
export default {
  data(){
      return {
          current:'home'
      }
  },
  components: {
      Tabbar,
      'home':()=>import('@c/home/Home.vue'),
      'shopping':()=>import('@c/shopping/Shopping.vue'),
      'my':()=>import('@c/my/My.vue'),
  },
  methods:{
      changeComponent(item){
        //   console.log(item)
          this.current = item
      },
      pushComponent(){
         let componentIndex = this.$route.params.componentIndex;
        //  console.log(this.componentIndex)
         if(!componentIndex) return 
          this.$refs.toolBar.onChangeComponent(componentIndex)
      }
  },
  activated(){
    this.pushComponent();
  }
}
</script>
