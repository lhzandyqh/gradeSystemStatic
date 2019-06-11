<template>
  <div class="container">
<!--    <h1>这是英雄PK模块</h1>-->
    <el-row>
      <h4>2017-2018学年第一学期七年级期中考试</h4>
      <span style="text-align: center;font-size: 14px;font-weight: bold;color: #19c237;font-weight: bold">-与超越自己的同学PK一下吧-</span>
    </el-row>
    <el-row style="padding-top: 20px">
<!--      <classmate-pk-table style="margin-top: 10px"></classmate-pk-table>-->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span style="font-weight: bolder">请输入你想PK的同学成绩</span>
        </div>
        <div class="input_container">
          <div class="input">
            <el-row :gutter="20">
              <el-col :span="2">
                <span style="margin-top: 100px;font-weight: bolder">语文</span>
              </el-col>
              <el-col :span="6">
                <el-input v-model="classmateScore[0].yuwen" placeholder="请输入语文成绩"></el-input>
              </el-col>
              <el-col :span="2">
                <span style="margin-top: 100px;font-weight: bolder">数学</span>
              </el-col>
              <el-col :span="6">
                <el-input v-model="classmateScore[1].shuxue" placeholder="请输入数学成绩"></el-input>
              </el-col>
              <el-col :span="2">
                <span style="margin-top: 100px;font-weight: bolder">英语</span>
              </el-col>
              <el-col :span="6">
                <el-input v-model="classmateScore[2].yingyu" placeholder="请输入英语成绩"></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="padding-top: 20px">
            <el-col :span="2">
              <span style="margin-top: 100px;font-weight: bolder">物理</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="classmateScore[3].wuli" placeholder="请输入物理成绩"></el-input>
            </el-col>
            <el-col :span="2">
              <span style="margin-top: 100px;font-weight: bolder">化学</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="classmateScore[4].huaxue" placeholder="请输入化学成绩"></el-input>
            </el-col>
            <el-col :span="2">
              <span style="margin-top: 100px;font-weight: bolder">生物</span>
            </el-col>
            <el-col :span="6">
              <el-input v-model="classmateScore[5].shengwu" placeholder="请输入生物成绩"></el-input>
            </el-col>
          </el-row>
            <el-row :gutter="20" style="padding-top: 20px">
              <el-col :span="2">
                <span style="margin-top: 100px;font-weight: bolder">政治</span>
              </el-col>
              <el-col :span="6">
                <el-input :disabled="true" placeholder="请输入政治成绩"></el-input>
              </el-col>
              <el-col :span="2">
                <span style="margin-top: 100px;font-weight: bolder">历史</span>
              </el-col>
              <el-col :span="6">
                <el-input :disabled="true"  placeholder="请输入历史成绩"></el-input>
              </el-col>
              <el-col :span="2">
                <span style="margin-top: 100px;font-weight: bolder">地理</span>
              </el-col>
              <el-col :span="6">
                <el-input  :disabled="true" placeholder="请输入地理成绩"></el-input>
              </el-col>
            </el-row>
            <el-row  style="padding-top: 20px" class="pkbutton">
              <el-button type="success"  @click="pkbegin" plain>点我PK一下</el-button>
            </el-row>
          </div>
        </div>
      </el-card>
    </el-row>
    <el-row style="margin-top: 50px">
      <div class="picturecontainer">
<!--        <img v-bind:src="imgUrl" width="80%">-->
      </div>
    </el-row>
    <el-row >
      <div class="chartcontainer">
<!--        <hero-pk-chart style="width: 100%;height: 500px"></hero-pk-chart>-->
      </div>
    </el-row>
    <el-dialog
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <div class="chartsContainer">
        <pk-with-classmates :classmateScore="classmateScore"></pk-with-classmates>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import classmatePkTable from '@/components/tables/classmatePkTable'
import pkWithClassmates from '@//components/charts/pkWithClassmates'
export default {
  name: 'heropk',
  components: {classmatePkTable, pkWithClassmates},
  methods: {
    pkbegin: function () {
      if (this.classmateScore[0].yuwen === '' || this.classmateScore[1].shuxue === '' || this.classmateScore[2].yingyu === '' || this.classmateScore[3].wuli === '' || this.classmateScore[4].huaxue === '' || this.classmateScore[5].shengwu === '') {
        this.open()
      } else {
        this.dialogVisible = true
        console.log(this.classmateScore)
      }
    },
    open () {
      this.$message.error('对手成绩信息未输入完整，无法PK')
    },
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  },
  data () {
    return {
      imgUrl: require('../../../../static/images/herospk.png'),
      dialogVisible: false,
      myScore: [],
      classmateScore: [
        {yuwen: ''},
        {shuxue: ''},
        {yingyu: ''},
        {wuli: ''},
        {huaxue: ''},
        {shengwu: ''},
        {zhengzhi: ''},
        {dili: ''},
        {lishi: ''}
      ]
    }
  }
}
</script>

<style scoped>
  .subject content{
   display: inline;
    padding-top: 20px;
  }
  .chartcontainer{
    text-align: center;
  }

</style>
