//存放和视频 数据操作的相关信息 数据库的操作
const GoodModel=require('../db/model/goodsortsModel')
//添加
async function add(name,user,desc,price,pay,bill,time,mac) { 
    //async函数内部只要不出错 坑定走then 如果出错走catch
    let result=await GoodModel.insertMany({name,user,desc,price,pay,bill,time,mac})
    // console.log(result)
}
//删除
async function  del(foodId){
    let Delete=await GoodModel.deleteOne({_id:foodId})
        // console.log(Delete)
        return Delete
    
}
//总数
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
async function update(foodId,name,user,desc,price,pay,bill,time,mac) { 
    let result=await GoodModel.updateOne({_id:foodId},{name,user,desc,price,pay,bill,time,mac})
   console.log(result)
   return result
}

//查询
async function getByKw(kw,page,pageSize){
    let regex=new RegExp(kw)
    let allFoods=await GoodModel.find({name:{$regex:regex}})
    let allCount=allFoods.length
    let orders=await GoodModel.find({name:{$regex:regex}}).skip((page-1)*pageSize).limit(pageSize)
    return {orders,allCount}
}

module.exports={add,get,fenye,del,update,getByKw}

