import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import ResourcesPanel from './/components/containers/ResourcesPanel.vue'
import InventoryBasic from './/components/containers/InventoryBasic.vue'

const pinia = createPinia()
const app = createApp(App)
app.component('ResourcesPanel', ResourcesPanel)
app.component('InventoryBasic', InventoryBasic)

app.use(pinia)
app.mount('#app')



