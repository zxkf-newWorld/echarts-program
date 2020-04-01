<template>
  <div class="content-left-top">
    <div class="cl-head">
      <div>名称</div>
      <div>上期值</div>
      <div>本期值</div>
      <div>同比</div>
      <div>环比</div>
    </div>
    <div class="cl-colum-1">
      <div class="colum-item-1">
        <div class="resets">资产</div>
        <div class="resets-category">
          <div>总资产</div>
          <div>净资产</div>
        </div>
      </div>
      <div>
        <div>1234567</div>
        <div>1234567</div>
      </div>
      <div>
        <div>1234567</div>
        <div>1234567</div>
      </div>
      <div>
        <div>61.4%</div>
        <div>61.4%</div>
      </div>
      <div>
        <div>61.4%</div>
        <div>61.4%</div>
      </div>
    </div>
    <div class="cl-colum-1 cl-colum-2">
      <div class="colum-item-1">
        <div class="resets">利润</div>
        <div class="resets-category">
          <div>净资产</div>
          <div>归属集团净利润</div>
          <div>剔出一次性权益后的净利润</div>
        </div>
      </div>
      <div>
        <div>1234567</div>
        <div>1234567</div>
        <div>1234567</div>
      </div>
      <div>
        <div>1234567</div>
        <div>1234567</div>
        <div>1234567</div>
      </div>
      <div>
        <div>61.4%</div>
        <div>61.4%</div>
        <div>61.4%</div>
      </div>
      <div>
        <div>61.4%</div>
        <div>61.4%</div>
        <div>61.4%</div>
      </div>
    </div>
    <div class="cl-colum-1 cl-colum-3">
      <div class="colum-item-1">
        <div class="resets">收入</div>
        <div class="resets-category">
          <div>总资产</div>
          <div>净资产</div>
        </div>
      </div>
      <div>
        <div>1234567</div>
        <div>1234567</div>
      </div>
      <div>
        <div>1234567</div>
        <div>1234567</div>
      </div>
      <div>
        <div>61.4%</div>
        <div>61.4%</div>
      </div>
      <div>
        <div>61.4%</div>
        <div>61.4%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="scss" scoped>
.content-left-top {
  width: 100%;
  height: 100%;
  background: #2e2f2f;
}
.cl-head,
.cl-colum-1 {
  display: flex;
  color: #ccc;
  font-size: 12px;
  & div:not(:first-of-type) {
    & div {
      &:first-of-type {
        background: #202121;
      }
      &:nth-child(2) {
        background: #373838;
      }
      &:nth-child(3) {
        background: #202121;
      }
    }
  }
  & div {
    flex: 1;
    border-right: 1px solid #202121;
    &:first-of-type {
      flex: 2;
    }
    &:last-of-type {
      border-right: none;
    }
  }
}
.cl-head {
  padding: 1%;
  margin-top: 5%;
  background: #164c5d;
}
.cl-colum-1 {
  font-size: 10px;
  & .colum-item-1 {
    display: flex;

    & div.resets {
      background: #253840;
    }
    & div.resets-category {
      & div {
        &:first-of-type {
          background: #202121;
        }
        &:nth-child(2) {
          background: #373838;
        }
        &:nth-child(3) {
          background: #202121;
        }
      }
    }
    & div {
      flex: 1;
      border-bottom: 1px solid #202121;
      &:last-of-type {
        flex: 2;
        border-bottom: none;
      }
    }
  }
  & div {
    border-bottom: 1px solid #202121;
  }
}
.cl-colum-2 {
  height: 42%;
  & div:not(:first-of-type) {
    & div {
      &:nth-child(2) {
        height: 40%;
        text-align: center;
      }
      &:nth-child(3) {
        height: 40%;
      }
    }
  }
}
.cl-colum-3 {
  // height: 10%;
  & .colum-item-1 {
    & div.resets-category {
      & div {
        &:first-of-type {
          background: #373838;
        }
        &:nth-child(2) {
          background: #202121;
        }
      }
    }
  }
  & div:not(:first-of-type) {
    & div {
      &:first-of-type {
        background: #373838;
      }
      &:nth-child(2) {
        background: #202121;
      }
    }
  }
}
.flex-layout {
  // flex 布局
}
</style>
