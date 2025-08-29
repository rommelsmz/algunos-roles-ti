<template>
  <div class="topbar" role="navigation" aria-label="Navegación principal">
    <div class="container nav">
      <RouterLink to="/devops" :aria-current="$route.path === '/devops' ? 'page' : undefined">DevOps</RouterLink>
      <RouterLink to="/dba" :aria-current="$route.path === '/dba' ? 'page' : undefined">DBA</RouterLink>
      <RouterLink to="/seguridad" :aria-current="$route.path === '/seguridad' ? 'page' : undefined">Seguridad Informática</RouterLink>
      <RouterLink to="/qa" :aria-current="$route.path === '/qa' ? 'page' : undefined">QA</RouterLink>
      <RouterLink to="/calidad-datos" :aria-current="$route.path === '/calidad-datos' ? 'page' : undefined">Calidad de Datos</RouterLink>
      <ThemeToggle class="theme-toggle" />
    </div>
  </div>
</template>
<script setup>
import { RouterLink, useRoute } from 'vue-router'
import ThemeToggle from './ThemeToggle.vue'
const $route = useRoute()
</script>
