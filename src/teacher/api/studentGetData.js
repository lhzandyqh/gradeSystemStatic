import request from '@/utils/request'

// 获取用户信息
export function getUserInformation (parems) {
  return request({
    url: '/api/index/student_info',
    method: 'get',
    params: parems
  })
}

// 获取用户成绩信息
export function getUserGrade (parems) {
  return request({
    url: '/api/index/score_info',
    method: 'get',
    params: parems
  })
}

// 获取考试信息
export function getExamInformation (parems) {
  return request({
    url: '/api/index/exam_info',
    method: 'get',
    params: parems
  })
}

// 获取班级成绩超越率
export function getClassGradeByondRate (parems) {
  return request({
    url: '/api/byondrate/class_byond_rate',
    method: 'get',
    params: parems
  })
}

// 获取学校成绩超越率
export function getSchoolGradeByondRate (parems) {
  return request({
    url: '/api/byondrate/school_byond_rate',
    method: 'get',
    params: parems
  })
}

// 获取班级成绩
export function getClassGradeTable (parems) {
  return request({
    url: '/api/score/class_score',
    method: 'get',
    params: parems
  })
}

// 获取全科成绩
export function getSubjectGradeTable (parems) {
  return request({
    url: '/api/score/single_score',
    method: 'get',
    params: parems
  })
}

// 获取历次成绩
export function getSuccessiveGradeTable (parems) {
  return request({
    url: '/api/score/exams_score',
    method: 'get',
    params: parems
  })
}

// 获取学校和班级的超越率
export function getSchoolAndClassRate (parems) {
  return request({
    url: '/api/byondrate/total_byond_rate',
    method: 'get',
    params: parems
  })
}

// 输入成绩信息重新排名
export function getNewGradeRank (parems) {
  return request({
    url: '/api/score/aims_score_rank',
    method: 'get',
    params: parems
  })
}
