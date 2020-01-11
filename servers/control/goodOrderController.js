// 存放和食品 数据操作的相关信息 数据库的操作
const GoodModel= require('../db/model/goodModel')
async function  add(name,price,weight,num){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
   let result =await GoodModel.insertMany({name,price,weight,num})
   console.log(result)
}
async function del(goodId){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
   let result =await GoodModel.deleteOne({_id:goodId})
   return result
}
async function update(goodId,name,price,weight,num){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
   let result =await GoodModel.updateOne({_id:goodId},{name,price,weight,num})
   console.log(result)
   return result;
}
async function get(page,pageSize){
  // 获取总的食品数据数组
  let allGoods =await GoodModel.find()
  // 获取视食品数据 总数量
  let allCount =allGoods.length 
  let goods = await GoodModel.find().skip((page-1)*pageSize).limit(pageSize)
  return  {goods,allCount}
}

async function getById(goodId){
  // 获取总的食品数据数组
  let goodData =await GoodModel.find({goodId})
  // 获取视食品数据 总数量
  return  {goodData}
}
// 分类查询+分页
async function getByType(goodType,page,pageSize){
  let allGoods=await GoodModel.find({goodType})
  let allCount=allGoods.length 
  let  goods=await GoodModel.find({goodType}).skip((page-1)*pageSize).limit(pageSize)
  return {goods,allCount}
}
// 关键字查询+分页
async function getByKw(kw,page,pageSize){
 let regex=new RegExp(kw) //查询关键字的正则 
 let  allGoods=await GoodModel.find({$or:[{name:{$regex:regex}}]})
 let  allCount = allGoods.length
 let  goods=await GoodModel.find({$or:[{name:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
 return {goods,allCount}
}
module.exports={add,get,getByType,getByKw,del,update,getById}