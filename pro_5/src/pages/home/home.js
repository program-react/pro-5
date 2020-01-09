import React, { Component, Fragment } from 'react'
import ReactEcharts from 'echarts-for-react';
import styles from './date.module.less'
import { List, Avatar, Button } from 'antd';
import { Link } from 'react-router-dom'


const data = [

  {
    title: '用户管理',
    desc: '查看用户信息/用户列表',
    path: '/admin/user/list',
  },
  {
    title: '商品管理',
    desc: '查看商品信息/商品列表/商品添加'

  },
  {
    title: '订单管理',
    desc: '查看订单信息/订单管理/订单修改'

  },
  {
    title: '权限管理',
    desc: '查看用户状态'
  },
];
class Home extends Component {

  constructor() {
    super()
    this.state = {
      option: {
        series: [
          {
            name: '访问量',
            type: 'pie',
            radius: ['30%', '70%'],
            center: ['50%', '40%'],
            data: [{ value: 20, name: '首页' },]
          }
        ]
      }
    }
  }
  componentDidMount() {
    setTimeout(() => {
      let data = [
        { value: 20, name: '近一年' },
        { value: 40, name: '近六个月' },
        { value: 30, name: '近三个月' },
        { value: 50, name: '近一个月' },
        { value: 60, name: '今天' }
      ]
      let option = JSON.parse(JSON.stringify(this.state.option))
      option.series[0].data = data
      this.setState({ option }, () => {
        // console.log(this)
      })
    }, 3000);
  }
  componentDidUpdate() {
    console.log('图表更新结束')
  }
  render() {
    console.log('图标render')
    let { option } = this.state
    return (
      <div style={{ width: '400px', height: '400px', border: '3px solid #eee', marginTop: '30' }} className={styles.data}>
        <h3 style={{ textAlign: 'center' }} className={styles.h3}>系统访问量</h3>
        <ReactEcharts option={option}></ReactEcharts>


        <Button className={styles.btn}><h1 >导航栏</h1></Button>
        <List className={styles.list}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578480346047&di=c80852c5d4d2f509dca74e86fd128fd7&imgtype=0&src=http%3A%2F%2Fwww.17qq.com%2Fimg_biaoqing%2F68517320.jpeg" />}
                title={item.title}
                description={item.desc}
              />

            </List.Item>
          )}
        />
      </div>



    )
  }
}


export default Home;
