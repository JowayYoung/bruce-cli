import Vue from "vue";
import App from "./index.vue";

import "./assets/css/reset.css";

console.log("项目构建环境：", process.env.NODE_ENV);
console.log("项目运行环境：", RUN_ENV); // eslint-disable-line
Vue.config.productionTip = false;
new Vue({ render: h => h(App) }).$mount("#root");