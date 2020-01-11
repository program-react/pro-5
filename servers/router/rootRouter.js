const express = require('express')
const router = express.Router()
const Root = require('../control/rootController')

/**
 * @api {get} /admin/Root/getRoot 查询
 * @apiName getRoot
 * @apiGroup Root
 *
 * @apiParam {Number} us page
 * @apiParam {Number} ps pageSize.
 *
 * @apiSuccess {String} err Firstname of the Root.
 * @apiSuccess {String} msg  Lastname of the Root.
 */
//查询接口（分页查询  分类查询 关键字查询）
router.post('/getrole',(req,res)=>{
  let page=req.body.page
  let pageSize=req.body.pageSize
  // console.log(page,pageSize);
  Root.getrole(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询失败'})})
})

router.post('/getauth',(req,res)=>{
  let page=req.body.page
  let pageSize=req.body.pageSize
  // console.log(page,pageSize);
  Root.getauth(page,pageSize)
  .then((data)=>{
    res.send({err:0,msg:'查询ok',list:data})
  })
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'查询失败'})})
})
// 分类查询
/**
 * @api {get} /admin/Root/getRootByType 分类查询
 * @apiName getRootByType
 * @apiGroup Root
 *
 * @apiParam {Number}  page  页
 * @apiParam {Number}  pageSize 页数. 
 * @apiParam {String}  RootType 食物类型. 
 *
 * @apiSuccess {String} err Firstname of the Root.
 * @apiSuccess {String} msg  Lastname of the Root.
 */ 
// router.post('/getRootByType',(req,res)=>{
//   let {RootType} = req.body 
//   let page=Number(req.body.page)||1
//   let pageSize = Number(req.body.pageSize)||2
//   Root.getByType(RootType,page,pageSize)
//   .then((data)=>{
//     res.send({err:0,msg:'查询ok',list:data})
//   })
// })

/**
 * @api {get} /admin/Root/getRootByKw 关键字查询
 * @apiName getRootByKw
 * @apiGroup Root
 *
 * @apiParam {Number}  page  页
 * @apiParam {Number}  pageSize 页数. 
 * @apiParam {String}  kw 关键字.
 *
 * @apiSuccess {String} err Firstname of the Root.
 * @apiSuccess {String} msg  Lastname of the Root.
 */
// 关键字查询
// router.get('/getRootByKw',(req,res)=>{
//   let page=Number(req.query.page)||1
//   let pageSize = Number(req.query.pageSize)||2
//   let kw = req.query.kw 
//   Root.getByKw(kw,page,pageSize)
//   .then((data)=>{
//     res.send({err:0,msg:'ok',list:data})
//   })
// })

/**
 * @api {get} /admin/Root/delRoot 删除
 * @apiName delRoot
 * @apiGroup Root
 *
 * @apiParam {String}  RootId 食物id. 
 *
 * @apiSuccess {String} err Firstname of the Root.
 * @apiSuccess {String} msg  Lastname of the Root.
 */
//删除接口
router.post('/delrole',(req,res)=>{
  let  {RootId}=req.body
  Root.del(RootId)
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    res.send({err:-1,msg:'del nook'})
  })
})

/**
 * @api {post} /admin/Root/addRoot 添加食品
 * @apiName addRoot
 * @apiGroup Root
 *
 * @apiParam {String}  name 食物名称. 
 * @apiParam {Number}  price 食物价格. 
 * @apiParam {String}  RootType 食物类型. 
 * @apiParam {String}  desc 食物描述. 
 * @apiParam {String}  img 食物图片. 
 *
 * @apiSuccess {String} err Firstname of the Root.
 * @apiSuccess {String} msg  Lastname of the Root.
 */
//添加数据
router.post('/addrole',(req,res)=>{
  let {name,desc} = req.body 
  Root.add(name,desc)
  .then((data)=>{res.send({err:0,msg:'添加ok'})})
  .catch((err)=>{
    console.log(err)
    res.send({err:-1,msg:'添加失败'})})
})
//修改 
/**
 * @api {get} /admin/Root/updateRoot 修改
 * @apiName updateRoot
 * @apiGroup Root
 *
 * @apiParam {String}  name 食物名称. 
 * @apiParam {Number}  price 食物价格. 
 * @apiParam {String}  RootType 食物类型. 
 * @apiParam {String}  desc 食物描述. 
 * @apiParam {String}  RootId 食物id. 
 * @apiParam {String}  img 食物图片. 
 *
 * @apiSuccess {String} err Firstname of the Root.
 * @apiSuccess {String} msg  Lastname of the Root.
 */
router.post('/updaterole',(req,res)=>{
  let {RootId,name,desc} = req.body 
  Root.update(RootId,name,desc)
  .then((data)=>{res.send({err:0,msg:'修改ok'})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})
module.exports = router