/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from "vue";
import VueRouter from "vue-router";

require("./bootstrap");
Vue.use(VueRouter);
// window.Vue = require('vue');

Vue.component(
    "example-component",
    require("./components/ExampleComponent.vue").default
);
const routes = [
    // { path: "/foo", component: Foo },
    // { path: "/bar", component: Bar },
];

const router = new VueRouter({
    routes: routes, // short for `routes: routes`
    mode: "history",
});

const app = new Vue({
    el: "#app",
    router,
});
