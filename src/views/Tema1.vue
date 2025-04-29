<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Presupuesto
    
    .row.justify-content-center
      .col-lg-12.mt-4
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/img1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg.p-lg-5
                .p-2.w-100.align-items-center
                  p El presupuesto es un estado de las entradas y salidas de efectivo planeadas de la empresa que se utiliza para calcular sus necesidades de efectivo a corto plazo, dedicando especial atención a la planificación de los excedentes y faltantes de caja. Se diseña para cubrir un período de un año, dividido en intervalos más pequeños. El número y tipo de intervalos depende de la naturaleza de la empresa, puesto que muchas empresas se enfrentan a un patrón de flujo de efectivo estacional, el presupuesto se presenta con una frecuencia mensual.

    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Generalidades

    .row.align-items-center
      .col-lg-8
        p El término presupuesto se escucha a menudo en los medios de comunicación y en la vida cotidiana cuando las personas van a realizar un viaje, planificar sus gastos mensuales o proyectar sus inversiones o metas; en este proceso se determina el tiempo, el dinero y los insumos requeridos para lograr las metas.

        .row.bg-4.p-4(data-aos="fade-left")
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema1/img2.svg", alt="", style="width: 90px").m-auto
          .col-lg-10 
            p El presupuesto tiene presencia desde cuando los egipcios lo usaban en la proyección del recaudo de los impuestos de los pueblos conquistados; pero solo hasta finales del siglo XVIII en Inglaterra, y gracias al parlamento británico, el presupuesto fue implementado como herramienta administrativa de planeación y control para controlar los procesos encaminados al logro de los objetivos de las empresas tanto públicas como privadas.

        p.mt-4 #[b Un presupuesto es un plan expresado] en términos financieros con respecto a las operaciones, inversiones y financiamiento de una empresa, durante un periodo determinado, con el fin de lograr los objetivos fijados en el plan estratégico de la organización. 

      .col-lg-4.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema1/img3.png", alt="", style="width: 505px").m-auto


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Importancia del presupuesto

    p.mt-4 Es una herramienta de planeación, organización, dirección y control que facilita la toma de decisiones, el seguimiento y control de los procesos, la orientación a los colaboradores en la ejecución de procesos, además, aporta al desarrollo de estrategias para la maximización del valor de la empresa y para disminuir los riesgos tanto financieros como operacionales.

    .row.justify-content-center
      .col-lg-12.mt-4
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-5
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema1/img4.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg.p-lg-5
                .p-2.w-100.align-items-center
                  p Características generales del presupuesto

                  ul.lista-ul--color
                    li.d-flex
                      i.fa-solid.fa-greater-than
                      |
                      p.mb-0 Cuantifica en términos monetarios los planes operativos de la empresa.

                    li.d-flex
                      i.fa-solid.fa-greater-than
                      |
                      p.mb-0 Se presenta de acuerdo con la normatividad contable y financiera, las normas internacionales y políticas empresariales vigentes. 

                    li.d-flex
                      i.fa-solid.fa-greater-than
                      |
                      p.mb-0 En su elaboración se integra de manera general a la organización, puesto que se reconoce la interacción de cada área y de todos los niveles en el cumplimiento del objeto social de la compañía (Ramírez, 2011).

                    li.d-flex
                      i.fa-solid.fa-greater-than
                      |
                      p.mb-0 Se elabora para períodos regularmente de un año.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Etapas o ciclo presupuestal

    p.mt-4 Es el conjunto de fases que las empresas deben desarrollar periódicamente desde la planeación del presupuesto hasta el control presupuestal. 

    p Las fases son las siguientes:

    .row.align-items-center
      .col-lg-8 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Planeación")
            .col-12.mb-4.mb-md-0
              p Se analizan las variaciones del presupuesto anterior y los factores internos y externos de la empresa para establecer oportunidades, amenazas, fortalezas y debilidades. Se definen objetivos, estrategias, políticas financieras y el personal requerido.

          div(titulo="Elaboración")
            p Se transforman los planes en cifras monetarias: ventas, costos, gastos, inversiones y financiación. Luego se elabora el informe presupuestal para la aprobación y publicación por parte de la gerencia.

          div(titulo="Ejecución")

            p Se implementan los planes trazados, vinculando a las áreas con las metas del presupuesto. Se definen metodologías y herramientas de seguimiento, y se promueven estrategias de comunicación y motivación para el personal.

          div(titulo="Control presupuestal")
            p Se unifican criterios para presentar informes parciales por área, identificando dificultades en la ejecución y permitiendo ajustes a tiempo. La gerencia evalúa avances y actualiza procesos según sea necesario.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img5.png', alt='', style="width: 400px").m-auto

    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Clasificación del presupuesto

    .row.align-items-center
      .col-lg-10
        p Los presupuestos pueden clasificarse según la flexibilidad, el período, el sector empresarial y el campo de aplicación, como se explica a continuación: 
      .col-lg-2.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema1/img6.png", alt="", style="width: 190px").m-auto


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Según la flexibilidad

    p.mt-4 Esta clasificación responde a la capacidad del presupuesto para ajustarse a las condiciones cambiantes del entorno.

    TabsB.color-acento-contenido
      .py-4.py-md-5.bg-7(titulo="Rígidos" :icono="require('@/assets/curso/tema1/img7.svg')")
        .row.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/img9.png', style="width:340px").m-auto

          .col-md-8.mb-4.mb-md-0.p-lg-0.p-4
            h4 Rígidos
            p Se elaboran para un único volumen de producción, el cual, una vez alcanzado, no permite ajustes ya que tienen como función generar un control anticipado sin tener en cuenta variaciones en el entorno económico, político o social. Anteriormente eran muy utilizados en el sector público.

      .py-4.py-md-5.bg-7(titulo="Flexibles" :icono="require('@/assets/curso/tema1/img8.svg')")
        .row.align-items-center
          .col-md-4
            figure
              img(src='@/assets/curso/tema1/img10.png', style="width:340px").m-auto

          .col-md-8.mb-4.mb-md-0.p-lg-0.p-4
            h4 Flexibles
            p Se elaboran para diferentes niveles de producción, tienen en cuenta el comportamiento de los indicadores macroeconómicos como el PIB, la tasa de cambio y la inflación, al igual que, movimientos políticos y sociales a nivel nacional e internacional, por lo cual se pueden adaptar fácilmente a las circunstancias cambiantes del entorno. Son de gran aceptación en el campo de la presupuestación moderna, pues son dinámicos, adaptativos, pero complicados y costosos.

    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Según el periodo

    p.mt-4 Esta categoría distingue los presupuestos según el tiempo que abarcan, ya sea a corto o largo plazo.

    .row
      .col-lg-12
        TabsA.color-acento-botones.mb-5
          .tarjeta.clr-paleYellow.p-4(titulo="A corto plazo")
            .row.align-items-center
              .col-lg-10
                h4 A corto plazo
                p Son los que se realizan para cubrir la planeación de la empresa en periodos de hasta un año. Constituyen el típico proceso de presupuestación y exigen que se calculen con el más mínimo detalle todos los rubros que incidirán en la elaboración de los estados financieros de la empresa.
              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema1/img11.svg", alt="", style="width: 155px").m-auto

          .tarjeta.clr-paleYellow.p-4(titulo="A largo plazo")
            .row.align-items-center
              .col-lg-10
                h4 A largo plazo
                p Constituyen el denominado proceso de proyección de estados financieros que tiene por objeto medir el efecto de las alternativas de decisión que tomen los administradores sobre la situación financiera de la empresa en un plazo mayor a un año (mediano y largo plazo).

              .col-lg-2.d-lg-block.d-none
                figure
                  img(src="@/assets/curso/tema1/img11.svg", alt="", style="width: 155px").m-auto


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Según sector empresarial

    p.mt-4 Los presupuestos también varían dependiendo del tipo de organización que los implementa, ya sea pública o privada.

    .row.align-items-center
      .col-lg-8 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Público")
            .col-12.mb-4.mb-md-0
              p Es la herramienta que le permite al sector público cumplir con la producción de bienes y servicios públicos para satisfacer las necesidades de la población de conformidad con el rol asignado al Estado en la economía y sociedad del país. El control presupuestal para las entidades del Estado lo efectúa la Contraloría General de la República, ante quien tienen que rendir cuentas los administradores de dichas entidades, sometiéndose, en algunas ocasiones, a procesos disciplinarios que terminan en muchos casos en destitución y pérdida de la libertad. La metodología de elaboración consiste en calcular el valor de los gastos e inversiones que se van a realizar durante el periodo y luego planear cómo se obtendrán los recursos, ya sea recaudando impuestos, recurriendo a empréstitos o emitiendo papel moneda.

          div(titulo="Privado")
            p Son elaborados por empresas particulares. A diferencia de los presupuestos públicos, los del sector privado calculan primero la cantidad de recursos provenientes del desarrollo de la actividad principal del negocio, como son las ventas de contado, el recaudo de cartera y la financiación con proveedores. Luego determinan el monto de la inversión requerida tanto en activos como en funcionamiento (costos y gastos), y finalmente calculan los requerimientos de financiación con pasivo financiero y con patrimonio.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema1/img12.png', alt='', style="width: 400px").m-auto


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-c3(data-aos="fade-left")
        .row.align-items-center
          .col-auto.px-0
            figure
              img(src='@/assets/curso/tema1/icon1.svg', alt='', style='width: 60px')
          .col
            h3.mb-0 Según el campo de aplicación

    p.mt-4 Este criterio agrupa los presupuestos de acuerdo con el área funcional donde se utilizan.

    .row.bg-8.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img13.png')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    h4 Operativos

                    p Incluye los presupuestos de ventas, de producción y de gastos de operación.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img14.png')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    h4 Financieros

                    p Involucra los presupuestos de caja o tesorería, inversión y financiación.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema1/img15.png')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    h4 Presupuesto maestro

                    p Incluye el presupuesto operativo y financiero. Se elabora generalmente para períodos anuales, pero se recomienda presupuestar mensualmente y al final del año se analizan los datos con el fin de elaborar los estados financieros. Por medio de esta herramienta, los administradores pueden planificar a la compañía en todas y cada una de sus áreas.

    .row.bg-9
      .col-12
        .p-5
          .row.align-items-center
            .col-lg-2.d-lg-block.d-none
              figure
                img(src="@/assets/curso/tema1/img16.svg", alt="", style="width: 85px").m-auto
            .col-lg-10
              p Para elaborar el presupuesto maestro se debe tener en cuenta la planeación estratégica aprobada por la gerencia. El presupuesto representa una herramienta para dirigir la empresa hacia los objetivos trazados.
                  
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
