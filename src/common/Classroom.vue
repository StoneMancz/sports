<template>
  <div class="classroom">
    <div class="classHeader">
      <span class="classTile">全民健身大课堂</span>
      <div @click="seeAll">
        <span class="seeAll">查看全部</span>
        <img src="../assets/right.png" />
      </div>
    </div>
    <div class="classList">
      <div class="classObj" v-for="(item, index) in classList" :key="index">
        <video id="myVideo"  style="height: 160px;width: 285px;background-color: white;" class="video-js vjs-default-skin vjs-big-play-centered" :poster="item.cover_img"
        controls
        preload="auto">
          <source :src="item.url" type="video/mp4"/>
        </video>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { videoList } from "../api/index";
// import videojs from "video.js";
export default {
  name: "",
  data() {
    return {
      classList: [],
      player: null
    };
  },
  mounted() {
    this.initVideoList();
  },
  methods: {
    initVideoList() {
      let params = "";
      videoList(params).then((res) => {
        this.classList = res.data.list;
      });
    },
    seeAll(){
      this.$router.push("/classroom");
    }
  },
};
</script>

<style lang="stylus" scoped>
.classroom {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 540px;
  margin-top: 42px;
  margin-bottom 100px;

  .classHeader {
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 1200px;
    border-bottom: 1px solid #DCDCDC;

    .classTile {
      font-size: 20px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #333333;
    }

    .seeAll {
      cursor: pointer;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #8F8F8F;
    }

    img {
      cursor: pointer;
      width: 7px;
      height: 13px;
      margin-left: 9px;
    }
  }

  .classList {
    width: 1200px;

    .classObj {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      float: left;
      margin-right: 15px;
      width: 285px;
      height: 196px;
      box-sizing: border-box;

      .videobox {
        width: 100%;
        height: 160px;
      }

      span {
        margin-top: 20px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #000000;
      }
    }
  }
}
</style>