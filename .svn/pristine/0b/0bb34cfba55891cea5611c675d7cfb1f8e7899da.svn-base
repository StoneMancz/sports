<template>
  <div class="mainBox">
    <div class="locationItem flex_c">
        <img src="../assets/icon/locationIcon.png" alt="">
        <p>您当前的位置：首页  >  指导员培训教程  >  {{titleItem}}  >  {{name}}</p>
    </div>
    <div class="videoItem">
        <video :src="videoSrc" :poster="videoImg" :controls='controls' :muted="muteStatus">
        your browser does not support the video tag
      </video>
    </div>
    <div class="videoRow flex_jc">
        <span>这是项目视频标题这是项目视频标题</span>
        <span>立即考试</span>
    </div>
    <div class="titleItems">
        <span>留言板</span>
    </div>
    <div class="imgInputR">
        <div class="headImg">
            <img src="https://kxjs.zjjytech.com/uploads/20201010/ef36c912fa0dcc59f37199cf8f830460.jpg" alt="">
        </div>
        <div class="inputB">
           <input type="text" placeholder="我也说一句">
           <p>立即回复</p>
        </div>
    </div>
    <div>
        <!-- <ul>
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
        </ul> -->
    </div>
  </div>
</template>

<script>
export default {
    data () {
    return {
      videoSrc: 'https://kxjs.zjjytech.com/uploads/20201004/62f97f59bfcc3819fef7a3e692a54732.mp4',
      videoImg: 'https://kxjs.zjjytech.com/uploads/20201010/ef36c912fa0dcc59f37199cf8f830460.jpg',
      playStatus: '',
      muteStatus: '',
      isMute: true,
      isPlay: true,
      width: '820', // 设置视频播放器的显示宽度（以像素为单位）
      height: '500', // 设置视频播放器的显示高度（以像素为单位）
      preload: 'auto', //  建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
      controls: true, // 确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
    //   autoplay: ''
    name: ''
    }
  },
   mounted(){
        console.log(this.$route.query)
        let courseItem = this.$route.query
        this.name = courseItem.name
        this.titleItem = courseItem.titleItem
        console.log(courseItem.id)
        // this.detailData(courseItem.id)   
    }
}
</script>

<style lang="less">
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
    .videoItem {
        margin-top: 22px;
        video {
            width: 100%;
            height: 618px;
        }
    }
    .videoRow {
        margin: 20px 0 28px;
        span:nth-child(1) {
            font-size: 20px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #343434;
        }
        span:nth-child(2) {
            display: inline-block;
            text-align: center;
            line-height: 40px;
            width: 180px;
            height: 40px;
            background: #42D1C2;
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
        }
    }
    .titleItems {
        border-bottom: 1px solid #E5E5E5;
        margin-bottom: 38px;
        padding-bottom: 12px;
        span {
            font-size: 16px;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: #42D2C2;
            padding-bottom: 12px;
            border-bottom: 3px solid #42D2C2;
        }
    }
    .imgInputR {
        display: flex;
        margin-bottom: 50px;
        width: 100%;
        .headImg {
            width: 58px;
            height: 58px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 20px;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .inputB {
            width: 95%;
            input {
               width: 100%;
                height: 80px;
                background: #F7F8FA;
                border-radius: 4px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                // color: #C8C8C8;
                padding: 20px;
                outline: none;
                border: none;
                margin-bottom: 20px;
            }
            p {
                width: 100px;
                height: 30px;
                background: #42D1C2;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #FFFFFF;
                text-align: center;
                line-height: 30px;
            }
        }
    }
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
</style>