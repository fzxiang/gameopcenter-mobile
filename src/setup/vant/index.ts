import type {App} from 'vue'
import {
  Tab,
  Tabs,

  Icon,

  Form,
  List,

  Field,
  Popup,

  Button,
  Picker,
  Tabbar,
  Calendar,

  TabbarItem,
} from 'vant'

const vantUIs = [
  Tab,
  Tabs,

  Icon,

  Form,
  List,

  Field,
  Popup,

  Button,
  Picker,
  Tabbar,
  Calendar,


  TabbarItem,
]

export function setupVant(app: App<Element>){
  vantUIs.forEach(vantUI => [
    app.use(vantUI)
  ])
}
