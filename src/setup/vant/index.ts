import type { App } from 'vue';
import {
  Tab,
  Cell,
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
  CellGroup,
  TabbarItem,
} from 'vant';

const vantUIs = [
  Tab,
  Cell,
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
  CellGroup,
  TabbarItem,
];

export function setupVant(app: App<Element>) {
  vantUIs.forEach((vantUI) => [app.use(vantUI)]);
}
