import React, { Component,Fragment } from 'react';
import {Table,Pagination,Spin,Button,Popconfirm, message,Drawer} from 'antd'
import {GetAuth} from  '../../../api/root'

const pageSize=3
class AuthList extends Component{
  constructor(){
    super()
    this.columns=[
      {
        title:'id',
        dataIndex:'_id',
        width:80,
        ellipsis: true,
        // fixed:'left'
      },
      {
        title:'权限名称',
        dataIndex:'name',
        width:300,
        // fixed:'left'
      },
      {
        title:'路径',
        dataIndex:'url',
        width:300
      },
      
      {
        title:'权限等级',
        dataIndex:'leve',
        // fixed:'right',
        width:80,
        
      }
    ]
    this.state={
      drawerShow:false,
      spinning:false,
      nowPage:1, //当前页数
      allCount:0, // 总数据条数
      dataSource:[],
      updataInfo:{},
    }
  }
  componentDidMount(){
      this.getTableData(1)
  }
  
  getTableData(nowPage=1){
    // 根据页数获取网络数据
    this.setState({spinning:true})
    GetAuth(nowPage,pageSize)
    .then((res)=>{
      console.log(res)
      this.setState({dataSource:res.list.auths,allCount:res.list.allCount,spinning:false})
    })
  }
  render(){
    let {dataSource,allCount,spinning,drawerShow,updataInfo}=this.state
    return (
      
      <div >
        <Spin spinning={spinning}>
         <Table columns={this.columns} 
          dataSource={dataSource}
          rowKey='_id'
          pagination={false}
          scroll={{y:280,x:500}}
          ></Table>
        </Spin>
        <Pagination 
          simple  
          total={allCount} 
          pageSize={pageSize} 
          onChange={(page)=>{
            console.log('目标页数',page)
            this.getTableData(page)
          }}
        />
      </div>
    );
  }
}

export default AuthList;
