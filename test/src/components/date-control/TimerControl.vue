<template>
  <div class="time-control">
    <!-- 日期选择 -->
    <div class="date-pick">
      {{ year }} <img src="../../assets/images/xia.png" />
    </div>
    <!-- 时间前后切换 -->
    <div class="date-loop">
      <div class="day">1月</div>
      <div class="day">2月</div>
      <div class="day">3月</div>
      <div class="day">4月</div>
      <div class="day">5月</div>
      <div class="switch-day">
        <img src="../../assets/images/you.png" alt="you" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'timercontrol',
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.time-control {
  width: 100%;
  height: 100%;
  display: flex;
  color: #ffffff;
  border: 1px solid #1e1b1b;
  font-size: 10px;
}
.date-pick {
  padding-top: 4%;
  background: #01b4ed;
  border-right: 1px solid #1e1b1b;
  & img {
    width: 10px;
    padding: 0%;
    margin: 0;
  }
  &:hover {
    cursor: pointer;
  }
}
.date-loop {
  height: 100%;
  display: flex;
  flex: 2;
  background: #ced4d6;
  & div {
    height: 100%;
    padding-top: 6%;
    flex: 1;
    border-right: 1px solid #1e1b1b;
    &:last-child {
      border-right: none;
    }
    &:hover {
      background: #ff6326;
      color: #fff;
      cursor: pointer;
    }
  }
  & .switch-day {
    & img {
      width: 10px;
    }
  }
}
</style>
