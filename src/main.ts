import {createApp} from 'vue'

import router, {setupRouter} from '@/router'
import {setupVant} from '@/setup/vant'
import {setupStore} from '@/store'

import '@/design/index.less';
import App from '@/App.vue'

const app = createApp(App)

// UI
setupVant(app)
//Router
setupRouter(app)
//Store
setupStore(app)

router.isReady().then(()=>{
  app.mount('#app')
})

