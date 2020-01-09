import React, { Component,Fragment } from 'react';
import {Table,Pagination,Spin,Button,Popconfirm, message} from 'antd'
import {UpdateGood} from  '../../../api/date'


class GoodsUpdate extends Component{
  constructor(props){
    super()
    // 在组件创建的时候将接受到的props值解构给state
    this.state={...props.updataInfo}
    console.log(this)
  }
  componentWillReceiveProps(props){
    console.log('props改变',props)
    // 当props改变用最新的数据修改状态值
    this.setState({...props.updataInfo})
  }
  submit=()=>{
    let {_id,number,name,telp,token,status} = this.state
    console.log({_id,number,name,telp,token,status})
    UpdateGood({_id,number,name,telp,token,status}).then((data)=>{
      message.success('修改成功')
      this.props.refreshList()
    })
    
  }
  render(){
    console.log(this)
    let {_id,number,name,telp,token,status} = this.state
    return (
      <Fragment>
        id:{_id}
        <br/>
        number:<input type='text' value={number} onChange={(e)=>{this.setState({number:e.target.value}) }}/><br/>
        name:<input type='text' value={name} onChange={(e)=>{this.setState({name:e.target.value}) }}/><br/>
        telp:<input type='text' value={telp} onChange={(e)=>{this.setState({telp:e.target.value}) }}/><br/>
       
        token:<input type='text' value={token} onChange={(e)=>{this.setState({token:e.target.value}) }}/><br/>
        status:<input type='text' value={status} onChange={(e)=>{this.setState({status:e.target.value}) }}/><br/>

        <Button type='primary' onClick={this.submit}>修改</Button>
        
      </Fragment>
    );
  }
}
/*
1.显示默认数据
2.用户修改
3.调用修改接口
4.关闭抽屉 刷新list页面
*/ 

export default GoodsUpdate;
