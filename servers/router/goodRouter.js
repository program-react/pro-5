const express = require('express')
const router = express.Router()
const Good = require('../control/goodOrderController')


//查询接口（分页查询  分类查询 关键字查询）
router.get('/getGoods', (req, res) => {
  
  let page = Number(req.query.page)
  let pageSize = Number(req.query.pageSize)
  Good.get(page, pageSize)
    .then((data) => {
      res.send({ err: 0, msg: '查询ok', list: data })
    })
    .catch((err) => {
      res.send({ err: -1, msg: '查询失败' })
    })
})
// 分类查询
router.get('/getGoodsByType', (req, res) => {
  let { foodType } = req.query
  let page = Number(req.query.page) || 1
  let pageSize = Number(req.query.pageSize) || 2
  Good.getByType(foodType, page, pageSize)
    .then((data) => {
      res.send({ err: 0, msg: '查询ok', list: data })
    })
})
// 关键字查询
router.get('/getGoodsByKw', (req, res) => {
  let page = Number(req.query.page) || 1
  let pageSize = Number(req.query.pageSize) || 2
  let kw = req.query.kw
  Good.getByKw(kw, page, pageSize)
    .then((data) => {
      res.send({ err: 0, msg: 'ok', list: data })
    })
})
//删除接口
router.post('/delGood', (req, res) => {
  let { _id } = req.body
  Good.del(_id)
    .then((data) => { res.send({ err: 0, msg: '删除ok' }) })
    .catch((data) => { res.send({ err: -1, msg: '删除失败' }) })
})
//添加数据
router.post('/addGood', (req, res) => {
  let { name,price,weight,num } = req.body
  console.log(req.body)
  Good.add(name,price,weight,num)
    .then((data) => { res.send({ err: 0, msg: '添加ok' }) })
    .catch((data) => { res.send({ err: -1, msg: '添加失败' }) })
})
//修改 
router.post('/updateGood', (req, res) => {
  let { _id, name,price,weight,num } = req.body
  // console.log("node",_id,name,price,weight,num)
  Good.update(_id, name,price,weight,num)
    .then((data) => { res.send({ err: 0, msg: '更新ok' }) })
    .catch((data) => { res.send({ err: -1, msg: '更新失败' }) })
})
router.post('/renameGood',(req,res)=>{
  let { goodId } = req.query._id
  Good.getById(goodId)
    .then((data) => { res.send(data) })
    .catch((data) => { res.send({ err: -1, msg: '获取失败' }) })
})
module.exports = router