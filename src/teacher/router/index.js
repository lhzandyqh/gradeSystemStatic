import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import fisrtpage from '@/views/firstnavigation/firstpage'
import login from '@/views/login/index'
import gradereport from '@/views/firstnavigation/gradereport'
import gradereportcontent from '@/views/firstnavigation/gradereportcontent'
import gradeanalyzecontent from '@/views/firstnavigation/gradeanalyzecontent'
import successivegrade from '@/views/firstnavigation/successivegrade'
// import gradeanalyze from '@/views/firstnavigation/gradeanalyze'
import paperanalysis from '@/views/firstnavigation/paperanalysis'
import userfeedback from '@/views/firstnavigation/userfeedback'
import firstpagemain from '@/views/secondmain/firstpagemain'
import beyondself from '@/views/firstnavigation/beyondsefl'
import heropk from '@/views/firstnavigation/heropk'
import allgradeoverview from '@/views/firstnavigation/allgradeoverview'
import classgradetable from '@/views/firstnavigation/classgradetable'
import classAdministrative from '@/views/firstnavigation/classAdministrative' // 行政班单科成绩列表
import classTeaching from '@/views/firstnavigation/classTeaching' // 教学班单科成绩
import newestAnalysis from '@/views/firstnavigation/newestAnalysis'  // 最新成绩分析 
import allPrevious from '@/views/firstnavigation/allPrevious'// 历次成绩分析 
import classAdministration from '@/views/firstnavigation/classAdministration' //班级分析->行政班
import weakspot from '@/views/firstnavigation/weakspot' 
import surpassrate from '@/views/firstnavigation/surpassrate'
import gradeandtargetcontent from '@/views/firstnavigation/gradeandtargetcontent'
import personalGradeDetails from '@/views/firstnavigation/personalGradeDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: login,
      name: login
    },
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      redirect: '/fisrtpage/firstpagemain',

      children: [
        {
          path: '/fisrtpage',
          component: fisrtpage,
          children: [
            {
              path: '/fisrtpage/firstpagemain',
              component: firstpagemain
            }
          ]
        },

        // 以下成绩报告
        {
          path: '/gradereport',
          component: gradereport,
          name: gradereport,
          redirect: '/gradereport/gradereportcontent/classgradetable',
          children: [
            {
              path: '/gradereport/gradereportcontent',
              component: gradereportcontent,
              redirect: '/gradereport/gradereportcontent/classgradetable', // 成绩报告页面
              children: [
                {
                  path: '/gradereport/gradereportcontent/personalGradeDetails',
                  component: personalGradeDetails
                },
                {
                  path: '/gradereport/gradereportcontent/classgradetable',
                  component: classgradetable
                },
                {
                  path: '/gradereport/gradereportcontent/allgradeoverview',
                  component: allgradeoverview
                }
              ]
            },
            {
              path: '/gradereport/successivegrade',
              component: successivegrade
            },
            {
              path: '/gradereport/classAdministrative', // 行政班单科成绩
              component: classAdministrative
            },
            {
              path: '/gradereport/classTeaching', // 教学班单科成绩
              component: classTeaching
            },
            {
              path: '/gradereport/newestAnalysis', // 最新成绩分析
              component: newestAnalysis
            },
            {
              path: '/gradereport/allPrevious', // 历次成绩分析
              component: allPrevious
            },
            {
              path: '/gradereport/classAdministration', // 班级分析-->行政班
              component: classAdministration
            },
            {
              path: '/gradereport/gradeandtargetcontent',
              component: gradeandtargetcontent,
              redirect: '/gradereport/gradeandtargetcontent/beyondself',
              children: [
                {
                  path: '/gradereport/gradeandtargetcontent/beyondself',
                  component: beyondself
                },
                {
                  path: '/gradereport/gradeandtargetcontent/heropk',
                  component: heropk
                }
              ]
            },
            {
              path: '/gradereport/gradeanalyzecontent',
              component: gradeanalyzecontent,
              redirect: '/gradereport/gradeanalyzecontent/surpassrate',
              children: [
                {
                  path: '/gradereport/gradeanalyzecontent/surpassrate',
                  component: surpassrate
                },
                {
                  path: '/gradereport/gradeanalyzecontent/weakspot',
                  component: weakspot
                }
              ]
            }
          ]
        },
        {
          path: '/paperanalysis',
          component: paperanalysis,
          name: paperanalysis
        },
        { path: '/userfeedback', component: userfeedback, name: userfeedback }
      ]
    }
  ]
})
