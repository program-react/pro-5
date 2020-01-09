import React, { Component, Fragment } from 'react'
import { HashRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom'
import Login from '../pages/Login/Login'
<<<<<<< HEAD
import loadable from  '../utils/loadable'
import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/home'
import Root from '../pages/Root/Root'
import RolesList from '../pages/Root/List/roleList'
import AuthList from '../pages/Root/List/authList'
// import Roleslist from '../pages/Roles/Roleslist'
const RolesAdd = loadable(() => import('../pages/Root/Add/Add'))
=======
import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/Home'
import List from '../pages/user/list'
import Goodslist from '../pages/Goods/goodslist'
import Goodstype from '../pages/Goods/goodstype'
import Order from '../pages/order/order'
>>>>>>> 78b1ae9ac09f9ee9ddcd245cf8d9c004ba8ac853
class AppRouter extends Component {
    render() {
        return (
        <HashRouter>
<<<<<<< HEAD
        
            <Switch>
=======
            <NavLink to='/login'></NavLink>
            <Switch>
                <Redirect exact from='/' to='/login'></Redirect>
>>>>>>> 78b1ae9ac09f9ee9ddcd245cf8d9c004ba8ac853
                <Route path='/login' component={Login}></Route>
                <Route path='/admin' render={()=>{
                    return(
                        <Admin>
                            <Switch>
<<<<<<< HEAD
                                {/* <Redirect from='/admin' to='/admin/home'></Redirect> */}
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/root/add' component={RolesAdd}></Route>
                                <Route path='/admin/root/rolelist' component={RolesList}></Route>
                                <Route path='/admin/root/authlist' component={AuthList}></Route>
=======
                                <Redirect exact from='/admin' to='/admin/home'></Redirect>
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/user/list' component={List}></Route>
                                <Route path='/admin/goods/goodslist' component={Goodslist}></Route>
                                <Route path='/admin/goods/goodstype' component={Goodstype}></Route>
                                <Route path='/admin/order' component={Order}></Route>
>>>>>>> 78b1ae9ac09f9ee9ddcd245cf8d9c004ba8ac853
                            </Switch>
                        </Admin>
                    )
                }}></Route>
            </Switch>
        </HashRouter>
        )
    }
}
<<<<<<< HEAD
export default AppRouter 
=======
export default AppRouter 
>>>>>>> 78b1ae9ac09f9ee9ddcd245cf8d9c004ba8ac853
