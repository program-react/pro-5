// 创建和用户表相关的数据模型

const mongoose = require('mongoose')
let foodSchema= mongoose.Schema({
    name:{ type:String,required:true },
    desc:{ type:String,required:true },
  
   
})
let  foodModel = mongoose.model('rolelists',foodSchema)

module.exports = foodModel