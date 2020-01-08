import React ,{Component}from 'react';
import styles from './admin.module.less'
import SiderNav from '../../component/SiderNav/SiderNav'
import { Layout, Icon } from 'antd'
const { Header, Sider, Content, Footer } = Layout;
class Admin extends Component {
  render() {
    return (
      <Layout className={styles.admin}>
        <Sider collapsed={false}>
          <SiderNav></SiderNav>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon className="trigger" />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 300,
            }}
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
  export default Admin;
