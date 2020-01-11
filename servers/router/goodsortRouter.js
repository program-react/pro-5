const express=require('express')
const router=express.Router()
const Good=require('../control/goodTypeController')

//查询接口 ( 分页查询  分类查询  关键字查询 )
router.get('/getGoods',(req,res)=>{
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
router.post('/delGood',(req,res)=>{
    let {id}=req.body
    // console.log('你好',req.body)
    // console.log('再见',req.body.id)
    Good.del(id)
    .then((data)=>{res.send({err:0,msg:'删除成功'})})
    .catch((err)=>{res.send({err:-1,msg:'删除失败'})})
})
//添加数据
router.post('/addGood',(req,res)=>{
    let {num,name,effi}=req.body
    Good.add(num,name,effi)
    .then((data)=>{res.send({err:0,msg:'添加成功'})})
    .catch((err)=>{res.send({err:-1,msg:'添加失败'})})
})

//修改
router.post('/updateGood',(req,res)=>{
    let {num,name,effi,_id}=req.body.num
    // console.log('你好',req.body)
    // console.log('再见',num,name,effi,_id)
    Good.update(_id,num,name,effi)
    .then((data)=>{res.send({err:0,msg:'修改成功'})})
    .catch((err)=>{res.send({err:-1,msg:'修改失败'}),console.log(err)})
})
module.exports=router