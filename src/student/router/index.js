import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '~/components/HelloWorld'
import HomePage from '~/components/HomePage'
import fisrtpage from '~/views/firstnavigation/firstpage'
import gradereport from '~/views/firstnavigation/gradereport'
import gradereportcontent from '~/views/firstnavigation/gradereportcontent'
import gradeanalyzecontent from '~/views/firstnavigation/gradeanalyzecontent'
import successivegrade from '~/views/firstnavigation/successivegrade'
// import gradeanalyze from '~/views/firstnavigation/gradeanalyze'
import paperanalysis from '~/views/firstnavigation/paperanalysis'
import userfeedback from '~/views/firstnavigation/userfeedback'
import firstpagemain from '~/views/secondmain/firstpagemain'
import beyondself from '~/views/firstnavigation/beyondsefl'
import heropk from '~/views/firstnavigation/heropk'
import allgradeoverview from '~/views/firstnavigation/allgradeoverview'
import classgradetable from '~/views/firstnavigation/classgradetable'
import weakspot from '~/views/firstnavigation/weakspot'
import surpassrate from '~/views/firstnavigation/surpassrate'
import gradeandtargetcontent from '~/views/firstnavigation/gradeandtargetcontent'
import personalGradeDetails from '~/views/firstnavigation/personalGradeDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      redirect: '/fisrtpage/firstpagemain',
      children: [
        {path: '/fisrtpage',
          component: fisrtpage,
          children: [{
            path: '/fisrtpage/firstpagemain',
            component: firstpagemain
          }]},
        {path: '/gradereport',
          component: gradereport,
          name: gradereport,
          redirect: '/gradereport/gradereportcontent/personalGradeDetails',
          children: [{
            path: '/gradereport/gradereportcontent',
            component: gradereportcontent,
            redirect: '/gradereport/gradereportcontent/personalGradeDetails',
            children: [{
              path: '/gradereport/gradereportcontent/personalGradeDetails',
              component: personalGradeDetails}, {
              path: '/gradereport/gradereportcontent/classgradetable',
              component: classgradetable}, {
              path: '/gradereport/gradereportcontent/allgradeoverview',
              component: allgradeoverview
            }]
          }, {
            path: '/gradereport/successivegrade',
            component: successivegrade
          }, {
            path: '/gradereport/gradeandtargetcontent',
            component: gradeandtargetcontent,
            redirect: '/gradereport/gradeandtargetcontent/beyondself',
            children: [{
              path: '/gradereport/gradeandtargetcontent/beyondself',
              component: beyondself
            }, {
              path: '/gradereport/gradeandtargetcontent/heropk',
              component: heropk
            }]
          }, {
            path: '/gradereport/gradeanalyzecontent',
            component: gradeanalyzecontent,
            redirect: '/gradereport/gradeanalyzecontent/surpassrate',
            children: [{
              path: '/gradereport/gradeanalyzecontent/surpassrate',
              component: surpassrate
            }, {
              path: '/gradereport/gradeanalyzecontent/weakspot',
              component: weakspot
            }]
          }]},
        {path: '/paperanalysis', component: paperanalysis, name: paperanalysis},
        {path: '/userfeedback', component: userfeedback, name: userfeedback}
      ]
    }
  ]
})
