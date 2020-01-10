import axios from '../utils/axios'
// 登录
export const UserLogin=(us,ps)=>{
  return new Promise((resolve,reject)=>{
    let url='/hehe/admin/user/login'
    axios.post(url,{us,ps})
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
