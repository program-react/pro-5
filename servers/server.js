const express = require('express')
const path = require('path')
const db = require('./db/connect')
// const Jwt = require('./utils/jwt')
// const User = require('./db/model/userModel')
// 启动服务器的同时连接数据库
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// 静态资源目录
app.use('/',express.static(path.join(__dirname,'./www')))
// 路由分发

const UserRouter = require('./router/userRouter')
const GoodsortRouter=require('./router/goodsortRouter')
const GoodsortsRouter=require('./router/goodsortsRouter')
const RootRouter = require('./router/rootRouter')
const GoodRouter = require('./router/goodRouter')
const UserListRouter = require('./router/UserListRouter')
app.use('/admin/user',UserRouter)
app.use('/admin/goodsorts',GoodsortRouter)
app.use('/admin/orders', GoodsortsRouter)
app.use('/admin/userlist', UserListRouter)
app.use('/admin/good',GoodRouter)
app.use('/admin/root',RootRouter)


app.listen(3000,()=>{
  console.log('服务器启动')
})