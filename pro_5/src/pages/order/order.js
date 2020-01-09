import React, { Component, Fragment } from 'react'
import { Input, Button, Icon, Table, Pagination, Spin, Popconfirm, message, Modal, Drawer,} from 'antd';
import { GetOrders, DelOrders, AddOrders,getFoodsByKw } from '../../api/order'
import GoodsUpdate from '../order/Update/Update'
// const dataSource=[
//     {name:'haha',user:'hd ',desc:'nihao',price:'12',pay:'yi',bill:'wei',time:'12.20',mac:'0000'},
//     {name:'haha',user:'hd ',desc:'nihao',price:'12',pay:'yi',bill:'wei',time:'12.20',mac:'0000'},
//     {name:'haha',user:'hd ',desc:'nihao',price:'12',pay:'yi',bill:'wei',time:'12.20',mac:'0000'},

// ]
const pageSize =2
class GoodsList extends Component {
    constructor() {
        super()
        this.columns = [
            {
                title: 'id',
                dataIndex: '_id'
            },
            {
                title: '订单名称',
                dataIndex: 'name'
            },
            {
                title: '用户编号',
                dataIndex: 'user'
            },
            {
                title: '订单编号',
                dataIndex: 'desc'
            },
            {
                title: '订单价格',
                dataIndex: 'price'
            },
            {
                title: '是否支付',
                dataIndex: 'pay'
            },
            {
                title: '是否发货',
                dataIndex: 'bill'
            },
            {
                title: '创建时间',
                dataIndex: 'time'
            },
            {
                title: '联系客服',
                dataIndex: 'mac'
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
                                <Button type='danger' size="small" style={{marginRight:'10px'}}>删除</Button>
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
            name: '',
            user: '',
            desc: '',
            price: '',
            pay: '',
            bill: '',
            time: '',
            mac: '',
            updataInfo:{},
        }
    }
    componentDidMount() {
        this.getTabData(1)
    }
    delData(id) {
        //网络请求
        DelOrders(id)
            .then(() => {
                message.success('删除成功', 1)
                this.getTabData(1)
            })
        //更新页面数据
    }
    
    getTabData(nowPage) {
        //根据页面获取网络数据
        this.setState({ spinning: true })
        GetOrders(nowPage, pageSize)
            .then((res) => {
                console.log(res)
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
        AddOrders(this.state)
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
      getKW=(page,value)=>{
        getFoodsByKw(page,pageSize,value)
        .then((res)=>{
            console.log(res)
            // this.getTabData()
        })
    
    }
    render() {
        let { dataSource, allCount, spinning, name, user, desc, price, pay, bill, time, mac, drawerShow,updataInfo,getKW} = this.state
        const { size } = this.state;
        const { Search } = Input;       
        return (
            <Fragment>
                
                <Search placeholder="搜索" 
                onSearch={value => (console.log(getKW))}
                enterButton  style={{width:"200px"}}/>
                <Button type="primary" onClick={this.showModal} style={{marginLeft:'20px'}}>添加</Button>

                <Spin spinning={spinning}>
                    <Table columns={this.columns}
                        dataSource={dataSource}
                        rowKey='id'
                        pagination={false}
                        scroll={{ y: 400 }}
                    ></Table>
                </Spin>
                
                
                {/* //总条数 */}
                <Pagination total={allCount} pageSize={pageSize} 
                    onChange={(page) => {
                        console.log('目标页数', page)
                        this.getTabData(page)
                    }} />
                {/* 添加添加添加添加添加添加添加添加添加添加添加添加添加添加添加 */}
                <Modal
                    title="订单添加"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    closable={false}
                    onCancel={this.handleCancel}>
                    订单名称:<input type='text' value={name} style={{}}
                        onChange={(e) => {
                            this.setState({ name: e.target.value })
                        }}
                    />
                    <br />
                    用户编号:<input type='text' value={user}
                        onChange={(e) => {
                            this.setState({ user: e.target.value })
                        }}
                    />
                    <br />
                    订单编号:<input type='text' value={desc}
                        onChange={(e) => {
                            this.setState({ desc: e.target.value })
                        }}
                    />
                    <br />
                    订单价格:<input type='text' value={price}
                        onChange={(e) => {
                            this.setState({ price: e.target.value })
                        }}
                    />
                    <br />
                    是否支付:<input type='text' value={pay}
                        onChange={(e) => {
                            this.setState({ pay: e.target.value })
                        }}
                    />
                    <br />
                    是否发货:<input type='text' value={bill}
                        onChange={(e) => {
                            this.setState({ bill: e.target.value })
                        }}
                    />
                    <br />
                    创建时间:<input type='text' value={time}
                        onChange={(e) => {
                            this.setState({ time: e.target.value })
                        }}
                    />
                    <br />
                    联系客服:<input type='text' value={mac}
                        onChange={(e) => {
                            this.setState({ mac: e.target.value })
                        }}
                    />
                    <br />
                    {/* <Button type='primary' onClick={this.submit}>提交</Button> */}
                </Modal>
                {/* 修改 */}
                <Drawer
                    closable={true}
                    onClose={() => { this.setState({ drawerShow: false }) }}
                    visible={drawerShow}>
                    <GoodsUpdate updataInfo={updataInfo} refresList={()=>{
                        this.setState({ drawerShow: false })
                        this.getTabData()
                    }}></GoodsUpdate>
                </Drawer>
            </Fragment>
        )
    }
}

export default GoodsList