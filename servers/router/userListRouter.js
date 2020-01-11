
const express=require('express')
const router=express.Router()
const UserList = require('../control/userListController')


    /**  @api {get} /admin/user/reg 用户注册
 * @apiName reg
  * @apiGroup User
  *
  * @apiParam {String} us 用户账号
  * @apiParam {String} ps 用户密码.
  * @apiParam {Number} code 验证码.
  *
  * @apiSuccess {String} err Firstname of the User.
* @apiSuccess {String} msg  Lastname of the User.
* 注册的时候将数据传到数据库里数据有用户名，密码，验证码
*/
// router.get('/add',(req,res)=>{
//     console.log(res)
//     let{number,name,telp,token,status}=req.query
//     // us即邮箱
//     console.log(number,name,telp,token,status)
//     // 插入信息
//     User.insertMany({number,name,telp,token,status})
//     .then((data)=>{
//         console.log(data)
//         res.send({err:0,msg:'注册ok'})
//     })
//     .catch((err)=>{
//             console.log('err',err)
//         })

// })
router.post('/add', (req, res) => {
  let { number,name,telp,token,status } = req.body
  console.log(req.body)
  UserList.add(number,name,telp,token,status)
    .then((data) => { res.send({ err: 0, msg: '添加ok' }) })
    .catch((data) => { res.send({ err: -1, msg: '添加失败' }) })
})
/**@api {post} /admin/user/login 用户登录
  * @apiName loginapu
  * @apiGroup User
  *
  * @apiParam {String} us 用户账号
  * @apiParam {String} ps 用户密码.
  *
  * @apiSuccess {String} err Firstname of the User.
   @apiSuccess {String} msg  Lastname of the User.
  */
//   登陆的时候


// 获取数据
router.get('/getData',(req,res)=>{
    let page=Number(req.query.page)
    let pageSize=Number(req.query.pageSize)
    UserList.get(page,pageSize)
    .then((data)=>{
      res.send({err:0,msg:'查询ok',list:data})
    })
    .catch((err)=>{
      console.log(err)
      res.send({err:-1,msg:'查询失败'})})
  })
  // //删除接口
router.post('/delData',(req,res)=>{
  let  {Id}=req.body
  console.log(req.body)
  UserList.del(Id)
  .then((data)=>{
    res.send({err:0,msg:'del ok'})
  })
  .catch((err)=>{ 
    console.log(err)
    res.send({err:-1,msg:'del no ok'})
  })
})
// 修改
router.post('/updateFood',(req,res)=>{
  let {_id,number,name,telp,token,status} = req.body 
  console.log(_id,number,name,telp,token,status)
  UserList.update(_id,number,name,telp,token,status)
  .then((data)=>{res.send({err:0,msg:'修改ok'})})
  .catch((data)=>{res.send({err:-1,msg:'修改失败'})})
})

// 获取验证码*获取验证码
// 1.接受用户的参数 要发送验证码的邮箱或者手机号 
// 2.产生一个随机验证码
// 3.将手机号邮箱 与验证码进行保存
// 4.将验证码发送给用户 
// router.get('/code',(req,res)=>{
//     let{mail}=req.query
//     let code=parseInt(Math.random()*9999)
//     Mail.sendMail(mail,code)
//     .then((data)=>{
//         //验证码发送成功之后在保存
//         codes[code]=code
//         // console.log(code)
//         res.send(data)
//     })
//     .catch((err)=>{
//         res.send(err)
//        })
// })
module.exports = router