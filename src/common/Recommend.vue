<template>
  <div class="recommend">
    <div class="redHeader">
      <span class="redTile">推荐指导站</span>
      <div @click="seeAll">
        <span class="seeAll">查看全部</span>
        <img src="../assets/right.png" />
      </div>
    </div>
    <RecommendList style="margin-top:30px;"></RecommendList>
  </div>
</template>

<script>
import RecommendList from '../common/RecommendList'
export default {
  data(){
    return {}
  },
  components:{
    RecommendList
  },
  mounted(){},
  methods:{
    seeAll(){
      this.$router.push('/guide')
    }
  }
};
</script>

<style lang="stylus" scoped>
.recommend {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 42px;
  margin-bottom: 50px;

  .redHeader {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    height: 40px;
    border-bottom: 1px solid #DCDCDC;

    .redTile {
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
}
</style>