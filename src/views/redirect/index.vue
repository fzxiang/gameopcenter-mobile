<script lang="ts">
  // 重定向中转器
  import {defineComponent, unref} from 'vue'
  import {useRouter} from 'vue-router'

  export default defineComponent({
    name: 'Redirect',
    created() {
      const {params, query} = this.$route
      const {path} = params
      this.$router.replace({path: '/' + path, query})
    },
    setup() {
      const {currentRoute, replace} = useRouter()
      const {params, query} = unref(currentRoute)
      const {path} = params
      const _path = Array.isArray(path) ? path.join('/') : path
      replace({
        path: _path,
        query
      })
      return {}
    }
  })
</script>