import axios from 'axios';
// import jsonp from 'jsonp'

// import {getItem} from '../utils/webStorage'

//获取列表
export const GetGoodType=async(page,pageSize)=>{
    let url='/hehe/admin/goodsorts/getGoods'
    // let url='http://localhost:3003/admin/goodsorts/getGoods'
    let data={page,pageSize}
    let result =await axios.get(url,{params:data})
    if(result.err===0){
        return result
    }else{
        throw result
    } 
}


//删除
export const DelGoodType =async(id)=>{
    let url='/hehe/admin/goodsorts/delGood'
    let result =await axios.post(url,{id})
    if(result.err===0){
        return result
    }else{
        throw result
    }
}

//添加
export const AddGoodType =async({num,name,effi})=>{
    let url='/hehe/admin/goodsorts/addGood'
    let result =await axios.post(url,{num,name,effi})
    if(result.err===0){
        return result
    }else{
        throw result
    } 
}

//修改
export const UpdateGoodType =async(num,name,effi)=>{
    let url='/hehe/admin/goodsorts/updateGood'
    let result =await axios.post(url,{num,name,effi})
    if(result.err===0){
        return result
    }else{
        throw result
    } 
}