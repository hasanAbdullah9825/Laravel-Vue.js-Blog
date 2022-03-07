
import Vue from "vue";
//Adding Vue router
import VueRouter from "vue-router";
Vue.use(VueRouter);
import { routes } from "./route";
//Adding V-form
import Form from 'vform'
window.Form = Form;
//Adding VueX
import Vuex from 'vuex'
Vue.use(Vuex)

//Adding sweet alert
import Swal from 'sweetalert2'
window.Swal = Swal;
// Importing all filtering logic from filter.js
import Filter from "./filter"


require("./bootstrap");


Vue.component(
    "admin-master",
    require("./components/admin/AdminMaster.vue").default
);



const router = new VueRouter({
    routes: routes, // short for `routes: routes`
    mode: "hash",
});
import storeData from "./store/index"
const store = new Vuex.Store(storeData);



const app = new Vue({
    el: "#app",
    router,
    store
});
