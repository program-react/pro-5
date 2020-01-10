import axios from '../utils/axios'
import {getItem} from '../utils/webStorage'
// 获取商品列表

export const GetRole = async (page,pageSize)=>{
  let url='/hehe/admin/root/getrole' 
  let result = await axios.post(url,{page,pageSize})
  console.log(page,pageSize)
  if(result.err==0){
    return result
  }else{
    throw result
  }
}
export const GetAuth = async (page,pageSize)=>{
  let url='/hehe/admin/root/getauth' 
  let result = await axios.post(url,{page,pageSize})
  console.log(page,pageSize)
  if(result.err==0){
    return result
  }else{
    throw result
  }
}
//根据id删除数据
// 復zんíゞ这句话 ₴TaV31YzbIr6₴ 然后咑閞【淘宀┡ēAPP】復zんíゞ这句话 ₴TaV31YzbIr6₴ 然后咑閞【淘宀┡ēAPP】
export const DelRole = async (roleId)=>{
  let url='/hehe/admin/root/delrole' 
  let result = await axios.post(url,{roleId})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}
//添加
export const AddRole = async ({name,desc})=>{
  let url='/hehe/admin/root/addrole' 

  let result = await axios.post(url,{name,desc})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}

//修改数据 
export const UpdateRole = async ({_id,name,desc})=>{
  let url='/hehe/admin/root/updaterole' 
  let roleId=_id
  let result = await axios.post(url,{roleId,name,desc})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}