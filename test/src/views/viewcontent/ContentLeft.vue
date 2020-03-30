<template>
  <div class="contentleft">
    <div class="top-clock">
      top-clock
    </div>
    <div class="bottom-clock">
      bottom-clock
    </div>
  </div>
</template>

<script>
export default {
  name: 'contentleft'
};
</script>

<style lang="scss" scoped>
.contentleft {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-clock,
.bottom-clock {
  width: 100%;
  height: 190px;
  padding-top: 10px;
  border: 1px solid #000;
}
</style>
