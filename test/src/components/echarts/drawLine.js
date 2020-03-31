export default {
  methods: {
    drawLine(el, option) {
      const mycharts = this.$echarts.init(el);
      mycharts.setOption(option);
    }
  }
};
