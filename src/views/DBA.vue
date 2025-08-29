<template>
  <section class="card" aria-labelledby="dba-title">
    <h2 id="dba-title">Administrador de Bases de Datos (DBA)</h2>
    <div class="grid-2">
      <div>
        <p>
          El DBA garantiza disponibilidad, rendimiento, integridad y seguridad de la base de datos en las empresas.
          Diseña esquemas, índices y planes de mantenimiento para bases SQL/NoSQL administradas
          o autogestionadas, minimizando downtime durante cierres y temporadas críticas.
        </p>
        <p>
          Su foco técnico incluye tuning de consultas, particionamiento, HA/DR, y políticas de backup/restore
          validadas. Trabaja con DevOps para automatizar provisionamiento y con Seguridad para cifrado, controles de acceso y
          cumplimiento. Colabora con Calidad de Datos en reglas de validación, linaje y catálogos.
        </p>
        <h3>Funciones clave</h3>
        <ul>
          <li>Modelado de datos, normalización y gobierno de esquemas; control de cambios.</li>
          <li>Performance tuning (índices, planes, cachés) y monitoreo del gestor de base de datos.</li>
          <li>Seguridad de datos: cifrado en reposo/en tránsito, usuarios y roles (en la base de datos), otorga mínimos privilegios.</li>
          <li>Backups verificados, restauraciones periódicas y planes de mantenimiento.</li>
        </ul>
        <h3>Diferencias frente a otros roles</h3>
        <p>
          A diferencia de DevOps, el DBA profundiza en el motor de base de datos y su rendimiento; no define políticas corporativas
          como el CISO ni implementa guardrails cloud a nivel de plataforma como el especialista en seguridad Cloud. Su ámbito es la plataforma
          de datos y su operación óptima.
        </p>
      </div>
      <div>
        <img class="responsive" src="/images/dba.jpeg" alt="Infografía sobre administración y rendimiento de bases de datos" />
        <SalaryTable
          title="DBA"
          ni="$1,250 – $2,500/mes"
          latam="$2,083 – $4,167/mes"
          remoto="$7,500 – $11,667/mes"
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
