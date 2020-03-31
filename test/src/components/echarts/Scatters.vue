<template>
  <div class="lines">
    <div ref="lineshape" style="{width: 100%; height: 80%;}"></div>
  </div>
</template>

<script>
export default {
  name: "lines",
  data() {
    return {
      options: {
        title: {
          //   text: '标题',
          //   subtext: '副标题',
          right: "center",
          top: "1%"
        },
        grid: {
          show: "true",
          borderWidth: "0",
          height: "60%",
          width: "80%",
          y: "30%",
          x: "12%"
        },
        // legend: {
        //   right: 10,
        //   data: ['1990', '2015']
        // },
        xAxis: {
          data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          axisLabel: {
            show: true,
            rotate: 38,
            textStyle: { color: "#fff" }
          },
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }
          /*splitLine: {
            lineStyle: {
                type: 'dashed'
            }
        }*/
        },
        yAxis: {
          name: "收入增长率",
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          }
        },
        series: [
          {
            type: "scatter",
            // name: '1990',
            symbol: "circle", //'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: function(data) {
              return Math.sqrt(data[1]) * 2;
            },
            label: {
              emphasis: {
                show: true,
                formatter: function(param) {
                  return param.data[2];
                },
                position: "top"
              }
            },
            data: [
              [
                {
                  name: "天气"
                }
              ],
              ["Sun", 50],
              ["Mon", 210],
              ["Tue", 90],
              ["Wed", 234],
              ["Thu", 100],
              ["Fri", 330],
              ["Sat", 400]
            ]
          }
        ]
      },
      plantCap: [
        {
          name: "重大项目决策",
          value: "222"
        },
        {
          name: "重要人事任免",
          value: "115"
        },
        {
          name: "大额度资金运作",
          value: "113"
        },
        {
          name: "重大事项安排",
          value: "95"
        },
        {
          name: "十九大",
          value: "92"
        },
        {
          name: "党建",
          value: "87"
        },
        {
          name: "贯彻落实",
          value: "87"
        },
        {
          name: "党廉",
          value: "60"
        }
      ],
      datalist: [
        {
          offset: [56, 48],
          symbolSize: 120,
          opacity: 0.95,
          color: "#f467ce"
        },
        {
          offset: [35, 80],
          symbolSize: 95,
          opacity: 0.88,
          color: "#7aabe2"
        },
        {
          offset: [20, 43],
          symbolSize: 90,
          opacity: 0.84,
          color: "#ff7123"
        },
        {
          offset: [83, 30],
          symbolSize: 90,
          opacity: 0.8,
          color: "#ffc400"
        },
        {
          offset: [36, 20],
          symbolSize: 65,
          opacity: 0.75,
          color: "#5e333f"
        },
        {
          offset: [64, 10],
          symbolSize: 70,
          opacity: 0.7,
          color: "#6b3442"
        },
        {
          offset: [75, 75],
          symbolSize: 60,
          opacity: 0.68,
          color: "#8a3647"
        },
        {
          offset: [88, 62],
          symbolSize: 50,
          opacity: 0.6,
          color: "#68333f"
        }
      ]
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
  },
  countData() {
    let datas = [];
    for (var i = 0; i < this.plantCap.length; i++) {
      var item = this.plantCap[i];
      var itemToStyle = this.datalist[i];
      datas.push({
        name: item.value + "\n" + item.name,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
          normal: {
            textStyle: {
              fontSize: 11
            }
          }
        },
        itemStyle: {
          normal: {
            color: itemToStyle.color,
            opacity: itemToStyle.opacity
          }
        }
      });
    }
    this.options.series.data = datas;
  }
};
</script>

<style lang="scss" scoped>
.lines {
  width: 100%;
  height: 100%;
}
</style>
