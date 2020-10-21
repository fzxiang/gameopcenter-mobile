import type {App} from 'vue'
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

export function setupVant(app: App<Element>){
  vantUIs.forEach(vantUI => [
    app.use(vantUI)
  ])
}
