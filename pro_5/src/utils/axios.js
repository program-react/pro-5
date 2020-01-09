import axios from 'axios'
<<<<<<< HEAD
import {getItem} from '../utils/webStorage'
import store from  '../store/store'
import ActionCreator from  '../store/actionCreator'
// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  //从缓存获取token 添加
  // config.data.token=getItem('token')||''
  console.log(config)
=======

/** 
 * 请求拦截器   使用axios 发起请求的时候 进行拦截 可以接受所有的请求参数  进行修改
 * 响应拦截器   使用axios 接受数据进行进行拦截 对接受的数据进行处理
 * 
*/

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  // console.log('请求拦截器',config)
  // config.url='https://www.baidu.com'
>>>>>>> 78b1ae9ac09f9ee9ddcd245cf8d9c004ba8ac853
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
<<<<<<< HEAD
  // let list=[-996,-997,-998,-999]
  // if(list.indexOf(response.data.err)!==-1){
    // token 出问题了
    // console.log('token 出问题了')
    // store.dispatch(ActionCreator.setTokenModal(true))

    // return Promise.reject(response);
  // }
=======
  // console.log('响应拦截器',response)
>>>>>>> 78b1ae9ac09f9ee9ddcd245cf8d9c004ba8ac853
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios