import {createApp} from 'vue'

import router, {setupRouter} from '@/router'
import {setupVant} from '@/setup/vant'

import App from '@/App.vue'

const app = createApp(App)

// UI
setupVant(app)
//Router
setupRouter(app)

router.isReady().then(()=>{
  app.mount('#app')
})

