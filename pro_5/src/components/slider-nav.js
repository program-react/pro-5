import React,{Component,Fragment} from 'react'
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
const menuData=[{
    name:'后台主页',
    icon:'home',
    path:'/admin/home',
    id:'0'
},
{
    name:'用户管理',
    icon:'setting',
    path:'/admin/setting',
    id:'1' ,
    children:[{
        name:'用户列表',
        icon:'',
        path:'',
        id:'2-0', 
    },
  ] 

},
{
    name:'权限管理',
    icon:'',
    path:'',
    id:'2' ,
    children:[{
        name:'权限列表',
        icon:'',
        path:'',
        id:'2-0', 
    },
    {
        name:'权限管理',
        icon:'',
        path:'',
        id:'2-1' ,
    }]


},
{
    name:'商品管理',
    icon:'setting',
    path:'/admin/setting',
    id:'3'  ,
    children:[{
        name:'商品列表',
        icon:'',
        path:'',
        id:'3-0', 
    },
    {
        name:'分类管理',
        icon:'',
        path:'',
        id:'3-1' ,
    }]

},
{
    name:'订单管理',
    icon:'',
    path:'',
    id:'4' ,
    children:[{
        name:'权限列表',
        icon:'',
        path:'',
        id:'4-0', 
    },
    {
        name:'订单列表',
        icon:'',
        path:'',
        id:'4-1' ,
    }] 

},
]
const { SubMenu } = Menu;
class SliderNav extends Component{
    renderItem(data){
        if(!data.length) return '暂无数据'
        let result=data.map((item)=>{
            if(item.children){
                 return(
                    <SubMenu title={item.name}>
                         {this.renderItem(item.children)}
                    </SubMenu> 
                 )
            }else{
            return <Menu.Item>{item.name}</Menu.Item>
            }
        })
        return result
        
    } 
    render (){
        return(
<Menu  mode="inline" theme='dark'>
               {this.renderItem(menuData)}
            </Menu>
        )
    }
 
}
export default SliderNav;
