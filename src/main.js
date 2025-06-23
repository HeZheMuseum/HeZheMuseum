import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import Map from './views/Map.vue'
import About from './views/About.vue'
import Introduction from './views/Introduction.vue'
import Crafts from './views/Crafts.vue'
import Exhibition from './views/Exhibition.vue'
import Costumes from './views/Costumes.vue'
import './style.css'
import 'leaflet/dist/leaflet.css'

const routes = [
  { path: '/', component: Home },
  { path: '/map', component: Map },
  { path: '/about', component: About },
  { path: '/introduction', component: Introduction },
  { path: '/crafts', component: Crafts },
  { path: '/exhibition', component: Exhibition },
  { path: '/costumes', component: Costumes }
]

const router = createRouter({
  history: createWebHistory('./'),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')