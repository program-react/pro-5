import React, { Component, Fragment } from 'react'
import { Button, Table, Pagination, Spin, Popconfirm, message, Modal, Drawer } from 'antd';
import { GetGoodType, AddGoodType,DelGoodType} from '../../api/goodstype'
import GoodTypeUpdate from  './Update/GoodsTypeUpdate'

const pageSize = 4
class GoodsList extends Component {
    constructor() {
        super()
        this.columns = [
          {
            title:'类别编号',
            dataIndex:'num'
          },
          {
            title:'分类名称',
            dataIndex:'name'
          },
          {
            title:'是否有效',
            dataIndex:'effi'
          },
            {
                title: "操作",
                width: 180,
                // fixed: 'right',
                render: (data) => {
                    return (
                        <Fragment>
                            <Popconfirm
                                title='确认删除本条数据?'
                                onConfirm={() => {
                                    console.log(this, data._id)
                                    this.delData(data._id)
                                }}
                                okText='删除'
                                cancelText='取消'
                            >
                                <Button type='danger' size="small">删除</Button>
                            </Popconfirm>
                            <Button type='primary' size="small" onClick={() => {
                                this.setState({ drawerShow: true ,updataInfo:data})
                            }}>修改</Button>
                        </Fragment>
                    )
                }
            }
        ]
        this.state = {
            drawerShow: false,
            spinning: false,
            nowPage: 1,//当前页数
            allCount: 0,//总数据条数
            dataSource: [],
            num:'',
            name: '',
            effi: '',
            updataInfo:{},
            visible: false
        }
    }
    componentDidMount() {
        this.getTabData(1)
    }
    delData(id) {
        //网络请求
        DelGoodType(id)
            .then(() => {
                message.success('删除成功', 1)
                this.getTabData(1)
            })
        //更新页面数据
    }
    getTabData(nowPage = 1) {
        //根据页面获取网络数据
        this.setState({ spinning: true })
        GetGoodType(nowPage, pageSize)
            .then((res) => {
                // console.log(res)
                this.setState({ dataSource: res.list.goods, allCount: res.list.allCount, spinning: false })
            })
    }
    
    // 添加// 添加// 添加// 添加// 添加// 添加// 添加
    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    handleOk = e => {
      AddGoodType(this.state)
      .then((data) => {
          console.log(data)
          message.success('添加成功', 1)
          this.getTabData()
      })
      .catch((err) => {
          console.log(err)
          message.error('添加失败', 1)
      })
      this.setState({
          visible: false,
          
      });
    };
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
    render() {
        let { dataSource, allCount, spinning,num, name, effi, drawerShow,updataInfo} = this.state
        return (
            <Fragment>
                <Button type="primary" onClick={this.showModal} size='small'>添加</Button>
                <Spin spinning={spinning}>
                    <Table columns={this.columns}
                        dataSource={dataSource}
                        rowKey='_id'
                        pagination={false}
                        scroll={{ y: 400 }}
                    ></Table>
                </Spin>
                
                <Pagination showQuickJumper defaultCurrent={1} total={allCount} pageSize={pageSize} 
                    onChange={(page) => {
                        console.log('目标页数', page)
                        this.getTabData(page)
                        // total={allCount}
                    }}
                />

               
                {/* 添加添加添加添加添加添加添加添加添加添加添加添加添加添加添加 */}
                <Modal
                    title="商品种类添加"
                    visible={this.state.visible}
                    maskClosable={this.state.maskClosable}
                    onOk={this.handleOk}
                    onCancel = {this.handleCancel}
                >
                   编号:<br/><input type='text' value={num}
                        onChange={(e) => {
                            this.setState({ num: e.target.value })
                        }}
                    />
                    <br/>
                    商品种类名称:<br/><input type='text' value={name}
                        onChange={(e) => {
                            this.setState({ name: e.target.value })
                        }}
                    />
                    <br/>
                    是否有效:<br/><input type='text' value={effi}
                        onChange={(e) => {
                            this.setState({ effi: e.target.value })
                        }}
                    />
                    <br/>
                    {/* <Button type='primary' onClick={this.submit}>提交</Button> */}
                </Modal>
                {/* 修改 */}
                <Drawer
                    closable={true}
                    onClose={() => { this.setState({ drawerShow: false }) }}
                    visible={drawerShow}>
                    <GoodTypeUpdate updataInfo={updataInfo} refresList={()=>{
                        this.setState({ drawerShow: false })
                        this.getTabData()
                    }}></GoodTypeUpdate>
                </Drawer>
            </Fragment>
        )
    }
}

export default GoodsList