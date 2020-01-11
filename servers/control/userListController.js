const UserListModel= require('../db/model/userListModel')
  async function get(page,pageSize){
    // 获取总的食品数据数组
    let allFoods =await UserListModel.find()
    // 获取视食品数据 总数量
    let allCount =allFoods.length 
    let data = await UserListModel.find().skip((page-1)*pageSize).limit(pageSize)
    return  {data,allCount}
  }
// }
// 删除
async function del(Id){
    let result = await  UserListModel.deleteOne({_id:Id})
    return result
  }
//   修改
async function  update(foodId,number,name,telp,token,status){
    let result  = await UserListModel.updateOne({_id:foodId},{number,name,telp,token,status})
     console.log(result)
     return  result
  }
  async function  add(number,name,telp,token,status){
    // async 函数内部只要不出错 肯定走的是then 如果出错走的是catch
     let result =await  UserListModel.insertMany({number,name,telp,token,status})
    //  console.log(result)
  }
module.exports={get,del,update,add}