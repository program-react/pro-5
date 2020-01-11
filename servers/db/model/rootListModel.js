// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let userSchema= mongoose.Schema({
    userName:{ type:String,required:true },
    passWord:{ type:String,required:true },
    token:{ type:String,default:null }
})
let  userModel = mongoose.model('rootLists',userSchema)

module.exports = userModel