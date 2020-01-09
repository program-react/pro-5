import axios from '../utils/axios'
<<<<<<< HEAD
import {getItem} from '../utils/webStorage'
// 登录
export const UserLogin=(userName,passWord)=>{
  return new Promise((resolve,reject)=>{
    let url='/hehe/admin/user/login'
    axios.post(url,{userName,passWord})
=======
// 登录
export const UserLogin=(us,ps)=>{
  return new Promise((resolve,reject)=>{
    let url='/hehe/admin/user/login'
    axios.post(url,{us,ps})
>>>>>>> 78b1ae9ac09f9ee9ddcd245cf8d9c004ba8ac853
    .then((res)=>{
      console.log(res)
      if(res.err==0){
        resolve(res)
      }else{
        reject(res)
      }   
    })
    .catch((err)=>{
      reject(err)
    })
  })
}

// 登出

<<<<<<< HEAD
export const UserLogout = async ()=>{
  let url='/hehe/admin/user/logout' 
  let uid=getItem('uid')||''
  let result = await axios.post(url,{uid})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}
=======
// export const UserLogout = async ()=>{
//   let url='/hehe/admin/user/logout' 
//   let uid=getItem('uid')||''
//   let result = await axios.post(url,{uid})
//   if(result.err==0){
//     return result
//   }else{
//     throw result
//   }
// }
>>>>>>> 78b1ae9ac09f9ee9ddcd245cf8d9c004ba8ac853
