<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.bg-1
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-9
              p El presupuesto es una herramienta fundamental en la gestión financiera de las organizaciones, ya que permite proyectar, controlar y evaluar los recursos necesarios para alcanzar los objetivos estratégicos. A través del presupuesto, las empresas pueden anticiparse a escenarios financieros, planificar sus actividades y optimizar la asignación de recursos en función de sus metas.

              .row.justify-content-center
                .col-lg-12.mt-4
                  .row.justify-content-center
                    .col-lg-12(data-aos="fade-down")
                      .row.d-flex.align-items-stretch.bg-2
                        .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                          figure.m-0.p-0.w-100.h-100.d-flex
                            img(src='@/assets/curso/intro/img1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
                        .col-lg.p-lg-5
                          .p-2.w-100.align-items-center
                            p En la actualidad, en medio de tanta competitividad se hace necesario que las empresas tengan una cultura empresarial, y de servicio al cliente, donde se otorgue gran importancia a la satisfacción de las necesidades, expectativas y gustos de los diferentes usuarios.

              p.mt-4 Además, se complementa el contenido con un caso práctico, aplicando técnicas como la regresión lineal para la proyección de ventas, y se desarrollan cálculos clave para definir costos, inversiones y fuentes de financiación. Este enfoque integral prepara al aprendiz para enfrentar retos reales en la elaboración de presupuestos empresariales.

            .col-lg-3
              figure(data-aos="fade-down")
                img(src='@/assets/curso/intro/img2.png', alt='', style="width: 295px").m-auto


          


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
