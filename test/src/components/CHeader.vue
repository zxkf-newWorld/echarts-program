<template>
  <div class="cheader">
    <div class="logo-left">
      <img src="../assets/images/c-header-leftlogo.png" alt="logo-left" />
      <span>{{ title }}</span>
    </div>
    <div class="title-middle"></div>
    <div class="logo-right">
      <img src="../assets/images/c-header-rightlogo.png" alt="logo-right" />
    </div>
  </div>
</template>

<script>
export default {
  name: "cheader",
  data() {
    return {};
  },
  props: ["title"]
};
</script>

<style lang="scss" scoped>
.cheader {
  display: flex;
  justify-content: space-between;
  position: relative;
  background: #264053;
}
.cheader {
  & .logo-left,
  & .logo-right {
    position: relative;
    & img {
      height: 100%;
    }
    & span {
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      padding-left: 10%;
    }
  }
  & .logo-left,
  & .logo-right,
  & .title-middle {
    // flex: 1;
  }
  & .logo-left {
    flex: 1;
    text-align: left;
    padding-left: 2px;
  }
  & .logo-right {
    padding-right: 6%;
    // position: absolute;
    // right: 2px;
  }
  & .title-middle {
    height: 100%;
    line-height: 100%;
    text-align: left;
    color: #ffffff;
  }
}
</style>
