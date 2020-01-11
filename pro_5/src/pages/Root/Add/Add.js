import React, { Component,Fragment } from 'react';
import {Table,Pagination,Spin,Button,Popconfirm, message} from 'antd'
import {AddRole} from  '../../../api/root'


class RolesAdd extends Component{
  constructor(){
    super()
    this.state={
      name:'江南',
      desc:'超好吃'
    }
  }
  submit=()=>{
    // if(!this.state.img) return message.info('请先上传图片')
    AddRole(this.state)
    .then(()=>{message.success('添加ok',1)})
    .catch((err)=>{ message.error('添加失败',1)})
  }
 
  render(){
    let {name,desc} = this.state
    return (
      <div>
         name: <input type='text' value={name} 
          onChange={(e)=>{
            this.setState({name:e.target.value})
          }}
          />
          <br/>
          
          desc: <input type='text' value={desc} 
          onChange={(e)=>{
            this.setState({desc:e.target.value})
          }}
          />
          <br/>
          

          <Button type='primary' onClick={this.submit}>提交</Button>
      </div>
    );
  }
}
/*
 图片上传 
   用formdata上传图片 数据库存的是图片路径 参考 node图片上传
     a.调用接口上传图片  返回图片在服务器的相对路径  
     b.调用添加接口 将图片路径与其他数据保存的数据库  
   base64 数据库存的是图片的base64数据
     a.调用添加接口   将图片变成base64后就相当于一个字符串
  
*/
export default RolesAdd;
