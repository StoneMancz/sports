<template>
    <div class="backF9F9F9" >
        <div class="mainBox">
            <!-- 个人信息 -->
            <div class="perInfoBox">
                <!-- 左侧栏 -->
                <Sidebar></Sidebar>
                <!-- 右侧栏 -->
                <div class="perInfoRight">
                   <div class="infoContent">
                       <p class="infoTitle">资质查询</p>
                         <block v-if="queList==''">
                           <div class="noData">暂无数据</div>
                        </block>
                         <block>
                            <ul>
                                <li :class="index%2==0?'flex_jc proLi':'flex_jc proLi backItems'" v-for="(item,index) in queList" :key="index">
                                    <div class="proName flex_c">
                                        <img :src="index%2==0?img1:img2" alt="">
                                        <p :class="index%2==0?'':'proItems'">
                                            <span>通过项目：</span>
                                            <span>{{item.pro_name}}</span>
                                        </p>
                                    </div>
                                    <div :class="index%2==0?'timeItem':'proItems timeItem'">{{item.passtime}}</div>
                                </li>
                            </ul>
                         </block>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../common/Sidebar'
import { getRecord } from '../api/index.js';
export default {
     components:{
       Sidebar
    },
    data(){
        return {
            queList: [
               
            ],
            img1 : require("@/assets/icon/achieve1.png"),
            img2 : require("@/assets/icon/achieve2.png")
        }
    },
      methods: {
        // 资质查询
       getRecordData(){
            var param = {
                page: 1
            }
            getRecord(param).then(res => {
                console.log(res)
                let {list} = res.data
                this.queList = list
            })
        },
    },
    
    mounted(){
        this.getRecordData()
    },
}
</script>

<style  lang="less" scoped>

     .proItems {
            color: #42D2C2!important;
        }
    .perInfoBox { 
        padding: 20px 0;
        display: flex;
        // 右侧栏
        .perInfoRight {
            width: 710px;
            height: 600px;
            background: #FFFFFF;
            box-sizing: border-box;
            .infoContent {
                margin: 0 25px;
                .infoTitle {
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #000000;
                    border-bottom: 1px solid #B5B6B8;
                    padding-bottom: 14px;
                    padding-top: 30px;
                    margin-bottom: 29px;
                }
                .proLi {
                    width: 100%;
                    height: 70px;
                    background: #42D1C2;
                    box-sizing: border-box;
                    padding: 0 29px 0 24px;
                    margin-bottom: 15px;
                    .proName {
                        img {
                            width: 25px;
                            height: 25px;
                            margin-right: 10px;
                        }
                        p {
                            font-size: 16px;
                            font-family: Microsoft YaHei;
                            font-weight: bold;
                            color: #FFFFFF;
                            span:nth-child {
                                padding-right: 11px;
                            }
                        }
                       
                    }
                    .timeItem {
                        font-size: 14px;
                        font-family: Arial;
                        font-weight: bold;
                        color: #FFFFFF;
                    }
                }
                .backItems {
                    background: #E4FFFC!important;
                }
            }
        }
    }
</style>