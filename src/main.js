import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'

window.store = store
window.state = store.state

createApp(App).use(router).use(store).mount('#app')
