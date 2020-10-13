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
                       <p class="infoTitle">我的证书 > {{title}}</p>
                       <!-- 考试列表 -->
                        <div class="flex_c credentialsBox">
                            <div class="credentialsImg">
                                <img :src="cert_url" alt="">
                            </div>
                        </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../common/Sidebar'
export default {
     components:{
       Sidebar
    },
    data(){
        return {
            title: '',
            cert_url: ''
        }
    },
    methods: {
       
    },
    mounted(){
        console.log(this.$route.query)
        let testData = this.$route.query
        this.title = testData.title
        this.cert_url = testData.cert_url 
    }
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
                .credentialsBox {
                    justify-content: center;
                    .credentialsImg {
                        width: 327px;
                        height: 479px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
               
            }
        }
    }
</style>