<template>
    <div class="classroom">
      <div class="classHeader">
        <span class="classTile">全民健身大课堂</span>
        <div>
          <span class="seeAll">查看全部</span>
          <img src="../assets/right.png" />
        </div>
      </div>
      <div class="classList">
        <div class="classObj">
          <img src="../assets/redImg1.png" />
          <span>CHINAFIT线上云展会企业入驻微视</span>
        </div>
        <div class="classObj">
          <img src="../assets/redImg2.png" />
          <span>2020CHINAFIT健身达人锻造营开始...</span>
        </div>
        <div class="classObj">
          <img src="../assets/redImg3.png" />
          <span>CHINAFIT线上云展会企业入驻微视</span>
        </div>
        <div class="classObj">
          <img src="../assets/redImg4.png" />
          <span>奥博力杯-DB精英赛总决赛暨黄金健...</span>
        </div>
        <div class="classObj">
          <img src="../assets/redImg1.png" />
          <span>CHINAFIT线上云展会企业入驻微视</span>
        </div>
        <div class="classObj">
          <img src="../assets/redImg2.png" />
          <span>2020CHINAFIT健身达人锻造营开始...</span>
        </div>
        <div class="classObj">
          <img src="../assets/redImg3.png" />
          <span>CHINAFIT线上云展会企业入驻微视</span>
        </div>
        <div class="classObj">
          <img src="../assets/redImg4.png" />
          <span>奥博力杯-DB精英赛总决赛暨黄金健...</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    
  .classroom {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 540px;
    margin-top: 42px;

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