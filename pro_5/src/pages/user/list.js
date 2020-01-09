import React, { Component, Fragment } from 'react'
import DateRange from '../date/date'
import styles from './date.module.less'
import style from './add.module.less'
import Data from '../data/data'
// import Add from '../../add/add'
import {Table,Pagination,Spin,Button,Popconfirm, message} from 'antd'
import {AddData} from '../../api/date'
import { getData} from '../../api/date'

// import qs from 'qs'



class List extends Component {
    constructor(props){
        super(props)
        this.state={
          number:'',
          name:'',
          telp:'',
          token:'',
          status:'',
          show:false,
          dataSource:[],

        }
      }
    submit=()=>{
        let {number,name,telp,token,status} = this.state
         console.log({number,name,telp,token,status})
        AddData({number,name,telp,token,status})
        .then(()=>{message.success('添加ok',1)
        
       })
        .catch((err)=>{ message.error('添加失败',1)})
        this.setState({
            show:false,
          });
      } 
    
    click=()=>{
        this.setState({
            show:!this.state.show,
          });
    } 
    render() {
        let {number,name,telp,token,status} = this.state
        return (
            <Fragment>
                {/* 搜索框 */}
                <input placeholder='请输入内容' className={styles.inp}></input>
                <button className={styles.btn}>搜索</button>
                <button className={styles.btn2} onClick={()=>{
                    this.click()
                }}>添加</button>
                 {/* {this.state.show? <Add></Add>:''} */}
                <DateRange className={styles.date}></DateRange>
                <button className={styles.btn} onClick={this.get}>搜索</button>
                <div>
                    <Data></Data>
                </div>
                <div className={styles.modle}>
                    
                </div>
           {/* 莫态框 */}
         <div className={style.mod} className={this.state.show?style.model:style.mod} >
          <div  className={style.data}>
          number: <input type='text' 
          onChange={(e)=>{
            this.setState({number:e.target.value})
          }}
          />
          <br/>
          name: <input type='text' 
          onChange={(e)=>{
            this.setState({name:e.target.value})
          }}
          />
          <br/>
          telp: <input type='text' 
          onChange={(e)=>{
            this.setState({telp:e.target.value})
          }}
          />
          <br/>
          token: <input type='text' 
          onChange={(e)=>{
            this.setState({token:e.target.value})
          }}
          
          />  
           <br/>
          status: <input type='text' 
          onChange={(e)=>{
            this.setState({status:e.target.value})
          }}
          
          /> 
          <br/>
          <Button type='primary' onClick={this.submit}>提交</Button>
          <Button type='primary' onClick={this.click}>
              取消
              </Button>

          </div>
        
      </div>
            </Fragment>

        )

    }
}
export default List;