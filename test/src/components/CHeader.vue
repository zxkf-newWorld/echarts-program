<template>
  <div class="cheader">
    <div class="logo-left">
      <img src="../assets/images/c-header-leftlogo.png" alt="logo-left" />
    </div>
    <div class="title-middle">{{ title }}</div>
    <div class="logo-right">
      <img src="../assets/images/c-header-rightlogo.png" alt="logo-right" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'cheader',
  data() {
    return {};
  },
  props: ['title']
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
  }
  & .logo-left,
  & .logo-right,
  & .title-middle {
    // flex: 1;
  }
  & .logo-left {
    text-align: left;
  }
  & .logo-right {
    margin-right: 2px;
    // position: absolute;
    // right: 2px;
  }
  & .title-middle {
    color: #ffffff;
    vertical-align: center;
    text-align: left;
  }
}
</style>
