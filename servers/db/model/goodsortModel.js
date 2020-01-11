const mongoose=require('mongoose')
let goodsortSchema=mongoose.Schema({
    num:{type:String,required:true},
    name:{type:String,required:true},
    effi:{type:String,required:true},
})
let  goodsortModel = mongoose.model('goodsort',goodsortSchema)
module.exports=goodsortModel