import { createApp } from 'vue'
import { ConfigProvider } from 'vant'
import router from '@/router'
import { Lazyload } from 'vant'
import './style.less'
import App from './App.vue'

createApp(App).use(router).use(ConfigProvider).use(Lazyload).mount('#app')
