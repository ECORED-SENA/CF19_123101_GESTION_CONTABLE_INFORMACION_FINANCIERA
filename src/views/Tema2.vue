<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Presupuesto operativo

    .row.justify-content-center
      .col-lg-12.mt-4
        .row.justify-content-center
          .col-lg-12(data-aos="fade-down")
            .row.d-flex.align-items-stretch.bg-3
              .col-lg-auto.pe-xl-0.mb-4.mb-xl-0.d-flex.d-none.d-lg-block
                figure.m-0.p-0.w-100.h-100.d-flex
                  img(src='@/assets/curso/tema2/img1.png', alt='', class="w-100 h-100 object-fit-cover", style="margin-left:-10px")
              .col-lg.p-lg-5
                .p-2.w-100.align-items-center
                  p El presupuesto operativo forma parte del #[b presupuesto maestro] y es esencial para planificar, organizar y controlar los recursos de una empresa. A continuación, se presentan sus componentes principales. Es importante comprender cada uno, ya que permiten desarrollar, en el futuro, un presupuesto propio ajustado a las necesidades del negocio.

    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Componentes del presupuesto operativo

    p El presupuesto operativo está compuesto por varios subpresupuestos que, en conjunto, permiten planificar las operaciones y proyectar los recursos necesarios para cumplir los objetivos estratégicos de la empresa. A continuación, se presentan los principales:

    .row.align-items-center
      .col-lg-8 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Presupuesto de ventas")
            .col-12.mb-4.mb-md-0
              p.px-5 Incluye la presupuestación de volúmenes y precios de venta, alineados con la política de penetración de mercado y la estrategia empresarial. Puede elaborarse por línea de productos o zonas geográficas. Es el más complejo debido a los pronósticos que involucra. Se utilizan técnicas como el método de mínimos cuadrados, regresión lineal y promedios históricos para estimar la participación en el mercado.

          div(titulo="Presupuesto de producción")
            p.px-5  Determina las unidades a producir, materias primas a utilizar y comprar, empleados requeridos, valor de la nómina, y costos indirectos de fabricación. También incluye los inventarios finales según las políticas empresariales (por ejemplo, justo a tiempo o inventario cero). Estas políticas definen la inversión necesaria en materia prima, productos en proceso y productos terminados.

          div(titulo="Presupuesto de gastos de operación")
            p.px-5  Proyecta los recursos necesarios para: puesta en marcha, gestión administrativa, distribución, publicidad y sostenimiento. Se divide en:

            ul.px-5.lista-ul--color
              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Gastos de administración: nómina, servicios, mantenimiento, seguros, arrendamientos, honorarios, depreciaciones.

              li.d-flex
                i.fa-solid.fa-greater-than
                |
                p.mb-0 Gastos de ventas: incluye los anteriores más comisiones y fletes de ventas (Ministerio de Hacienda y Crédito Público, 2020).

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img2.png', alt='', style="width: 400px").m-auto

    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Metodología para la elaboración del presupuesto operativo

    p La elaboración del presupuesto operativo sigue una secuencia lógica que permite construir una visión integral de las necesidades financieras de la empresa:

    .row.bg-8.mt-4
      .col-12
        .p-5
          .tarjeta.tarjeta--azul.mb-6(style='background-color: white !important')
            .p-4.p-lg-5
              SlyderA(tipo="b")
                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img3.png')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    h4 Presupuesto de ventas

                    p Punto de partida. Proyecta las ventas en cantidades y valores, lo cual define el tamaño de la empresa y, por ende, la inversión en activos, capacidad instalada y costos/gastos operacionales.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img4.png')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    h4 Presupuesto de producción

                    p Estima las unidades a producir y los requerimientos de materias primas, mano de obra directa y carga fabril. De aquí se obtiene el costo de producción presupuestado.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img5.png')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    h4 Inversión en inventarios

                    p Depende de la política de inventarios establecida en el plan estratégico. Se calcula el valor de los inventarios finales.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img6.png')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    h4 Proyección de cartera

                    p Determinada por la política de crédito de la organización.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img7.png')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    h4 Proyección en efectivo

                    p Calcula el dinero necesario para operar, especialmente crucial en empresas nuevas que aún no tienen ingresos estables ni clientes fidelizados.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img8.png')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    h4 Gastos administrativos y de ventas

                    p Se proyectan los montos necesarios para sostener las actividades operativas.

                .row.justify-content-center.align-items-center.my-lg-4
                  .col-md-5
                    figure
                      img(src='@/assets/curso/tema2/img9.png')
                  .col-md-7.mb-4.mb-md-0.mt-lg-0.mt-4
                    h4 Fuentes de financiación

                    p Se proyectan las posibles fuentes de financiamiento (proveedores, acreedores financieros y socios), en función de la inversión total requerida.

    separador
    #t_2_3.titulo-segundo.color-acento-contenido
      h2 2.3 Aplicación práctica

    .row.bg-10
      .col-12
        .p-5
          p Un grupo de inversionistas contrató la elaboración de estudios preoperativos con el fin de analizar la viabilidad financiera de una nueva empresa. Los estudios incluyeron:

          .row.justify-content-center
            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema2/img10.svg', style="width:105px").m-auto

                h4.text-center Estudio de mercados
                p.text-small.text-center Estimación del volumen y precio de ventas.

            .col-sm-6.col-lg-4.mb-4.mb-lg-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema2/img11.svg', style="width:105px").m-auto

                h3.text-center Estudio técnico
                p.text-small.text-center Cálculo de volúmenes de producción, requerimientos de materia prima, volumen a comprar, mano de obra, costos indirectos, activos fijos.

            .col-sm-6.col-lg-4.mb-4.mb-sm-0
              .tarjeta--boton.bg-11.p-4.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure
                      img(src='@/assets/curso/tema2/img12.svg', style="width:105px").m-auto

                h3.text-center Estudio gerencial
                p.text-small.text-center Elaboración del plan estratégico.

    .row.mt-4.align-items-center.bg-4.p-4
      .col-lg-1.d-lg-block.d-none
        figure
          img(src="@/assets/curso/tema2/img13.svg", alt="", style="width: 90px").m-auto
      .col-lg-11
        p Con estos insumos se busca determinar el monto de inversión inicial y las fuentes de financiación (proveedores, acreedores financieros, socios), siempre considerando las políticas definidas en el plan estratégico. El siguiente es el resumen de las cifras que sirvieron de base para elaborar el presupuesto:

    p.mt-4 Ventas proyectadas de 125.000 unidades calculadas utilizando el método de regresión lineal que sigue la siguiente metodología:

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span.text-black a
        | Se dispone de las ventas históricas del sector durante los últimos 6 años:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1.
          span Proyección histórica de cantidades por año

        .tabla-a.color-acento-contenido.mt-4 
          table
            thead
              tr(style="background-color: #FD9826")
                th Año (histórico) 
                th Cantidad

            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Año 1 
                td.text-start 4.950.000
              tr
                td.text-start Año 2
                td.text-start 5.380.000
              tr
                td.text-start Año 3
                td.text-start 5.760.000
              tr
                td.text-start Año 4
                td.text-start 6.150.000
              tr
                td.text-start Año 5
                td.text-start 6.625.000
              tr
                td.text-start Año 6
                td.text-start 8.377.500

    .row.align-items-center.mt-4
      .col-lg-8 
        ol.lista-ol--cuadro
          li 
            .lista-ol--cuadro__vineta
              span.text-black b
            | Se proyectan las ventas futuras del sector para los próximos años utilizando la ecuación y = mx + b, en donde:

        .row.mt-4.bg-4.p-4
          ul.lista-ul
            li 
              i.lista-ul__vineta
              | <em><b>m</b></em> es la pendiente de la línea de regresión que representa el número de unidades que aumenta y por cada unidad de x. Se calcula con la siguiente fórmula:

          figure
            img(src="@/assets/curso/tema2/img15.svg", alt="", style="width: 214px")

          ul.lista-ul.mt-4
            li 
              i.lista-ul__vineta
              | <em><b>b</b></em> es la intersección de y en la línea de regresión cuando x toma el valor de cero. Se calcula con la siguiente fórmula:

          figure
            img(src="@/assets/curso/tema2/img16.svg", alt="", style="width: 262px")

          ul.lista-ul.mt-4
            li 
              i.lista-ul__vineta
              | <em><b>x</b></em> es el número del año histórico.


      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img14.png', alt='', style="width: 400px").m-auto

    ol.lista-ol--cuadro.mt-4
      li 
        .lista-ol--cuadro__vineta
          span.text-black c
        | Para desarrollar las fórmulas de #[b #[i m]] y #[b #[i b]] se utilizó la siguiente tabla en Excel:


    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span Cálculos para regresión lineal

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Año (histórico)
                th X
                th Y
                th XY
                th X²

            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Año 1
                td.text-center 1
                td.text-center 4.950.000
                td.text-center 4.950.000
                td.text-center 1
              tr
                td.text-start Año 2
                td.text-center 2
                td.text-center 5.380.000
                td.text-center 10.760.000
                td.text-center 4
              tr
                td.text-start Año 3
                td.text-center 3
                td.text-center 5.760.000
                td.text-center 17.280.000
                td.text-center 9
              tr
                td.text-start Año 4
                td.text-center 4
                td.text-center 6.150.000
                td.text-center 24.000.000
                td.text-center 16
              tr
                td.text-start Año 5
                td.text-center 5
                td.text-center 6.625.000
                td.text-center 33.125.000
                td.text-center 25
              tr
                td.text-start Año 6
                td.text-center 6
                td.text-center 8.377.500
                td.text-center 50.265.000
                td.text-center 36
              tr(style="font-weight: bold")
                td.text-start Sumatorias
                td.text-center 21
                td.text-center 37.242.500
                td.text-center 140.980.000
                td.text-center 91

    p.mt-4 El resumen de los datos es el siguiente:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span Datos estadísticos para regresión lineal

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th n
                th 6

            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Sumatoria de Y
                td.text-center 37.242.500
              tr
                td.text-start Sumatoria de X
                td.text-center 21
              tr
                td.text-start Sumatoria de XY
                td.text-center 140.980.000
              tr
                td.text-start Sumatoria de X²
                td.text-center 91


    ol.lista-ol--cuadro.mt-4
      li 
        .lista-ol--cuadro__vineta
          span.text-black d
        | A continuación, se presenta la gráfica de la línea de regresión elaborada con los datos consignados anteriormente:

    .titulo-sexto.color-acento-contenido.mb-3
      h5 Figura 1.  
      span Tendencia de ventas proyectadas mediante regresión lineal 

    .row.bg-11.justify-content-center.p-4
      figure
        img(src='@/assets/curso/tema2/img17.svg', alt='', style="width: 647px").m-auto


    ol.lista-ol--cuadro.mt-4
      li 
        .lista-ol--cuadro__vineta
          span.text-black c
        | Con los datos calculados de #[b #[i m]] y #[b #[i b]] se proyectan las ventas para los períodos que se necesiten. 
      
    p A continuación, se muestra la proyección para 6 años siendo 7 el primer año de la proyección:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span Proyección de cantidades para los próximos años

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Año (proyectado)
                th N.º del año
                th Cantidad

            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Año 1
                td.text-center 7
                td.text-center 8.333.333
              tr
                td.text-start Año 2
                td.text-center 8
                td.text-center 8.940.833
              tr
                td.text-start Año 3
                td.text-center 9
                td.text-center 9.548.333
              tr
                td.text-start Año 4
                td.text-center 10
                td.text-center 10.155.833
              tr
                td.text-start Año 5
                td.text-center 11
                td.text-center 10.763.333
              tr
                td.text-start Año 6
                td.text-center 12
                td.text-center 11.370.833

    ol.lista-ol--cuadro.mt-4
      li 
        .lista-ol--cuadro__vineta
          span.text-black f
        | De acuerdo con un estudio del mercado, la empresa podría participar con una participación del 1,5% de las ventas del sector, por lo cual la empresa vendería durante los próximos 6 años el siguiente volumen de unidades:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span Proyección de ventas de la empresa según participación en el sector

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Cantidad de ventas del sector
                th Participación de la empresa
                th Ventas de la empresa

            tbody(style="background-color: #F6F6F6")
              tr
                td.text-center 8.333.333
                td.text-center 1,5%
                td.text-center 125.000
              tr
                td.text-center 8.940.833
                td.text-center 1,5%
                td.text-center 134.113
              tr
                td.text-center 9.548.333
                td.text-center 1,5%
                td.text-center 143.225
              tr
                td.text-center 10.155.833
                td.text-center 1,5%
                td.text-center 152.338
              tr
                td.text-center 10.763.333
                td.text-center 1,5%
                td.text-center 161.450
              tr
                td.text-center 11.370.833
                td.text-center 1,5%
                td.text-center 170.563

    .row.mt-4
      .col-lg-8
        .row.p-4.bg-4
          p Es de aclarar que existen otros métodos para efectuar la proyección de ventas como:

          .row.mb-2.ms-0
            .col-auto.bg-3(data-aos="fade-left")
              .row.align-items-center
                .col
                  h3.mb-0 Incremento porcentual 

          p Se basa en calcular el promedio simple del incremento porcentual en el volumen de ventas de un año con respecto del anterior: 

          figure
            img(src="@/assets/curso/tema2/img19.svg", alt="", style="width: 400px")

        p.mt-4 El cálculo para los seis años quedaría de la siguiente manera:

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img18.png', alt='', style="width: 400px").m-auto

  

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Crecimiento porcentual de las ventas del sector

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th CANTIDAD DE VENTAS DEL SECTOR
                th INCREMENTO PORCENTUAL

            tbody(style="background-color: #F6F6F6")
              tr
                td.text-center 4.950.000
                td.text-center
              tr
                td.text-center 5.380.000
                td.text-center 8,69%
              tr
                td.text-center 5.760.000
                td.text-center 7,06%
              tr
                td.text-center 6.150.000
                td.text-center 6,77%
              tr
                td.text-center 6.625.000
                td.text-center 7,72%
              tr
                td.text-center 8.377.500
                td.text-center 26,45%
              tr
                td.text-center Promedio
                td.text-center 11,34%

        p.mt-4 Si se utiliza este método, las ventas para el primer año de proyección sería de:

        p.p-4.bg-12 8.377.500 x (1+11,34%) = 9.327.463

    .row
      .col-lg-8
        .row.p-4.bg-4
          .row.mb-2.ms-0
            .col-auto.bg-3(data-aos="fade-left")
              .row.align-items-center
                .col
                  h3.mb-0 Crecimiento de la economía

          p Medido con el macroindicador económico Producto Interno Bruto (PIB). Este método se basa en el supuesto de que el crecimiento en el volumen de ventas de una empresa, debe ser al menos el crecimiento económico del país o del sector al cual pertenezca la empresa.

          p Existen otros métodos de pronóstico de ventas los cuales se recomienda investigar en su debido momento.

        p.mt-4 Se debe tener en cuenta al momento de proyectar las ventas, si la empresa vende productos con estacionalidad, como ocurre con los útiles escolares o artículos navideños.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img20.png', alt='', style="width: 400px").m-auto

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 7.
          span Datos Clave para el Cálculo de Ventas y Costos del Primer Año

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Valor

            tbody(style="background-color: #F6F6F6")
              tr
                td Ventas esperadas para el primer año (unidades)
                td.text-center 125.000
              tr
                td Precio de venta unitario
                td.text-center $245
              tr
                td Costo Primo
                td.text-center
              tr
                td Costo unitario de materia prima
                td.text-center $85
              tr
                td Costo unitario de mano de obra directa
                td.text-center $35
              tr
                td Porcentaje de prestaciones sociales
                td.text-center 50%
              tr
                td Porcentaje de prestaciones pagadas de contado
                td.text-center 80%


        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 8.
          span Costos Indirectos de Fabricación Mensuales   

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Valor Mensual

            tbody(style="background-color: #F6F6F6")
              tr
                td Mano de obra indirecta
                td.text-center $65.000
              tr
                td Arrendamiento
                td.text-center $22.000
              tr
                td Mantenimiento
                td.text-center $11.000
              tr
                td Otros
                td.text-center $45.000


        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 9.
          span Niveles de Inversión en Activos Corrientes e Impuesto     

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Valor

            tbody(style="background-color: #F6F6F6")
              tr
                td Cuentas por cobrar (días de ventas)
                td.text-center 60 días
              tr
                td Materia prima (días de producción)
                td.text-center 60 días
              tr
                td Productos en proceso (días de venta)
                td.text-center 15 días
              tr
                td Producto terminado (días de ventas)
                td.text-center 75 días
              tr
                td Tasa de impuesto a la renta
                td.text-center 35%

    p.mt-4 Inicialmente, se debe elaborar el presupuesto de producción para determinar el número de unidades a producir, cifra que depende del volumen de ventas, y de las políticas sobre inventarios de productos en proceso y productos terminados. En este proceso se utiliza el conocido método de juego de inventarios de la siguiente manera:
   
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 10.
          span Cálculo de Unidades a Vender a Partir de Producción e Inventarios
        
        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Elemento
                th Operación

            tbody(style="background-color: #F6F6F6")
              tr
                td Inventario inicial
                td.text-center Más ( + )
              tr
                td Unidades a producir
                td.text-center Igual ( = )
              tr
                td Menos inventario final
                td.text-center Menos ( – )
              tr
                td Igual
                td.text-center Unidades a vender



    p.mt-4 Como lo que se desea determinar es el número de unidades a producir, se despeja la ecuación anterior:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 11.
          span Cálculo de Unidades a Producir a Partir de Ventas e Inventarios

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Elemento
                th Operación

            tbody(style="background-color: #F6F6F6")
              tr
                td Unidades a vender
                td.text-center Menos ( – )
              tr
                td Menos inventario inicial
                td.text-center
              tr
                td Más inventario final
                td.text-center Más ( + )
              tr
                td Igual
                td.text-center Unidades a producir

    p.mt-4 Ahora bien, el caso plantea que al final del periodo presupuestado quedan no sólo unidades de productos terminados sino también de productos en proceso. 

    p Por lo anterior, se efectúa un doble juego de inventarios como se ilustra a continuación:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 12.
          span Cálculo Ampliado de Unidades a Producir

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Elemento
                th Operación

            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Unidades a vender
                td.text-center Menos ( – )
              tr
                td.text-start Menos inventario inicial de productos en proceso
                td.text-center Menos ( – )
              tr
                td.text-start Menos inventario final de productos terminados
                td.text-center Menos ( – )
              tr
                td.text-start Más inventario final de productos en proceso
                td.text-center Más ( + )
              tr
                td.text-start Menos inventario final de productos terminados
                td.text-center Menos ( – )
              tr
                td.text-start <b>Igual</b>
                td.text-center Unidades a producir

    .row.mt-4
      .col-lg-8
        p Si se tiene en cuenta que es el primer año de operaciones de la empresa, los valores de inventarios iniciales serán 0.

        p Para calcular las cantidades de inventarios finales se utilizan los índices de rotación.

        .row.p-5.bg-4
          p Una política de inventario de productos terminados de 15 días significa que los administradores esperan que el proceso de venta dure máximo 15 días, por consiguiente, al final del periodo presupuestado quedarán unidades terminadas para 15 días de ventas. ¿Cuál es ese número de unidades?

          figure
            img(src="@/assets/curso/tema2/img22.svg", alt="", style="width: 559px")

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img21.png', alt='', style="width: 400px").m-auto

    .row.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img23.png', alt='', style="width: 400px").m-auto
      .col-lg-8

        .row.p-4.bg-4
          p.mb-4 De igual manera se calcula el número de unidades terminadas equivalentes al inventario final de productos en proceso:

          figure
            img(src="@/assets/curso/tema2/img24.svg", alt="", style="width: 559px")

    p.mt-4 Con los datos anteriores se calcula el número de unidades a producir bajo el siguiente esquema:

      
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 13.
          span Cálculo de Unidades a Producir (Caso Práctico)

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Elemento
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Unidades a vender
                td.text-center 125.000
              tr
                td.text-start Menos inventario inicial de productos en proceso
                td.text-center –
              tr
                td.text-start Menos inventario final de productos terminados
                td.text-center –
              tr
                td.text-start Más inventario final de productos en proceso
                td.text-center 5.208
              tr
                td.text-start Más inventario final de productos terminados
                td.text-center 26.042
              tr
                td.text-start #[b = Unidades a producir]
                td.text-center #[b 156.250]

    p.mt-4 Seguidamente se calcula el presupuesto de costo de producción:

    p Con el valor del costo de producción unitario en efectivo

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 14.
          span Presupuesto de Costo de Productos (en miles de pesos)

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Cálculo
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Materia prima
                td.text-center 85 x 156.250
                td.text-center $13.281.250
              tr
                td.text-start Mano de obra directa
                td.text-center 35 x 156.250
                td.text-center $5.468.750
              tr
                td.text-start Mano de obra indirecta (mensual x 12)
                td.text-center 65.000 x 12
                td.text-center $780.000
              tr
                td.text-start Prestaciones sociales (50%)
                td.text-center (5.468.750 x 50%)
                td.text-center $2.734.375
              tr
                td.text-start Arrendamiento (mensual x 12)
                td.text-center 22.000 x 12
                td.text-center $264.000
              tr
                td.text-start Mantenimiento (mensual x 12)
                td.text-center 11.000 x 12
                td.text-center $132.000
              tr
                td.text-start Otros costos indirectos (mensual x 12)
                td.text-center 45.000 x 12
                td.text-center $540.000
              tr
                td.text-start #[b Total costos en efectivo]
                td
                td.text-center #[b $23.590.375]
              tr
                td.text-start Depreciación
                td
                td.text-center #[b $1.200.000]
              tr
                td.text-start #[b Costo total de producción]
                td
                td.text-center #[b $24.790.375]
              tr
                td.text-start #[b Costo unitario total]
                td.text-center 24.790.375 / 156.250
                td.text-center #[b $158,66]
              tr
                td.text-start #[b Costo unitario en efectivo]
                td.text-center 23.590.375 / 156.250
                td.text-center #[b $150,98]


    p.mt-4  Se calcula la inversión que se debe hacer en inventarios y en cartera:

    .row.justify-content-center
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 15.
          span Inversión en Activos Corrientes (en miles de pesos)

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Cálculo
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Productos en proceso
                td.text-center 5.208 x 150,98
                td.text-center $786.346
              tr
                td.text-start Productos terminados
                td.text-center 26.042 x 150,98
                td.text-center $3.931.729
              tr
                td.text-start Materia prima
                td.text-center (13.281.350 / 360) x 60
                td.text-center $2.213.542
              tr
                td.text-start Cartera
                td.text-center (125.000 / 360 x 60) x 150,98
                td.text-center $3.145.383
              tr
                td.text-start #[b Total inversión en capital de trabajo operativo]
                td
                td.text-center #[b $10.077.000]

    .row.mt-4
      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img25.png', alt='', style="width: 400px").m-auto
      .col-lg-8
        .row.p-4.bg-4
          p.mt-4 Para calcular el valor de la inversión en inventario de materia prima, se obtiene el consumo diario dividiendo el costo total de materia prima entre el número de días del año.

          figure
            img(src="@/assets/curso/tema2/img26.svg", alt="", style="width: 241px")

          p.mt-4 Luego se multiplica el valor diario por los días de materia prima para calcular la inversión en materia prima: 

          figure.mb-2
            img(src="@/assets/curso/tema2/img27.svg", alt="", style="width: 241px")

    .row.mt-4
      .col-lg-8
        .row.p-4.bg-4
          p Para determinar el valor de la inversión en cartera se debe determinar el número de unidades que los clientes quedan debiendo al final del periodo y luego multiplicar ese número por el costo unitario en efectivo. Si al año se venden 125.000 unidades y los clientes quedan debiendo el equivalente a 60 días, pues quedan debiendo 20.833 unidades calculas de la siguiente manera:

          figure
            img(src="@/assets/curso/tema2/img28.svg", alt="", style="width: 213px")

          p.mt-4 Las cuales valoradas al costo unitario en efectivo dan una inversión de $3.145.383:

          figure
            img(src="@/assets/curso/tema2/img29.svg", alt="", style="width: 260px")

          p.mt-4 La inversión total en capital de trabajo operativo se debe financiar una parte con proveedores y el resto con el flujo de caja generado por la empresa.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img30.png' style="width: 400px").m-auto

    p.mt-4 Para calcular el valor a financiar con proveedores se debe determinar primero el valor de las compras de materia prima de todo el periodo.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 16.
          span Financiación con Proveedores (en miles de pesos)estadísticos para regresión lineal

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Elemento
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Consumo de materia prima
                td.text-center $13.281.250
              tr
                td.text-start Menos: Inventario inicial de materia prima
                td.text-center $0
              tr
                td.text-start Más: Inventario final de materia prima
                td.text-center $2.213.542
              tr
                td.text-start = Compras a crédito
                td.text-center #[b $15.494.792]

      
    .row.mt-4
      .col-lg-8
        .row.p-4.bg-4
          p Luego el valor que la empresa queda debiendo a los proveedores al final del año: 
          figure
            img(src="@/assets/curso/tema2/img31.svg", alt="", style="width: 289px")

        p.mt-4 Ya se tiene información suficiente para determinar el valor total de la inversión inicial requerida en activos que debe hacer la compañía y la financiación disponible:

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img32.png' style="width: 400px").m-auto

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 17.
          span Inversión en activos

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Efectivo
                td.text-center $1.697.458
              tr
                td.text-start Cuentas por cobrar
                td.text-center $3.145.383
              tr
                td.text-start Inventario de materia prima
                td.text-center $2.213.542
              tr
                td.text-start Inventario de productos en proceso
                td.text-center $786.346
              tr
                td.text-start Inventario de productos terminados
                td.text-center $3.931.729
              tr
                td.text-start Maquinaria
                td.text-center $12.000.000
              tr
                td.text-start #[b Total inversión en activos]
                td.text-center #[b $23.774.458]

        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 18.
          span Financiación disponible

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Efectivo en activos
                td.text-center $0
              tr
                td.text-start Proveedores
                td.text-center $1.936.849
              tr
                td.text-start Préstamos bancarios
                td.text-center $7.500.000
              tr
                td.text-start #[b Total financiación]
                td.text-center #[b $9.436.849]



        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 19.
          span Aporte requerido de socios

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Cálculo
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Inversión total en activos
                td.text-center $23.774.458
              tr
                td.text-start Menos: Financiación disponible
                td.text-center $9.436.849
              tr
                td.text-start #[b = Total aporte requerido de socios]
                td.text-center #[b $14.337.609]

    p.mt-4 El siguiente paso es calcular el costo de ventas.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 20.
          span Cálculo de Costos de Ventas (en miles de pesos)

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Inventario inicial de productos en proceso
                td.text-center $0
              tr
                td.text-start Más: Costo de producción
                td.text-center $24.790.375
              tr
                td.text-start Menos: Inventario final de productos en proceso
                td.text-center $826.346
              tr
                td.text-start #[b = Costo de productos terminados]
                td.text-center #[b $23.964.029]
              tr
                td.text-start Más: Inventario inicial de productos terminados
                td.text-center —
              tr
                td.text-start Menos: Inventario final de productos terminados
                td.text-center $4.131.729
              tr
                td.text-start #[b = Total costo de venta]
                td.text-center #[b $19.832.300]

    p.mt-4 Con el valor del costo de ventas se elabora el estado de resultados proyectado como se muestra a continuación:

    .titulo-sexto.color-acento-contenido.mb-3.mt-4
      h5 Figura 2.  
      span Ingresos de dinero fuente o uso de $ egresos de dinero 

    figure
      img(src='@/assets/curso/tema2/img33.svg', alt='', style="width: 1240px").m-auto


    .row.mb-2.ms-0.mt-4
      .col-auto.bg-3(data-aos="fade-left")
        .row.align-items-center
          .col
            h4.mt-2.mb-2 ¿Qué datos van al estado de flujo de efectivo?

    p.mt-4 Veamos, por ejemplo, cómo se reparte el valor de las ventas en los diferentes estados financieros:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 21.
          span Relación de operaciones y su impacto en los estados financieros

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Operación
                th Valor
                th 
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Ventas a crédito
                td.text-center $30.625.000
                td.text-center Resultados
              tr
                td.text-start Los clientes quedan debiendo 60 días
                td.text-center $5.104.166
                td.text-center Balance general
              tr
                td.text-start Los clientes pagaron 300 días
                td.text-center $25.520.833
                td.text-center Flujo de efectivo


    p.mt-4 El estado de flujo de efectivo se elabora bajo el siguiente formato:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 22.
          span Estado de Flujo de Efectivo Proyectado Completo (en miles de pesos)

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Efectivo generado por las operaciones
                td -
              tr
                td.text-start Recaudo de cartera
                td.text-center $25.520.833
              tr
                td.text-start Menos: Egresos operativos
                td -
              tr
                td.text-start Pagos de materia prima
                td.text-center $13.557.943
              tr
                td.text-start Sueldos y salarios
                td.text-center $6.248.750
              tr
                td.text-start Prestaciones sociales
                td.text-center $2.499.500
              tr
                td.text-start Arrendamiento
                td.text-center $264.000
              tr
                td.text-start Mantenimiento
                td.text-center $132.000
              tr
                td.text-start Otros costos indirectos
                td.text-center $540.000
              tr
                td.text-start Gastos de administración y ventas
                td.text-center $3.000.000
              tr
                td.text-start Total egresos operativos
                td.text-center $26.242.193
              tr
                td.text-start Total efectivo generado por operaciones
                td.text-center $721.359


        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 23.
          span Más: efectivo que proveerán las actividades de financiación 

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Monto
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Aportes de socios
                td.text-center $14.337.609
              tr
                td.text-start Préstamos bancarios
                td.text-center $7.500.000
              tr
                td.text-start Menos: Abono a préstamo
                td.text-center $2.500.000
              tr
                td.text-start Menos: Intereses
                td.text-center $1.800.000
              tr
                td.text-start Efectivo provisto por actividades de financiación
                td.text-center $17.537.609


        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 24.
          span Menos: Efectivo que demandarán las actividades de inversión 
        
        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Menos: efectivo que demandarán las actividades de inversión
                td.text-center -
              tr
                td.text-start Compra de maquinaria
                td.text-center $12.000.000
              tr
                td.text-start Total efectivo demandado actividades de inversión
                td.text-center $12.000.000
              tr
                td.text-start Aumento del efectivo
                td.text-center $4.816.250
              tr
                td.text-start Más: efectivo inicial
                td.text-center $0
              tr
                td.text-start Efectivo final
                td.text-center #[b $4.816.250]

    .row.mt-4
      .col-lg-8
        p Como es el primer año de actividades no hay efectivo inicial.
        .row.align-items-center.p-4.bg-4
          .col-lg-2.d-lg-block.d-none
            figure
              img(src="@/assets/curso/tema2/img34.svg", alt="", style="width: 90px").m-auto
          .col-lg-10
            p El aumento del efectivo es la sumatoria del efectivo generado por la operación más el efectivo provisto por las actividades de financiación menos el efectivo que demandan las actividades de inversión.

        p.mt-4 El valor del efectivo final se lleva al estado de balance general en la cuenta de efectivo.

        p Finalmente, ya está todo listo para elaborar el estado de situación financiera (balance general) presupuestado, que resume el movimiento y saldo de cada una de las operaciones efectuadas por la empresa.

      .col-lg-4.d-lg-block.d-none
        figure
          img(src='@/assets/curso/tema2/img35.png', alt='', style="width: 400px").m-auto

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 25.
          span Activos

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Efectivo
                td.text-center $4.816.250
              tr
                td.text-start Cuentas por cobrar
                td.text-center $5.104.166
              tr
                td.text-start Materias primas
                td.text-center $2.213.541
              tr
                td.text-start Producto en proceso
                td.text-center $826
              tr
                td.text-start Producto terminado
                td.text-center $4.131.729
              tr
                td.text-start Maquinaria
                td.text-center $12.000.000
              tr
                td.text-start Menos: depreciación acumulada
                td.text-center -$1.200.000
              tr
                td.text-start #[b Total activos]
                td.text-center #[b $27.892.033]


        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 26.
          span Pasivos

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Proveedores
                td.text-center $1.936.849
              tr
                td.text-start Préstamos bancarios
                td.text-center $5.000.000
              tr
                td.text-start Impuestos por pagar
                td.text-center $2.097.445
              tr
                td.text-start Prestaciones sociales
                td.text-center $624.875
              tr
                td.text-start #[b Total pasivos]
                td.text-center #[b $9.659.169]


        .titulo-sexto.color-acento-contenido.mb-3.mt-4
          h5 Tabla 27.
          span Patrimonio

        .tabla-a.color-acento-contenido.mt-4
          table
            thead
              tr(style="background-color: #FD9826")
                th Concepto
                th Valor
            tbody(style="background-color: #F6F6F6")
              tr
                td.text-start Capital
                td.text-center $14.337.609
              tr
                td.text-start Utilidades retenidas
                td.text-center $3.895.255
              tr
                td.text-start #[b Total patrimonio]
                td.text-center #[b $18.232.864]



</template>

<script>
export default {
  name: 'Tema2',
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
