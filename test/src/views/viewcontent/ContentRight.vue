<template>
  <div class="contentright">
    <div class="top-colum">
      <c-header :title="title1" class="cheader"></c-header>
      <div class="title-tip">
        <span>污水及在生水</span>
        <span>供水</span>
        <span>综合治理</span>
        <span>BOT</span>
        <span>水环境</span>
        <span>其他</span>
      </div>
      <div class="table-head">
        <div>名称</div>
        <div>上期值</div>
        <div>本期值</div>
        <div>同比</div>
        <div>环比</div>
      </div>
      <div class="table-col-1">
        <div>营业收入</div>
        <div>1234567</div>
        <div>1234567</div>
        <div>61.41%</div>
        <div>61.41%</div>
      </div>
      <div class="table-col-middle">
        <div>毛利率</div>
        <div>45%</div>
        <div>45%</div>
        <div>61.4%</div>
        <div>61.4%</div>
      </div>
      <div class="table-col-1">
        <div>公司股东应占盈利</div>
        <div>45%</div>
        <div>45%</div>
        <div>61.41%</div>
        <div>61.41%</div>
      </div>
    </div>
    <div class="bottom-colum">
      <c-header :title="title2" class="cheader"></c-header>
      <Bars :custom="custom" />
    </div>
  </div>
</template>

<script>
import CHeader from '../../components/CHeader';
import Bars from '../../components/echarts/Bars';
export default {
  name: 'contentright',
  data() {
    return {
      title1: '按业务板块的业绩分析',
      title2: '事业部综合排名Top10',
      custom: {
        danwei: '万元',
        color: '#2DB747'
      }
    };
  },
  components: {
    CHeader,
    Bars
  }
};
</script>

<style lang="scss" scoped>
.contentright {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.top-colum,
.bottom-colum {
  width: 100%;
  height: 50%;
  // border: 1px solid #000;
}
.bottom-colum {
  background: #1f1f1f;
}
.title-tip {
  background: #1f2020;
  padding: 6% 2%;
  display: flex;
  justify-content: space-around;
  & span {
    font-size: 12px;
    color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    background: #01afe7;
    &:first-of-type {
      background: #ee5801;
    }
  }
}
.table-head {
  display: flex;
  justify-content: space-around;
  background: #164d5e;
  padding: 1%;
  & div {
    height: 100%;
    font-size: 12px;
    color: #ccc;
    border-right: 1px solid #202121;
    flex: 1;
    &:first-of-type {
      flex: 2;
    }
    &:last-of-type {
      border-right: none;
    }
  }
}
.table-col-1 {
  display: flex;
  justify-content: space-around;
  background: #373838;
  padding: 4%;
  & div {
    font-size: 10px;
    color: #ccc;
    border-right: 1px solid #202121;
    flex: 1;
    &:first-of-type {
      flex: 2;
    }
    &:last-of-type {
      border-right: none;
    }
  }
}
.table-col-middle {
  display: flex;
  justify-content: space-around;
  background: #202121;
  padding: 6%;
  & div {
    font-size: 10px;
    color: #ccc;
    border-right: 1px solid #202121;
    flex: 1;
    &:first-of-type {
      flex: 2;
    }
    &:last-of-type {
      border-right: none;
    }
  }
}
</style>
