import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./app.vue";

import "./assets/css/reset.css";
import About from "./views/about/index.vue";
import Home from "./views/home/index.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ component: Home, path: "/" },
		{ component: About, path: "/about" }
	]
});

console.log("应用构建环境：", process.env.NODE_ENV);
console.log("应用运行环境：", RUN_ENV);
createApp(App).use(router).mount("#root");