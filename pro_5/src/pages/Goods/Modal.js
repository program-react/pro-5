import React ,{Fragment,Component}from 'react'
import mm from './modal.module.css'
import {withRouter} from 'react-router-dom'
class Modal extends Component{

  render(){
   
    return(
     <div className={style.mm}>
       <h1>登录超时请重新登录</h1>
       <button>取消</button>
     </div>

    )
  }
}

export default withRouter(Modal)