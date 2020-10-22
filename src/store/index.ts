import type {App} from 'vue'
import {createStore} from 'vuex'
// import {config} from 'vuex-modules-decorators'

const store = createStore({
  modules: {}
})

// config.rawError = true;

export function setupStore(app: App<Element>){
  app.use(store)
}
export default store