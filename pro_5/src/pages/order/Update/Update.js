import React, { Component, Fragment } from 'react'
import { Input, Button, Icon, Table, Pagination, Spin, Popconfirm, message, Modal, Drawer } from 'antd';
import {UpdateOrder} from '../../../api/order'


class GoodsUpdate extends Component{
    constructor(props){
        super()
        this.state={...props.updataInfo}
        // console.log(this)
    }
    componentWillReceiveProps(props){
        // console.log('props改变',props)
        
        this.setState({...props.updataInfo})
    }
    submit=()=>{
        UpdateOrder(this.state).then((data)=>{
            message.success('修改成功')
            this.props.refresList()
        })
        console.log(this.state)
    }
    render(){
        // console.log(this)
        let {_id,name, user, desc, price, pay, bill, time, mac}=this.state
        return(
            <Fragment>
                id:{_id}
                <br/>
                订单名称：<input type='text' value={name} onChange={(e)=>{this.setState({name:e.target.value})}}/><br/>
                用户编号：<input type='text' value={user} onChange={(e)=>{this.setState({user:e.target.value})}}/><br/>
                订单编号：<input type='text' value={desc} onChange={(e)=>{this.setState({desc:e.target.value})}}/><br/>
                订单价格：<input type='text' value={price} onChange={(e)=>{this.setState({price:e.target.value})}}/><br/>
                是否支付：<input type='text' value={pay} onChange={(e)=>{this.setState({pay:e.target.value})}}/><br/>
                是否发货：<input type='text' value={bill} onChange={(e)=>{this.setState({bill:e.target.value})}}/><br/>
                创建时间：<input type='text' value={time} onChange={(e)=>{this.setState({time:e.target.value})}}/><br/>
                联系客服：<input type='text' value={mac} onChange={(e)=>{this.setState({mac:e.target.value})}}/><br/>
                <Button type='primary' onClick={this.submit}>修改</Button>

            </Fragment>
        )
    }
}

export default GoodsUpdate