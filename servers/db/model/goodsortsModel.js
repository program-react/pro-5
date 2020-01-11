const mongoose=require('mongoose')
let goodsortSchema=mongoose.Schema({
    name:{ type:String,required:true },
    user:{ type:String,required:true },
    desc:{ type:String,required:true },
    price:{ type:String,required:true },  //图片的路径  图片的base64数据
    pay:{ type:String,required:true },
    bill:{ type:String,required:true },
    time:{ type:String,required:true },
    mac:{ type:String,required:true },
   
})
let  goodsortModel = mongoose.model('orders',goodsortSchema)
module.exports=goodsortModel