<template>
  <div class="waterfooter">
    <div class="container">
      <div class="row w-100 h-100">
        <header class=" col-md-3 col-sm-12 col-xs-12">
          <FooterLeft />
        </header>
        <section class=" col-md-6 col-sm-12 col-xs-12">
          <FooterMiddle />
        </section>
        <footer class=" col-md-3 col-sm-12 col-xs-12">
          <FooterRight />
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import FooterMiddle from "./FooterMiddle";
export default {
  name: "waterfooter",
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
.waterheader {
  width: 100%;
  height: 100%;
}
.container {
  width: 100%;
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
  & div {
    height: 100%;
  }
}
.row {
  margin: 0;
  padding: 0;
}
header,
section,
footer {
  padding: 0;
  height: 100%;
}
header {
  // padding-right: 1px;
}
section {
  // padding: 0 2px;
}
footer {
  padding-right: 1px;
}
</style>
