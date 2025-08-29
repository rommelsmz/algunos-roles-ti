<template>
  <footer class="footer" role="contentinfo">
    <div class="container">
      <small>
        © {{ year }} · R. S. M. Z. · Fecha: {{ dateStr }}
      </small>
    </div>
  </footer>
</template>
<script setup>
const now = new Date()
const year = now.getFullYear()
const dateStr = now.toLocaleDateString('es-NI', { year: 'numeric', month: '2-digit', day: '2-digit' })
</script>
