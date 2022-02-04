
import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);
import { routes } from "./route";

import Form from 'vform'
window.Form = Form;

import Vuex from 'vuex'
Vue.use(Vuex)

import Swal from 'sweetalert2'
window.Swal = Swal;


require("./bootstrap");


Vue.component(
    "admin-master",
    require("./components/admin/AdminMaster.vue").default
);



const router = new VueRouter({
    routes: routes, // short for `routes: routes`
    mode: "history",
});
import storeData from "./store/index"
const store = new Vuex.Store(storeData);



const app = new Vue({
    el: "#app",
    router,
    store
});
