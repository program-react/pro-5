// import axios from '../utils/axios'
import axios from 'axios'

export const  getData = ()=>{
    console.log('获取数据')
    return new Promise((resolve,reject)=>{
      let url='/hehe/admin/userlist/getData' 
      axios.get(url).then((res)=>{resolve(res)})
      .catch((err)=>{reject(err)})
    })
  }
  export const  DelData = async (Id)=>{
    let url='/hehe/admin/userlist/delData'  
    let result = await axios.post(url,{Id})
    if(result.err===0){
      console.log(result)
      return result
    }else{
      throw result
    }
  }


  export const AddData = async ({number,name,telp,token,status})=>{
    let url='/hehe/admin/userlist/add' 
    let result = await axios.post(url,{number,name,telp,token,status})
    console.log({number,name,telp,token,status})
    if(result.err==0){
      console.log(result)
      return result
    }else{
      throw result
    }
  }
  export const UpdateGood = async ({_id,number,name,telp,token,status})=>{
    let url='/hehe/admin/userlist/updateFood' 
    // let foodId=_id
    let result = await axios.post(url,{_id,number,name,telp,token,status})
    if(result.err==0){
      console.log(result)
      return result
    }else{
      throw result
    }
  }