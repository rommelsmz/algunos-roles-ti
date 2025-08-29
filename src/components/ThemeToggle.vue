<template>
  <button class="card" @click="toggle" :aria-pressed="isDark ? 'true' : 'false'" aria-label="Cambiar tema" style="padding:.5rem .75rem;">
    <span v-if="!isDark" aria-hidden="true">🌙</span>
    <span v-else aria-hidden="true">☀️</span>
  </button>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const isDark = ref(false)

onMounted(() => { isDark.value = document.documentElement.dataset.theme === 'dark' })

function toggle() {
  const root = document.documentElement
  const next = root.dataset.theme === 'dark' ? 'light' : 'dark'
  root.dataset.theme = next
  localStorage.setItem('theme', next)
  isDark.value = next === 'dark'
}
</script>
