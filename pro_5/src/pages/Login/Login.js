import React, { Component } from 'react';
import styles from './login.module.less'
import  {UserLogin} from  '../../api/user'
import {Card,Form,Input,Icon,Checkbox,Button,message} from 'antd'
class Login  extends Component{
login=()=>{
  let {getFieldsValue,validateFields}=this.props.form
  validateFields((err,data)=>{
   console.log('1',err,data)
   //err 前端的字段验证 true 不通过 null 没问题
   if(err) return  message.error('输入有误,请重试!',1)
   //字段验证ok 继续向下
   let {us,ps} =data
   UserLogin(us,ps)
   .then((res)=>{
     console.log('then',res)
     message.success('登录成功，1s后跳转首页',1,()=>{
       this.props.history.replace('/admin/home')
     })
   })
   .catch((err)=>{
     message.error('登录失败请重试',1)
   })
  })
  let result =getFieldsValue()
  console.log(result)
}
render() {
  let {getFieldDecorator} = this.props.form
  return (
    <div className={styles.login}>
      <div className={styles.dd}>
      <video  width="100%" height="90%" id="video" autoPlay={true} loop={true} x-webkit-airplay={true} airplay='allow' webkit-playsInline={true} playsInline={true} src="https://www.tencent.com/video/index-video.mp4" ></video>
      </div>
        <div className={styles.txt}>
          <p  className={styles.connect}><i>连接你我</i></p >
          <p  className={styles.future}><i>共生未来</i></p >
        </div>
      <Card  title='用户登录' className={styles['login-card']}>
        <Form.Item>   
          {getFieldDecorator('us',{
            rules: [{ required: true, message: '用户名不能为空!' },
                    { min:3, message: '用户名不能小于3位字符!' },
                    { max:9, message: '用户名不能大于9位字符!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="text"
              placeholder="Username"
            />
          )}  
        </Form.Item>
        <Form.Item>   
          {getFieldDecorator('ps',{
            rules:[{required:true,message:'用户密码不能为空'}]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}  
        </Form.Item>
            <Form.Item>
              <Checkbox>Remember me</Checkbox>
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <hr/>
              <Button type="primary" onClick={this.login} style={{marginLeft:110}}>
                Log in
              </Button>
              
            </Form.Item>
        </Card> 
    </div>
  );
}
}
// Form.create 是一个函数 返回一个高阶组件 
// 将antd表单相关的api挂载到 props的form里
export default Form.create()(Login) ;
