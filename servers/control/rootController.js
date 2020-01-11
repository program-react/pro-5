// 存放和食品 数据操作的相关信息 数据库的操作
const roleModel= require('../db/model/roleModel')
const authModel= require('../db/model/authModel')
async function  add(name,desc){
  // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
   let result =await roleModel.insertMany({name,desc})
   console.log(result)
}
async function getrole(page,pageSize){
  // 获取总的食品数据数组
  console.log(page,pageSize)
  let allRole =await roleModel.find()
  // 获取视食品数据 总数量
  let allCount =allRole.length 
  let roles = await roleModel.find().skip((page-1)*pageSize).limit(pageSize)
  return  {roles,allCount}
}

async function getauth(page,pageSize){
  // 获取总的食品数据数组
  console.log(page,pageSize)
  let allAuth =await authModel.find()
  // 获取视食品数据 总数量
  let allCount =allAuth.length 
  let auths = await authModel.find().skip((page-1)*pageSize).limit(pageSize)
  return  {auths,allCount}
}

// 分类查询+分页
// async function getByType(roleType,page,pageSize){
//   let allRole=await roleModel.find({roleType})
//   let allCount=allRole.length 
//   let  roles=await roleModel.find({roleType}).skip((page-1)*pageSize).limit(pageSize)
//   return {roles,allCount}
// }
// 关键字查询+分页
// async function getByKw(kw,page,pageSize){
//  let regex=new RegExp(kw) //查询关键字的正则 
//  let  allRole=await roleModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]})
//  let  allCount = allRole.length
//  let  roles=await roleModel.find({$or:[{name:{$regex:regex}},{desc:{$regex:regex}}]}).skip((page-1)*pageSize).limit(pageSize)
//  return {roles,allCount}
// }

// 删除
async function del(roleId){
  let result = await  roleModel.deleteOne({_id:roleId})
  return result
}

// 修改
async function  update(roleId,name,desc){
  
  let result  = await roleModel.updateOne({_id:roleId},{name,desc})
   console.log(result)
   return  result
}
module.exports={add,getrole,getauth,del,update}