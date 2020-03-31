<template>
  <div class="contentmiddle">
    <div class="main">
      <BsMap />
    </div>
  </div>
</template>

<script>
import BsMap from '../../components/echarts/BsMap';
export default {
  name: 'contentmiddle',
  components: {
    BsMap
  }
};
</script>

<style lang="scss" scoped>
.contentmiddle {
  width: 100%;
  height: 100%;
}
.main {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
}
</style>
