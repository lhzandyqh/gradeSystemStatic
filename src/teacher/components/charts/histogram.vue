<template>
  <div id="pkcharts" style="width:100%;height: 400px"></div>
</template>

<script>
import echarts from "echarts";
import { getSubjectGradeTable } from "@/api/studentGetData";
export default {
  name: "histogram",
  props: {
    classmateScore: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      myScore: [],
      option: {
           legend: {},
    tooltip: {},
    dataset: {
        source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha Latte', 43.3, 85.8, 93.7],
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {},
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
      }
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const prams = {
        userID: 1
      };
      getSubjectGradeTable(prams).then(response => {
        // this.successiveDataSpace.push(response.data.info)
        // this.successiveData.push(this.successiveDataSpace[0])
        this.myScore = response.data.info;
        this.option.series[0].data[0] = this.myScore[6].score;
        this.option.series[0].data[1] = this.myScore[5].score;
        this.option.series[0].data[2] = this.myScore[4].score;
        this.option.series[0].data[3] = this.myScore[3].score;
        this.option.series[0].data[4] = this.myScore[2].score;
        this.option.series[0].data[5] = this.myScore[1].score;
        // console.log('输出我的分数')
        // console.log(this.myScore)
        // console.log('输出我的生物分')
        // console.log(this.option.series[0].data[0])
        this.chart = echarts.init(document.getElementById("pkcharts"));
        this.chart.setOption(this.option);
      });
    }
  }
};
</script>

<style scoped>
</style>
