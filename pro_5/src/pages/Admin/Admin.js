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
                < Button onClick={() => {
                    console.log(this.props.history)
                     this.props.history.push('/admin/goods/goodslist')
                }}>商品列表</ Button>
                < Button onClick={() => {
                    console.log(this.props.history)
                     this.props.history.push('/admin/goods/goodstype')
                }}>商品分类</ Button>
                < Button onClick={() => {
                    console.log(this.props.history)
                     this.props.history.push('/admin/order')
                }}>订单管理</ Button>
                <Button type="primary" className ={styles.btnAdmin} onClick={() => {
                    console.log(this.props.history)
                     this.props.history.push('/login')
                }}>Admin</Button>
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
