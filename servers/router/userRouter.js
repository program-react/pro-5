const express=require('express')
const router=express.Router()
const User=require('../db/model/userModel')

const Jwt = require('../utils/jwt')



/**
 * @api {get} /admin/user/reg 用户注册
 * @apiName reg
 * @apiGroup User
 * 
 * @apiParam {String} us 用户账号
 * @apiParam {String} us 用户密码
 * @apiParam {Number} code 验证码
 * 
 * @apiSuccess {String} err Firstname of the User
 * @apiSuccess {String} msg  Lastname of the User
 */ 




router.post('/reg',(req,res)=>{
    let {us,ps}=req.body
    console.log(us,ps)
    
    User.insertMany({us,ps})
    .then((data)=>{
        res.send({err:0,msg:'注册成功'})
    })
})

/**
 * @api {post} /admin/user/login 用户登录
 * @apiName login
 * @apiGroup User
 * 
 * @apiParam {String} us 用户账号
 * @apiParam {String} us 用户密码
 * 
 * @apiSuccess {String} err Firstname of the User
 * @apiSuccess {String} msg  Lastname of the User
 */ 
// router.post('/login',(req,res)=>{
//     let{us,ps}=req.body
//     let token=null
//     User.find({userNam,ps})
//     .then((data)=>{
//         if(data.length>=1){
//             let userInfo={_id:data[0]._id,ot:1000*60*60*24*7}
//            token=Jwt.createToken(userInfo)
//            return User.updateOne({_id:data[0]._id},{token:token})
//             // res.send({err:0,msg:'登录成功'})
//         }else{
//             res.send({err:-1,msg:'登录失败'})
//         }
//     })
//     .then((data)=>{
//         //User.updateOne 成功之后的调用
//         res.send({err:0,msg:'登录成功',token:token})
//     })
//     .catch((err)=>{
//         res.send({err:-1,msg:'登录失败'})
//     })
// })

router.post('/login',(req,res)=>{
    let {us,ps}=req.body 
    console.log(req.body)
    User.find({us,ps})
    .then((data)=>{
       if(data.length>=1){
         res.send({err:0,msg:'登录ok'})
       }else{
         res.send({err:-1,msg:'登录失败'})
       }
    })
  })





/*获取验证码
1.接受用户的参数，要发送验证码的手机号或邮箱
2.产生一个随机验证码
3.将手机号/邮箱 与验证码进行保存
4.将验证码发送给用户
*/ 

module.exports=router