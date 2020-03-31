<template>
  <div id="app">
    <WaterHead class="height-header"></WaterHead>
    <WaterContent class="height-content"></WaterContent>
    <WaterFooter class="height-footer"></WaterFooter>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
// import Test from './views/Test';
import WaterHead from './views/WaterHead';
import WaterContent from './views/viewcontent/WaterContent';
import WaterFooter from './views/viewfooter/WaterFooter';

export default {
  name: 'app',
  components: {
    WaterHead,
    WaterContent,
    WaterFooter
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.height-header,
.height-content,
.height-footer {
  width: 100%;
  padding-bottom: 4px;
}
.height-header {
  height: 5%;
}
.height-content {
  height: 60%;
}
.height-footer {
  padding-bottom: 0;
  height: 35%;
}
</style>
