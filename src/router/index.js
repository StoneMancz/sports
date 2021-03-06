import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/index.vue';
import Guide from '../components/Guide.vue';
import Classroom from '../components/Classroom.vue';
import TrainCourses from '../components/TrainCourses.vue'
import PersonalInfo from '../components/personalInfo.vue'
import MyCertificate from '../components/myCertificate.vue'
import Qualification from '../components/qualification.vue'
import MyTest from '../components/myTest.vue'
import TestStatus from '../components/testStatus.vue'
import Credentials from '../components/credentials.vue'
import AllMessages from '../components/allMessages.vue'
import TheTutorial from '../components/theTutorial.vue'
import TestQuestions from '../components/testQuestions.vue'
import StudyList from '../components/studyList.vue'
import CourseDetails from '../components/courseDetails.vue'
Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path:'/',
            name:'index',
            component:Index,
            meta:{
                title: '长沙市民健身服务平台',
                Idx: 0
              }
        
        },
        {
            path:'/guide',
            name:'guide',
            meta:{
                title: '长沙市民健身服务平台',
                Idx: 1
            },
            component:Guide
        },
        {
            path:'/classroom',
            name:'classroom',
            component:Classroom
        },
        {
            path:'/trainCourses',
            name:'TrainCourses',
            component:TrainCourses
        },
        {
            path:'/allMessages',
            name:'allMessages',
            component:AllMessages,
            meta:{
                title: '所有消息',
                Idx: 4
              }
        },
        {
            path:'/theTutorial',
            name:'theTutorial',
            component:TheTutorial,
            meta:{
                title: '指导员培训教程',
                Idx: 3
              }
        },
        {
            path:'/testQuestions',
            name:'testQuestions',
            component:TestQuestions,
            meta:{
                title: '指导员培训教程',
                Idx: 3
              }
        },
        {
            path:'/studyList',
            name:'studyList',
            component:StudyList,
            meta:{
                title: '指导员培训教程',
                Idx: 3
              }
        },
        {
            path:'/courseDetails',
            name:'courseDetails',
            component:CourseDetails,
            meta:{
                title: '指导员培训教程',
                Idx: 3
              }
        },
        {
            path:'/personalInfo',
            name:'preInfo',
            component: PersonalInfo,
            meta:{
                title: '个人信息',
                Index: 3,
                Idx: 5
              }
        
        },
        {
            path:'/myCertificate',
            name:'myCertificate',
            component: MyCertificate,
            meta:{
                title: '我的证书',
                Index: 1
              }
        
        },
        {
            path:'/credentials',
            name:'credentials',
            component: Credentials,
            meta:{
                title: '我的证书',
                Index: 1
              }
        
        },
        {
            path:'/qualification',
            name:'qualification',
            component: Qualification,
            meta:{
                title: '资质查询',
                Index: 2,
                Idx: 5
              }
        },
        {
            path:'/myTest',
            name:'myTest',
            component: MyTest,
            meta:{
                title: '我的考试',
                Index: 0,
                Idx: 5
              },
        },
        {
            path:'/testStatus',
            name:'testStatus',
            component: TestStatus,
            meta:{
                title: '我的考试',
                Index: 0
            }
        }
    ]
})