<<<<<<< HEAD
import React,{Component} from 'react'
import { Layout, Menu, Icon ,Input} from 'antd'
import styles from './Admin.module.less'

import SiderNav from '../../components/slider-nav'
const { Header, Sider, Content ,Footer} = Layout

class Admin extends Component {
    render(){
        return (
            <Layout className={styles.admin}>

                <Sider trigger={null} collapsible 
                collapsed={false}
                >
                    <SiderNav></SiderNav>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        
                        {this.props.children}
              </Content>
              <Footer>底部</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default Admin
=======
import React ,{Component}from 'react';
import styles from './admin.module.less'
import SiderNav from '../../component/SiderNav/SiderNav'
import { Layout, Icon,Button } from 'antd'
import {withRouter} from 'react-router-dom'
const { Header, Sider, Content, Footer } = Layout;
class Admin extends Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <Layout className={styles.admin}>
        <Sider collapsed={this.state.collapsed}>
          <SiderNav></SiderNav>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
          <Button onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
            <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
            </Button>
            < Button onClick={() => {
                    console.log(this.props.history)
                     this.props.history.push('/admin/home')
                }}>首页</ Button>
            < Button>用户管理</ Button>
             < Button onClick={() => {
                    console.log(this.props.history)
                     this.props.history.push('/admin/user/list')
                }}>用户列表</ Button>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 300,
            }}
            className={styles.content}
          >
            {this.props.children}
          </Content>
          <Footer>
            这里是底部
      </Footer>
        </Layout>
      </Layout>
    )
  }
}
  export default withRouter(Admin);
>>>>>>> 78b1ae9ac09f9ee9ddcd245cf8d9c004ba8ac853
