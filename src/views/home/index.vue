<template>
  <section class="basic-logo">
    <img
      src="@/assets/svg/logo.svg"
      alt=""
    />
    <div>home</div>
  </section>
</template>


<script lang="ts">
  import {defineComponent} from 'vue'

  export default defineComponent({
    name: 'Home',
    setup(){

      return{ }
    }
  })

</script>

<style lang="less" scoped>
  .basic-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & img {
      width: 100%;
      height: 100%;
    }
  }
</style>
