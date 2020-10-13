<template>
  <div class="contentWrap">
    <div class="filterGuide">
      <div class="position">
        <img src="../assets/place.png" />
        <span> 您当前的位置：首页 > 全部指导站 </span>
      </div>
      <div class="filter">
        <div class="area">
          <span>区域：</span>
          <span @click="selectArea('')">不限</span>
          <span v-for="(item,index) in areaData" :key="index" @click="selectArea(item.id)"
          :class="idx==index?'hover':''">
            {{item.name}}
          </span>
        </div>
        <div>
          <span>项目：</span>
          <span>不限</span>
          <span v-for="(item1,index1) in initItem" :key="index1">{{item1.name}}</span>
        </div>
      </div>
      <div class="dividing"></div>
      <RecommendList></RecommendList>
    </div>
  </div>
</template>

<script>
import RecommendList from '../common/RecommendList'
import {getArea,getProList_} from '../api/index'
export default {
  data(){
    return {
      areaData:[],
      initItem:[],
      index:0,
      index1:0
    }
  },
  components: {
    RecommendList
  },
  mounted(){
    this.initAreaData('');
    this.initItemfn();
  },
  methods:{
    initAreaData(pid){
      let params={
        params:{
          pid:pid
        }
      }
      getArea(params).then((res)=>{
        this.areaData=res.data.area_list;
      })
    },
    initItemfn(){
      let params="";
      getProList_(params).then((res)=>{
        this.initItem=res.data.list;
      })
    },
    selectArea(id){
      //筛选区域
      this.initAreaData(id);
      //筛选指导站
      this.index=id;
    }
  }
};
</script>

<style lang="stylus" scoped>
.contentWrap {
  display: flex;
  width: 100%;
  overflow-x: hidden;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;

  .filterGuide {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F9F9F9;
    min-height: 1153px;

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

    .filter {
      margin-top: 25px;
      width: 1200px;
      height: 120px;
      background: #FFFFFF;

      div {
        margin-left: 31px;

        span {
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #333333;
          margin-left: 33px;
        }

        .hover{
          width: 48px;
          height: 15px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #41D1C2;
        }
      }

      .area {
        margin-top: 30px;
        margin-bottom: 25px;
        cursor pointer;
      }

     
    }

    .dividing {
      margin-top: 30px;
      width: 1200px;
      height: 1px;
      background: #DCDCDC;
      margin-bottom: 30px;
    }

    .roomList {
      width: 1200px;

      .roomObj {
        margin-top: 30px;
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
              margin-top: 15px;
              font-size: 16px;
              font-family: Microsoft YaHei;
              font-weight: 400;
              color: #8F8F8F;
            }
          }

          .stationContent:first-child {
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
  }
}
</style>