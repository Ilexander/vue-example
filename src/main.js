import './assets/style/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/bootstrap.css'
import router from './router'
import store from './store'
import { initElement } from './misc/init-element.js'

const app = createApp(App)

initElement(app)
app.use(store)
app.use(router)
app.mount('#app')
