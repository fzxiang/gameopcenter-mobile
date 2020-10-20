import {
  Tabbar,
  TabbarItem,
  Button
} from 'vant'

const vantUIs = [
  Tabbar,
  TabbarItem,
  Button
]

export default {
  install(app) {
    vantUIs.forEach(vantUI => [
      app.use(vantUI)
    ])
  }
}
