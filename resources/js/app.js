/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Form from 'vform'
window.Form = Form;



require("./bootstrap");
Vue.use(VueRouter);

Vue.component(
    "admin-master",
    require("./components/admin/AdminMaster.vue").default
);

import { routes } from "./route";

const router = new VueRouter({
    routes: routes, // short for `routes: routes`
    mode: "history",
});

import Swal from 'sweetalert2'
window.Swal = Swal;

const app = new Vue({
    el: "#app",
    router,
});
