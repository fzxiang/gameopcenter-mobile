import {createApp} from 'vue'
import App from '@/App.vue'
import router from '@/router'
import Vant from '@/vant/index'


const app = createApp(App)
app.use(router)
  .use(Vant)
  .mount('#app')
