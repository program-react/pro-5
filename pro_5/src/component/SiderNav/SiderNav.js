import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
const menuData = [
    
        {
            name: '首页',
            icon: "home",
            path: '/admin/home',
            id: '0'
    
        }, 
        {
            name: '商品管理',
            icon: 'shopping',
            path: '/admin/goods',
            id: '2',
            children: [
                {
                    name: '商品列表',
                    path: '/admin/goods/goodslist',
                    icon: ' ',
                    id: '2-0',
                },
                {
                    name: '商品添加',
                    icon: ' ',
                    id: '2-1',
    
                }
            ]
    
        }
    
]
const {SubMenu} = Menu
class SiderNav extends Component {
    renderItem(data) {
        if (!data.length) return '暂无数据'
        let result = data.map((item,index) => {
            if (item.children) {
                return (
                    <SubMenu title={
                        <span >
                            <Icon type={item.icon || 'home'}></Icon>
                            <span>{item.name||'hehe'}</span>
                        </span>
                    }>
                        {this.renderItem(item.children)}
                    </SubMenu>
                )
            } else {
                return (
                    <Menu.Item >
                        <Link to={item.path || '/admin'}>
                            <span>
                                <Icon type={item.icon || 'home'}></Icon>
                                <span>{item.name || 'hehe'}</span>
                            </span>
                        </Link>
                    </Menu.Item>
                )
            }
        })
        return result
    }
    render() {
        // let {menuData} = this.state
        return (
            <Menu mode="inline" theme="dark">
                {this.renderItem(menuData)}
            </Menu>
        )

    }
}

export default SiderNav;
