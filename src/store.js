import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
var shoppingDatas = JSON.parse(localStorage.getItem("shoppingDatas") || "[]"); 
export default new Vuex.Store({
  state: {
    username: undefined,
    // 购物车数据
    shoppingDatas: shoppingDatas,
    // 进入商品详情的数据
    selectGoods: {}
  },
  mutations: {
    // setUsername: function (state, username) {
    //   state.username = username;
    // },
    // clearUsername: function (state) {
    //   state.username = undefined;
    // },
    /**
     * 添加购物车商品
     */
    addShoppiongData: function (state, goods) {

      const isExist = state.shoppingDatas.some(item => {
        if (item.id === goods.id) {
          // 如果商品已经存在的话，那么让商品的数量加一
          item.number += 1;
          return true;
        }
      });

      // 只有在商品不存在购物车的时候，在让商品去添加到购物车
      if (!isExist) {
        // goods.isCheck = false;
        // goods.number = 1;
        Vue.set(goods, 'isCheck', false);
        Vue.set(goods, 'number', 1);
        state.shoppingDatas.push(goods);
      }
      localStorage.setItem("shoppingDatas", JSON.stringify(state.shoppingDatas))
    },
    /**
     * 更改购物车商品数量
     */
    // changeShoppingDataNumber: function (state, data) {
    //   state.shoppingDatas[data.index].number = data.number;
    // },
    // setSelectGoods: function (state, goods) {
    //   state.selectGoods = goods;
    // },
    jia(state,index){
      state.shoppingDatas[index].number += 1
      localStorage.setItem("shoppingDatas", JSON.stringify(state.shoppingDatas))

    },
    jian(state,index){
      state.shoppingDatas[index].number -= 1
      localStorage.setItem("shoppingDatas", JSON.stringify(state.shoppingDatas))    
    }
  },
  actions: {

  },
  getters:{
  }
});
