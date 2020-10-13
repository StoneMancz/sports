<template>
    <div>
        <div class="mainBox">
            <div class="locationItem flex_c">
                <img src="../assets/icon/locationIcon.png" alt="">
                <p>您当前的位置：首页  >  指导员培训教程</p>
            </div>
            <ul class="flex_jc" style="margin: 40px 0 472px">
                <li v-for="(item,index) in testNav" :key="index" @click="gotest(index)">
                    <div class="testItems flex_c">
                        <img :src="item.img" alt="">
                        <div class="textItem">
                            <p>{{item.title}}</p>
                            <p>{{item.eng}}</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="modelBox" v-show="isShow">
            <div class="modelItem"></div>
            <div class="modelContent flex_c">
                <div class="contentItem flex_c">
                    <p>温馨提示</p>
                    <p  v-if="idx==0">您当前未填写个人信息，无法报考考试</p>
                    <p  v-else>您当前未通过基础考试，无法报考单项考试</p>
                    <div class="buttonItems flex_c">
                        <span class="flex_c" style="margin-right: 10px" @click="handelButton(1)">不学也可以</span>
                        <span class="flex_c" @click="handelButton(2)" v-if="idx==0">完善个人信息</span>
                        <span class="flex_c" @click="handelButton(2)" v-else>报考基础考试</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
 import { getApplyRe } from '../api/index.js';
export default {
   
    data(){
        return {
            messageList: [
                {},{},{}
            ],
            testNav: [
                {
                    img: require("@/assets/basicImg.png"),
                    title: '基础考试',
                    eng: 'Basic examination'
                },
                {
                    img: require("@/assets/individual.png"),
                    title: '单项考试',
                    eng: 'Individual examination'
                },
            ],
            isShow: false,
            is_real: '',
            idx: ''
        }
    },
    methods: {
        gotest(idx){
            this.idx = idx
            this.getApplyReData(idx+1)
            // if(this.is_real==1) {
            //      this.isShow = true
            //     this.stop()
            // }
            // if(idx==0) {
               
            // }
        },
        // 弹框的显示隐藏
        handelButton(item) {
            if(item==1) {
                this.isShow = false
                this.move()
            }else if(item==2) {
               this.$router.push('/personalInfo')
                this.move()
            }
        },
        //禁止滚动
        stop(){
            var mo=function(e){e.preventDefault();};
            document.body.style.overflow='hidden';
            document.addEventListener("touchmove",mo,false);//禁止页面滑动
        },
        /***取消滑动限制***/
        move(){
            var mo=function(e){e.preventDefault();};
            document.body.style.overflow='';//出现滚动条
            document.removeEventListener("touchmove",mo,false);
        },
        // 获取个人信息
         // 获取用户信息
       getApplyReData(level){
            var param = level
            getApplyRe(param).then(res => {
                console.log(res)
                let {check_state} = res.data
                if(level=='1'){
                     if(check_state == '-1'){
                        this.isShow = true
                        this.stop()
                     }else if(check_state==1) {
                          this.$router.push({
                                path: `/studyList`,
                                query:{
                                   level: 1,
                                   name: '理论考试'
                                }
                            })
                     } 
                }else if(level==2){
                    if(check_state == '-1'){
                        this.isShow = true
                        this.stop()
                    }else if(check_state == '0') {
                        this.isShow = true
                        this.stop()
                    }
                }
               
                // this.is_real = info.is_real
            })
        },
    },
    mounted(){
        // this.userInfoData()
    },

}
</script>

<style lang="less" scoped>
    .locationItem {
        margin-top: 22px;
        img {
            width: 12px;
            height: 16px;
            margin-right: 12px;
            object-fit: cover;
        }
        p {
            height: 12px;
            line-height: 12px;
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #333333;
        }
    }
   .testItems {
       position: relative;
       img {
           width: 590px;
           height: 200px;
       }
       .textItem {
           cursor: pointer;
           position: absolute;
           top: 0;
           left: 44px;
           right: 0;
           bottom: 0;
           display: flex;
           flex-direction: column;
           justify-content: center;
           p:nth-child(1) {
            line-height: 29px;   
            height: 29px;
            font-size: 30px;
            font-family: PingFang SC;
            font-weight: bold;
            color: #FFFFFF;
            margin-bottom: 29px;
           }
           p:nth-child(2) {
            font-size: 18px;
            font-family: Arial;
            font-weight: 400;
            color: #FFFFFF;
            height: 13px;
            line-height: 13px;
           }
       }
   }

   .modelBox {
       position: fixed;
       top: 0;
       left: 0;
       bottom: 0;
       right: 0;
       overflow: hidden;
       .modelItem {
           width: 100%;
           height: 100%;
            background: #000000;
            opacity: 0.5;
            z-index: 99;
       }
       .modelContent {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            justify-content: center;
            .contentItem {
                width: 440px;
                height: 173px;
                background: #FFFFFF;
                z-index: 99999;
                flex-direction: column;
                justify-content: center;
                p:nth-child(1) {
                    line-height: 18px;
                    height: 18px;
                    font-size: 18px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: #333333;
                }
                 p:nth-child(2) {
                    height: 15px;
                    line-height: 15px;
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #999999;
                    margin: 14px 0 26px;
                 }
                 .buttonItems {
                     span {
                        width: 120px;
                        height: 40px;
                        justify-content: center;
                        cursor: pointer;
                     }
                     span:nth-child(1) {
                        background: #FFFFFF;
                        border: 1px solid #CCCED5;
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #999999;
                     }
                    span:nth-child(2) {
                        font-size: 14px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #FFFFFF;
                        background: #41D1C2;
                    }
                 }
            }
       }
   }
</style>>

