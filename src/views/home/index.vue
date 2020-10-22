<template>
  <section class="basic-logo">
    <img
      src="@/assets/svg/logo.svg"
      alt="This is a logo img"
    />
    <van-form @submit="onSubmit"  class="form">
    </van-form>
  </section>
</template>


<script lang="ts">
  import {defineComponent} from 'vue'

  export default defineComponent({
    name: 'Home',
    setup(){

      return{}
    }
  })

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
      right: 0
    }
  }
</style>
