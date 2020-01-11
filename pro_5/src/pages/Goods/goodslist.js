import React, { Component, Fragment } from 'react';
import { Input, Table, Pagination, Spin, Button, Popconfirm, message, Drawer } from 'antd'
import style from './goodslist.module.less'
import mm from './modal.module.less'
import { GetGoods, DelGood, AddGood, UpdateGood } from '../../api/goods'
import  GoodsUpdate from  './Update/Update'
const { Search } = Input;
const pageSize = 3
class GoodsList extends Component {
  constructor() {
    super()
    this.columns = [
      {
        title: 'id',
        dataIndex: '_id',
        width: 200,
        ellipsis: true,
        // fixed:'left'
      },
      {
        title: '名称',
        dataIndex: 'name',
        width: 120,
        // fixed:'left'
      },
      {
        title: '价格(元)',
        dataIndex: 'price',
        width: 120
      },
      {
        title: '重量(g)',
        dataIndex: 'weight',
        width: 120,
      },
      {
        title: '数量',
        dataIndex: 'num',
        width: 120
      },
      {
        title: '操作',
        fixed: 'right',
        width: 180,
        render: (data) => {
          return (
            <Fragment>
              <Button type='primary' size='small' onClick={() => {
                this.setState({ drawerShow: true, updataInfo: data })
              }}>修改</Button>
              <Popconfirm
                title='确定要删除本条数据吗？'
                onConfirm={() => {
                  // console.log(this,data._id)
                  this.delData(data._id)
                }}
                okText='删除'
                cancelText='取消'
              >
                <Button type='danger' size='small' className={style.del}>删除</Button>
              </Popconfirm>
            </Fragment>
          )
        },
      }
    ]
    this.state = {
      drawerShow: false,
      spinning: false,
      nowPage: 1, //当前页数
      allCount: 0, // 总数据条数
      dataSource: [],
      updataInfo: {},
      show: false,
      ipt1: '',
      ipt2: '',
      ipt3: '',
      ipt4: '',
    }
  }
  componentDidMount() {
    this.getTableData(1)
  }
  delData(id) {
    //  网络请求
    DelGood(id).then(() => {
      message.success('删除成功', 1)
      this.getTableData()
    })
  }
  addData(name, price, weight, num) {
    console.log(name, price, weight, num)
    AddGood({ name, price, weight, num }).then((res) => {
      this.getTableData()
    })
  }
  getTableData(nowPage = 1) {
    GetGoods(nowPage, pageSize)
      .then((res) => {
        // console.log("1", res)
        this.setState({ dataSource: res.list.goods, allCount: res.list.allCount, spinning: false })
      })
  }
  render() {
    let { dataSource, allCount, spinning, drawerShow, updataInfo } = this.state
    return (
      <div >
        <div className={style.top}>
          <Search
            placeholder="请输入内容"
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
            className={style.search1}
          />
          <Button type="primary" icon="search" className={style.button}
            onClick={() => {
              this.setState({
                show: !this.state.show
              })
            }}>
            添加
          </Button>
        </div>
        <Spin spinning={spinning}>
          <Table columns={this.columns}
            dataSource={dataSource}
            rowKey='_id'
            pagination={false}
            scroll={{ y: 200, x: 500 }}
            style={{ height: 300 }}
          ></Table>
        </Spin>
        <Pagination
          simple
          total={allCount}
          pageSize={pageSize}
          onChange={(page) => {
            console.log('目标页数', page)
            this.getTableData(page)
          }}
        />
          <Drawer
          closable={true}
          onClose={()=>{this.setState({drawerShow:false}) }}
          visible={drawerShow}
        >
          {/* 将要修改的数据 和刷新方法通过props传递子组件 */}
          <GoodsUpdate 
            updataInfo={updataInfo} 
            refreshList={()=>{
              // 收起抽屉
              this.setState({drawerShow:false}) 
              // 更新完毕后刷新界面
              this.getTableData()
            }}></GoodsUpdate>
        </Drawer>
        <div className={this.state.show ? mm.modal : mm.xs}>
          <div className={mm.center}>
            <h1>添加新信息</h1>
            <div className={mm.ctn}>
              <p>
                名称:<Input placeholder="name" style={{ width: 300, height: 40 }}
                  onChange={(e) => {
                    // console.log(e.target.value)
                    let ipt1 = e.target.value
                    this.setState({
                      ipt1: ipt1
                    })
                  }} />
              </p>
              <p>
                价格:<Input placeholder="price" style={{ width: 300, height: 40 }}
                  onChange={(e) => {
                    // console.log(e.target.value)
                    let ipt2 = e.target.value
                    this.setState({
                      ipt2: ipt2
                    })
                  }} />
              </p>
              <p>
                重量:<Input placeholder="weight" style={{ width: 300, height: 40 }}
                  onChange={(e) => {
                    // console.log(e.target.value)
                    let ipt3 = e.target.value
                    this.setState({
                      ipt3: ipt3
                    })
                  }}
                />
              </p>
              <p>
                数量:<Input placeholder="num" style={{ width: 300, height: 40 }}
                  onChange={(e) => {
                    // console.log(e.target.value)
                    let ipt4 = e.target.value
                    this.setState({
                      ipt4: ipt4
                    })
                  }}
                />
              </p>

            </div>
            <Button className={mm.btn1}
              onClick={() => {
                this.setState({
                  show: !this.state.show
                })
              }}
            >取消</Button>
            <Button className={mm.btn2}
              onClick={() => {
                console.log(this.state.ipt1, this.state.ipt2, this.state.ipt3, this.state.ipt4)
                this.addData(this.state.ipt1, this.state.ipt2, this.state.ipt3, this.state.ipt4)
                this.setState({
                  show: !this.state.show
                })
              }}
            >确定</Button>
          </div>
        </div>
        </div>
    );
  }
}
export default GoodsList;
