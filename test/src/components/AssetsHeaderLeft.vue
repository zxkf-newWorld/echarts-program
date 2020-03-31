<template>
  <div class="assets-header-left">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'assetsheaderleft',
  data() {
    return {};
  },
  props: ['title']
};
</script>

<style lang="scss" scoped>
.assets-header-left {
  width: 100%;
  height: 100%;
  color: #ffffff;
  background: #17495A;
}
</style>
