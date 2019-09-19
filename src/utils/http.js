import axios from 'axios';

const service = axios.create({
    baseURL:'https://easy-mock.com/mock/5ceb51b551e3de74af53fe54/imooc/api/'
})

service.interceptors.request.use((config)=>{
    return config
},(err)=>{
    return Promise.reject(err)
})

service.interceptors.response.use((response)=>{
    return response
},(err)=>{

    return Promise.reject(err)
})

export default service