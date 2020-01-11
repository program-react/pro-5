// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let goodSchema= mongoose.Schema({
    name:{ type:String,required:true },
    price:{ type:String,required:true },
    weight:{ type:String,required:true },
    num:{ type:Number,required:true },
   
})
let  goodModel = mongoose.model('goods',goodSchema)

module.exports = goodModel