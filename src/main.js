import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css'

// Inicializar tema respetando prefers-color-scheme con persistencia
(function initTheme() {
  const userPref = localStorage.getItem('theme')
  if (userPref === 'light' || userPref === 'dark') {
    document.documentElement.dataset.theme = userPref
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.dataset.theme = 'dark'
  } else {
    document.documentElement.dataset.theme = 'light'
  }
})()

createApp(App).use(router).mount('#app')
