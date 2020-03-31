<template>
  <div class="watercontent">
    <div class="container">
      <div class="row w-100 h-100">
        <header class=" col-md-3 col-sm-12 col-xs-12">
          <ContentLeft />
        </header>
        <section class=" col-md-6 col-sm-12 col-xs-12">
          <ContentMiddle />
        </section>
        <footer class=" col-md-3 col-sm-12 col-xs-12">
          <ContentRight />
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
import ContentMiddle from './ContentMiddle';
export default {
  name: 'watercontent',
  data() {
    return {};
  },
  components: {
    ContentLeft,
    ContentMiddle,
    ContentRight
  }
};
</script>

<style lang="scss" scoped>
.watercontent {
  width: 100%;
  height: 100%;
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
header,
section,
footer {
  padding: 0;
  height: 100%;
}
</style>
