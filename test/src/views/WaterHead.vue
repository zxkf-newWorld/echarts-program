<template>
  <div class="waterheader">
    <div class="container">
      <div class="row w-100 h-100">
        <div class="header-left col-lg-3 col-md-2 col-sm-12 col-xs-12">
          <img src="../assets/images/first.gif" alt="首页" />
        </div>
        <div class="header-logo col-lg-5 col-md-6 col-sm-12 col-xs-12">
          <div class="logo-left">
            <img src="../assets/images/logo.png" alt="logo" />
          </div>
          <div class="title-right">
            <img src="../assets/images/title.gif" alt="标题" />
          </div>
        </div>
        <div class="header-right col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div class="timer">timer</div>
          <div class="time-count">time-count</div>
          <div class="switch-button">
            <img src="../assets/images/switch.gif" alt="开关按钮" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "waterheader",
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.waterheader {
  width: 100%;
  height: 100%;
  background: #1e1b1b;
}
header,
section,
footer {
  padding: 4px !important;
}
.waterheader .container {
  width: 100%;
  height: 100%;
  margin: 0 !important;
  padding: 0 !important;
  & div {
    height: 100%;
  }
  & .row div {
    border: 1px solid #000;
  }
}
.row {
  margin: 0;
  padding: 0;
}
.header-left,
.header-logo,
.header-right {
  position: relative;
}
.header-left > img {
  position: absolute;
  height: 100%;
  left: 0;
  bottom: 0;
}
.header-logo {
  display: flex;
  & div.logo-left,
  & div.title-right {
    position: relative;
    width: 50%;
    & img {
      position: absolute;
      height: 100%;
    }
  }
  & div.logo-left {
    & img {
      right: 0;
    }
  }
  & div.title-right {
    & img {
      left: 0;
    }
  }
  // & div.logo-left {
  //   left: 0;
  //   bottom: 0;
  // }
  // & div.title-right {
  // }
}
.header-right {
  // display: flex;
  & div.timer,
  & div.time-count,
  & div.switch-button {
    position: absolute;
  }
  & div.timer {
  }
  & div.time-count {
  }
  & div.switch-button {
    right: 1%;
    & img {
      height: 100%;
    }
  }
}
</style>
