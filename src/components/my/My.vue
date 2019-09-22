<template>
  <div class="my">
    <navgation-bar :pageName="'个人中心'" :isShowBack="false" :navStyle="navStyle"></navgation-bar>

    <div class="my-content">
      <div class="my-content-desc"  @click="toLogin">
        <img class="my-content-desc-avater" src="@img/avater.png" alt srcset />
        <p class="my-content-desc-login">{{$store.state.username ? $store.state.username : '登录/注册'}}</p>
      </div>

      <div class="my-content-tools">
        <div class="my-content-tools-item" v-for="(item, index) in toolsDatas" :key="index">
          <p class="my-content-tools-item-name">{{item}}</p>
          <img class="my-content-tools-item-arrow" src="@img/right-arrow.svg" alt srcset />
        </div>
      </div>

      <div class="my-content-logout page-commit" v-if="$store.state.username">退出登录</div>
    </div>
  </div>
</template>


<script>
import NavgationBar from '@b/navigation/Navigation';
export default {
  components: {
    NavgationBar
  },
  data: function () {
    return {
      navStyle: {
        background: 'rgba(216, 30, 6,.8)',
        width: '100%'
      },
      toolsDatas: [
        '全部订单',
        '我的预约',
        '应用推荐',
        '用户福利',
      ],
    }
  },
  methods: {
    toLogin(){
      this.$router.push({
        name:'login'
      })
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@css/dimens.scss";
@import "@css/colors.scss";
@import "@css/mixin.scss";
.my {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column;

  &-content {
    height: 100%;
    width: 100%;

    &-desc {
      margin-top: $marginSize;
      background-color: white;
      height: px2rem(68);
      display: flex;
      align-items: center;
      border-top: 1px solid $lineColor;
      border-bottom: 1px solid $lineColor;
      padding: $marginSize;

      &-avater {
        width: px2rem(52);
        height: px2rem(52);
      }

      &-login {
        margin-left: $marginSize;
        font-size: $titleSize;
      }
    }

    &-tools {
      &-item {
        display: flex;
        height: px2rem(46);
        box-sizing: border-box;
        align-items: center;
        padding: $marginSize;
        background-color: white;
        border-bottom: 1px solid $lineColor;

        &-name {
          font-size: $infoSize;
          flex-grow: 1;
        }

        &-arrow {
          width: px2rem(16);
        }
      }
    }

    &-logout {
      margin-top: 20%;
    }
  }
}
</style>
