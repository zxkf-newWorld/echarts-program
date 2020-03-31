<template>
  <div class="contentright">
    <div class="top-colum">
      <c-header :title="title1" class="cheader"></c-header>
      top-clock
    </div>
    <div class="bottom-colum">
      <c-header :title="title2" class="cheader"></c-header>
      <Bars :custom="custom" />
    </div>
  </div>
</template>

<script>
import CHeader from '../../components/CHeader';
import Bars from '../../components/echarts/Bars';
export default {
  name: 'contentright',
  data() {
    return {
      title1: '按业务板块的业绩分析',
      title2: '事业部综合排名Top10',
      custom: {
        danwei: '万元',
        color: '#2DB747'
      }
    };
  },
  components: {
    CHeader,
    Bars
  }
};
</script>

<style lang="scss" scoped>
.contentright {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-colum,
.bottom-colum {
  width: 100%;
  height: 50%;
  border: 1px solid #000;
}
.bottom-colum {
  background: #1f1f1f;
}
</style>
