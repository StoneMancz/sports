<template>
  <div class="contentWrap">
    <div class="position">
      <img src="../assets/place.png" />
      <span> 您当前的位置：首页 > 全民健身大课堂 </span>
    </div>

    <div class="classList">
      <div class="classObj" v-for="(item, index) in classList" :key="index">
        <video
          id="myVideo"
          style="height: 160px; width: 285px; background-color: white"
          class="video-js vjs-default-skin vjs-big-play-centered"
          :poster="item.cover_img"
          controls
          preload="auto">
          <source :src="item.url" type="video/mp4" />
        </video>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { videoList } from "../api/index";
export default {
  data() {
    return {
      classList: [],
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
  },
};
</script>

<style lang="stylus" scoped>
.contentWrap {
  display: flex;
  width: 100%;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  .position {
    margin-top: 20px;
    width: 1200px;
    display: flex;
    align-items: center;

    span {
      height: 12px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }
  }

  .classList {
    width: 1200px;
    margin-bottom: 60px;

    .classObj {
      display: flex;
      flex-direction: column;
      margin-top: 30px;
      float: left;
      margin-right: 15px;
      width: 285px;
      height: 196px;
      box-sizing: border-box;

      img {
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