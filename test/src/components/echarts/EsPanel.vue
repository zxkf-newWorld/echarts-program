<template>
  <div class="espanel">
    <div ref="espanel" style="{width: 100%; height: 80%;}"></div>
  </div>
</template>

<script>
import drawLine from "./drawLine";
export default {
  name: "espanel",
  mixins: [drawLine],
  // 用户自定义数据 数据显示字体大小 50%: fontSize, 数据值：worth, title: 标题  轴线颜色： color,
  //   props: ["fontSize", "worth", "title", "color"],
  data() {
    return {
      options: {
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%"
        },
        title: {
          text: "同比",
          x: "center",
          y: "71%",
          textStyle: {
            //主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
            fontFamily: "Arial, Verdana, sans...",
            fontSize: 8,
            color: "#fff",
            fontStyle: "normal",
            fontWeight: "normal"
          }
        },
        // grid: {
        //   show: "true",
        //   borderWidth: "0",
        //   height: "40%",
        //   width: "90%",
        //   y: "60%",
        //   x: "12%"
        // },
        series: [
          {
            name: "业务指标",
            type: "gauge",
            startAngle: 180,
            endAngle: 0,
            detail: {
              formatter: "{value}%",
              width: "8%",
              height: "20%",
              fontSize: 12,
              color: "#FF6326",
              offsetCenter: [0, "50%"]
            },
            data: [50],
            axisLine: {
              show: true /* 轴线显示 */,
              lineStyle: {
                width: 4,
                // 分割区间颜色
                color: [
                  [0.8, "#FF6326"],
                  [1, "#919191"]
                ]
              }
            },
            axisTick: {
              /* 刻度线样式 */
              length: 1
            },
            axisLabel: {
              show: false /* 刻度标签 */,
              distance: 1
            },
            splitLine: {
              //分隔线样式相关
              length: 6, //分割线的长度
              lineStyle: {
                width: 1,
                color: "#b0b3b8"
              }
            },
            pointer: {
              show: true /* 是否显示指针 */,
              length: "80%" /* 指针长度 */,
              width: 1 /* 指针宽度 */
            }
            // data: [{ value: 50, name: "完成率" }]
          }
        ]
      }
    };
  },
  mounted() {
    this.drawLine(this.$refs.espanel, this.options);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.espanel {
  width: 100%;
  height: 100%;
}
</style>
