<template>
  <div class="contentleft">
    <div class="top-clock">
      <c-header :title="title1" class="cheader"></c-header>
      <ContentLeftTop class="content-left-top" />
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
            <div class="assets-content">
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
            <div class="assets-content">
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
    </div>
  </div>
</template>

<script>
import CHeader from '../../components/CHeader';
import AssetsHeaderLeft from '../../components/AssetsHeaderLeft';
import AssetsHeaderRight from '../../components/AssetsHeaderRight';
import AssetsValue from '../../components/AssetsValue';
import EsPanel from '../../components/echarts/EsPanel';
import EsPanel2 from '../../components/echarts/EsPanel2';
import ContentLeftTop from './ContentLeftTop';
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
    AssetsValue,
    EsPanel,
    EsPanel2,
    ContentLeftTop
  },
  mounted() {},
  methods: {}
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
  // border: 1px solid #000;
}
.top-clock {
  background: #2e2f2f;
}
.bottom-clock {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #2e2f2f;
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
      background: #2e2f2f;
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
.content-left-top {
  height: 88%;
}
</style>
