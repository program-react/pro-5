// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let foodSchema= mongoose.Schema({
    name:{ type:String,required:true },
    url:{ type:String,required:true },
    leve:{ type:String,required:true },
  
   
})
let  foodModel = mongoose.model('authlists',foodSchema)

module.exports = foodModel