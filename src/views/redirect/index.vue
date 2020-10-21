<script lang="ts">
  // 重定向中转器
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'redirect',
    created() {
      const { params, query } = this.$route
      const { path } = params
      this.$router.replace({ path: '/' + path, query })
    }
  })
</script>