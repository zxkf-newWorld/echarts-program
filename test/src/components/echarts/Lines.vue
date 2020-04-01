<template>
  <div class="lines">
    <div ref="lineshape" style="{width: 100%; height: 80%;}"></div>
  </div>
</template>

<script>
export default {
  name: 'lines',
  data() {
    return {
      options: {
        tooltip: {},
        legend: {
          show: true,
          orient: 'horizontal',
          x: 'right',
          y: 'top',
          textStyle: {
            color: '#fff'
          },
          data: [
            {
              name: '实际生产水量',
              textStyle: {
                fontSize: 8,
                fontWeight: 'bolder'
              },
              icon: 'square'
            },
            {
              name: '应收费水量',
              textStyle: {
                fontSize: 8,
                fontWeight: 'bolder'
              },
              icon: 'square'
            }
          ]
        },
        markLine: {
          symbol: 'none',
          label: {
            show: false
          },
          data: [
            {
              lineStyle: {
                width: 2,
                type: 'solid',
                color: 'red',
                shadowColor: 'red',
                shadowBlur: 20
              },
              yAxis: 1200
            }
          ]
        },
        title: {
          text: '生产量',
          textStyle: { color: '#ffffff', fontSize: 15 }
        },
        grid: {
          show: 'true',
          borderWidth: '0',
          height: '40%',
          width: '90%',
          y: '40%',
          x: '12%'
        },
        xAxis: {
          type: 'category',
          data: ['1月', '2月', '3月', '4月', '5月', '6月'],
          axisLabel: {
            show: true,
            rotate: 38,
            textStyle: { color: '#fff' }
          }
          // axisLine: false
        },
        yAxis: {
          name: '万吨',
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          },
          // axisLabel: {
          //   show: true,
          //   color: "#fffffff",
          //   lineStyle: {
          //     color: "#ffffff"
          //   }
          // },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '实际生产水量',
            data: [820, 932, 901, 934, 1290, 1330],
            type: 'line',
            itemStyle: {
              color: 'lightgreen'
            }
          },
          {
            name: '应收费水量',
            data: [420, 532, 701, 934, 1090, 1000],
            type: 'line',
            itemStyle: {
              color: 'yellow'
            }
          }
        ]
      }
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let mychart = this.$echarts.init(this.$refs.lineshape);
      mychart.setOption(this.options);
    }
  }
};
</script>

<style lang="scss" scoped>
.lines {
  width: 100%;
  height: 100%;
}
</style>
