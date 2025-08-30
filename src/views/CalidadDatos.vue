<template>
  <section class="card" aria-labelledby="dq-title">
    <h2 id="dq-title">Calidad de Datos</h2>
    <div class="grid-2">
      <div>
        <p>
          La función de Calidad de Datos asegura que la información sea precisa, completa, consistente y oportuna para soportar
          decisiones. En microfinanzas, reduce riesgo crediticio y reportes regulatorios erróneos;
          en comercializacion de agroinsumos, ayuda para que el pronósticos de demanda y gestión de existencias sea alimentado con datos confiables; en comercializacion de café, garantiza trazabilidad de lotes y
          conciliación de exportaciones. Define reglas, monitoreo y remediación de calidad a lo largo del ciclo de vida del dato.
        </p>
        <p>
          Colabora con el DBA en linaje, metadatos y catálogos; con DevOps para automatizar validaciones en pipelines de datos;
          y con QA para pruebas de integridad de extremo a extremo. Establece ownership (RACI), SLAs y tableros de calidad con
          umbrales y alertas.
        </p>
        <h3>Funciones clave</h3>
        <ul>
          <li>Definir dimensiones (exactitud, completitud, unicidad, oportunidad) y reglas de validación.</li>
          <li>Monitoreo continuo, perfiles de datos y gestión de issues con remediación.</li>
          <li>Catálogo, glosario y linaje de datos; gobierno y stewardship.</li>
          <li>Métricas y SLAs de calidad; reportes a negocio y cumplimiento.</li>
          <li>Soporte a analítica y BI con datasets confiables y auditables.</li>
        </ul>
        <h3>Diferencias frente a otros roles</h3>
        <p>
          A diferencia de QA (calidad de software), Calidad de Datos se enfoca en el activo de información en sí. No administra
          motores de BD (DBA) ni define políticas corporativas de seguridad (CISO). Trabaja transversalmente con TI y negocio para
          mejorar continuamente la confiabilidad de los datos.
        </p>
      </div>
      <div>
        <img class="responsive" src="/images/calidad_datos.jpeg" alt="Infografía de dimensiones y gobierno de la calidad de datos" />
        <SalaryTable
          title="Calidad de Datos"
          ni="$833 – $2,083/mes"
          latam="$1,667 – $3,750/mes"
          remoto="$5,833 – $10,000/mes"
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
