import React, { Component, Fragment } from 'react'
import { HashRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Admin from '../pages/Admin/Admin'
import Home from '../pages/Home/Home'
import Goodslist from '../pages/Goods/goodslist'
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
                                <Route path='/admin/goods/goodslist' component={Goodslist}></Route>
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