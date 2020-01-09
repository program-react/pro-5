import React, { Component, Fragment } from 'react'
import {Table,Pagination,Spin,Button,Popconfirm, message,Drawer} from 'antd'
import { getData,DelData} from '../../api/date'
import DateRange from '../date/date'
import {AddData} from '../../api/date'
import GoodsUpdate from './updata/updata'

const pageSize=3
class Data extends Component {
  constructor(){
    super()
    this.columns=[
      {
        title:'学号',
        dataIndex:'_id',
        width:100,
        ellipsis: true,
        // fixed:'left'
      },
      {
        title:'姓名',
        dataIndex:'name',
        width:100,
        // fixed:'left'
      },
      {
        title:'电话',
        dataIndex:'telp',
        width:200
      },
      {
        title:'权限',
        dataIndex:'token',
        width:100
      },
      {
        title:'状态',
        dataIndex:'status',
        width:100,
      },
   
      {
        title:'操作',
        fixed:'right',
        width:180,
        render:(data)=> {
          // console.log(data._id)
          return(
            <Fragment>
              <Popconfirm
                title='确定要删除本条数据吗？'
                onConfirm={()=>{
                  console.log(data._id)
                  this.del(data._id)
                }}
                okText='删除'
                cancelText='取消'
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
              <Button type='primary' size='small' onClick={()=>{
        
                this.setState({drawerShow:true,updataInfo:data})
              }}>修改</Button>
            </Fragment>
          )
        },
      }
    ]
    this.state={
      show:false,
      drawerShow:false,
      spinning:false,
      nowPage:1, //当前页数
      pageSize:3,
      allCount:0, // 总数据条数
      dataSource:[],
      updataInfo:{},
    }
  }
  componentDidMount(){
    this.getTableData(1)
}
del(id){
  //  网络请求
    DelData(id).then(()=>{
      message.success('删除ok',1)
      this.getTableData()
    })

  // 更新页面数据
  }
  getTableData(nowPage=1){
    // 根据页数获取网络数据
    this.setState({spinning:true})
    getData(nowPage,pageSize)
    .then((res)=>{
      // console.log(res.data.list.data)
      this.setState({dataSource:res.data.list.data,allCount:res.data.list.allCount,spinning:false})
    })
  }
    render() {
        let {number,name,telp,token,status}=this.state
    return (
      <div >
        <Spin spinning={this.state.spinning}>
         <Table columns={this.columns} 
          dataSource={this.state.dataSource}
          rowKey='_id'
          pagination={false}
          scroll={{y:300,x:500}}
          style={{height:370}}
          ></Table>
        </Spin>
        <Pagination 
          simple  
          total={this.state.allCount} 
          pageSize={this.state.pageSize} 
          onChange={(page)=>{
            console.log('目标页数',page,pageSize)
            this.getTableData(page)
          }}
        />
        <Drawer
          closable={true}
          onClose={()=>{this.setState({drawerShow:false}) }}
          visible={this.state.drawerShow}
        >
          {/* 将要修改的数据 和刷新方法通过props传递子组件 */}
          <GoodsUpdate 
            updataInfo={this.state.updataInfo} 
            refreshList={()=>{
              // 收起抽屉
              this.setState({drawerShow:false}) 
              // 更新完毕后刷新界面
              this.getTableData()
            }}></GoodsUpdate>
        </Drawer>
      </div>
    );
}

}
export default Data;