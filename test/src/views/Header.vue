<template>
  <div class="header">
    <div class="container">
      <div class="row w-100 h-100">
        <div class="header-left col-lg-3 col-md-2 col-md-12">
          header-left
        </div>
        <div class="header-logo col-lg-5 col-md-6 col-md-12">
          header-middle
        </div>
        <div class="header-righ col-lg-4 col-md-4 col-md-12">
          header-bottom
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: auto;
}
header,
section,
footer {
  padding: 4px !important;
}
.container {
  width: 100%;
  // height: 50px;
  margin: 0 !important;
  padding: 0 !important;
  // border: 1px solid #ccc;
  & div {
    border: 1px solid #000;
    height: 50px;
  }
}
.row {
  margin: 0;
  padding: 0;
}
</style>
