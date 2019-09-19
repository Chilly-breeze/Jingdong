import axios from 'axios'

// 商品列表
export const getGoods = ()=>{
    return axios.get('/static/goods.json')
}