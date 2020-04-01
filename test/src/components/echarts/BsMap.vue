<template>
  <div class="echarts">
    <div :style="{ height: '100%', width: '100%' }" ref="myEchart"></div>
  </div>
</template>
<script>
import echarts from 'echarts';
import 'echarts/map/js/china'; // 引入中国地图数据
export default {
  name: 'echarts',
  props: ['userJson'],
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.chinaConfigure();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    chinaConfigure() {
      console.log(this.userJson);
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
      window.onresize = myChart.resize;
      myChart.setOption({
        // 进行相关配置
        backgroundColor: '#162730',
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        legend: {
          //图例
          orient: 'vertical',
          y: 'bottom',
          x: 'right',
          data: ['危害性'],
          textStyle: {
            color: '#fff'
          }
        },
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
          color: ['orangered', 'yellow', 'lightskyblue']
        },
        geo: {
          // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: false, // 是否显示对应地名
              textStyle: {
                color: 'rgba(0,0,0,0.4)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: '#fff' /* 地图边框颜色 */,
              areaColor: 'rgb(34,99,127,0.8)' /* 地图颜色 */
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo' // 对应上方配置
          },
          {
            name: '启动次数', // 浮动框的标题
            type: 'map',
            geoIndex: 0,
            data: [
              {
                name: '内蒙古',
                value: 599
              }
            ]
          }
        ]
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
