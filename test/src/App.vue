<template>
  <div id="app">
    <Header />
    <Content />
    <Middle />
    <!-- <Test /> -->
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
// import Test from './views/Test';
import Header from './views/Header';
import Content from './views/viewcontent/Content';
import Middle from './views/viewfooter/Footer';

export default {
  name: 'app',
  components: {
    // Test,
    Header,
    Content,
    Middle
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
