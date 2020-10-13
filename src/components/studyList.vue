<template>
    <div class="mainBox">
        <div class="locationItem flex_c">
            <img src="../assets/icon/locationIcon.png" alt="">
            <p>您当前的位置：首页  >  指导员培训教程  >  {{name}}</p>
        </div>
        <div>
            <ul class="studyUl">
                <li class="studyLi" v-for="(item,index) in studyList" :key="index">
                    <div class="studyImg">
                        <img :src="item.cover_img" alt="">
                    </div>
                    <p>{{item.name}}</p>
                    <p @click="goStudy(item.id,item.name)">立即学习</p>
                </li>
                 <li class="placeItem"  v-for="(item,index) in idxList" :key="index"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import { getProList } from '../api/index.js';
export default {
    data(){
        return {
            studyList: [],
            indexs: '',
            idx: '',
            name: '',
            idxList: []
        }
    },
    mounted(){
         console.log(this.$route.query)
        let getPro = this.$route.query
        this.name = getPro.name
        // console.log(testData.id)
        this.getProListData(1,getPro.level)
    },
    methods: {
           // 考试列表
       getProListData(page,level){
        //    var params = page
            var params = {
                page,
                level
            };
            getProList(params).then(res => {
                console.log(res)
                let {list} = res.data
                  let length = list.length
                let parseI = parseInt(length/4)
                for(let i=0;i<parseI;i++) {
                    console.log(i,'111111111')
                    this.idxList.push({})
                }
                this.idx = parseI
                this.studyList = list
            })
        },
        goStudy(id,name){
            this.$router.push({
                path: `/courseDetails`,
                query:{
                    id,name,
                    titleItem: this.name
                }
            })
        },
    },
}
</script>

<style lang="less" scoped>
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
    .studyUl {
        margin-top: 23px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .studyLi {
            margin-bottom: 40px;
             width: 285px;
            .studyImg {
                width: 285px;
                height: 160px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            p:nth-child(2) {
                height: 16px;
                line-height: 16px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #000000;
                margin: 20px 0 15px;
            }
            p:nth-child(3) {
                width: 100px;
                height: 30px;
                background: #323232;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #FFFFFF;
                text-align: center;
                line-height: 30px;
                cursor: pointer;
            }
        }
        .placeItem {
              width: 285px;
        }
    }
   
</style>
