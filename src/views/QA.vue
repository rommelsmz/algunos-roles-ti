<template>
  <section class="card" aria-labelledby="qa-title">
    <h2 id="qa-title">QA (Aseguramiento de la Calidad)</h2>
    <div class="grid-2">
      <div>
        <p>
          QA garantiza que los productos y servicios tecnológicos cumplan requisitos funcionales y no funcionales. En microfinanzas, prioriza precisión, seguridad y cumplimiento; en agroinsumos, foco en usabilidad
          móvil para campo y exactitud de inventarios; en café, énfasis en integridad de contratos/exportación y reportes.
          QA diseña estrategias de prueba que cubren desde unitarias hasta end‑to‑end, accesibilidad, performance y resiliencia.
        </p>
        <p>
          Trabaja con DevOps para activar gates de calidad en CI/CD, con Seguridad para pruebas de exposición y con las áreas
          de negocio para criterios de aceptación claros. Promueve la prevención de defectos mediante TDD/BDD y análisis de
          causa raíz, reduciendo riesgo operativo y retrabajo. Ademas de coordinar con equipo de programadores y jefes de Area para garantizar que el producto realizado cumpla con todas las espectativas.
        </p>
        <h3>Funciones clave</h3>
        <ul>
          <li>Estrategia de pruebas: unitarias, integración, e2e, accesibilidad y performance.</li>
          <li>Automatización de regresión y orquestación de datos de prueba.</li>
          <li>Definición de métricas de calidad, trazabilidad y reporte a stakeholders.</li>
          <li>Gestión de defectos, priorización por severidad/impacto; análisis de causa raíz.</li>
          <li>Colaboración con negocio para criterios de aceptación y UAT.</li>
        </ul>
        <h3>Diferencias frente a otros roles</h3>
        <p>
          A diferencia de DevOps (que opera e integra), QA se centra en prevenir y detectar defectos; no administra bases de datos
          (DBA) ni define la política de seguridad (CISO) ni guardrails cloud (Especialista Cloud). Su objetivo es la calidad de
          producto de punta a punta.
        </p>
      </div>
      <div>
        <img class="responsive" src="/images/qa.jpeg" alt="Infografía de estrategia y automatización de QA" />
        <SalaryTable
          title="QA"
          ni="$833 – $2,500/mes"
          latam="$2,083 – $4,167/mes"
          remoto="$6,667 – $10,000/mes"
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
</script>
