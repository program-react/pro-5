import axios from '../utils/axios'
// import {getItem} from '../utils/webStorage'
//查询
export const GetOrders=async (page,pageSize)=>{
    let url='/hehe/admin/orders/getOrder'
    let data={page,pageSize}
    let result=await axios.get(url,{params:data})
    if(result.err==0){   
        return result
    }else{
        console.log(result)
        throw result

    }
}
//删除
export const DelOrders=async (foodId)=>{
    let url='/hehe/admin/orders/delOrder'
    let result=await axios.post(url,{foodId})    
    if(result.err==0){        
        return result
    }else{
        console.log(result)
        throw result

    }
}
//添加
export const AddOrders=async (name,user,desc,price,pay,bill,time,mac)=>{
    console.log(name,user,desc,price,pay,bill,time,mac)
    let url='/hehe/admin/orders/addOrder'
    let result=await axios.post(url,{name,user,desc,price,pay,bill,time,mac})    
    if(result.err==0){        
        return result
    }else{
       
        throw result

    }
}
//修改
export const UpdateOrder=async (foodId,name,user,desc,price,pay,bill,time,mac)=>{
    let url='/hehe/admin/orders/updateOrder'
    let result=await axios.post(url,{foodId,name,user,desc,price,pay,bill,time,mac})    
    if(result.err==0){        
        return result
    }else{
        console.log(result)
        throw result

    }
}
//查询
export const getFoodsByKw=async (page,pageSize,kw)=>{
    let url='/hehe/admin/orders/getFoodsByKw'
    let result=await axios.get(url,{page,pageSize,kw})    
    if(result.err==0){        
        return result
    }else{
        console.log(result)
        throw result

    }
}