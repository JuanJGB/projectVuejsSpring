import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login";
import App from "./App";
import HelloWorld from "./components/HelloWorld";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/hello",
            name: "hello",
            component: HelloWorld
        },
        {
            path: "/",
            name: "app",
            component: App
        }

    ]
});