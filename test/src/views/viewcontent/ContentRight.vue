<template>
  <div class="contentright">
    <div class="top-colum">
      top-clock
    </div>
    <div class="bottom-colum">
      bottom-clock
    </div>
  </div>
</template>

<script>
export default {
  name: 'contentright'
};
</script>

<style lang="scss" scoped>
.contentright {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-colum,
.bottom-colum {
  width: 100%;
  height: 190px;
  padding-top: 10px;
  border: 1px solid #000;
}
</style>
