import React, { Component, Fragment } from 'react'
import { Button, message,} from 'antd';

import {UpdateGoodType} from '../../../api/goodstype'


class GoodTypeUpdate extends Component{
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
        UpdateGoodType(this.state).then((data)=>{
            message.success('修改成功')
            this.props.refresList()
        })
        console.log(this.state)
    }
    render(){
        // console.log(this)
        let {_id,num,name,effi}=this.state
        return(
            <Fragment>
                id:{_id}
                <br/>
                编号:<br/><input type='tex' value={num} onChange={(e)=>{this.setState({num:e.target.value})}}/><br/>
                商品种类名称:<br/><input typet='text' value={name} onChange={(e)=>{this.setState({name:e.target.value})}}/><br/>
                是否有效:<br/><input type='text' value={effi} onChange={(e)=>{this.setState({effi:e.target.value})}}/><br/>
                
                <Button type='primary' onClick={this.submit}>修改</Button>

            </Fragment>
        )
    }
}

export default GoodTypeUpdate