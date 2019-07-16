
import request from '@/utils/request'
// 获取用户信息
export function getUserInformation (params) {
  return request({
    url: '/api/index/student_info',
    method: 'get',
    params: params
  })
}

// 获取用户成绩信息
export function getUserGrade (params) {
  return request({
    url: '/api/index/score_info',
    method: 'get',
    params: params
  })
}

// 获取考试信息
export function getExamInformation (params) {
  return request({
    url: '/api/index/exam_info',
    method: 'get',
    params: params
  })
}

// 获取班级成绩超越率
export function getClassGradeByondRate (params) {
  return request({
    url: '/api/byondrate/class_byond_rate',
    method: 'get',
    params: params
  })
}

// 获取学校成绩超越率
export function getSchoolGradeByondRate (params) {
  return request({
    url: '/api/byondrate/school_byond_rate',
    method: 'get',
    params: params
  })
}

// 获取班级成绩
export function getClassGradeTable (params) {
  return request({
    url: '/api/score/class_score',
    method: 'get',
    params: params
  })
}

// 获取全科成绩
export function getSubjectGradeTable (params) {
  return request({
    url: '/api/score/single_score',
    method: 'get',
    params: params
  })
}

// 获取历次成绩
export function getSuccessiveGradeTable (params) {
  return request({
    url: '/api/score/exams_score',
    method: 'get',
    params: params
  })
}

// 获取学校和班级的超越率
export function getSchoolAndClassRate (params) {
  return request({
    url: '/api/byondrate/total_byond_rate',
    method: 'get',
    params: params
  })
}

// 输入成绩信息重新排名
export function getNewGradeRank (params) {
  return request({
    url: '/api/score/aims_score_rank',
    method: 'get',
    params: params
  })
}

// 个人成绩详情查询
export function getSelfGradeDetails (params) {
  return request({
    url: '/importinit/findPreviousGradebyUser_id',
    method: 'get',
    params: params
  })
}

export function login (params) {
  // 登录
  return request({
    url: '/accout/login',
    method: 'POST',
    params: params
  })
}

export function AdminClassClassScore (params) {
  // 班级分析-行政班-成绩单
  return request({
    url: '/api/classanalysis/AdminClassClassScore',
    method: 'POST',
    params
  })
}

export function gradeExamTotal (params) {
  // 年级成绩
  return request({
    url: '/api/grade/gradeExamTotal',
    method: 'get',
    params: params
  })
}

export function gradePreviousAnalysis (params) {
  // 历次年级成绩
  return request({
    url: '/api/grade/gradePreviousAnalysis',
    method: 'get',
    params: params
  })
}

export function AdminClassLastFiveScore (params) {
  // 重点关注--选择班级后五名
  return request({
    url: '/api/classanalysis/AdminClassLastFiveScore',
    method: 'post',
    params: params
  })
}
export function AdminClassTopFiveScore (params) {
  // 重点关注--选择班级后五名
  return request({
    url: '/api/classanalysis/AdminClassTopFiveScore',
    method: 'post',
    params: params
  })
}

export function termexamInfo (params) {
  // 首页考试列表
  return request({
    url: '/api/teacherIndex/term_exam_info',
    method: 'get',
    params: params
  })
}

export function teacherInfo (params) {
  // 首页考试列表
  return request({
    url: '/api/teacherIndex/teacher_info',
    method: 'get',
    params: params
  })
}

export function teachClassSingleSubjectScore (params) {
  // 首页考试列表
  return request({
    url: '/api/grade/teachClassSingleSubjectScore',
    method: 'post',
    params: params
  })
}

export function teachClassTotalSubjectContrast (params) {
  // 年级分析--年级六率
  return request({
    url: '/api/grade/teachClassTotalSubjectContrast',
    method: 'get',
    params: params
  })
}

export function AdminClassAllcompare (params) {
  // 班级分析--班校对比
  return request({
    url: '/api/classanalysis/AdminClassAllcompare',
    method: 'get',
    params: params
  })
}


export function AdminClassTotalContrast (params) {
  // 班级对比 班级六率对比
  return request({
    url: '/class/AdminClassTotalContrast',
    method: 'get',
    params: params
  })
}

export function AdminClassTotalRankClass (params) {
  // 班级对比 全校前N名上线分布表
  return request({
    url: '/class/AdminClassTotalRankClass',
    method: 'get',
    params: params
  })
}