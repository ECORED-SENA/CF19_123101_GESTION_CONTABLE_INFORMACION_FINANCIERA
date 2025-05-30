export default {
  global: {
    Name: 'Presupuesto operativo',
    Description:
      'El componente formativo “Presupuesto operativo” dentro del programa de “Gestión contable y de información financiera”. Explica los fundamentos y etapas del presupuesto, su clasificación, tipos operativos y financieros, y la metodología para su elaboración. Aporta herramientas para proyectar ventas, costos, inversión y financiamiento, permitiendo tomar decisiones estratégicas fundamentadas. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Presupuesto',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Generalidades',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación del presupuesto',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Presupuesto operativo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Componentes del presupuesto operativo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Metodología para la elaboración del presupuesto operativo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Aplicación práctica',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Presupuesto financiero',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/123101_CF19_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Presupuesto operativo',
      referencia:
        'Presidencia de la República. (1996). Decreto 111 de 1996: Estatuto Orgánico del Presupuesto. Diario Oficial No. 42.718.',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5306',
    },
    {
      tema: 'Presupuesto financiero',
      referencia:
        'Contaduría General de la Nación. (s.f.). Marco Conceptual de la Contabilidad Pública.',
      tipo: 'Normatividad Técnica',
      link: 'https://www.contaduria.gov.co/marco-conceptual',
    },
    {
      tema: 'Presupuesto financiero',
      referencia:
        'International Accounting Standards Board (IASB). (2023). Normas Internacionales de Información Financiera (NIIF). Fundación IFRS.',
      tipo: 'Norma Internacional',
      link: 'https://www.ifrs.org/issued-standards/list-of-standards/',
    },
  ],
  glosario: [
    {
      termino: 'Administración',
      significado:
        'proceso de planificar, organizar, dirigir y controlar el uso de los recursos y las demás actividades, con el fin de lograr los objetivos o metas de la organización de forma eficiente y eficaz.',
    },
    {
      termino: 'Control',
      significado:
        'función administrativa que abarca el proceso de medición y evaluación del desempeño, a fin de adoptar las medidas correctivas necesarias, que debe ser un proceso permanente y regulador.',
    },
    {
      termino: 'Estados financieros',
      significado:
        'informes financieros o de cuentas anuales que, por disposición legal, deben presentar las empresas para mostrar su situación económica y financiera durante un periodo determinado.',
    },
    {
      termino: 'Estrategia',
      significado:
        'herramienta de dirección que proporciona procedimientos y técnicas con fundamento científico que, aplicadas de forma permanente, permiten mejorar las relaciones de la organización y su entorno, buscando siempre cumplir la satisfacción de las necesidades de sus clientes y el logro de objetivos.',
    },
    {
      termino: 'Margen de rentabilidad bruto',
      significado:
        'representa el margen de utilidad obtenido sobre las ventas, donde sólo se recupera el costo de ventas.',
    },
    {
      termino: 'Margen de rentabilidad neta',
      significado:
        'representa el margen de utilidad obtenido sobre las ventas, una vez cubiertos los impuestos y las reservas.',
    },
    {
      termino: 'Meta',
      significado:
        'término definido para demostrar el cumplimiento de una meta, estas se complementan con los objetivos definidos en la estrategia.',
    },
    {
      termino: 'Objetivo',
      significado:
        'enunciado de un deseo y las acciones concretas que se proponen para alcanzarlo. Este debe ser claro, medible y observable. Define de forma más abstracta y cualitativa lo que pretende lograr.',
    },
  ],
  referencias: [
    {
      referencia:
        'Araújo, A., D. (2012). <em>Presupuestos empresariales: eje de la planeación financiera</em>. Editorial Trillas.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Hacienda y Crédito Público. (2020). <em>Aspectos generales del proceso presupuestal colombiano.</em> ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normograma/Lineamiento%20Ministerio%20de%20Hacienda%20y%20Credito%20P%C3%BAblico.pdf',
    },
    {
      referencia:
        'Ramírez, M., C. (2011). Los presupuestos: sus objetivos e importancia. <em>Revista Cultural Unilibre</em>, (2), 74-84.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hernando Rodríguez Figueroa',
          cargo: 'Experto temático',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta ',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
