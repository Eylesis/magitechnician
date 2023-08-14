import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import ConjurationBasic from './/components/containers/ConjurationBasic.vue'
import InventoryBasic from './/components/containers/InventoryBasic.vue'

const pinia = createPinia()
const app = createApp(App)
app.component('ConjurationBasic', ConjurationBasic)
app.component('InventoryBasic', InventoryBasic)

app.use(pinia)
app.mount('#app')



