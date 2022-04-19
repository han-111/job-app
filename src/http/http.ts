import axios from "axios";
const $http = axios.create({
    timeout: 1000,
    baseURL:process.env.VUE_APP_BASE_URL ,
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    }
})
$http.interceptors.request.use(config => {
    config.headers = config.headers || {}
    return config  
})

$http.interceptors.response.use(res => {
    const code = res.data?.code
    // if(code != 200) {
    //     alert('出错');
    //     return Promise.reject(res.data)
    // } else {
        return res.data;
   // }
},err => {
    const response = err.response
    return  Promise.reject(response)
})
export default $http