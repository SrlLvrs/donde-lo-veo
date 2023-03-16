import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

//Componentes
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

//definir objeto rutas --configuración
const routes = [
    {
        path: '/', component: Home,
    },
    {
        path: '/detail', component: Detail,
    }
]

//Crear objeto rutas de vuerouter - objeto de VR
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//instancia de vue
const app = createApp(App)

app.use(router)

app.mount('#app')