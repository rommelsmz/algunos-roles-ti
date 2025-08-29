<template>
  <div class="card" role="region" :aria-label="`Rangos Salariales — ${title}`">
    <h3 style="margin-top:0">Rangos Salariales Promedio Mensuales (Año 2025 en moneda USD)</h3>
    <div class="table-wrap" role="table" aria-label="Rangos salariales">
      <div role="rowgroup">
        <div role="row" style="font-weight:600">
          <div role="columnheader" style="padding:.5rem">País / Modalidad</div>
          <div role="columnheader" style="padding:.5rem">Rango</div>
        </div>
      </div>
      <div role="rowgroup">
        <div role="row">
          <div role="cell" style="padding:.5rem">Nicaragua</div>
          <div role="cell" style="padding:.5rem">{{ ni }}</div>
        </div>
        <div role="row">
          <div role="cell" style="padding:.5rem">Latinoamérica</div>
          <div role="cell" style="padding:.5rem">{{ latam }}</div>
        </div>
        <div role="row">
          <div role="cell" style="padding:.5rem">Remoto (EU/EEUU)</div>
          <div role="cell" style="padding:.5rem">{{ remoto }}</div>
        </div>
      </div>
    </div>
    <p style="margin:.5rem 0 0; color: var(--muted); font-size:.95rem">
      <slot name="nota"></slot>
    </p>
  </div>
</template>
<script setup>
defineProps({
  title: { type: String, default: '' },
  ni: { type: String, required: true },
  latam: { type: String, required: true },
  remoto: { type: String, required: true }
})
</script>
