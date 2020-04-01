<template>
  <div class="bars">
    <div ref="bars" style="{width: 100%; height: 80%;}"></div>
  </div>
</template>

<script>
export default {
  name: 'bars',
  props: ['custom'],
  data() {
    return {
      // custom: color:柱状图颜色，danwei: 单位
      options: {
        color: [this.custom.color],
        tooltip: {
          show: true
        },
        markLine: {
          type: 'line',
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
              yAxis: 100
            }
          ]
        },
        title: {
          text: '吨水生产成本排名',
          textStyle: { color: '#ffffff', fontSize: 15 }
        },
        grid: {
          show: 'true',
          borderWidth: '0',
          height: '40%',
          width: '90%',
          y: '36%',
          x: '14%'
        },
        xAxis: {
          type: 'category',
          data: [
            '事业部1',
            '事业部2',
            '事业部3',
            '事业部4',
            '事业部5',
            '事业部6',
            '事业部7',
            '事业部8',
            '事业部9'
          ],
          axisLabel: {
            show: true,
            rotate: 38,
            interval: 0,
            textStyle: { color: '#fff' }
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },

        yAxis: {
          name: this.custom.danwei,
          type: 'value',
          axisLabel: {
            show: true,
            color: '#fffffff',
            lineStyle: {
              color: '#ffffff'
            }
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          }
        },
        series: [
          {
            name: '实际生产水量',
            data: [0, 50, 100, 150, 200, 250, 300],
            type: 'bar'
            // 标线
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
      let mychart = this.$echarts.init(this.$refs.bars);
      mychart.setOption(this.options);
    }
  }
};
</script>

<style lang="scss" scoped>
.bars {
  width: 100%;
  height: 100%;
}
</style>
