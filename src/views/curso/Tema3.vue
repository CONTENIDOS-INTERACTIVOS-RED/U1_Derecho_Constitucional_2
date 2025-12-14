<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Mecanismos de reforma constitucional'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-6.order-2
            figure
              img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
          .col-lg-6.order-1.mb-3.mb-lg-0
            p(data-aos="fade-left").mb-4 A continuación, se presenta un podcast  que analiza en profundidad los mecanismos de reforma constitucional en Colombia, destacando su importancia para la estabilidad democrática y la adaptación del orden constitucional a las transformaciones sociales, políticas e institucionales del país.
    
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Sin embargo, la experiencia colombiana ha evidenciado que la aplicación de estos mecanismos no ha estado exenta de tensiones. En distintos momentos, se ha cuestionado el uso del poder de reforma para modificar principios esenciales del orden constitucional. Esto ha llevado a la Corte Constitucional a desarrollar una doctrina sobre los límites del poder de reforma, particularmente a través de la figura de la sustitución de la Constitución. Por ello, el análisis de los mecanismos de reforma no puede restringirse a su estructura formal, sino que debe incorporar una reflexión sobre su función en el sistema democrático, sus implicaciones jurídicas y políticas, y su relación con el principio de supremacía constitucional (Pani, 2010).
            .bg-color-1.p-5(data-aos="fade-left").mb-3
              p.mb-0 Estudiar estos mecanismos permite explorar los márgenes de la democracia, los alcances del poder institucional y las vías mediante las cuales la sociedad puede transformar su pacto jurídico sin poner en riesgo los valores fundamentales que lo sustentan. A lo largo de este tema, se analizarán en profundidad las tres formas de reforma reconocidas por el ordenamiento colombiano, sus requisitos, procedimientos, instituciones involucradas y las tensiones constitucionales generadas por su aplicación.

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Acto legislativo
  
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") El acto legislativo es el mecanismo ordinario de reforma constitucional en Colombia y una de las instituciones jurídicas más relevantes para comprender el dinamismo del orden constitucional. A diferencia de sistemas más rígidos, la Constitución de 1991 fue concebida como una carta flexible, abierta al cambio frente a transformaciones sociales, políticas, institucionales y culturales. Sin embargo, dicha flexibilidad no implica fragilidad: existen procedimientos rigurosos que buscan garantizar la legitimidad e integridad del texto constitucional (Olano García, 2009).
        
            .bg-color-2.p-5(data-aos="fade-left").mb-3
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Previsto en el artículo 374 de la Constitución y regulado por el artículo 375, el acto legislativo requiere que cualquier proyecto de reforma sea tramitado en dos períodos legislativos ordinarios y consecutivos, y aprobado por mayoría absoluta en ambas cámaras durante cada período. Este diseño busca evitar decisiones apresuradas, garantizando un debate reflexivo y progresivo. Entre la primera y segunda vuelta deben transcurrir al menos 15 días, y entre los debates de cada vuelta, 8 días como mínimo.
            p La iniciativa para presentar un acto legislativo no está restringida al Gobierno. También pueden hacerlo:
        
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 01
                  p.mb-0 La décima parte de los miembros del Congreso.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/6.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 02
                  p.mb-0 El 20 % de los concejales o diputados del país.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/7.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 03
                  p.mb-0 El 5 % del censo electoral, mediante solicitud respaldada por firmas.
        
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
          .col-lg-8
            p Esto refleja el carácter participativo de la Constitución de 1991, que amplía los canales democráticos e incorpora a la ciudadanía organizada en los procesos de reforma.
            .bg-color-4.p-5(data-aos="fade-left").mb-3
              p.mb-0 Aunque el acto legislativo es expedido por el Congreso, no tiene naturaleza de ley, ya que no regula situaciones ordinarias, sino que modifica la estructura constitucional. Se ubica por encima de las leyes, pero no por encima de la Constitución. Este carácter especial explica la preocupación jurídica por su uso indebido, especialmente en relación con la doctrina de la sustitución de la Constitución, establecida en la sentencia C-551 de 2003 y consolidada en fallos posteriores como la C-1040 de 2005 y la C-588 de 2009.
            p(data-aos="fade-left") La Corte Constitucional ha sostenido que el Congreso, como poder constituido, puede reformar la Constitución, pero no sustituirla. Es decir, no puede modificar sus principios fundantes ni desnaturalizar su estructura básica. Cuando se exceden estos límites, la Corte puede declarar la reforma inconstitucional, como ocurrió con intentos de alterar la estructura de la rama judicial o debilitar el principio democrático bajo reformas formalmente válidas (Olano García, 2009).
      
        .row.align-items-center.mb-5.justify-content-center
          .col-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/29.svg", style="max-width: 90px").mx-auto
          .col
            h2.mb-0 Ejemplos históricos
        
        p.mb-5 El acto legislativo ha sido utilizado en múltiples ocasiones para introducir reformas sustantivas:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/9.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Acto legislativo 02 de 2004
                p.mb-0 Permitió la reelección presidencial inmediata. Fue aprobado durante el gobierno de Álvaro Uribe Vélez y generó tensiones sobre el equilibrio de poderes. La Corte Constitucional bloqueó el intento de una segunda reelección mediante la sentencia C-141 de 2010, al declarar inexequible el referendo reeleccionista por violar la separación de poderes.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema3/10.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Acto legislativo 01 de 2017
                p.mb-0 Incorporó disposiciones para la implementación del Acuerdo Final de Paz, bajo control constitucional permanente. Refleja el rol del Congreso como agente de transformación jurídica en contextos de relevancia política y social.
        
        .bg-full-width.bg-color-3.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 En la práctica, esta herramienta ha servido para modificar aspectos diversos de la Constitución: justicia, participación ciudadana, sistema de salud, descentralización, régimen electoral, derechos fundamentales, regímenes especiales y políticas fiscales. Sin embargo, su uso excesivo ha generado preocupación por el riesgo de banalización de la norma constitucional y por la posible erosión de su legitimidad simbólica y jurídica.
    
    .row.align-items-center.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/29.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Perspectiva crítica

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Estudiar el acto legislativo exige más que una descripción de su procedimiento. Es necesario un análisis crítico que permita distinguir entre reformas legítimas y aquellas que ponen en riesgo la arquitectura constitucional. En este contexto, la Corte Constitucional cumple un rol central como guardiana de la supremacía constitucional, mientras que la ciudadanía y los actores sociales deben vigilar el ejercicio del poder político.
    
        .bg-color-1.p-5(data-aos="fade-left").mb-3
          p.mb-0 En suma, el acto legislativo es un instrumento jurídico valioso que ha permitido introducir reformas importantes sin recurrir a mecanismos extraordinarios. No obstante, su uso debe estar guiado por el compromiso con la democracia, el respeto a la institucionalidad y la defensa de los principios constitucionales. Solo así puede evitarse que esta figura derive en una herramienta de regresión institucional.

    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Referendo constitucional
    
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/13.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El referendo constitucional representa uno de los mecanismos más directos de participación ciudadana en la reforma de la Carta Magna colombiana. A diferencia del acto legislativo, que responde exclusivamente a la dinámica representativa del Congreso, el referendo permite que el pueblo intervenga de forma inmediata y vinculante en decisiones de reforma constitucional. Este mecanismo fortalece la legitimidad democrática de los cambios propuestos y convierte a la ciudadanía en protagonista del proceso constituyente derivado, en coherencia con el carácter participativo del Estado Social y Democrático de Derecho (Gómez Roldán, 2011).
    
    .row.align-items-center.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/29.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Fundamento normativo y procedimiento

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Este mecanismo se encuentra regulado por los artículos 374 y 376 de la Constitución Política de 1991. El primero incorpora el referendo como vía de reforma, mientras que el segundo establece que todo proyecto debe tener aprobación previa del Congreso antes de ser sometido a consulta popular. El referendo puede ser impulsado por el Congreso o mediante iniciativa ciudadana (5 % del censo electoral), lo que refleja su naturaleza mixta, basada en la articulación entre legitimidad parlamentaria y popular.
    
        .bg-color-4.p-5(data-aos="fade-left").mb-3
          h5 El procedimiento implica:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Presentación del proyecto de reforma ante el Congreso.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Aprobación en dos períodos por mayoría absoluta en ambas cámaras.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Envío al Consejo Nacional Electoral para verificación formal y organización de la votación.
            li.mb-0.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Votación del pueblo con las siguientes condiciones:
          ul.lista-ul--color
            li.mb-0.d-flex
              i.fas.fa-circle.fa-xs.mt-1.ms-3
              p.mb-0 Mayoría afirmativa (más del 50 % de votos válidos).
            li.mb-0.d-flex
              i.fas.fa-circle.fa-xs.mt-1.ms-3
              p.mb-0 Participación de al menos el 25 % del censo electoral.
    
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estas condiciones buscan evitar decisiones adoptadas por minorías o sin respaldo ciudadano significativo.
    
    .row.align-items-center.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/29.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Fundamento normativo y procedimiento
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 Aunque el referendo puede reforzar la legitimidad constitucional, también entraña riesgos. Existe la posibilidad de que decisiones trascendentales se tomen bajo el influjo de campañas mediáticas, polarización o simplificación populista, sin suficiente deliberación pública. Por ello, el diseño constitucional incluye debate legislativo previo, publicidad de la iniciativa, campañas informativas equilibradas, y, crucialmente, la posibilidad de control judicial posterior.
    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La Corte Constitucional, en sentencias como C-130 de 2019 y C-698 de 2018, ha reafirmado que el referendo no puede usarse para alterar la estructura esencial del Estado Social de Derecho, ni para eludir los límites materiales y formales del poder de reforma. También ha subrayado la importancia de promover la deliberación democrática, la inclusión de las minorías y la información rigurosa como elementos clave para que este mecanismo cumpla su función democrática.

    .row.align-items-center.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/29.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Ejemplos representativos
      
    .bg-full-width.bg-color-6
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/17.png", data-aos="zoom-in")
          .col-lg-8
            p Uno de los casos más importantes ocurrió en 1997, cuando se aprobó en el Congreso un referendo que pretendía instaurar la reelección indefinida, modificar el sistema electoral y reducir el número de congresistas. A pesar de cumplir formalidades, fue declarado inexequible por la Corte Constitucional (Sentencia C-602 de 1997), al considerar que transgredía principios estructurales como la separación de poderes y la representación democrática.
            .bg-color-7.p-5(data-aos="fade-left").mb-3
              p.mb-0 Otro caso destacado fue el referendo de 2016, relacionado con el Acuerdo Final de Paz. Aunque no se trató de un referendo constitucional propiamente dicho, sí generó debate sobre la legitimidad de reformas derivadas de procesos de consulta popular y expuso tensiones entre voluntad popular, institucionalidad y estabilidad constitucional.
            p(data-aos="fade-left") Más recientemente, la iniciativa Renovación Política de 2023 propuso reformas sobre financiación electoral, reelección y anticorrupción. Aunque no alcanzó los umbrales requeridos, reveló el creciente interés ciudadano por utilizar el referendo como vía para incidir en el orden constitucional. Este caso mostró también las dificultades prácticas del mecanismo: recolección de firmas, financiación de campañas, cobertura mediática y apatía electoral. 

        .row.align-items-center.mb-5.justify-content-center
          .col-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/29.svg", style="max-width: 90px").mx-auto
          .col
            h2.mb-0 Valor democrático y tensión institucional
        
        p.mb-5 El referendo constitucional es, sin duda, un instrumento democratizador, pero su uso requiere instituciones sólidas, ciudadanía crítica y controles jurídicos robustos. Mal diseñado o manipulado, puede debilitar la cultura constitucional y provocar inestabilidad normativa. Su adecuada implementación debe asegurar:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/18.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 01
                  p.mb-0 Respeto por la deliberación pluralista.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/19.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 02
                  p.mb-0 Voto informado.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/20.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 03
                  p.mb-0 Evitación de reformas oportunistas o regresivas.
        
        .bg-full-width.bg-color-3.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/11.svg", style="max-width: 90px").mx-auto
              .col-lg.text-white
                p.mb-0 Desde una perspectiva constitucional, el referendo refuerza la soberanía popular y complementa la representación parlamentaria. Sin embargo, solo debe utilizarse cuando existan garantías procesales suficientes y un contexto político maduro. En ese sentido, más que un simple instrumento de decisión, es un termómetro de la salud democrática del país.

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Asamblea nacional constituyente
    
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/21.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La Asamblea Nacional Constituyente es el mecanismo más profundo, excepcional y trascendental dentro del sistema de reforma constitucional colombiano. A diferencia del acto legislativo y del referendo, que operan dentro de una lógica de reforma parcial y limitada, la asamblea constituyente permite reconfigurar el orden constitucional en su conjunto. Su finalidad no es modificar aspectos puntuales, sino crear un nuevo pacto constitucional, redefinir la estructura del Estado, establecer nuevas bases del sistema jurídico y sustituir por completo la Constitución vigente (Barreto Rozo, 2011).

    .row.align-items-center.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/29.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Fundamento normativo y procedimiento
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left").mb-5 Este mecanismo está regulado por el artículo 376 de la Constitución de 1991, el cual permite al Congreso de la República, mediante una ley aprobada por mayoría absoluta, convocar una asamblea constituyente. Esta ley debe incluir:
    
        .bg-color-1.p-4(data-aos="fade-left").mb-3
          ul.lista-ul--color.mb-0
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Número de integrantes.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Período de funcionamiento.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Reglas de elección.
            li.mb-2.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 Límites precisos de competencia: las materias sobre las que podrá deliberar y decidir.
        p Una vez expedida la ley, debe ser revisada por la Corte Constitucional antes de que la asamblea pueda ser convocada. Este control previo de constitucionalidad garantiza que la convocatoria cumpla con los principios del Estado de Derecho, y que no se utilice el mecanismo para fines autoritarios o para subvertir la democracia (Sentencia C-141 de 2010).

    .row.align-items-center.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/29.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Ejemplo histórico: la Asamblea de 1991
    
    .bg-full-width.bg-color-6
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/23.png", data-aos="zoom-in")
          .col-lg-8
            p La Asamblea Nacional Constituyente de 1991 es el caso más emblemático. Fue convocada en un contexto de crisis política, violencia, narcotráfico y desconfianza institucional. La Constitución de 1886 se percibía como centralista y autoritaria. La demanda social por una nueva Constitución fue canalizada por el movimiento de la séptima papeleta, una iniciativa simbólica impulsada por estudiantes durante las elecciones legislativas de 1990.
            .bg-color-7.p-5(data-aos="fade-left").mb-3
              p.mb-0 Aunque carecía de respaldo legal, esta expresión democrática obtuvo apoyo masivo, motivando al gobierno de César Gaviria a expedir el Decreto 1926 de 1990. La Corte Suprema de Justicia, en una interpretación audaz, avaló esta convocatoria reconociendo la soberanía popular como fuente legítima de ruptura constitucional (Barreto Rozo, 2011).
            p(data-aos="fade-left") Instalada el 5 de febrero de 1991 con 70 delegatarios elegidos por voto popular, esta asamblea se caracterizó por su pluralismo e inclusión. Participaron indígenas, mujeres, movimientos sociales, ONG y partidos políticos diversos. Su trabajo concluyó el 4 de julio de 1991 con la expedición de una nueva Constitución, que instauró el modelo de Estado Social de Derecho, fortaleció los derechos fundamentales, amplió la participación ciudadana y creó instituciones clave como: 
    
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/24.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 01
                  p.mb-0 La Corte Constitucional.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/25.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 02
                  p.mb-0 La Defensoría del Pueblo.
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-3.p-3(data-aos="fade-left").h-100
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema3/26.svg", style="max-width: 90px").mx-auto
                .col-lg.text-white
                  h5.mb-2 03
                  p.mb-0 La acción de tutela.
    
        .row.align-items-center.mb-5.justify-content-center
          .col-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/29.svg", style="max-width: 90px").mx-auto
          .col
            h2.mb-0 Naturaleza del poder constituyente

        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/27.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            p(data-aos="fade-left") En la teoría constitucional, la asamblea nacional constituyente encarna el poder constituyente originario, es decir, la potestad soberana del pueblo para darse una nueva Constitución. No obstante, en Colombia este poder ha sido modulado por el Estado de Derecho. Aunque expresa la soberanía popular, su convocatoria debe regirse por reglas constitucionales ya existentes. Esto ha generado importantes debates sobre la tensión entre poder constituyente y poder constituido (Barreto Rozo, 2011).
        
            .bg-color-1.p-5(data-aos="fade-left").mb-3
              p.mb-0 La Corte Constitucional, en su jurisprudencia, ha afirmado que ni siquiera los actos legislativos pueden sustituir la Constitución, ya que eso equivaldría a usurpar el poder constituyente originario. La doctrina de la sustitución de la Constitución (Sentencia C-551 de 2003) establece que los elementos esenciales del orden constitucional —como la forma de Estado, la separación de poderes, la democracia participativa y los derechos fundamentales— solo pueden ser modificados mediante una asamblea constituyente legítima.
    
    .row.align-items-center.mb-5.justify-content-center
      .col-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema3/29.svg", style="max-width: 90px").mx-auto
      .col
        h2.mb-0 Riesgos y debates actuales
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/28.png", data-aos="zoom-in")
      .col-lg-8
        p En la práctica reciente, se han propuesto nuevas asambleas para reformar temas como la justicia, la reelección presidencial, el modelo económico o la estructura del Congreso. Sin embargo, muchas de estas iniciativas han sido criticadas por su falta de legitimidad social o por esconder fines autoritarios o regresivos. La lección de 1991 demuestra que una asamblea solo es válida si surge de una crisis estructural, se convoca con reglas claras y asegura la participación plural de la sociedad.
        .bg-color-7.p-5(data-aos="fade-left").mb-3
          p.mb-0 La asamblea constituyente no debe verse como un mecanismo técnico más, sino como una manifestación histórica del poder soberano. Por ello, su uso debe reservarse a circunstancias verdaderamente excepcionales, y nunca como una vía para burlar los controles institucionales o favorecer intereses de corto plazo.: 

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/61003" target="_blank" rel="noopener noreferrer") Rodríguez Gaona, R. (2006). El control constitucional de la reforma a la constitución: ( ed.). Dykinson.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/70449?page=143" target="_blank" rel="noopener noreferrer") Arévalo Reyes, H. D. (2016). Constitución política de Colombia 1991: ( ed.). Ecoe Ediciones. 


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/5628?page=22" target="_blank" rel="noopener noreferrer") Olano García, H. A. (2004). Análisis de la sentencia C-551 de 2003 de la Corte Constitucional, que limitó los poderes de reforma de la carta política. Dikaion, (13), 121-156: ( ed.). D - Universidad de La Sabana.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0041-86332010000300008&lng=es&tlng=es." target="_blank" rel="noopener noreferrer") Nogueira Alcalá, Humberto. (2010). La reforma constitucional en el constitucionalismo latinoamericano vigente. Boletín mexicano de derecho comparado, 43(129), 1261-1321.  


            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1315-64112008000200006&lng=es&tlng=es." target="_blank" rel="noopener noreferrer") Lander, Luis E. (2008). La reforma Constitucional y su Referendo. Revista Venezolana de Economía y Ciencias Sociales, 14(2), 97-100.  

 



            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=0PgqljhXkBY " target="_blank" rel="noopener noreferrer") Universidad Continental. (2021, 8 de abril). La reforma constitucional [Vídeo]. YouTube. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=OUaWvKuYUbo " target="_blank" rel="noopener noreferrer") Programas Telemedellín. (2020, 16 de marzo). Acto legislativo [La Cosa Pública] Telemedellín [Vídeo]. YouTube. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=CZ-Jp48fMJw " target="_blank" rel="noopener noreferrer") Icon-S Colombia. (2025b, 19 de junio). ¿Es posible convocar una Asamblea Constituyente? #consultapopular #democracia #constitución [Vídeo]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=bwcFsEMmhJ4" target="_blank" rel="noopener noreferrer") Radio Tierra. (2013, 25 de septiembre). La Asamblea Constituyente de Colombia [Vídeo]. YouTube.  



 


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Qué principio orientador del bloque de constitucionalidad permite incorporar normas internacionales al orden constitucional colombiano?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Principio de legalidad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Principio de supremacía constitucional',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Principio de jerarquía normativa',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Principio de proporcionalidad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué papel cumple el bloque de constitucionalidad en el sistema jurídico colombiano?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Limita el alcance de la ley estatutaria',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Sirve como base para reformas tributarias',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Complementa el contenido de la Constitución con normas internacionales y del derecho interno con rango constitucional',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Sustituye el ordenamiento jurídico interno',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Qué órgano es competente para ejercer el control automático de constitucionalidad sobre los estados de excepción?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Consejo de Estado',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Corte Constitucional',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Fiscalía General de la Nación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Procuraduría General de la Nación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de las siguientes normas hace parte del bloque de constitucionalidad en sentido estricto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Ley ordinaria',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Tratado internacional de derechos humanos ratificado por Colombia',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decreto reglamentario',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Código Civil',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué efecto tiene el bloque de constitucionalidad sobre la interpretación de los derechos fundamentales?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Los restringe a lo dispuesto por la Corte Suprema',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Permite que se amplíen únicamente en leyes estatutarias',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Enriquecer su alcance con estándares internacionales',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Limita su aplicación a la legislación nacional',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
