<template>
  <div class="date-control">
    <div class="date-content">
      <span class="systime">系统时间</span>
      <span class="date-tody">{{ date }}</span>
    </div>
    <div class="time-content">{{ time }}</div>
  </div>
</template>

<script>
export default {
  name: 'date-control',
  data() {
    return {
      date: '' /* 日期 */,
      time: '' /* 时间 */
    };
  },
  created() {
    setInterval(() => {
      this.dateFormate();
    }, 1000);
  },
  methods: {
    dateFormate() {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      this.date = `${year}/${month}/${day}`;
      let hour = date.getHours();
      let minute = date.getMinutes();
      let ss = date.getSeconds();
      if (hour < 10) {
        hour = '0' + hour;
      } else if (minute < 10) {
        minute = '0' + minute;
      } else if (ss < 10) {
        ss = '0' + ss;
      }
      this.time = `${hour} : ${minute} : ${ss}`;
    }
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.date-control {
  width: 100%;
  height: 100%;
  font-size: 10px;
  font-weight: bold;
  background: #0a3d53;
  border-radius: 14px;
}
.date-content {
  & span.systime {
    display: inline-block;
    margin-right: 8%;
    background: #ff6326;
    border-radius: 2px;
  }
  & span.date-tody {
    color: #258ab5;
    text-shadow: 1px 1px 8px #000;
  }
}
.time-content {
  font: 12px bold sans-serif;
  color: #66b9df;
}
</style>
