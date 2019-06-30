import request from '~/utils/request'

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

// 获取班级成绩(也可以用来获取最新的考试名称信息)
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

// 个人成绩详情查询
export function getSelfGradeDetails (parems) {
  return request({
    url: '/importinit/findPreviousGradebyUser_id',
    method: 'get',
    params: parems
  })
}

// 强弱分析超越率比对
export function beyondRateCompare (parems) {
  return request({
    url: '/api/byondrate/findStudentMaxMinRadio',
    method: 'get',
    params: parems
  })
}

// 保存试卷分析
export function savePaperAnalysis (parems) {
  return request({
    url: '/api/summary/myWrongQuestionSummaryInsert',
    method: 'post',
    params: parems
  })
}

// 查看我保存的试卷分析
export function lookMySaveAnalysis (parems) {
  return request({
    url: '/api/summary/myWrongQuestionSummaryFoundation',
    method: 'get',
    params: parems
  })
}

// 我的成绩单
export function getMyNewGradeTable (parems) {
  return request({
    url: '/api/score/findPreviousGradebyUser_id',
    method: 'post',
    params: parems
  })
}

// 提交已保存的错题总结
export function updateSaveSummary (parems) {
  return request({
    url: '/api/summary/myWrongQuestionSummarySubmit',
    method: 'post',
    params: parems
  })
}

// 获取单科历次成绩
export function getSingleSubjectSuccessivegrade (parems) {
  return request({
    url: '/api/score/findAllPrevious',
    method: 'get',
    params: parems
  })
}

// 获取单科时序对比分析图数据
export function getSingleSubjectTimeData (parems) {
  return request({
    url: '/api/score/findSingleSequenceDiagram',
    method: 'post',
    params: parems
  })
}

// 获取考试名称
export function getExamName (parems) {
  return request({
    url: '/api/summary/findSubmitExamId',
    method: 'post',
    params: parems
  })
}

// 获取已提交的试卷错题总结
export function getUpdateWrongNumber (parems) {
  return request({
    url: '/api/summary/myWrongQuestionSummarySubmitFoundation',
    method: 'post',
    params: parems
  })
}

// 获取成绩排名变化的接口
export function getRankChangeData (parems) {
  return request({
    url: '/api/score/getProgressAndBackDetail',
    method: 'get',
    params: parems
  })
}

// 获取优势及稳定学科的数据
export function getAdvantageAndStableData (parems) {
  return request({
    url: '/api/score/findAdvantageAndStability',
    method: 'post',
    params: parems
  })
}

// 修改密码
export function changePassword (parems) {
  return request({
    url: '/accout/editpassword',
    method: 'post',
    params: parems
  })
}

// 获取需要提高科目列表
export function getNeedEnhanceSubjectData (parems) {
  return request({
    url: '/api/score/getMostBackSubject',
    method: 'get',
    params: parems
  })
}

// 获取进步最快科目数据
export function getMostEnhancedData (parems) {
  return request({
    url: '/api/score/getMostProgressSubject',
    method: 'get',
    params: parems
  })
}

// 提交我的考试总结
export function uploadMyExamSummary (parems) {
  return request({
    url: '/api/summary/examSummaryInsert',
    method: 'post',
    params: parems
  })
}

// 获取我的考试总结
export function getMyExamSummaryData (parems) {
  return request({
    url: '/api/summary/examSummaryFoundation',
    method: 'post',
    params: parems
  })
}
