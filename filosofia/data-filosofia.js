/**
 * DARSHANA DATABASE
 * Corpus analítico de Filosofía, Historia y Textos Clásicos del Yoga
 */

const DARSHANA_DB = {
  cronologia: {
    introduccion: "El yoga no nació como una práctica física sobre una esterilla, sino como una tecnología ascética y meditativa desarrollada durante más de tres milenios en el subcontinente indio.",
    periodos: [
      {
        epoca: "c. 1500 – 1000 a.C.",
        nombre: "Periodo Védico (El Sacrificio Exterior)",
        textosClave: "Rig Veda, Sama Veda, Yajur Veda, Atharva Veda",
        descripcion: "El término 'Yuj' aparece por primera vez en el Rig Veda en relación con el uncir caballos a los carruajes de guerra y del sol. La espiritualidad védica se basaba en el 'Yajna' (sacrificio ritual de fuego mediado por sacerdotes brahmanes) para mantener el 'Rta' (orden cósmico universal).",
        legado: "La raíz etimológica YUJ (unir, disciplinar, enfocar) y las primeras plegarias de invocación a las fuerzas de la naturaleza."
      },
      {
        epoca: "c. 800 – 500 a.C.",
        nombre: "Periodo Preclásico & Upanishádico (El Sacrificio Interior)",
        textosClave: "Katha Upanishad, Chandogya Upanishad, Svetasvatara Upanishad",
        descripcion: "Giro radical hacia la introspección mística. El fuego sacrificial ya no arde en un altar de piedra, sino en el pecho del practicante (Tapas). Surge la distinción fundamental entre 'Atman' (la chispa divina individual) y 'Brahman' (la conciencia absoluta omnipresente). En la Katha Upanishad se describe por primera vez el yoga como el control de los sentidos y la mente, usando la célebre alegoría del carruaje.",
        legado: "Los conceptos de Maya (ilusión), Karma (causalidad moral), Samsara (ciclo de reencarnaciones) y Moksha (liberación)."
      },
      {
        epoca: "c. 200 a.C. – 400 d.C.",
        nombre: "Periodo Épico & Clásico (Sistematización Dualista)",
        textosClave: "Bhagavad Gita, Yoga Sutras de Patanjali",
        descripcion: "El Bhagavad Gita integra las corrientes de acción (Karma), intelecto (Jnana) y amor devocional (Bhakti). Poco después, el sabio Patanjali recopila y codifica el conocimiento disperso en 196 aforismos, fundando el 'Raja Yoga' como uno de los 6 sistemas filosóficos ortodoxos (Shad Darshanas) de la India, bajo una cosmovisión dualista estricta (Samkhya).",
        legado: "El Óctuple Sendero (Ashtanga Yoga) y el mapa psicomental para frenar las fluctuaciones de la conciencia."
      },
      {
        epoca: "c. 500 – 1500 d.C.",
        nombre: "Periodo Postclásico & Tantra (La Sacralización del Cuerpo)",
        textosClave: "Hatha Yoga Pradipika, Gheranda Samhita, Shiva Samhita",
        descripcion: "Rechazo del ascetismo mortificante de periodos anteriores. El Tantra enseña que el cuerpo físico no es una prisión de la que escapar, sino un templo y un microcosmos divino. Los maestros Nath (Matsyendranath y Gorakshanath) crean el Hatha Yoga: un sistema bioenergético basado en asanas no estáticas, pranayama forzado, bandhas, mudras y el despertar de Kundalini.",
        legado: "Nacimiento de la práctica física que hoy conocemos: asanas corporales, control energético y limpieza interna (kriyas)."
      },
      {
        epoca: "Finales s. XIX – Actualidad",
        nombre: "Periodo Moderno & Global (Renacimiento de Mysore)",
        textosClave: "Yoga Makaranda, Light on Yoga, Yoga Mala",
        descripcion: "Swami Vivekananda introduce el Raja Yoga en Occidente (1893). En el palacio de Mysore, T. Krishnamacharya fusiona el Hatha tradicional con la gimnasia y calistenia británica, concibiendo el Vinyasa moderno y formando a B.K.S. Iyengar, K. Pattabhi Jois e Indra Devi.",
        legado: "Sincronización respiración-movimiento (Vinyasa), alineación biomecánica terapéutica y difusión internacional masiva."
      }
    ]
  },

  sutras: {
    pada1: {
      nombre: "Samadhi Pada (De la Contemplación)",
      aforismos: [
        {
          numero: "1.1",
          tema: "Apertura iniciática",
          sanscrito: "Atha yoganusasanam",
          traduccionLiteral: "Ahora, comienza la instrucción autorizada sobre el Yoga.",
          comentario: "La palabra 'Atha' (ahora) implica una maduración previa. Se llega al yoga tras haber experimentado la insatisfacción con las respuestas mundanas ordinarias.",
          aplicacionPractica: "Presencia absoluta al sentarse en el zafu o pisar la esterilla: dejar el pasado fuera del espacio de práctica."
        },
        {
          numero: "1.2",
          tema: "Definición del Yoga",
          sanscrito: "Yogas citta vrtti nirodhah",
          traduccionLiteral: "El Yoga es la cesación (nirodha) de las fluctuaciones (vrttis) del campo mental (citta).",
          comentario: "Citta engloba Manas (mente sensorial), Buddhi (intelecto discernidor) y Ahamkara (el ego). El yoga busca calmar las olas de la superficie mental para revelar la calma profunda.",
          aplicacionPractica: "Observar las divagaciones durante una asana exigente sin identificarse con la fatiga o la frustración."
        },
        {
          numero: "1.3",
          tema: "El Estado de Realización",
          sanscrito: "Tada drastuh svarupe 'vasthanam",
          traduccionLiteral: "Entonces, el Observador (Purusha) descansa en su verdadera naturaleza esencial.",
          comentario: "Cuando la mente se aquieta, el testigo no se confunde con los reflejos del agua; reconoce su identidad inmutable más allá de pensamientos o roles.",
          aplicacionPractica: "Savasana consciente: sentir la consciencia pura que permanece alerta mientras el cuerpo descansa."
        },
        {
          numero: "1.12",
          tema: "Los Dos Pilares",
          sanscrito: "Abhyasa vairagyabhyam tan nirodhah",
          traduccionLiteral: "Esa calma mental se alcanza mediante la práctica constante (abhyasa) y el desapego (vairagya).",
          comentario: "Las dos alas del yoga: el esfuerzo disciplinado sin desapego produce rigidez; el desapego sin disciplina conduce a la apatía.",
          aplicacionPractica: "Practicar a diario sin obsesionarse por conseguir una postura avanzada o un resultado estético."
        }
      ]
    },
    pada2: {
      nombre: "Sadhana Pada (De la Práctica)",
      aforismos: [
        {
          numero: "2.1",
          tema: "Kriya Yoga",
          sanscrito: "Tapah svadhyayesvarapranidhanani kriyayogah",
          traduccionLiteral: "La autodisciplina (tapas), el autoestudio (svadhyaya) y la entrega a lo Supremo (ishvara pranidhana) constituyen el Kriya Yoga.",
          comentario: "La fórmula preliminar de purificación para disolver los velos que nublan la claridad interior.",
          aplicacionPractica: "Sostener una postura desafiante (tapas), observar el diálogo interno (svadhyaya) y soltar el control (ishvara pranidhana)."
        },
        {
          numero: "2.46",
          tema: "Definición Canónica de Asana",
          sanscrito: "Sthira sukham asanam",
          traduccionLiteral: "La postura debe poseer las cualidades de estabilidad firme (sthira) y comodidad gozosa (sukha).",
          comentario: "Patanjali define la postura no por dificultad gimnástica, sino por el equilibrio entre tono muscular y relajación visceral.",
          aplicacionPractica: "Ajustar una postura con soportes cuando el esfuerzo impide una respiración serena y fluida."
        }
      ]
    },
    pada3: {
      nombre: "Vibhuti Pada (De la Maestría)",
      aforismos: [
        {
          numero: "3.1",
          tema: "Dharana (Concentración)",
          sanscrito: "Desabandhas cittasya dharana",
          traduccionLiteral: "Dharana es la fijación de la mente en un único punto focal o espacio delimitado.",
          comentario: "Enfocar la atención en el entrecejo, la respiración o la punta de la nariz, reconduciéndola cada vez que se dispersa.",
          aplicacionPractica: "El uso del Drishti en posturas de equilibrio sobre un pie como Garudasana."
        },
        {
          numero: "3.2",
          tema: "Dhyana (Meditación Continua)",
          sanscrito: "Tatra pratyayaikatanata dhyanam",
          traduccionLiteral: "Allí, el flujo ininterrumpido de la percepción hacia ese objeto único es Dhyana.",
          comentario: "Si Dharana son gotas de agua cayendo una tras otra, Dhyana es el chorro continuo de aceite vertiéndose de una vasija a otra.",
          aplicacionPractica: "Sostener la atención en el pulso respiratorio sin necesidad de reeducar la mente de forma forzada."
        }
      ]
    },
    pada4: {
      nombre: "Kaivalya Pada (De la Emancipación)",
      aforismos: [
        {
          numero: "4.34",
          tema: "Kaivalya (Liberación)",
          sanscrito: "Purusartha sunyanam gunanam pratiprasavah kaivalyam",
          traduccionLiteral: "Kaivalya es la disolución de los Gunas al haber cumplido su propósito, y la Conciencia Pura descansa en su propia naturaleza eterna.",
          comentario: "El fin último: la desidentificación total de la consciencia respecto a la materia.",
          aplicacionPractica: "Vivir el yoga fuera de la esterilla con ecuanimidad ante los vaivenes cotidianos."
        }
      ]
    }
  },

  ashtanga: [
    {
      naturaleza: "Ética Social (Relación con el Mundo)",
      nombreSanscrito: "Yamas (Restricciones Armónicas)",
      traduccion: "Los 5 Principios Éticos de Relación Externa",
      definicion: "Pautas de conducta para desactivar la violencia, el engaño y el acaparamiento en la convivencia.",
      subelementos: [
        { nombre: "Ahimsa", detalle: "No violencia ni daño en pensamiento, palabra o acto hacia ningún ser sintiente." },
        { nombre: "Satya", detalle: "Veracidad y autenticidad alineada con la bondad; la verdad que no daña." },
        { nombre: "Asteya", detalle: "No robar ni apropiarse de bienes, tiempo, ideas o méritos ajenos." },
        { nombre: "Brahmacharya", detalle: "Uso sabio y continencia de la energía vital hacia propósitos elevados." },
        { nombre: "Aparigraha", detalle: "Desapego y no codicia; no acumular posesiones innecesarias ni expectativas." }
      ]
    },
    {
      naturaleza: "Ética Personal (Relación con Uno Mismo)",
      nombreSanscrito: "Niyamas (Observancias Internas)",
      traduccion: "Los 5 Compromisos de Higiene Psicofísica",
      definicion: "Hábitos interiores que forjan el carácter y purifican el cuerpo del estudiante.",
      subelementos: [
        { nombre: "Saucha", detalle: "Pureza y limpieza física del cuerpo, entorno, alimentación y pensamientos." },
        { nombre: "Santosha", detalle: "Contentamiento profundo y aceptación incondicional del momento presente." },
        { nombre: "Tapas", detalle: "Fuego interior, autodisciplina y perseverancia ante la incomodidad." },
        { nombre: "Svadhyaya", detalle: "Estudio de textos sagrados y autoobservación de la propia conducta." },
        { nombre: "Ishvara Pranidhana", detalle: "Humildad y entrega de las acciones a la Conciencia Universal." }
      ]
    },
    {
      naturaleza: "El Recipiente Biológico",
      nombreSanscrito: "Asana (La Postura Cómoda y Firme)",
      traduccion: "Estabilización Corporal",
      definicion: "Consolidación de un vehículo físico firme y sin dolor para permitir la meditación sin distracciones.",
      subelementos: [
        { nombre: "Sthira", detalle: "Enraizamiento, estabilidad arquitectónica y presencia ósea." },
        { nombre: "Sukha", detalle: "Comodidad, relajación visceral y apertura respiratoria." }
      ]
    },
    {
      naturaleza: "El Puente Pránico",
      nombreSanscrito: "Pranayama (Expansión de la Energía Vital)",
      traduccion: "Regulación Respiratoria",
      definicion: "Control rítmico de la inhalación, exhalación y las retenciones (Kumbhaka).",
      subelementos: [
        { nombre: "Puraka / Rechaka", detalle: "Equilibrio rítmico entre la toma de aire y la exhalación." },
        { nombre: "Kumbhaka", detalle: "Suspensión de la respiración para pausar las fluctuaciones mentales." }
      ]
    },
    {
      naturaleza: "Retiro Sensorial",
      nombreSanscrito: "Pratyahara (Emancipación de los Sentidos)",
      traduccion: "Introspección Sensorial",
      definicion: "Retraer la atención de los estímulos externos como la tortuga guarda sus extremidades en el caparazón.",
      subelementos: [
        { nombre: "Desconexión Externa", detalle: "Los sentidos dejan de enviar alertas reactivas al cerebro." },
        { nombre: "Centrado Interno", detalle: "La energía se dirige al universo interior de la respiración." }
      ]
    },
    {
      naturaleza: "Enfoque Monopuntual",
      nombreSanscrito: "Dharana (Concentración)",
      traduccion: "Fijación de la Atención",
      definicion: "Anclar la mente en un único punto focal sin permitir que divague.",
      subelementos: [
        { nombre: "Puntos Clásicos", detalle: "La punta de la nariz, el entrecejo o la respiración." }
      ]
    },
    {
      naturaleza: "Flujo Meditativo Continuo",
      nombreSanscrito: "Dhyana (Meditación)",
      traduccion: "Atención Sostenida",
      definicion: "El estado en que la concentración se vuelve espontánea y sin esfuerzo continuo.",
      subelementos: [
        { nombre: "Fluidez", detalle: "Río ininterrumpido de consciencia hacia el objeto observado." }
      ]
    },
    {
      naturaleza: "Integración Total",
      nombreSanscrito: "Samadhi (Unidad)",
      traduccion: "Absorción Trascendental",
      definicion: "Sujeto, objeto y acto de observar se unifican por completo en una sola realidad lúcida.",
      subelementos: [
        { nombre: "Samprajnata / Asamprajnata", detalle: "Estados de absorción con soporte y sin soporte cognitivo." }
      ]
    }
  ],

  bhagavadGita: {
    senderos: [
      {
        nombre: "Karma Yoga (Acción Desinteresada)",
        sanscrito: "कर्म योग",
        definicion: "Cumplir con el deber vital (Svadharma) renunciando al apego por los frutos, el éxito o el fracaso.",
        versoClave: "Karmanye vadhikaraste ma phaleshu kadachana — Tienes derecho al trabajo, pero nunca a los frutos de tus acciones.",
        aplicacion: "Enseñar con total dedicación sin condicionar la paz interior al número de alumnos o a los halagos."
      },
      {
        nombre: "Jnana Yoga (Discernimiento Intelectual)",
        sanscrito: "ज्ञान योग",
        definicion: "Discernir mediante la razón qué es transitorio (Prakriti) y qué es la conciencia inmortal que observa (Atman).",
        versoClave: "Na jayate mriyate va kadacin — El alma nunca nace ni muere; es eterna e inmutable.",
        aplicacion: "Desidentificarse del cuerpo físico transitorio y reconocer la presencia inmutable que lo habita."
      },
      {
        nombre: "Bhakti Yoga (Devoción Suprema)",
        sanscrito: "भक्ति योग",
        definicion: "Canalizar la emoción y el corazón hacia lo Divino mediante el canto, la veneración amorosa y la gratitud.",
        versoClave: "Patram puspam phalam toyam — Si alguien me ofrece con devoción una hoja, una flor o un sorbo de agua, lo acepto con amor.",
        aplicacion: "Transformar la práctica de asanas en una ofrenda sagrada de agradecimiento por la salud y la vida."
      },
      {
        nombre: "Raja / Dhyana Yoga (Meditación)",
        sanscrito: "ध्यान योग",
        definicion: "Dominio metódico de la mente y la respiración para sumergirse en el silencio interior.",
        versoClave: "Yatha dipo nivatastho nengate — Como una llama que no oscila en un lugar sin viento, así permanece la mente del yogui.",
        aplicacion: "Entrenamiento formal de la atención inmóvil al final de la sesión física."
      }
    ]
  },

  hathaTradicional: {
    textos: [
      {
        titulo: "Hatha Yoga Pradipika",
        autor: "Swami Svatmarama (Siglo XV)",
        siglo: "s. XV",
        resumen: "El manual clásico fundamental del Hatha Yoga. Enseña que el Hatha es la escalera que conduce al Raja Yoga. Describe 15 asanas, shatkarmas, pranayamas con retención (Kumbhaka) y mudras para despertar Kundalini.",
        capitulos: ["Asanas y alimentación moderada (Mitahara)", "Shatkarmas y Pranayama", "Mudras y Bandhas", "Samadhi y sonido interior (Nada)"]
      },
      {
        titulo: "Gheranda Samhita",
        autor: "Sabio Gheranda (Siglo XVII)",
        siglo: "s. XVII",
        resumen: "Enseña el Saptanga Yoga (el yoga de los 7 miembros), comparando el cuerpo con una vasija de arcilla que debe cocerse al fuego de la práctica para no deshacerse con el dolor.",
        capitulos: ["Purificación (Shatkarma)", "Fortalecimiento (Asana)", "Firmeza (Mudra)", "Calma (Pratyahara)", "Ligereza (Pranayama)", "Percepción (Dhyana)", "Liberación (Samadhi)"]
      }
    ]
  },

  panteon: {
    deidades: [
      {
        nombre: "Shiva (Adiyogi)",
        rol: "El Destructor de la Ilusión y Primer Yogui",
        consorteOAtributo: "Parvati • Tridente (Trishula) y Tambor (Damaru)",
        simbolismoPsicologico: "La Conciencia Pura Trascendente que permanece inmutable ante el cambio constante del mundo.",
        narrativa: "Transmitió la ciencia del yoga a los 7 sabios primordiales (Saptarshis) a orillas del lago Kantisarovar.",
        mantra: "Om Namah Shivaya"
      },
      {
        nombre: "Ganesha",
        rol: "El Removedor de Obstáculos (Vighnaharta)",
        consorteOAtributo: "Cabeza de elefante • Guardián del chakra Muladhara",
        simbolismoPsicologico: "El intelecto firme que elimina bloqueos mentales antes de emprender un nuevo sendero o estudio.",
        narrativa: "Hijo de Shiva y Parvati, invocado tradicionalmente al inicio de cualquier estudio o práctica sagrada.",
        mantra: "Om Gam Ganapataye Namaha"
      },
      {
        nombre: "Hanuman",
        rol: "El Arquetipo de la Devoción y el Coraje (Seva)",
        consorteOAtributo: "Maza (Gada) • Pecho abierto mostrando a Rama y Sita",
        simbolismoPsicologico: "La mente inquieta que, una vez consagrada con amor a una causa superior, adquiere facultades heroicas.",
        narrativa: "En el Ramayana cruza el océano de un salto devocional para rescatar a Sita, dando nombre a Hanumanasana.",
        mantra: "Om Sri Hanumate Namaha"
      }
    ]
  },

  vinyasa: {
    maestros: [
      {
        nombre: "T. Krishnamacharya (1888 – 1989)",
        años: "1888 – 1989",
        escuela: "Palacio de Mysore",
        enfoque: "Padre del yoga moderno. Creó la metodología del Vinyasa Krama: progresión inteligente sincronizando respiración y asana.",
        contribucion: "Formó directamente a B.K.S. Iyengar, K. Pattabhi Jois y T.K.V. Desikachar."
      },
      {
        nombre: "K. Pattabhi Jois (1915 – 2009)",
        años: "1915 – 2009",
        escuela: "Ashtanga Vinyasa Yoga (Mysore)",
        enfoque: "Series fijas progresivas basadas en el método Tristana: respiración Ujjayi, Bandhas y Drishti.",
        contribucion: "Sentó las bases del yoga dinámico occidental, Power Yoga y Vinyasa Flow."
      },
      {
        nombre: "B.K.S. Iyengar (1918 – 2014)",
        años: "1918 – 2014",
        escuela: "Iyengar Yoga (Pune)",
        enfoque: "Precisión anatómica milimétrica y uso pionero de accesorios (bloques, cinturones, mantas, sillas).",
        contribucion: "Escribió 'Light on Yoga' (1966), la referencia fotográfica y biomecánica mundial."
      }
    ]
  },

  glosario: [
    { raiz: "Yuj", categoria: "Fundamento", palabra: "Yoga", traduccion: "Unión, integración", definicion: "Estado de armonía y apaciguamiento de la ilusión de separación entre el individuo y lo Absoluto." },
    { raiz: "As", categoria: "Postura", palabra: "Asana", traduccion: "Asiento, postura estable", definicion: "Cualquier postura física que otorgue fortaleza, estabilidad y ligereza al cuerpo." },
    { raiz: "Pran", categoria: "Energía", palabra: "Prana", traduccion: "Fuerza vital", definicion: "Energía que sostiene los procesos biológicos y que se regula a través del vehículo respiratorio." },
    { raiz: "Cit", categoria: "Psicología", palabra: "Citta", traduccion: "Campo mental", definicion: "Aparato psíquico compuesto por Manas (mente sensorial), Buddhi (intelecto) y Ahamkara (ego)." },
    { raiz: "Vrt", categoria: "Psicología", palabra: "Vrtti", traduccion: "Onda, fluctuación", definicion: "Los pensamientos, juicios y memorias que agitan la quietud de la consciencia." },
    { raiz: "Bandh", categoria: "Cierre", palabra: "Bandha", traduccion: "Llave energética", definicion: "Co-contracciones musculares sutiles (Mula, Uddiyana, Jalandhara) para encauzar el prana." }
  ],

  preguntasExamen: [
    {
      tema: "Yoga Sutras 1.2",
      enunciado: "¿Cuál es la definición exacta del Yoga según el aforismo 1.2 de Patanjali?",
      opciones: [
        "La unión física perfecta entre el cuerpo y la mente mediante asanas exigentes.",
        "La cesación de las fluctuaciones del campo de la consciencia (Yogas citta vrtti nirodhah).",
        "El despertar ineludible de la energía Kundalini a través del canal central Sushumna.",
        "El sacrificio diario de los deseos mundanos en el fuego de Tapas."
      ],
      correcta: 1,
      explicacion: "Patanjali define el yoga por su meta mental (aquietar las fluctuaciones del campo de la consciencia), no por una ejecución física externa."
    },
    {
      tema: "Ashtanga Yoga",
      enunciado: "¿Qué rama del Óctuple Sendero representa el repliegue o emancipación de los sentidos hacia el interior?",
      opciones: [
        "Dharana (Concentración)",
        "Pratyahara (Retiro Sensorial)",
        "Pranayama (Control Respiratorio)",
        "Svadhyaya (Autoestudio)"
      ],
      correcta: 1,
      explicacion: "Pratyahara es el 5.º miembro de Ashtanga Yoga; actúa como puente bisagra entre las prácticas corporales externas y la absorción meditativa interna."
    },
    {
      tema: "Bhagavad Gita",
      enunciado: "¿Qué sendero propugna el Bhagavad Gita para quien vive en sociedad y debe actuar sin generar ataduras?",
      opciones: [
        "Jnana Yoga (vía del intelecto y el aislamiento)",
        "Karma Yoga (acción impecable y desinteresada sin apego a los frutos)",
        "Hatha Yoga (práctica intensiva de mudras)",
        "Kriya Yoga (retiro estricto en ashrams)"
      ],
      correcta: 1,
      explicacion: "El Karma Yoga enseña que la renuncia no radica en abandonar la acción en el mundo, sino en actuar con excelencia renunciando al fruto o beneficio egóico del resultado."
    }
  ]
};
