<template>
   <div class="perInfoLeft">
        <!-- 信息 -->
        <div class="headTxt flex_c">
            <div class="headImg">
                <img :src="info.avatar" alt="">
            </div>
            <div>
                <div class="flex_c name_item">
                    <span>{{info.nickname}}</span>
                    <span>{{info.level==0?'学员':'指导员'}}</span>
                </div>
                <div class="postTxt">{{info._level_name}}</div>
            </div>
        </div>
        <!-- 导航入口 -->
        <ul class="navBox flex_jc">
            <li v-for="(item,index) in navList" :key="index" class="flex_c" @click="navhandel(index,item.path)">
                <span :class="[index==current?'lineActive':'lineItem']"></span>
                <span :class="[index==current?'spanActive':'']">{{item.title}}</span>
            </li>
        </ul>
        <router-view></router-view>
    </div>
    
</template>

<script>
import { userInfo } from '../api/index.js';
export default {
     data(){
        return {
            current: 0,
            navList: [
                {
                    title: '我的考试',
                    path: '/myTest'
                },
                {
                    title: '我的证书',
                    path: '/myCertificate'

                },
                 {
                    title: '资质查询',
                    path: '/qualification'
                },
                 {
                    title: '个人信息',
                     path: '/personalInfo'
                },
            ],
            info:[]
        }
    },
   
   methods: {
         navhandel(index,path){
              this.current = index
            this.$router.replace(path) 
            console.log(index)
        },
        // 获取用户信息
       userInfoData(){
            var param = ""
            userInfo(param).then(res => {
                console.log(res)
                let {info} = res.data
                this.info = info
            })
        },
    },
    mounted(){
        this.userInfoData()
        console.log(this.$route)
        if(this.$route.meta.Index){
        this.current = this.$route.meta.Index;
        }else{
        this.current = 0;
    }
  }
}
</script>

<style lang="less" scoped>
      .perInfoLeft {
            width: 280px;
            margin-right: 10px;
            .headTxt {
                width: 100%;
                height: 110px;
                background: #FFFFFF;
                margin-bottom: 10px;
                padding-left: 20px;
                box-sizing: border-box;
                .headImg {
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-right: 17px;
                    img {
                        width: 100%;
                        height: 100%;
                        // object-fit: contain;
                    }
                }
                .name_item {
                    margin-bottom: 15px;
                    span:first-child {
                        font-size: 20px;
                        font-family: PingFang SC;
                        font-weight: 500;
                        color: #343434;
                    }
                    span:last-child {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 60px;
                        height: 25px;
                        background: #42D1C2;
                        border-radius: 13px;
                        font-size: 14px;
                        font-family: PingFang SC;
                        font-weight: 500;
                        color: #FFFFFF;
                        margin-left: 12px;
                    }
                }
                .postTxt {
                    line-height: 16px;
                    height: 16px;
                    font-size: 16px;
                    font-family: PingFang SC;
                    font-weight: 500;
                    color: #343434;
                }
            }
            .navBox {
                height: 320px;
                background: #FFFFFF;
                box-sizing: border-box;
                flex-direction: column;
                padding: 32px 0;
                li {
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: #343434;
                    width: 100%;
                    cursor: pointer;
                    .lineActive {
                        width: 6px;
                        height: 35px;
                        background: #42D1C2;
                        display: inline-block;
                    }
                    .lineItem {
                         width: 6px;
                        height: 35px;
                        display: inline-block; 
                    }
                    .spanActive {
                        color: #42D2C2!important;
                    }
                    span:last-child {
                        width: 94%;
                        text-align: center;
                    }
                }
            }
        }
</style>