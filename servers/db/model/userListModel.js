// 创建与用户表相关的数据模块
const mongoose=require('mongoose')
// 创建schema对象
let userSchema=mongoose.Schema({
    number:{type:Number,required:true},
    name:{type:String,required:true},
    telp:{type:Number,required:true},
    token:{type:String,required:true},
    status:{type:String,required:true},
})
//schema对象和数据库的集合做关联
let userListModel=mongoose.model('userLists',userSchema)
// 模块化抛出
module.exports=userListModel
//schema对象的模块化
