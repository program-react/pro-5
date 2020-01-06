import React,{Component,Fragment} from 'react'
import styles from './home.module.less'
import { Layout, Menu, Icon } from 'antd';
import SliderNav from '../../components/slider-nav'


const { Header, Content, Footer, Sider } = Layout;

class Home extends Component{
    render() {
        return (
            <Layout className={styles.home}>
    <Sider collapsed={false}>
           <SliderNav></SliderNav>
          </Sider>
    <Layout>
      {/* <Header style={{ background: '#fff'}} /> */}
      <Content >
        <div className={styles.content}>content</div>
      </Content>
      <Footer style={{ textAlign: 'center'}}></Footer>
    </Layout>
  </Layout>
          )
           
      
        
      }
      
  }
  
  
  export default Home;