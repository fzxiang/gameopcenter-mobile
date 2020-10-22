<template>
  <van-button type="default">login</van-button>
  <van-button loading type="primary" loading-type="spinner" />
</template>

<script setup="props" lang="ts">

import {defineComponent} from "vue";

export default defineComponent({
  name: 'Login',
  components: {
  },
  setup(){
    return{
    }
  }
})

</script>