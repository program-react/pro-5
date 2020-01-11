//存放和视频 数据操作的相关信息 数据库的操作
const GoodModel=require('../db/model/goodsortModel')
async function add(num,name,effi) { 
    //async函数内部只要不出错 坑定走then 如果出错走catch
    let result=await GoodModel.insertMany({num,name,effi})
    // console.log(result)
}
async function del(id) {
    let result=await GoodModel.deleteOne({_id:id})
    return result
 }
async function get(page,pageSize) { 
    //获取总的食品数据数组
    let allFoods=await GoodModel.find()
    //获取食品数据总数量
    let allCount=allFoods.length
    let goods=await GoodModel.find().skip((page-1)*pageSize).limit(pageSize)
    return {goods,allCount}
 }

 //分页
async function fenye(page,pageSize) { 
    let allFoods=await GoodModel.find()
    let allCount=allFoods.length
    let goods=await GoodModel.find().skip((page-1)*pageSize).limit(pageSize)
    return {goods,allCount}
}


//修改数据
async function update(_id,num,name,effi) { 
    let result=await GoodModel.updateOne({_id:_id},{num,name,effi})
//    console.log(result)
   return result
}

module.exports={add,get,fenye,del,update}

