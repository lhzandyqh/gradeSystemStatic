<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from "echarts";
import { AdminClassSubjectCompareChooseClass } from "@/api/studentGetData";
require("echarts/theme/macarons"); // echarts theme

export default {
  name: "lineChart",
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "500px"
    },
    height: {
      type: String,
      default: "350px"
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null,
      sidebarElm: null,
      myScore:[],
    };
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val);
      }
    }
  },
  mounted() {
    this.initChart();
    if (this.autoResize) {
      this.__resizeHandler = debounce(() => {
        if (this.chart) {
          this.chart.resize();
        }
      }, 100);
      window.addEventListener("resize", this.__resizeHandler);
    }

    // 监听侧边栏的变化
    this.sidebarElm = document.getElementsByClassName("sidebar-container")[0];
    this.sidebarElm &&
      this.sidebarElm.addEventListener(
        "transitionend",
        this.sidebarResizeHandler
      );
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    if (this.autoResize) {
      window.removeEventListener("resize", this.__resizeHandler);
    }

    this.sidebarElm &&
      this.sidebarElm.removeEventListener(
        "transitionend",
        this.sidebarResizeHandler
      );

    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      let parmas = {
        classname: 1,
        gradename: "高二"
      };
      AdminClassSubjectCompareChooseClass(parmas).then(res => {
        if(res.data.errno===200){
this.myScore = res.data.info
        console.log(res, 666666888888999999);
        this.chart = echarts.init(this.$el, "macarons");
       this.setOptions(this.chartData);
        }
        
      });
    },
    sidebarResizeHandler(e) {
      if (e.propertyName === "width") {
        this.__resizeHandler();
      }
    },

    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["语文", "数学", "英语"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [this.myScore[0].failnum, this.myScore[0].beyondnum, this.myScore[0].passnumbers]
          }
        ]
      });
    },

    // initChart() {
    //   this.chart = echarts.init(this.$el, "macarons");
    //   this.setOptions(this.chartData);
    // }
  }
};
</script>
