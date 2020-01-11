import React, { Component,Fragment } from 'react';
import {Table,Pagination,Spin,Button,Popconfirm, message,Drawer,Input} from 'antd'
import {GetRole,DelRole} from  '../../../api/root'
import  RoleUpdate from  '../Update/Update'
const {Search} =Input
// const dataSource=[
//   {hehe:'1',name:'呵呵',desc:'副经理说杰弗里斯',address:'逮虾户'},
//   {hehe:'2',name:'呵呵',desc:'副经理说杰弗里斯',address:'逮虾户'},
//   {hehe:'3',name:'呵呵',desc:'副经理说杰弗里斯',address:'逮虾户'}
// ] 
const pageSize=3
class RoleList extends Component{
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
        title:'角色名称',
        dataIndex:'name',
        width:300,
        // fixed:'left'
      },
      {
        title:'角色描述',
        dataIndex:'desc',
        width:300
      },
      
      {
        title:'操作',
        // fixed:'right',
        width:180,
        render:(data)=> {
          return(
            <Fragment>
                
              <Popconfirm
                title='确定要删除本条数据吗？'
                onConfirm={()=>{
                  // console.log(this,data._id)
                  this.delData(data._id)
                }}
                okText='确定'
                cancelText='取消'
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
              <Button style={{marginLeft:14}} type='primary' size='small' onClick={()=>{
        
                this.setState({drawerShow:true,updataInfo:data})
              }}>编辑</Button>
            </Fragment>
          )
        },
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
  delData(id){
  //  网络请求
      DelRole(id).then(()=>{
      message.success('删除ok',1)
      this.getTableData()
    })

  // 更新页面数据
  }
  getTableData(nowPage=1){
    // 根据页数获取网络数据
    this.setState({spinning:true})
    GetRole(nowPage,pageSize)
    .then((res)=>{
      console.log(res)
      this.setState({dataSource:res.list.roles,allCount:res.list.allCount,spinning:false})
    })
  }
  render(){
    let {dataSource,allCount,spinning,drawerShow,updataInfo}=this.state
    return (
      
      <div >
        <Search 
        placeholder="input search text" 
        onSearch={value => console.log(value)} 
        enterButton
        style={{width:340,marginBottom:30}}
        />
        <Button type='primary' size='nomarl' style={{marginLeft:14}} onClick={()=>{
          console.log(this)
          this.props.history.replace('add')
        }}>
          添加
        </Button>
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
          style={{marginTop:20}}
        />
        <Drawer
          closable={true}
          onClose={()=>{this.setState({drawerShow:false}) }}
          visible={drawerShow}
        >
          {/* 将要修改的数据 和刷新方法通过props传递子组件 */}
          <RoleUpdate 
            updataInfo={updataInfo} 
            refreshList={()=>{
              // 收起抽屉
              this.setState({drawerShow:false}) 
              // 更新完毕后刷新界面
              this.getTableData()
            }}></RoleUpdate>
        </Drawer>
      </div>
    );
  }
}

export default (RoleList);
