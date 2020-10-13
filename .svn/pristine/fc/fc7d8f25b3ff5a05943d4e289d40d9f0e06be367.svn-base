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
                       <p class="infoTitle">个人信息</p>
                       <ul class="fromUL">
                           <li v-for="(item,index) in infoList" :key="index" class="flex_c fromLi">
                               <span class="nameItem">{{item.title}}</span>
                               <!-- <input type="text" class="inputItem" v-model="item.name" v-if="index==0||index==1||index==2||index==3"> -->
                               <i-input :value.sync="item.name"  v-model="item.name"  :placeholder="item.place"  class="inputItem" v-if="index==0||index==1||index==2||index==3"></i-input>
                               <!-- 性别选择 -->
                               <div class="flex_c" v-if="index==4">
                                   <div class="sexItem flex_c" v-for="(item,index) in sexList" :key="index">
                                       <div class="circles flex_c" @click="circleshandel(index)">
                                           <span :class="index==sexIdx?'circlesActive':''"></span>
                                       </div>
                                        <span>{{item}}</span>
                                   </div>
                               </div>
                               <!-- 区域选择 -->
                               <div class="flex_c" v-if="index==5">
                                     <i-select :model.sync="model7" style="width:158px; height: 35px; margin-right: 10px">
                                        <Option-group label="区域">
                                            <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
                                        </Option-group>
                                    </i-select>
                                     <i-select :model.sync="model7" style="width:158px; height: 35px;">
                                        <Option-group label="区域">
                                            <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
                                        </Option-group>
                                    </i-select>
                               </div>
                               <!-- 学历 -->
                               <div class="flex_c" v-if="index==6">
                                     <i-select :model.sync="model7" style="width:326px; height: 35px;">
                                        <Option-group label="学历">
                                            <i-option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</i-option>
                                        </Option-group>
                                    </i-select>
                               </div>
                           </li>
                            <div class="confirmButton flex_c" @click="confirmButton">确认填写</div>
                            <p class="labelItem">*信息一旦提交无法修改，请确保填写的信息无误</p>
                       </ul>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Sidebar from '../common/Sidebar'
import { applyList } from '../api/index.js';
export default {
    components:{
       Sidebar
    },
     data(){
        return {
            // input
            infoList: [
                {
                    title: '姓名',
                    name: '',
                    place: '请输入姓名'
                },
                 {
                    title: '身份证',
                    name: '',
                    place: '请输入身份证号'
                },
                 {
                    title: '年龄',
                    name: '',
                    place: '请输入年龄'
                },
                 {
                    title: '手机',
                    name: '',
                    place: '请输入手机号码'
                },
                 {
                    title: '性别',
                    name: ''
                },
                 {
                    title: '区域',
                    name: ''
                },
                {
                    title: '学历',
                    name: ''
                },
            ],
            sexList: ['男','女'],//性别
            sexIdx: 0,//性别下标
            //区域选择
            areaList: [
                {},
                {}
            ],
            // 区域下标
            areaIdx: null,
            isShow: false,
               cityList: [
                    {
                        value: 'beijing',
                        label: '本科'
                    },
                    {
                        value: 'shanghai',
                        label: '大专'
                    },
                    {
                        value: 'shenzhen',
                        label: '研究生'
                    },
                    {
                        value: 'hangzhou',
                        label: '博士'
                    },
                    {
                        value: 'nanjing',
                        label: '高中'
                    },
                    {
                        value: 'chongqing',
                        label: '初中'
                    }
                ],
                model7: ''
        }
    },
    methods: {
        //性别选中
        circleshandel(index) {
            this.sexIdx = index
        },   
        // 区域选择
        areahandel(index) {
            this.areaIdx = index
            this.isShow = !this.isShow
        },
        confirmButton(e){
            console.log(e)
            let {infoList} = this
            var name = infoList[0].name,
                card = infoList[1].name,
                age = infoList[2].name,
                phone = infoList[3].name;
            console.log(name,card,age,phone)
            // var name = that.name;
            if(name=='') {
               alert('姓名不能为空')
            }
        },
        // 信息提交
        applyData(){
            var param = ""
            applyList(param).then(res => {
                console.log(res)
            })
        },
    },
}
</script>

<style lang="less" scoped>
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
                }
                .fromUL {
                    margin: 29px 0 0 17px;
                    .fromLi {
                        margin-bottom: 20px;
                      .nameItem {
                        font-size: 14px;
                        font-family: PingFang SC;
                        font-weight: 500;
                        color: #333333;
                        width: 80px;
                      }
                      .inputItem {
                        width: 326px;
                        height: 35px;
                        // background: #FFFFFF;
                        // border: 1px solid #EDEDED;
                        // padding-left: 10px;
                        // outline-color: #41D1C2;
                        box-sizing: border-box;
                        font-size: 14px;
                        font-family: PingFang SC;
                        font-weight: 500;
                        color: #8F8F8F;
                      }
                      .sexItem {
                        margin-right: 39px;
                        .circles {
                        width: 15px;
                        height: 15px;
                        border: 1px solid #41D1C2;
                        border-radius: 50%;
                        margin-right: 15px;
                        justify-content: center;
                        cursor: pointer;
                            .circlesActive {
                                width: 8px;
                                height: 8px;
                                background: #41D1C2;
                                border-radius: 50%;
                                display: inline-block;
                            }
                        }
                      } 
                      .areaBox {
                          position: relative;
                        .areaItem {
                            width: 158px;
                            height: 35px;
                            background: #FFFFFF;
                            border: 1px solid #EDEDED;
                            box-sizing: border-box;
                            cursor: pointer;
                            span {
                                font-size: 14px;
                                font-family: PingFang SC;
                                font-weight: 500;
                                color: #333333;
                                display: inline-block;
                                width: 80%;
                                text-align: center;
                            }
                            img {
                                width: 14px;
                                height: 8px;
                            }
                        } 
                        .areaUl {
                            position: absolute;
                            top: 35px;
                            width: 158px;
                            height: 0;
                            overflow: hidden;
                            transition: all .3s;
                            background: #FFFFFF;
                            li {
                                width: 80%;
                                text-align: center;
                                font-size: 14px;
                                font-family: PingFang SC;
                                font-weight: 500;
                                color: #333333;
                                padding: 10px 0;
                                cursor: pointer;
                            }
                            :hover {
                                background:#41D1C2;
                                color: #FFFFFF;
                            }
                          
                        }
                        .areaHeight {
                            height: auto;
                           transition: all .3s;
                        }
                      }
                      .education {
                        width: 326px!important;  
                        height: 35px;
                        border: 1px solid #EDEDED!important;
                        padding-left: 10px;
                        box-sizing: border-box;
                        text-align: center;
                        cursor: pointer;
                      }
                    }
                    .confirmButton {
                        width: 100px;
                        height: 30px;
                        background: #41D1C2;
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #FFFFFF;
                        justify-content: center;
                        margin: 40px 0 20px;
                        cursor: pointer;
                    }
                    .labelItem {
                        font-size: 12px;
                        font-family: PingFang SC;
                        font-weight: 500;
                        color: #FF382C;
                    }
                }
                
            }
        }
    }
</style>