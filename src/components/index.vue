<template>
    <div class="contentWrap">
        <div class="header">
            <div class="logIn">
                <img src="../assets/headLogo.png">
                <div>扫码登录</div> 
            </div>
            <div class="routingSwitch">
                <div class="active">
                    <span>首页</span>
                </div>
                <div>
                    <span>全部指导站</span>
                </div>
                <div>
                    <span>全民健身大课堂</span>
                </div>
                <div>
                    <span>指导员培训教程</span>
                </div>
                <div>
                    <span>所有消息</span>
                </div>
                <div style="margin-right:0;">
                    <span>我的</span>
                </div>
            </div>
        </div>
        <div class="poster">
            <img src="../assets/poster.png">
        </div>
        <div class="exam">
            <div class="examItem" style="margin-right:21px;">
                <img src="../assets/basicImg.png">
                <div class="basicDesc">
                    <div class="title">基础考试</div>
                    <div class="desc">Basic examination</div>
                </div>
            </div>
            <div class="examItem">
                <img src="../assets/individual.png">
                <div class="basicDesc">
                    <div class="title">单项考试</div>
                    <div class="desc">Individual examination</div>
                </div>
            </div>
        </div>
        <div class="recommend">
            <div class="redHeader">
              <span class="recTile">推荐指导站</span>
              <div>
                  <span class="seeAll">查看全部</span>
                  <img src="../assets/right.png">
              </div>
            </div>
            <div class="recdList">
                <div class="recObj">
                    <img src="../assets/redImg1.png">
                    <span>CHINAFIT线上云展会企业入驻微视</span>
                </div>
                <div class="recObj">
                    <img src="../assets/redImg2.png">
                    <span>2020CHINAFIT健身达人锻造营开始...</span>
                </div>
                <div class="recObj">
                    <img src="../assets/redImg3.png">
                    <span>CHINAFIT线上云展会企业入驻微视</span>
                </div>
                <div class="recObj">
                    <img src="../assets/redImg4.png">
                    <span>奥博力杯-DB精英赛总决赛暨黄金健...</span>
                </div>
            </div>
        </div>
        <div class="classroom">classroom</div>
        <div class="bottom">bottom</div>
    </div>
</template>
<script>
export default {}
</script>

<style lang="stylus" scoped>
    .contentWrap{
        display flex;
        width:100%;
        flex-direction column
        justify-content center;
        align-content center;
        box-sizing:border-box;
        .header{
            width 100%;
            height 159px;
            box-sizing:border-box;
            border-bottom 2px solid #41D1C2

            .logIn{
                display flex;
                justify-content:space-between;
                padding-left:378px;
                padding-right:380px;
                margin-top 30px;
                height 50px;
            }

            .logIn img{
                width 300px;
                height 50px
            }

            .logIn div{
                margin-top 15px;
                width: 120px;
                height: 35px;
                cursor pointer;
                text-align center;
                line-height 35px;
                background: #41D1C2;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #FFFFFF;
            }

            .routingSwitch{
                display flex;
                padding-left:360px;
                padding-right:360px;
                margin-top:36px;

                .active{
                    border-bottom 4px solid #41D1C2;
                }
            }
            

            .routingSwitch div{
                width 120px;
                height 37px;
                margin-right 95px;
                text-align center;
                cursor pointer;
            }

            .routingSwitch div span{
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: bold;
                color: #333333;
            }
        }

        .poster{
            box-sizing:border-box;
            padding-left:360px;
            padding-right:360px;
            img{
                margin-top 26px;
                width 1200px;
                height 428px;
            }
        }

        .exam{
            margin-top 50px;
            box-sizing:border-box;
            padding-left:360px;
            padding-right:360px;
            display flex;
            .examItem{
                position:relative;
                width 590px;
                height 200px;
                img{
                    position absolute;
                    top:0;
                    left:0;
                    width 590px;
                    height 200px;
                }

                .basicDesc{
                    position relative;
                    padding-left:44px;
                    .title{
                        margin-top:70px;
                        font-size: 30px;
                        font-family: PingFang SC;
                        font-weight: bold;
                        color: #FFFFFF;
                    }

                    .desc{
                        margin-top:30px;
                        font-size: 18px;
                        font-family: Arial;
                        font-weight: 400;
                        color: #FFFFFF;
                    }
                }
            }
        }

        .recommend{
            padding-left:360px;
            padding-right:360px;
            height 540px;
            margin-top:42px;
            .redHeader{
                display flex;
                justify-content space-between
                height 40px;
                border-bottom 1px solid #DCDCDC;
                .recTile{
                    font-size: 20px;
                    font-family: Microsoft YaHei;
                    font-weight: bold;
                    color: #333333;
                }

                .seeAll{
                    cursor pointer;
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #8F8F8F;
                }

                img{
                  cursor pointer;
                  width: 7px;
                  height: 13px;
                  margin-left 9px;
                }
            }

            .recdList{
                .recObj{
                    display flex;
                    flex-direction column;
                    margin-top 30px;
                    img{
                        width 258px;
                        height 160px
                    }
                    span{
                        width: 251px;
                        height: 16px;
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #000000;
                        line-height: 156px;
                    }
                }
            }

            
        }
    }
</style>