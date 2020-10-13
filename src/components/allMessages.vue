<template>
<div style="background-color:  #F9F9F9;">
    <div class="mainBox messageBox">
        <block v-if="messageList==''">
            <div class="noData">暂无数据</div>
        </block>
        <block v-else>
            <ul>
                <li class="messageLi" v-for="(item,index) in messageList" :key="index">
           
                    <div class="headImg">
                        <img :src="item.user.avatar" alt="">
                    </div>
                    <div class="rightItems">
                        <p>{{item.user.nickname}}</p>
                        <p class="fontStyle">
                        {{item.content}}
                            </p>
                            <p>{{item.createtime}}</p>
                            <p v-if="item.reply_content!==''">
                                <span class="fontStyle" style="color: #000000;padding-right: 15px;">教练回复：</span>
                                <span class="fontStyle">{{item.reply_content}}</span>
                            </p>
                    </div>
                </li>
            </ul>
            <div class="pageStyle">
                <Page :total="count" show-elevator @on-change="pagehandel"></Page>
            </div>
        </block>
    </div>
    <div style="height: 30px;"></div>
  </div>
</template>

<script>
import { commentList } from '../api/index.js';
export default {
    data(){
        return {
            messageList: [
                {},{},{}
            ]
        }
    },
    methods: {
         // 考试列表
       commentListData(page){
            var params = page;
            commentList(params).then(res => {
                console.log(res)
                let {list,count} = res.data
                this.messageList = list
                this.count = count
            })
        },
         pagehandel(val){
            console.log(val)
             this.commentListData(val)
        },
    },
    mounted(){
        this.commentListData(1)
    },
}
</script>

<style lang="less" scoped>

    .messageBox {
        background-color: #ffffff;
        padding-top: 40px;
      
        .messageLi {
            display: flex;
            justify-content: space-between;
            padding: 0 60px 30px;
            // margin-bottom: 30px;
            .headImg {
                width: 56px;
                height: 56px;
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .rightItems {
                width: 996px;
                border-bottom: 1px solid #F4F4F4;
                padding-bottom: 28px;
                p:nth-child(1) {
                    height: 16px;
                    line-height: 16px;
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: #000000;
                }
                p:nth-child(2) { 
                    height: 38px;
                    // line-height: 38px;
                    margin: 20px 0 15px;
                }
                p:nth-child(3) {
                    font-size: 12px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #8F8F8F;
                    line-height: 9px;
                    height: 9px;
                    margin-bottom: 20px;
                }
                .fontStyle {
                    font-size: 14px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #333333;
                }
            }
        }
        .pageStyle {
            display: flex;
            justify-content: center;
            padding-bottom: 42px;
            margin-top: 75px;
        }
    }
</style>>

