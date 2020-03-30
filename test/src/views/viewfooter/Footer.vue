<template>
  <div class="footer">
    <div class="container">
      <div class="row w-100 h-100">
        <header class=" col-md-3 col-md-12">
          <FooterLeft />
        </header>
        <section class=" col-md-6 col-md-12">
          <FooterMiddle />
        </section>
        <footer class=" col-md-3 col-md-12">
          <FooterRight />
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';
import FooterMiddle from './FooterMiddle';
export default {
  name: 'footer',
  data() {
    return {};
  },
  components: {
    FooterLeft,
    FooterRight,
    FooterMiddle
  }
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 200px;
  // border: 1px solid #000;
}
.container {
  width: 100%;
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
  // border: 1px solid #ccc;
  & div {
    // border: 1px solid #000;
    height: 100%;
  }
}
.row {
  margin: 0;
  padding: 0;
}
</style>
