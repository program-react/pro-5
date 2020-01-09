import React, { Component, Fragment } from 'react'
import { HashRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom'
import Login from '../pages/Login/Login'
import loadable from  '../utils/loadable'
import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/home'
import Root from '../pages/Root/Root'
import RolesList from '../pages/Root/List/roleList'
import AuthList from '../pages/Root/List/authList'
// import Roleslist from '../pages/Roles/Roleslist'
const RolesAdd = loadable(() => import('../pages/Root/Add/Add'))
class AppRouter extends Component {
    render() {
        return (
        <HashRouter>
        
            <Switch>
                <Route path='/login' component={Login}></Route>
                <Route path='/admin' render={()=>{
                    return(
                        <Admin>
                            <Switch>
                                {/* <Redirect from='/admin' to='/admin/home'></Redirect> */}
                                <Route path='/admin/home' component={Home}></Route>
                                <Route path='/admin/root/add' component={RolesAdd}></Route>
                                <Route path='/admin/root/rolelist' component={RolesList}></Route>
                                <Route path='/admin/root/authlist' component={AuthList}></Route>
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
