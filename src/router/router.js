import Vue from "vue";
import VueRouter from "vue-router";

import Index from "../view/index.vue";
import Login from "../view/login.vue";
import Succeed from "../view/succeed.vue";

const carefree = process.env.NODE_ENV === "carefree";

// 懒加载（按需加载）
// const Detail2 = () => import("./view/detail2.vue");

Vue.use(VueRouter);

const routes = [
    { path: "/", component: Index },
    { path: "/login", component: Login },
    { path: "/succeed", component: Succeed },
];

const router = new VueRouter({
    mode: carefree ? "hash" : "history",
    routes
});

export default router;
