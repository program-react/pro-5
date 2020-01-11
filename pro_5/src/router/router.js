import React, { Component, Fragment } from 'react'
import { HashRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom'
import Login from '../pages/Login/Login'
import loadable from  '../utils/loadable'
import RolesList from '../pages/Root/List/roleList'
import AuthList from '../pages/Root/List/authList'
import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/home'
import List from '../pages/user/list'
import Goodslist from '../pages/Goods/goodslist'
import Goodstype from '../pages/Goods/goodstype'
import Order from '../pages/order/order'
const RolesAdd = loadable(() => import('../pages/Root/Add/Add'))
class AppRouter extends Component {
    render() {
        return (
        <HashRouter>
            <NavLink to='/login'></NavLink>
            <Switch>
                <Redirect exact from='/' to='/login'></Redirect>
                <Route path='/login' component={Login}></Route>
                <Route path='/admin' render={()=>{
                    return(
                        <Admin>
                            <Switch>
                                <Redirect exact from='/admin' to='/admin/home'></Redirect>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/root/add' component={RolesAdd}></Route>
                                <Route path='/admin/root/rolelist' component={RolesList}></Route>
                                <Route path='/admin/root/authlist' component={AuthList}></Route>
                                <Route path='/admin/userlist/list' component={List}></Route>
                                <Route path='/admin/goods/goodslist' component={Goodslist}></Route>
                                <Route path='/admin/goods/goodstype' component={Goodstype}></Route>
                                <Route path='/admin/order' component={Order}></Route>
                            </Switch>
                        </Admin>
                    )
                }}></Route>
            </Switch>
        </HashRouter>
        )
    }
}
export default AppRouter 
