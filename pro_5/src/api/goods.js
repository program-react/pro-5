import axios from '../utils/axios'
// import {getItem} from '../utils/webStorage'
// 获取商品列表

export const GetGoods = async (page,pageSize)=>{
  let url='/hehe/admin/good/getGoods' 
  let result = await axios.get(url,{page,pageSize})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}
//根据id删除数据
export const DelGood = async (_id)=>{
  let url='/hehe/admin/good/delGood' 
  let result = await axios.post(url,{_id})
  if(result.err===0){
    return result
  }else{
    throw result
  }
}
//添加
export const AddGood = async ({name,price,weight,num})=>{
  let url='/hehe/admin/good/addGood'
  console.log({name,price,weight,num}) 
  let result = await axios.post(url,{name,price,weight,num})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}

//修改数据 
export const UpdateGood = async ({_id,name,price,weight,num})=>{
  let url='/hehe/admin/good/updateGood' 
  // let goodId=_id
  console.log("接口",{_id,name,price,weight,num}) 
  let result = await axios.post(url,{_id,name,price,weight,num})
  if(result.err==0){
    return result
  }else{
    throw result
  }
}