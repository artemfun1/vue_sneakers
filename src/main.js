import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './assets/main.css'
import Favorites from './pages/Favorites.vue'
import Home from './pages/Home.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/favorites', name: 'Favorites', component: Favorites },
  { path: '/:pathMatch(.*)*', name: 'Notfound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(autoAnimatePlugin)
app.mount('#app')
