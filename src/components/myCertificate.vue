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
                       <p class="infoTitle">我的证书</p>
                       <block v-if="testList==''">
                           <div class="noData">暂无数据</div>
                       </block>
                       <block v-else>
                             <ul>
                                <li class="flex_jc testLi" v-for="(item,index) in testList" :key="index" @click="goDetails(item.id,item.title,item.cert_url)">
                                    <div class="iconTxt flex_c">
                                        <img src="../assets/icon/certificate.png" alt="">
                                        <span>{{item.title}}</span>
                                    </div>
                                    <div class="timeItem">{{item.createtime}}</div>
                                </li>
                            </ul>
                            <div class="pageBox">
                                <Page :total="count" @on-change="pagehandel" class="pageStyle"></Page>   
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
import { certList } from '../api/index.js';
export default {
     components:{
       Sidebar,
    },
      data(){
        return {
           testList: [
              
           ],
        }
    },
    methods: {
        goDetails(id,title,cert_url) {
              this.$router.push({
                path: `/credentials`,
                 query:{
                    id,
                    title,
                    cert_url
                }
            })
        },
        pagehandel(val){
            this.certListData(val)
        },
        // 证书列表
        certListData(page){
                var params = page
                certList(params).then(res => {
                    console.log(res)
                    let {cert_list,count} = res.data
                    this.testList = cert_list
                     this.count = count
                })
            },

    },
    mounted(){
        this.certListData(1)
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
                        li {
                            width: 40px;
                            height: 40px;
                            background: #42D1C2;
                        border: 1px solid #F2F4F8;
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        }
                        .ivu-page-item-active {
                             background: #42D1C2!important;
                        }
                        
                    }
                }
                
            }
        }
    }

// .spanStyle2 {
//     width: 60px;
//     height: 40px;
//     background: #FFFFFF;
//     border: 1px solid #F2F4F8;
//     font-size: 14px; 
//     font-family: Microsoft YaHei;
//     font-weight: 400;
//     color: #343434;
//     display: inline-block;
//     line-height: 40px;
//     text-align: center;
//     cursor: pointer;
// }
//     .spanStyle1 {
//         display: inline-block;
//         // margin: 3px;
//         width: 40px;
//         height: 40px;
//         background: #FFFFFF;
//         border: 1px solid #F2F4F8;
//         line-height: 40px;
//         text-align: center;
//         cursor: pointer;
//         // color: pink;
//         // background: #fff;
//         // border-radius: 5px;
// }
// .spanStyle1.current-page,
// .spanStyle2:hover,
// .spanStyle1:hover {
//   color: #fff;
//   background: #41D1C2;
//   cursor: pointer;
// }









</style>