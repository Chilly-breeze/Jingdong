
import $http from '../utils/http'


export const getSwiper = ()=>{
    return $http.get('/swiper')
}

export const getActive = ()=>{
    return $http.get('/activitys')
}