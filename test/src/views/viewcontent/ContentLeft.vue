<template>
  <div class="contentleft">
    <div class="top-clock">
      <div id="chart1" style="{width: 100%; height: 100%;}"></div>
    </div>
    <div class="bottom-clock">
      bottom-clock
    </div>
  </div>
</template>

<script>
export default {
  name: "contentleft",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("chart1"));
      // 绘制图表
      myChart.setOption({
        // tooltip: {
        //   formatter: "{a} <br/>{b} : {c}%"
        // },
        // toolbox: {
        //   feature: {
        //     restore: {},
        //     saveAsImage: {}
        //   }
        // },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            detail: { formatter: "{value}%" },
            data: [{ value: 50, name: "完成率" }],
            radius: "50%",
            startAngle: 180,
            endAngle: 0,
            splitNumber: 5,
            axisLine: {
              show: true,
              lineStyle: {
                width: 10,
                shadowColor: "rgba(0, 0, 0, 0.5)",
                shadowBlur: 20
              }
            },
            splitLine: {
              show: false, //分割线
              length: 24
            },
            axisLabel: {
              show: true,
              distance: 2
            },
            pointer: {
              width: 4,
              length: "80%",
              color: "auto"
            },
            emphasis: {
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 24,
                  y2: 6
                }
              }
            }
          }
        ]
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.contentleft {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-clock,
.bottom-clock {
  flex: 1;
  width: 100%;
  height: 50%;
  padding-top: 10px;
  border: 1px solid #000;
}
</style>
