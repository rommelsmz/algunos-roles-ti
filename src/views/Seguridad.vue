<template>
  <section class="card" aria-labelledby="sec-title">
    <h2 id="sec-title">Seguridad Informática</h2>
    <div class="grid-2">
      <div>
        <h3>CISO / Responsable de Seguridad Informática</h3>
        <p>
          El CISO define políticas, estándares y gobierno de
          seguridad para todos los sistemas (on‑prem y nube). Gestiona riesgos, cumplimiento de normativas
          y prioriza inversiones según impacto de negocio y exposición regulatoria. Lidera respuesta a incidentes, pruebas de
          crisis, continuidad (BCM) y planes de recuperación (DRP), coordinando con demas involucrados en área de Tecnología, Riesgos y Legal.
        </p>
        <p>
          No escribe Terraform ni hace tunings diarios de servicios cloud; establece el marco (apetito de riesgo, controles
          mínimos, segregación de funciones) y acepta riesgos residuales. Trabaja con DevOps y el especialista en Ciberseguridad Cloud para
          incorporar controles a pipelines y plataformas y verificar su eficacia.
        </p>
        <h4>Funciones clave (CISO)</h4>
        <ul>
          <li>Gobierno, políticas, estándares y concientización (capacitaciones).</li>
          <li>Gestión de riesgos, cumplimiento y auditorías; métricas y reporting.</li>
          <li>Planeación y liderazgo de IR/BCM/DRP; simulacros y mejora continua.</li>
          <li>Priorización de inversiones y terceros; cláusulas de seguridad en contratos.</li>
        </ul>
        <hr>
        <h3>Ciberseguridad en la Nube</h3>
        <p>
          Implementa seguridad técnica en Servidores Cloud: IAM de menor privilegio y MFA, cifrado, segmentación y hardening de
          servicios gestionados (almacenamiento, DBs administradas, Contenedores, Kubernetes). Define y aplica guardrails, detección y
          remediación de malconfiguraciones, y control de postura. Integra escáneres y políticas en CI/CD con DevOps, y prioriza
          remediaciones por impacto y criticidad.
        </p>
        <p>
          No fija políticas corporativas ni apetito de riesgo (eso es CISO). Su alcance es técnico y focalizado en plataformas cloud.
        </p>
        <h4>Funciones clave del Especialista Ciberseguridad Cloud:</h4>
        <ul>
          <li>Diseño de identidades y acceso (IAM), segmentación y secretos.</li>
          <li>Hardening de servicios, control de postura y respuesta a hallazgos.</li>
          <li>Integración de controles en CI/CD; pruebas y evidencias de cumplimiento.</li>
          <li>Monitoreo de amenazas cloud‑native y automatización de remediación.</li>
        </ul>
        <h3>Diferencias claves con DevOps y CISO</h3>
        <p>
          El CISO es estratégico y cubre todos los sistemas (on‑prem y nube); el especialista en ciberseguridad en la nube es técnico y se enfoca
          exclusivamente en plataformas cloud; DevOps opera y automatiza la entrega e infraestructura, integrando políticas y
          guardrails.
        </p>
      </div>
      <div>
        <img class="responsive" src="/images/ciso.jpeg" alt="Infografía de funciones de CISO" />
        <img class="responsive" src="/images/cloud.jpeg" alt="Infografía de funciones del Especialista en Ciberseguridad en la Nube" />
        <div class="card" style="margin-top:1rem">
          <h4 style="margin-top:0">Rangos Salariales — CISO / Responsable</h4>
          <SalaryTable
            title="CISO / Responsable"
            ni="Nicaragua $1,850 – $2,917/mes"
            latam="LatAm $2,083 – $4,583/mes"
            remoto="Remoto $8,333 – $13,333/mes"
          >
          </SalaryTable>
        </div>
        <div class="card" style="margin-top:1rem">
          <h4 style="margin-top:0">Rangos Salariales — Especialista Cloud</h4>
          <SalaryTable
            title="Especialista Cloud"
            ni="Nicaragua $1,900 – $3,500/mes"
            latam="LatAm $2,500 – $5,000/mes"
            remoto="Remoto $9,167 – $14,167/mes"
          >
            <template #nota>
              Estos son rangos aproximados; varían por experiencia, empresa y ubicación exacta. Los Especialistas en Ciberseguridad en la Nube pueden tener salarios más altos debido a la alta demanda de habilidades técnicas específicas en plataformas de nube en el sector financiero, donde la digitalización impulsa la necesidad de expertos en configuraciones seguras y mitigación de amenazas cloud-native. El Responsable de Seguridad Informática, aunque más integral, puede tener un enfoque más estratégico y menos técnico en algunos mercados, lo que puede influir en los rangos salariales.
            </template>
          </SalaryTable>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import SalaryTable from '../components/SalaryTable.vue'
</script>
