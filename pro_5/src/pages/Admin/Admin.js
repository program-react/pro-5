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