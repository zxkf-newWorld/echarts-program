<template>
  <div class="footermiddle">
    <div class="footer-main-top"></div>
    <div class="footer-main-bottom"></div>
  </div>
</template>

<script>
export default {
  name: "footermiddle"
};
</script>

<style lang="scss" scoped>
.footermiddle {
  display: flex;
  justify-content: space-around;
}
.footer-main-top,
.footer-main-bottom {
  width: 50%;
  height: 100%;
  border: 1px solid #000;
}
.footer-main-top {
  margin-right: 2px;
}
.footer-main-bottom {
  margin-left: 2px;
}
</style>
