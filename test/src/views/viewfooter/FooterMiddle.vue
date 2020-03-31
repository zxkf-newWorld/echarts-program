<template>
  <div class="footermiddle">
    <div class="top">
      <c-header :title="title" class="cheader"></c-header>
    </div>
    <div class="bottom">
      <div class="footer-main-top">
        <LineShape />
      </div>
      <div class="footer-main-bottom">
        <Bars :custom="custom" />
      </div>
    </div>
  </div>
</template>

<script>
import CHeader from "../../components/CHeader";
import LineShape from "../../components/echarts/Lines";
import Bars from "../../components/echarts/Bars";
export default {
  name: "footermiddle",
  data() {
    return {
      title: "水厂综合能力",
      custom: {
        danwei: "万元",
        color: "#256992"
      }
    };
  },
  components: {
    CHeader,
    LineShape,
    Bars
  }
};
</script>

<style lang="scss" scoped>
.footermiddle {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background: #3f4141;
}
.top {
  height: 14%;
}
.bottom {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.footer-main-top,
.footer-main-bottom {
  width: 50%;
  height: 100%;
  padding: 2%;
  // border: 1px solid #000;
}
.footer-main-top {
  // background: #2C2C2C;
  margin-right: 2px;
}
.footer-main-bottom {
  background: #1f1f1f;
  margin-left: 2px;
}
.cheader {
  width: 100%;
  height: 100%;
}
</style>
