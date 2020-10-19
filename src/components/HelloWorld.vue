<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup="props" lang="ts">

  import { computed } from 'vue'

  // declare props using TypeScript syntax
  // this will be auto compiled into runtime equivalent!
  declare const props: {
    msg: string
  }

  // computed(()=> props.msg)


  export const computedMsg = computed(() => props.msg + '!!!')
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
