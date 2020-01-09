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
    name:'权限管理',
    icon:'',
    path:'/admin/root',
    id:'1' ,
    children:[{
        name:'角色列表',
        icon:'',
        path:'/admin/root/rolelist',
        id:'1-0', 
    },
    {
        name:'权限列表',
        icon:'',
        path:'/admin/root/authlist',
        id:'1-1' ,
    }]


}
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
    render (){
        return(
<Menu  mode="inline" theme='dark'>
               {this.renderItem(menuData)}
            </Menu>
        )
    }
 
}
export default SliderNav;
