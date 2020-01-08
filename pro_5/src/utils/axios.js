import axios from 'axios'

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
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  // console.log('响应拦截器',response)
  return response.data;
}, function (error) {
  // Do something with response error
  return Promise.reject(error);
});

export default axios