<template>
  <div>
    <div class="roomList">
        <div
        class="roomObj"
        v-for="(item, index) in instructor_list"
        :key="index"
        >
        <div class="stationHeader">
            <img :src="item.pro.cover_img" />
            <div class="stationContent">
            <span class="site_name">{{ item.site_name }}</span>
            <span class="stationDesc"
                >长沙市{{ item.city }} {{ item.address }}</span
            >
            </div>
        </div>
        <div class="contact">
            <div class="conHeader">
            <div class="projectName">项目</div>
            <div class="projectDesc">{{ item.pro.name }}</div>
            </div>
            <div class="contactDetails">
            <div class="person">联系人</div>

            <div class="personDetails">
                <span>{{ item.user_name }}</span>
                <span>{{ item.user_phone }}</span>
            </div>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import { site_List } from "../api/index.js";
export default {
  data() {
    return {
      instructor_list: [],
    };
  },
  mounted() {
    //获取指导员站列表
    this.site_lists();
  },
  methods: {
    site_lists() {
      let params = "";
      site_List(params).then((res) => {
        console.log(res);
        this.instructor_list = res.data.site_list;
      });
    },
    seeAll() {
      this.$router.push("/guide");
    },
  },
};
</script>

<style lang="stylus" scoped>
.roomList {
  width: 1200px;
  .roomObj {
    cursor pointer;
    float: left;
    display: flex;
    margin-right: 10px;
    flex-direction: column;
    width: 380px;
    height: 220px;
    background: #FFFFFF;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 15px;
    padding-top: 20px;

    .stationHeader {
      display: flex;
      height: 98px;
      border-bottom: 1px solid #EFEFF4;

      img {
        width: 58px;
        height: 58px;
      }

      .stationContent {
        display: flex;
        flex-direction: column;
        margin-left: 15px;

        .stationDesc {
          margin-top: 10px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #8F8F8F;
        }
      }

      .site_name {
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #000000;
      }
    }
  }

  .contact {
    display: flex;
    flex-direction: column;

    .conHeader {
      margin-top: 27px;
      display: flex;

      .projectName {
        width: 60px;
        height: 25px;
        background: #41D1C2;
        border-radius: 4px;
        text-align: center;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
      }

      .projectDesc {
        margin-left: 15px;
      }
    }

    .contactDetails {
      margin-top: 15px;
      display: flex;

      .person {
        width: 60px;
        height: 25px;
        background: #2178FB;
        border-radius: 4px;
        text-align: center;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #FFFFFF;
      }

      .personDetails {
        margin-left: 15px;
      }

      .personDetails span {
        margin-right: 14px;
      }
    }
  }
}
</style>