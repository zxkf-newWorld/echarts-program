<template>
  <div class="footerleft">
    <c-header :title="title" class="cheader"></c-header>
    <div class="top-clock">
      <div class="top-clock-left">
        <assets-header-left
          class="clock-left-header"
          :title="title2"
        ></assets-header-left>
        <div class="clock-content">
          <assets-value :assets="assets"></assets-value>
        </div>
      </div>
      <div class="top-clock-right">
        <assets-header-right class="clock-right-header"></assets-header-right>
        <div class="clock-content">
          <!-- 仪表盘 -->
          <div class="espanel">
            <EsPanel />
          </div>
          <div class="espanel">
            <EsPanel2 />
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-clock">
      <div class="top-clock-left">
        <assets-header-left
          class="clock-left-header"
          :title="title3"
        ></assets-header-left>
        <div class="clock-content">
          <assets-value :assets="assets2"></assets-value>
        </div>
      </div>
      <div class="top-clock-right">
        <assets-header-right class="clock-right-header"></assets-header-right>
        <div class="clock-content">
          <!-- 仪表盘 -->
          <div class="espanel">
            <EsPanel />
          </div>
          <div class="espanel">
            <EsPanel2 />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CHeader from "../../components/CHeader";
import AssetsHeaderLeft from "../../components/AssetsHeaderLeft";
import AssetsHeaderRight from "../../components/AssetsHeaderRight";
import AssetsValue from "../../components/AssetsValue";
import EsPanel from "../../components/echarts/EsPanel";
import EsPanel2 from "../../components/echarts/EsPanel2";
export default {
  name: "footerleft",
  data() {
    return {
      title: "偿债能力",
      title2: "总资产增长率",
      title3: "净负债比率",
      assets: {
        lastvalue: "324.567",
        recentlyvalue: "324.567"
      },
      assets2: {
        lastvalue: "324.567",
        recentlyvalue: "324.567"
      }
    };
  },
  components: {
    CHeader,
    AssetsHeaderLeft,
    AssetsHeaderRight,
    AssetsValue,
    EsPanel,
    EsPanel2
  }
};
</script>

<style lang="scss" scoped>
.footerleft {
  width: 100%;
}
.top-clock,
.bottom-clock {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 48%;
  padding-top: 10px;
  // border: 1px solid #000;
  background: #2e2f2f;
}
.cheader {
  width: 100%;
  height: 12%;
}
.top-clock-left {
  background: #283b43;
  flex: 1;
  & .clock-left-header {
    height: 20%;
  }
}
.top-clock-right {
  flex: 1;
  & .clock-right-header {
    height: 20%;
  }
  & div.clock-content {
    width: 100%;
    height: 80%;
    padding: 0;
    display: flex;
    justify-content: space-between;
    & div {
      flex: 1;
      width: 100%;
      height: 100%;
      // border: 1px solid #000;
    }
  }
}
.clock-content {
  padding-top: 13%;
  font-weight: bold;
}
</style>
