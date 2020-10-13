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
                       <p class="infoTitle">我的考试</p>
                       <!-- 考试列表 -->
                       <block v-if="testList==''">
                           <div class="noData">暂无数据</div>
                       </block>
                       <block v-else>
                            <ul>
                                <li class="flex_jc testLi" v-for="(item,index) in testList" :key="index" @click="gotextStatus(item.id,item.exams.plan_name)">
                                    <div class="iconTxt flex_c">
                                        <img src="../assets/icon/exam.png" alt="">
                                        <span>{{item.exams.plan_name}}</span>
                                    </div>
                                    <div class="timeItem">{{item.exams.endtime_text}}</div>
                                </li>
                            </ul>
                            <div class="pageBox">
                                <Page :total="count" @on-change="pagehandel"></Page>   
                            </div>
                        </block>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../common/Sidebar'
import { userExamList } from '../api/index.js';
export default {
     components:{
       Sidebar
    },
    data(){
        return {
           testList: [],
           count: 20
        }
    },
    methods: {
        pagehandel(val){
            console.log(val)
             this.userExamListData(val)
        },
        gotextStatus(id,plan_name){
            console.log(id,plan_name)
             this.$router.push({
                path: `/testStatus`,
                query:{
                    id,
                    plan_name
                }
            })

        },
      
        // 考试列表
       userExamListData(page){
            var params = page;
            userExamList(params).then(res => {
                console.log(res)
                let {kaoshi_list,count} = res.data
                this.testList = kaoshi_list
                this.count = count
            })
        },
    },
    
    mounted(){
        this.userExamListData(1)
        
    },
}
</script>

<style  lang="less" scoped>
    .perInfoBox { 
        padding: 20px 0;
        display: flex;
        // 右侧栏
        .perInfoRight {
            width: 710px;
            min-height: 600px;
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
                    margin-bottom: 28px;
                }
                .testLi {
                    border-bottom: 1px solid #EFF0F0;
                    padding-bottom: 22px;
                    margin-bottom: 27px;
                    cursor: pointer;
                    .iconTxt {
                        img {
                            width: 25px;
                            height: 25px;
                            margin-right: 12px;
                        }
                        span {
                            font-size: 16px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: #343434;
                        }
                    }
                    .timeItem {
                        font-size: 14px;
                        font-family: Arial;
                        font-weight: 400;
                        color: #888888;
                    }
                }
                .pageBox {
                    display: flex;
                    justify-content: center;
                    margin-top: 55px;
                    .pageStyle {
                        width: 40px;
                        height: 40px;
                        background: #42D1C2;
                        border: 1px solid #F2F4F8;
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                    }
                }
                
            }
        }
    }
</style>