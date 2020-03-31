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
        <div class="clock-content"></div>
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
        <div class="clock-content"></div>
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
  name: 'footerleft',
  data() {
    return {
      title: '偿债能力',
      title2: '总资产增长率',
      title3: '净负债比率',
      assets: {
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
  border: 1px solid #000;
  background: #080b0e;
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
}
.clock-content {
  padding-top: 13%;
  font-weight: bold;
}
</style>
