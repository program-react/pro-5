
const nodemailer = require("nodemailer");

//  创建邮件的发送对象
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '352186537@qq.com', // 邮箱账号
      pass: 'xkdkiwrxxbpnbhhb' // 邮箱smtp验证码
    }
  });
 let img='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574676855352&di=af619ea971a2d91d18a36b2026faf5bd&imgtype=0&src=http%3A%2F%2Fphotocdn.sohu.com%2F20120614%2FImg345602334.jpg'

  
  module.exports={
    sendMail(mail,code){
       //创建邮件内容
        let info={
          from: '"Fred Foo 👻" <352186537@qq.com>', // sender address
          to: mail, // list of receivers
          subject: "1923🙃哒 ✔", // Subject line
          // text: "Hello world?", // plain text body
          html: `<div>
                    <h3>欢迎注册你的验证码是:${code}</h3>
                    
                    <img src='${img}'>
                </div>` // html body
        }
       return new Promise((resolve,reject)=>{
        transporter.sendMail(info,(err,data)=>{
          console.log(err)
          if(err){
            reject({err:-3,msg:'邮件发送失败'})
          }else{
            resolve({err:0,msg:"发送ok"})
          }
        })
       })
      
    }
  }
 
