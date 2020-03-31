<template>
  <div class="assets-value">
    <div class="last">
      <div class="tip">{{ lasttip }}</div>
      <div class="assetsvalue">{{ assets.lastvalue }}</div>
    </div>
    <div class="recently">
      <div class="tip">{{ recentlytip }}</div>
      <div class="assetsvalue">{{ assets.recentlyvalue }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'assetsvalue',
  data() {
    return {
      lasttip: '上期值',
      recentlytip: '本期值'
    };
  },
  props: ['assets']
};
</script>

<style lang="scss" scoped>
.assets-value {
  width: 100%;
  height: 100%;
}
.last,
.recently {
  display: flex;
  justify-content: space-around;
}
.tip {
  font-size: 12px;
  font-weight: lighter;
  color: #ccc;
}
.assetsvalue {
  font-size: 16px;
  line-height: 20px;
  color: #1eb8de;
}
</style>
