export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'La jurisdicción constitucional',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'La Corte Constitucional como órgano de control',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Naturaleza y funciones de la Corte Constitucional',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Composición y designación de los magistrados',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Las acciones constitucionales como mecanismos de protección',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Acción pública de inconstitucionalidad',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Acción de tutela y control judicial ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Excepción de inconstitucionalidad y control difuso',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Mecanismos de reforma constitucional',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Acto legislativo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Referendo constitucional',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Asamblea nacional constituyente',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Álvarez Díaz, O. L. (2008). <em>Estado social de derecho, Corte Constitucional y desplazamiento forzado en Colombia</em>. Siglo del Hombre Editores.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69280',
    },
    {
      referencia:
        'Sandoval Rojas, N. (2015). <em>Movilizarse ante la Corte: trayectoria y efectos de tres episodios de movilización legal constitucional de feministas, indígenas y víctimas de crímenes de Estado en Colombia</em>. Universidad de los Andes.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70579',
    },
    {
      referencia:
        'Navarro-Hernández, J. L. (2022). <em>Análisis del control judicial previo a las actuaciones que limitan el derecho a la intimidad en Colombia</em>. Jurídicas CUC, 18(1), 279–302.',
      link: 'https://doi.org/10.17981/juridcuc.18.1.2022.12',
    },
    {
      referencia:
        'Gaceta Jurídica. (2014). <em>Jurisprudencia constitucional: acción de cumplimiento</em>. El Cid Editor.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/30458',
    },
    {
      referencia:
        'Chávez Sáenz, J. D. (2024). <em>La acción pública o popular de inconstitucionalidad: hacia un nuevo concepto e implementación procesal en México</em>. Cuestiones Constitucionales, (51).',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S1405-91932024000200102',
    },
    {
      referencia:
        'Cifuentes Muñoz, E. (2005). <em>La acción de tutela en Colombia</em>. Red Ius et Praxis.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/11063',
    },
    {
      referencia:
        'Zúñiga Urbina, F. (2004). <em>Control concreto de constitucionalidad: recurso de inaplicabilidad y cuestión de constitucionalidad en la reforma constitucional</em>. Estudios Constitucionales, 2(1), 209–225.',
      link: 'https://www.redalyc.org/pdf/820/82020109.pdf',
    },
    {
      referencia:
        'Castro Niño, N., & Reyes Cuartas, J. (2023). <em>La selección y el trámite de revisión de la acción de tutela ante la Corte Constitucional</em>. Universidad Externado de Colombia.',
      link:
        'https://bdigital.uexternado.edu.co/entities/publication/9addd728-6ed2-4a21-bb5c-67bacf7f75ee',
    },
  ],
  glosario: [
    {
      termino: 'Acción pública de inconstitucionalidad',
      significado:
        'Es el mecanismo que tiene cualquier ciudadano para demandar normas que contradigan la Constitución.',
    },
    {
      termino: 'Bloque de constitucionalidad',
      significado:
        'Está conformado por normas y principios que, sin estar en el texto constitucional, tienen rango constitucional.',
    },
    {
      termino: 'Congreso',
      significado:
        'Órgano legislativo compuesto por el Senado y la Cámara de Representantes.',
    },
    {
      termino: 'Constitución',
      significado:
        'Es la norma de normas y fundamento del ordenamiento jurídico de un Estado.',
    },
    {
      termino: 'Control constitucional',
      significado:
        'Es el conjunto de procedimientos que permiten verificar que las leyes y actos se ajusten a la Constitución.',
    },
    {
      termino: 'Control de constitucionalidad',
      significado:
        'Proceso mediante el cual se verifica la conformidad de las normas con la Constitución.',
    },
    {
      termino: 'Control político',
      significado:
        'Es el control que ejerce el Congreso sobre las acciones del Gobierno y la administración pública.',
    },
    {
      termino: 'Control previo',
      significado:
        'Es el análisis jurídico que se hace de una norma antes de su promulgación.',
    },
    {
      termino: 'Consejo de Estado',
      significado:
        'Máxima instancia de la jurisdicción contencioso administrativa.',
    },
    {
      termino: 'Corte Constitucional',
      significado:
        'Es el órgano encargado de la guarda de la integridad y supremacía de la Constitución.',
    },
    {
      termino: 'Democracia',
      significado:
        'Es el sistema político que permite la participación ciudadana en las decisiones públicas.',
    },
    {
      termino: 'Estado social de derecho',
      significado:
        'Es un modelo de Estado que busca garantizar los derechos fundamentales y promover la justicia social.',
    },
    {
      termino: 'Jurisdicción constitucional',
      significado:
        'Conjunto de órganos encargados de ejercer el control constitucional.',
    },
    {
      termino: 'Presidencia',
      significado: 'Máxima autoridad del poder ejecutivo en Colombia.',
    },
    {
      termino: 'Supremacía constitucional',
      significado:
        'Es el principio que establece que la Constitución prevalece sobre cualquier otra norma.',
    },
  ],
}
