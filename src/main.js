import { createApp } from 'vue'
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue'
import './index.css'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(Antd)
app.mount('#app')
