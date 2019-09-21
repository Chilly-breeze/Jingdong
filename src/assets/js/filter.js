import Vue from 'vue'
Vue.filter('tofix2', (val) => {
    if (!val) {
        return '0.00'
    }
    let result = parseFloat(val);
    if (Number.isInteger(result)) {
        return result
    }
    return result.toFixed(2)
})

/**
 * 时间过滤
 */
Vue.filter('firstTime',(val)=>{
    if(!val){
        return 
    }
    if(val.indexOf(':') == -1 ){
        return val
    }
    let reset = ''
    const arr = val.split(':')
    if(arr[0] < 10 ) {
        reset  = '0'+ arr[0]
    }else {
        reset = arr[0]
    }
    if (arr[1] < 10) {
        reset = reset + ':0'+arr[1]
    } else {
        reset = reset + ':' + arr[1]
    }
    if (arr[2] < 10) {
        reset = reset + ':0' + arr[2]
    } else {
        reset = reset + ':'+ arr[2]
    }
    return reset
})