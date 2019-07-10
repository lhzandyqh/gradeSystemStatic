<template>
  <div>
    <div class="tab-flex">
      <div class="all-w">
        <p class="tit-tab">前5名</p>
        <table width="400" border="1">
          <tr>
            <td>分数</td>
            <td v-for="item in list" :key="item">{{item.scoretotal}}</td>
          </tr>
          <tr>
            <td>姓名</td>
            <td v-for="item in list" :key="item">{{item.studentname}}</td>
          </tr>
        </table>
      </div>
      <div class="all-w">
        <p class="tit-tab">后5名</p>
        <table width="400" border="1">
          <tr>
            <td>分数</td>
            <td v-for="item in FractionList" :key="item">{{item.scoretotal}}</td>
          </tr>
          <tr>
            <td>姓名</td>
            <td v-for="item in FractionList" :key="item">{{item.studentname}}</td>
          </tr>
        </table>
      </div>
      <div class="all-w">
        <p class="tit-tab">进步最大前5名</p>
        <table width="400" border="1">
          <tr>
            <td>分数</td>
            <td>665</td>
            <td>444</td>
            <td>333</td>
            <td>222</td>
            <td>111</td>
            <td>000</td>
          </tr>
          <tr>
            <td>姓名</td>
            <td>汪汪</td>
            <td>呵呵</td>
            <td>嘿嘿</td>
            <td>呵呵呵</td>
            <td>哈哈哈</td>
          </tr>
        </table>
      </div>

      <div class="all-w">
        <p class="tit-tab">退步最大前5名</p>
        <table width="400" border="1">
          <tr>
            <td>分数</td>
            <td>55</td>
            <td>6666</td>
            <td>333</td>
            <td>222</td>
            <td>111</td>
            <td>000</td>
          </tr>
          <tr>
            <td>姓名</td>
            <td>汪汪</td>
            <td>呵呵</td>
            <td>嘿嘿</td>
            <td>呵呵呵</td>
            <td>哈哈哈</td>
          </tr>
        </table>
      </div>
    </div>
    <el-row style="margin:10px auto">
      <span style="font-weight: bold;color: #18a689">─ 全校前N名分布 ─</span>
      <p>班级：共XX人 全校：共XX人</p>
    </el-row>
    <div style="display:flex;width:100%">
      <div>
        <focusonline :chartData="chartData"></focusonline>
      </div>
      <div>
        <p>前十名学生名单（2人）</p>
        <p>孙金鑫 邓庆东</p>
        <span>前50名></span>
      </div>
    </div>
    <el-table :data="tableData" border style="width: 60%">
      <el-table-column prop="date" label="班级/行政班" align="center"></el-table-column>
      <el-table-column prop="name" label="校前100名人数" align="center"></el-table-column>
      <el-table-column prop="province" label="校100-200名" align="center"></el-table-column>
      <el-table-column label="校200-300名" align="center"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import focusonline from "@/components/charts/focuson-line";
// import AdminClassLastFiveScore from "@/api/studentGetData"
import {
  AdminClassLastFiveScore,
  AdminClassTopFiveScore
} from "@/api/studentGetData";
export default {
  components: {
    focusonline
  },
  data() {
    return {
      chartData: {},
      tableData: [],
      FractionList: [], // 后五名
      list: [] //前五名
    };
  },
  created() {
    this.getLastList();
    this.getTopFiveList();
  },
  methods: {
    // 最后5名
    getLastList() {
      let parmas = {
        classname: 1,
        gradename: "高二"
      };
      AdminClassLastFiveScore(parmas).then(res => {
        if (res.data.errno === 200) {
          this.FractionList = res.data.info;
          console.log(this.FractionList, 66666);
        }
      });
    },
    getTopFiveList() {
      let parmas = {
        classname: 1,
        gradename: "高二"
      };
      AdminClassTopFiveScore(parmas).then(res => {
        console.log(res, "qianeu");
        if (res.data.errno === 200) {
         
          this.list = res.data.info;
           console.log(this.list,665588)
        }
      });
    }
  }
};
</script>

<style>
.all-w {
  width: 400px;
  margin: 10px 10px 0 0;
}
.tab-flex {
  display: flex;
  flex-wrap: wrap;
}
.tit-tab {
  margin: 0;
  height: 40px;
  line-height: 40px;
  background: #f5f5f5;
  border: 1px solid #333;
  width: 398px;
}
</style>