<template>
  <div class="welcome">
    <House />
  </div>
</template>

<script lang="ts">
  import {defineComponent} from 'vue'
  import House from '@/views/dashboard/house/index.vue'

  export default defineComponent({
    name: 'Welcome',
    components: {
      House
    },
    setup(){
      return{
      }
    }
  })
</script>

<style lang="less" scoped>
  .welcome {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
</style>