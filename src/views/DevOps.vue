<template>
  <section class="card" aria-labelledby="devops-title">
    <h2 id="devops-title">DevOps (Administrador de Servidores)</h2>
    <div class="grid-2">
      <div>
        <p>
          El DevOps asegura que el software y la infraestructura
          se construyan, automaticen y operen de forma confiable y costo-eficiente. Coordina CI/CD, IaC y observabilidad
          para ciclos de entrega rápidos, cumpliendo requisitos regulatorios. Optimiza escalado y costos cloud/on‑prem para picos de demanda sin comprometer estabilidad.
        </p>
        <p>
          Su foco es la entrega continua y la operación: desde pipelines reproducibles hasta monitoreo de SLOs, respuesta a
          incidentes y capacidad de recuperación (backups, DR). Colabora con QA para promover calidad desde la compilación,
          y con Seguridad para integrar controles y escaneos en el pipeline.
        </p>
        <h3>Funciones clave</h3>
        <ul>
          <li>Diseñar y mantener CI/CD (build, test, deploy, rollback) con gates de calidad.</li>
          <li>Infraestructura y gestión de configuraciones.</li>
          <li>Observabilidad (logs, métricas, trazas), alertas y SRE-lite: SLO/SLI, capacity planning.</li>
          <li>Automatizar escalado, hardening básico del sistema y optimización de costos.</li>
          <li>Gestión de entornos (dev/test/prod), releases y respuesta a incidentes.</li>
        </ul>
        <h3>Diferencias frente a otros roles</h3>
        <p>
          DevOps no define la política corporativa de seguridad ni el apetito de riesgo (eso es CISO),
          ni realiza tunings finos de servicios cloud (eso es Seguridad Cloud). Integra esos controles
          en los pipelines y en la operación diaria para que se apliquen consistentemente.
        </p>
      </div>
      <div>
        <img class="responsive" :src="base + 'images/devop.jpeg'" alt="Infografía de prácticas DevOps: CI/CD, IaC, observabilidad y escalado" />
        <SalaryTable
          title="DevOps"
          ni="$1,750 – $3,333/mes"
          latam="$2,500 – $5,833/mes"
          remoto="$8,333 – $12,500/mes"
        >
          <template #nota>
            Estos son rangos aproximados; varían por experiencia, empresa y ubicación exacta.
          </template>
        </SalaryTable>
      </div>
    </div>
  </section>
</template>
<script setup>
import SalaryTable from '../components/SalaryTable.vue'
const base = import.meta.env.BASE_URL
</script>
