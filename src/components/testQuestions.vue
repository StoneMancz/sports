

<template>
<div style="background-color:  #F9F9F9;">
    <div class="mainBox testBox">
        <div class="testContent">
            <p class="flex_jc">
                <span>简答题</span>
                <span>10/40</span>
            </p>
            <p class="labelITem">这里是选择题的问题描述这里是选择题的问题描述这里是选择题的问题描述？</p>
            <div class="textareaItem">
                <textarea name="" id="" cols="30" rows="10" placeholder="请输入答案"></textarea>
            </div>
            <div >
                <div class="buttonNext">下一题</div>
            </div>
        </div>
    </div>
    <div style="height: 30px;"></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            messageList: [
                {},{},{}
            ]
        }
    }
}
</script>

<style lang="less" scoped>

    .testBox {
        background-color: #ffffff;
        padding-top: 32px;
        position: relative;
        height: 600px;
        .testContent {
            width: 680px;
            height: 100%;
            margin: 0 auto;
            p:nth-child(1) {
                border-bottom: 1px solid #E5E5E5;
                padding-bottom: 16px;
                 margin-bottom: 20px;
                span {
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #343434;
                }
                
            }
             p:nth-child(2) {
                font-size: 20px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #343434;
                margin-bottom: 40px;
            }
            .textareaItem {
                textarea {
                    width: 100%;
                    height: 237px;
                    background: #F7F8FA;
                    border-radius: 4px;
                    border: none;
                    font-size: 18px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #8F8F8F;
                    padding: 30px 0 0 35px;
                    box-sizing: border-box;
                    outline-color: #41D1C2;
                }
            }
            .buttonNext {
                width: 400px;
                height: 50px;
                background: #42D1C2;
                font-size: 20px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #FFFFFF;
                text-align: center;
                line-height: 50px;
                margin: 0 auto;
                position: absolute;
                bottom: 50px;
                left: 0;
                right: 0;
                cursor: pointer;
            }
        }
        
    }
</style>>

