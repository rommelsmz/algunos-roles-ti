import { createRouter, createWebHashHistory } from 'vue-router'
import DevOps from '../views/DevOps.vue'
import DBA from '../views/DBA.vue'
import Seguridad from '../views/Seguridad.vue'
import QA from '../views/QA.vue'
import CalidadDatos from '../views/CalidadDatos.vue'

const routes = [
  { path: '/', redirect: '/devops' },
  { path: '/devops', component: DevOps, meta: { title: 'DevOps' } },
  { path: '/dba', component: DBA, meta: { title: 'DBA' } },
  { path: '/seguridad', component: Seguridad, meta: { title: 'Seguridad Informática' } },
  { path: '/qa', component: QA, meta: { title: 'QA' } },
  { path: '/calidad-datos', component: CalidadDatos, meta: { title: 'Calidad de Datos' } },
  { path: '/:pathMatch(.*)*', redirect: '/devops' },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

router.afterEach((to) => {
  document.title = `${to.meta.title || 'Puestos TI'} · Diferencias y Funciones`
})

export default router
