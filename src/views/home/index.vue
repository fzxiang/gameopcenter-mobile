<template>
  <div class="demo-home">
    <h1 class="demo-home__title">
      <img src="@/assets/images/logo.png" alt="This is a logo img"/>
<!--      <span>Vant</span>-->
    </h1>
    <h2 class="demo-home__desc">“让生活创造游戏，让游戏回归生活”</h2>
    <div class="demo-home-nav">
      <div class="demo-home-nav__title">选择游戏平台</div>
      <van-cell-group class="demo-home-nav__group">
        <van-cell class="demo-home-nav__block" title="请选择游戏" icon="home-o" is-link/>
        <van-cell class="demo-home-nav__block" title="请选择合作商" icon="friends-o" is-link/>
        <van-cell class="demo-home-nav__block" title="请选择区服" icon="points" is-link/>
        <van-cell class="demo-home-nav__block" title="请选择页面" icon="setting-o" is-link/>
        <van-button type="primary" block round>进入</van-button>

      </van-cell-group>
    </div>


  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
.basic-logo {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & img {
    width: 100%;
    height: 100%;
  }

  & .form {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
}
</style>
