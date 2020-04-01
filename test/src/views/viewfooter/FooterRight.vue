<template>
  <div class="footerright">
    <c-header :title="title" class="cheader"></c-header>
    <div class="main">
      <Scatters />
    </div>
  </div>
</template>

<script>
import CHeader from '../../components/CHeader';
import Scatters from '../../components/echarts/Scatters';
export default {
  name: 'footerright',
  data() {
    return {
      title: '板块业务增长'
    };
  },
  components: {
    CHeader,
    Scatters
  }
};
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  background: #393a3b;
  // border: 1px solid #000;
}
.cheader {
  width: 100%;
  height: 12%;
}
</style>
