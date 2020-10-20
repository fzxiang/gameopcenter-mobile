import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Vant from '@/vant/index'

console.log(Vant)

const app = createApp(App)
app.use(router)
  .use(Vant)
  .mount('#app')
