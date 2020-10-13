
import axios from 'axios'
import qs from 'qs'



//立即支付
export const paycode = params => {
    return axios.post('recharge/payCode.do',qs.stringify(params)).then(res=>res.data)
}
//个人信息
export const  applyList = params => {
    return axios.get('/api/instructor/apply',params).then(res => res.data).catch((response)=>{
         console.log(response);
     })
}
//首页轮播图
export const carousel = params =>{
    return axios.get('/api/index',params).then(res=>res.data).catch(()=>{})
}

//获取指导员列表
export const Instructor= params =>{
    return axios.get('/api/instructor/index',params).then(res=>res.data).catch(()=>{})
}

//获取指导站列表
export const site_List=params =>{
    return axios.get('/api/index',params).then(res=>res.data).catch(()=>{})
}

//获取全民健身大课堂
export const videoList=params=>{
    return axios.get('/api/index/videoList',params).then(res=>res.data).catch(()=>{})
}

//获取区，街的接口
export const getArea=params=>{
    return axios.get('api/index/getArea',params).then(res=>res.data).catch(()=>{})
}

//获取项目的接口
export const getProList_=params=>{
    return axios.get('api/instructor/getProList',params).then(res=>res.data).catch(()=>{})
}
// 获取用户信息
export const  userInfo = params => {
    return axios.get('/api/user/userInfo',params).then(res => res.data).catch((response)=>{
         console.log(response);
     })
}
// 考试列表
export const  userExamList = params => {
    return axios.get('/api/user/userExamList?page='+params).then(res => res.data).catch((response)=>{
         console.log(response);
     })
}
// 证书列表
export const  certList = params => {
    return axios.get('/api/user/certList?page='+params).then(res => res.data).catch((response)=>{
         console.log(response);
     })
}
// 资质查询
export const  getRecord = params => {
    return axios.get('/api/user/getRecord',params).then(res => res.data).catch((response)=>{
         console.log(response);
     })
}
//考试分数
export const  detail = params => {
    return axios.get('/api/exams/detail?id='+params).then(res => res.data).catch((response)=>{
         console.log(response);
     })
}
//所有消息
export const  commentList = params => {
    return axios.get('/api/user/commentList?page='+params).then(res => res.data).catch((response)=>{
         console.log(response);
     })
}
//判断是否可以考试
export const  getApplyRe = params => {
    return axios.get('/api/user/getApplyRe?level='+params).then(res => res.data).catch((response)=>{
         console.log(response);
     })
}
//学习列表
export const  getProList = params => {
    return axios.get('/api/instructor/getProList?page='+params.page+'&level='+params.level).then(res => res.data).catch((response)=>{
         console.log(response);
     })
}
// 课程详情
export const  proInfo = params => {
    return axios.get('/api/instructor/proInfo?project_id='+params).then(res => res.data).catch((response)=>{
         console.log(response);
     })
}