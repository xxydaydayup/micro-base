import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
import router from "./router";
let app: any;
//3.修改vue的入口文件，和react一样，判断是否是qiankun环境，来决定render的方式
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App).use(router).mount("#app");
} else {
  renderWithQiankun({
    mount(props) {
      app = createApp(App);
      app.use(router).mount(props.container.querySelector("#app"));
    },
    bootstrap() {
      console.log("vue app bootstrap");
    },
    update() {
      console.log("vue app update");
    },
    unmount() {
      console.log("vue app unmount");
      app?.unmount();
    },
  });
}
