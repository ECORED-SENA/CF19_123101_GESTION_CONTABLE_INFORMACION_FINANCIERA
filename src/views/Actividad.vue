<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Comprensión del presupuesto operativo y financiero en la gestión contable',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar los conceptos clave relacionados con la elaboración, clasificación, metodología y aplicación del presupuesto operativo y financiero en el contexto de la gestión contable y empresarial.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el objetivo principal del presupuesto dentro de una organización?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Proyectar, controlar y evaluar los recursos para alcanzar los objetivos estratégicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Planificar, organizar y controlar los recursos financieros.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Supervisar únicamente los costos operativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar únicamente los ingresos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de presupuesto se adapta a diferentes niveles de producción y considera cambios macroeconómicos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presupuesto rígido.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presupuesto flexible.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Presupuesto público.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presupuesto a corto plazo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el componente inicial dentro de la metodología del presupuesto operativo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Proyección de efectivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presupuesto de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Presupuesto de ventas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Gastos administrativos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál de los siguientes elementos forma parte del presupuesto operativo?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presupuesto de financiación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presupuesto de gastos de operación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Presupuesto de caja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presupuesto de inversión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué técnica se menciona como una forma de estimar ventas en el presupuesto de ventas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Análisis de flujo de caja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Regresión lineal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Contabilidad por devengo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presupuesto base cero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la diferencia principal entre un presupuesto público y uno privado?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El público estima primero gastos, el privado estima primero ingresos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ambos utilizan los mismos métodos contables.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El privado está regulado por la Contraloría.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El público no proyecta fuentes de financiación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué representa el presupuesto maestro en una empresa?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un conjunto de informes de ventas mensuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La integración del presupuesto operativo y financiero.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un documento que solo incluye gastos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un análisis del mercado internacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué significa una política de inventario de productos terminados de 15 días?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La empresa puede almacenar productos por un mes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las unidades deben estar listas para 15 días de venta.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Solo se produce una vez al mes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Se almacenan productos para el trimestre.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes NO es un componente del presupuesto financiero?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Presupuesto de caja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presupuesto de ventas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Presupuesto de inversión.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Presupuesto de financiación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué herramienta se utiliza para prever los ingresos y egresos futuros de efectivo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Balance general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presupuesto de caja.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Estado de resultados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Estado patrimonial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El presupuesto operativo no tiene relación con la planeación estratégica de la empresa.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El presupuesto rígido no permite ajustes ante cambios en el entorno.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La regresión lineal es uno de los métodos utilizados para proyectar ventas.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Los presupuestos financieros incluyen la planificación de activos fijos e inversiones.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El estado de flujo de efectivo presupuestado solo incluye ingresos por ventas de contado.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Falso',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Verdadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
