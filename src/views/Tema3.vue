<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Presupuesto financiero

    p Los presupuestos financieros pueden clasificarse en: 
    
    .row.bg-8.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img1.png')
                  .col-md-7.mb-4.mb-md-0
                    h4 Presupuesto de inversiones

                    p Conformado por los activos fijos y las inversiones estratégicas que los administradores proyectan adquirir durante el periodo de presupuestación. Los activos fijos pueden adquirirse para reemplazar otros obsoletos, mejorar tecnología o ampliar la capacidad instalada de la empresa.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img2.png')
                  .col-md-7.mb-4.mb-md-0
                    h4 Presupuesto de caja

                    p Es la planeación de todas las entradas y salidas de dinero durante un periodo futuro determinado. Esta herramienta financiera apoya la toma de decisiones sobre niveles de inversión, financiación y pago de dividendos.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema3/img3.png')
                  .col-md-7.mb-4.mb-md-0
                    h4 Presupuesto de financiación

                    p Incorpora la planeación de las fuentes de financiación internas y externas. Las internas incluyen emisión de acciones comunes, acciones preferentes, retención de utilidades y aportes de socios. Las externas comprenden la contratación de deuda con entidades financieras o la emisión de bonos o papeles comerciales. Este presupuesto define la estructura financiera y de capital de la empresa.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Importancia del presupuesto

    .row.align-items-center.mt-4
      .col-lg-8
        p La proyección de gastos financieros representa la estimación de los costos que genera a la empresa, el uso de fuentes externas de financiamiento para sus actividades, para facilitar las transacciones provenientes del curso del negocio por tener disponible y seguro el efectivo de la empresa. 

        .row.bg-4.p-4(data-aos="fade-left")
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema3/img4.svg", alt="", style="width: 90px").m-auto
          .col-lg-10 
            p El cálculo de este presupuesto depende del resultado estimado de los otros presupuestos tratados, ya que depende del total de transacciones y recursos a financiar.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema3/img5.png", alt="", style="width: 505px").m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
