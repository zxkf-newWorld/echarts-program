<template>
  <div class="contentleft">
    <div class="top-clock">
      <c-header :title="title1" class="cheader"></c-header>
      <div id="chart1" style="{width: 100%; height: 100%;}"></div>
    </div>
    <div class="bottom-clock">
      <c-header :title="title2" class="cheader"></c-header>
      <div class="assets-wrapper">
        <div class="assets-top">
          <div class="top-left">
            <assets-header-left
              :title="title3"
              class="header-left"
            ></assets-header-left>
            <div class="assets-content">
              <assets-value :assets="assets1"></assets-value>
            </div>
          </div>
          <div class="top-right">
            <assets-header-right class="header-right"></assets-header-right>
            <div class="assets-content"></div>
          </div>
        </div>
        <div class="assets-bottom">
          <div class="top-left">
            <assets-header-left
              :title="title3"
              class="header-left"
            ></assets-header-left>
            <div class="assets-content">
              <assets-value :assets="assets1"></assets-value>
            </div>
          </div>
          <div class="top-right">
            <assets-header-right class="header-right"></assets-header-right>
            <div class="assets-content"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CHeader from '../../components/CHeader';
import AssetsHeaderLeft from '../../components/AssetsHeaderLeft';
import AssetsHeaderRight from '../../components/AssetsHeaderRight';
import AssetsValue from '../../components/AssetsValue';
export default {
  name: 'contentleft',
  data() {
    return {
      title1: '盈利能力',
      title2: '成长能力',
      title3: '总资产增长率',
      title4: '净负债比率',
      assets1: {
        lastvalue: '324.567',
        recentlyvalue: '324.567'
      },
      assets2: {
        lastvalue: '324.567',
        recentlyvalue: '324.567'
      }
    };
  },
  components: {
    CHeader,
    AssetsHeaderLeft,
    AssetsHeaderRight,
    AssetsValue
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('chart1'));
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
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }],
            radius: '50%',
            startAngle: 180,
            endAngle: 0,
            splitNumber: 5,
            axisLine: {
              show: true,
              lineStyle: {
                width: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
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
              length: '80%',
              color: 'auto'
            },
            emphasis: {
              itemStyle: {
                color: {
                  type: 'linear',
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
  border: 1px solid #000;
}
.bottom-clock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #080b0e;
  & .cheader {
    height: 14%;
  }
  & .assets-wrapper {
    width: 100%;
    height: 98%;
    & .assets-top,
    & .assets-bottom {
      width: 100%;
      height: 50%;
      padding-top: 2%;
      display: flex;
      justify-content: space-between;
    }
  }
}
.assets-top,
.assets-bottom {
  & .top-left,
  & .top-right {
    flex: 1;
  }
  & .top-left {
    & .header-left {
      width: 100%;
      height: 24%;
    }
  }
  & .top-right {
    & .header-right {
      width: 100%;
      height: 24%;
    }
    & .assets-content {
      background: #ffffff;
    }
  }
}
.assets-top {
}
.assets-bottom {
}
.assets-content {
  height: 76%;
  padding-top: 10%;
  background: #283b43;
}
</style>
