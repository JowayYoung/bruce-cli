import Vue from "vue";
import App from "./index.vue";

import "./assets/css/reset.css";

console.log("项目构建环境：", process.env.NODE_ENV);
console.log("项目运行环境：", RUN_ENV);
Vue.config.productionTip = false;
new Vue({ render: (h: any) => h(App) }).$mount("#root");