import AdminHome from "./components/admin/AdminHome";
import CategoryList from "./components/admin/category/ListCategory";
import AddCategory from "./components/admin/category/AddCategory";
import ExampleComponent from "./components/ExampleComponent";

export const routes = [
    {
        path: "/home",
        component: AdminHome,
    },
    {
        path: "/category-list",
        component: CategoryList,
    },
    {
        path: "/add-category",
        component: AddCategory,
    },
    {
        path: "/post",
        component: ExampleComponent,
    }
];
