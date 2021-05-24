import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHashHistory} from "vue-router";
import Home from "./views/Home.vue";

const history = createWebHashHistory()
const router = createRouter({
    history:history,
    routes: [
        {path: '/', component: Home}
    ]
})
const app = createApp(App)
app.use(router);
app.mount('#app')

