const express=require('express')
const router=express.Router()
const Good=require('../control/goodController')

//显示接口 ( 分页查询  分类查询  关键字查询 )
router.get('/getOrder',(req,res)=>{
    let page=Number(req.query.page)||1
    let pageSize=Number(req.query.pageSize)||3
    Good.get(page,pageSize)
    .then((data)=>{
        res.send({err:0,msg:'查询成功',list:data})
    })
    .catch((err)=>{
        res.send({err:-1,msg:'查询失败'})
    })
})

//删除接口
router.post('/delOrder',(req,res)=>{
    let {foodId}=req.body
    Good.del(foodId)
    .then((data)=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{
        // console.log(err)
        res.send({err:-1,msg:'删除失败'})})
})
//添加数据
router.post('/addOrder',(req,res)=>{
    let {name,user,desc,price,pay,bill,time,mac}=req.body.name
    // console.log(name)
    Good.add(name,user,desc,price,pay,bill,time,mac)
    .then((data)=>{
        // console.log(name,user,desc,price,pay,bill,time,mac)
        res.send({err:0,msg:'添加成功'})})
    .catch((err)=>{res.send({err:-1,msg:'添加失败'})})
})
//修改
router.post('/updateOrder',(req,res)=>{
    let {_id,name,user,desc,price,pay,bill,time,mac}=req.body.foodId
    console.log(_id,name,user,desc,price,pay,bill,time,mac)
    Good.update(_id,name,user,desc,price,pay,bill,time,mac)
    .then((data)=>{res.send({err:0,msg:'修改成功'})})
    .catch((err)=>{res.send({err:-1,msg:'修改失败'}),console.log(err)})
})

//关键字查询
router.get('/getFoodsByKw',(req,res)=>{
    
    let page=Number(req.query.page)||1
    let pageSize=Number(req.query.page)||2
    let kw=req.query.kw
    Good.getByKw(kw,page,pageSize)
    .then((data)=>{
        console.log(kw,page,pageSize)
        res.send({err: 0, msg: '查询成功', info: {list: data}})
    })
    .catch((err)=>{
        res.send({err: -1, msg: '查询失败', info: err})
    })
})
module.exports=router