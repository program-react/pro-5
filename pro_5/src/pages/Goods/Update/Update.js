import React, { Component,Fragment } from 'react';
import {Table,Pagination,Spin,Button,Popconfirm, message} from 'antd'
import {UpdateGood} from  '../../../api/goods'


class GoodsUpdate extends Component{
  constructor(props){
    super()
    // 在组件创建的时候将接受到的props值解构给state
    this.state={...props.updataInfo}
    // console.log(this)
  }
  componentWillReceiveProps(props){
    console.log('props改变',props)
    // 当props改变用最新的数据修改状态值
    this.setState({...props.updataInfo})
  }
  submit=()=>{
    console.log("页面",this.state)
    UpdateGood(this.state).then((data)=>{
      message.success('修改成功')
      this.props.refreshList()
    })
    // console.log(this.state)
  }
  render(){
    // console.log(this)
    let {_id,name,price,weight,num} = this.state
    return (
      <Fragment>
        id:{_id}
        <br/>
        名称:<input type='text' value={name} onChange={(e)=>{this.setState({name:e.target.value}) }}/><br/>
        价格:<input type='text' value={price} onChange={(e)=>{this.setState({price:e.target.value}) }}/><br/>
        重量:<input type='text' value={weight} onChange={(e)=>{this.setState({weight:e.target.value}) }}/><br/>
        数量:<input type='text' value={num} onChange={(e)=>{this.setState({num:e.target.value}) }}/><br/>

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
