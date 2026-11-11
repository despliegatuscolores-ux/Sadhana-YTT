/**
 * KINESIS DATABASE
 * Laboratorio Técnico, Biomecánica, Asana Lab 360°, Pranayama, Terapia y Pedagogía
 */

const PRACTICA_DB = {
  asanas: [
    {
      id: "tadasana",
      familia: "de pie",
      nivel: "Fundamental",
      drishti: "Nasagrai (Punta de la nariz / Al frente)",
      sanscrito: "Tadasana / Samasthiti",
      espanol: "Postura de la Montaña",
      traduccionEtimologica: "Tada = Montaña; Asana = Asiento / Postura",
      esencia: "El plano basal de todas las asanas erguidas. Enseña la distribución axial del peso y la co-activación neutra.",
      musculosActivos: ["Cuádriceps", "Glúteo medio y menor", "Transverso abdominal", "Erectores espinales"],
      musculosElongados: ["Pectorales menores", "Fascia plantar", "Suboccipitales"],
      mecanicaArticular: "Columna en curvaturas neutras. Pelvis neutra. Extensión neutra de rodillas sin recurvatum.",
      alineacionPasoAPaso: [
        "Junta las bases de los dedos gordos con talones ligeramente separados.",
        "Activa Pada Bandha elevando los arcos plantares internos.",
        "Eleva las rótulas activando cuádriceps sin empujar las rodillas en hiperextensión.",
        "Orienta el cóccix hacia el suelo mientras el pubis asciende sutilmente.",
        "Rueda hombros atrás y abajo; expande clavículas con palmas al frente.",
        "Proyecta la coronilla al cielo con el mentón paralelo al suelo."
      ],
      errorComun: "Hiperextensión de rodillas (genu recurvatum) aumentando la lordosis lumbar.",
      ajusteManual: "Mano en el sacro guiándolo hacia el suelo y dedos en el esternón dirigiéndolo arriba.",
      variantesProps: ["Bloque entre los muslos internos", "Espalda contra la pared"],
      contraindicaciones: "Cefaleas migrañosas agudas o hipotensión repentina.",
      consideracionTerapeutica: "Reeducación propioceptiva para escoliosis postural y pie plano.",
      guionVerbal: "Pisa la tierra con firmeza; crece desde tus arcos plantares hasta la coronilla."
    },
    {
      id: "virabhadrasana-2",
      familia: "de pie",
      nivel: "Principiante / Intermedio",
      drishti: "Hastagrai (Dedo medio de la mano adelantada)",
      sanscrito: "Virabhadrasana II",
      espanol: "Guerrero II",
      traduccionEtimologica: "Virabhadra = Héroe legendario; Asana = Postura",
      esencia: "Apertura pélvica coronal con enraizamiento y proyección horizontal de la energía.",
      musculosActivos: ["Glúteo medio y rotadores externos de cadera", "Cuádriceps de ambas piernas", "Deltoides medio"],
      musculosElongados: ["Aductores de la pierna adelantada", "Músculos intercostales"],
      mecanicaArticular: "Pierna anterior: abducción, flexión a 90° y rotación externa. Pierna posterior: extensión y abducción.",
      alineacionPasoAPaso: [
        "Separa los pies ampliamente (1.10 a 1.30 m). Talón delantero alineado con arco interno trasero.",
        "Pie delantero a 90°, pie trasero a 5° hacia adentro.",
        "Flexiona la rodilla delantera sobre el tobillo; la rótula apunta al segundo dedo del pie.",
        "Extiende la pierna trasera empujando el suelo con el canto exterior del pie.",
        "Brazos paralelos al suelo con hombros relajados; torso centrado sobre la pelvis."
      ],
      errorComun: "Colapsar la rodilla delantera hacia adentro en rotación interna sobrecargando el menisco medial.",
      ajusteManual: "Mano en la cara interna de la rodilla flexionada invitándola a abrirse hacia el meñique.",
      variantesProps: ["Bloque vertical entre la rodilla adelantada y una pared", "Espalda contra la pared"],
      contraindicaciones: "Desgarros meniscales recientes o hipertensión descompensada.",
      consideracionTerapeutica: "Fortalece el glúteo medio y estabiliza la cintura pélvica.",
      guionVerbal: "Extiende tus brazos desde el centro del corazón; firmeza en la base, calma en la mirada."
    },
    {
      id: "adho-mukha-svanasana",
      familia: "inversión",
      nivel: "Principiante / Intermedio",
      drishti: "Nabhicakra (Ombligo) o entre las rodillas",
      sanscrito: "Adho Mukha Svanasana",
      espanol: "Perro Mirando hacia Abajo",
      traduccionEtimologica: "Adho = Abajo; Mukha = Rostro; Svana = Perro; Asana = Postura",
      esencia: "Inversión fundamental y descanso activo. Descomprime la columna y estira la cadena posterior.",
      musculosActivos: ["Serrato anterior", "Tríceps braquial", "Cuádriceps", "Hasta Bandha (manos)"],
      musculosElongados: ["Isquiotibiales", "Gastrocnemios y sóleo", "Dorsal ancho"],
      mecanicaArticular: "Flexión de hombros a 180° en rotación externa. Flexión bilateral simétrica de caderas.",
      alineacionPasoAPaso: [
        "Manos al ancho de hombros con dedos bien abiertos; presiona base de índice y pulgar.",
        "Eleva las caderas empujando los isquiones al cielo y hacia atrás.",
        "Rota los hombros hacia afuera (axilas mirándose entre sí) alejándolos de las orejas.",
        "Flexiona ligeramente las rodillas si los isquiotibiales redondean la zona lumbar.",
        "Desciende los talones progresivamente hacia el suelo."
      ],
      errorComun: "Colapsar el peso sobre las muñecas y arquear la columna dorsal en exceso.",
      ajusteManual: "Tracción firme en las crestas ilíacas hacia arriba y hacia atrás a 45°.",
      variantesProps: ["Manos sobre bloques en pared", "Pies más anchos al ancho de esterilla"],
      contraindicaciones: "Túnel carpiano severo, glaucoma o último mes de embarazo.",
      consideracionTerapeutica: "Irrigación sanguínea cerebral segura; alivia pesadez en las piernas.",
      guionVerbal: "Empuja el suelo con las bases de tus dedos; proyecta tus caderas al cielo y alarga tu espalda."
    },
    {
      id: "balasana",
      familia: "restaurativa",
      nivel: "Principiante / Terapéutico",
      drishti: "Cerrado / Hacia el interior",
      sanscrito: "Balasana",
      espanol: "Postura del Niño",
      traduccionEtimologica: "Bala = Niño; Asana = Postura",
      esencia: "Descanso y recogida introspectiva. Estimula el sistema parasimpático y descarga la zona lumbar.",
      musculosActivos: ["Pasiva (mínimo tono muscular)"],
      musculosElongados: ["Glúteo mayor", "Erectores espinales", "Fascia toracolumbar"],
      mecanicaArticular: "Flexión profunda de caderas y rodillas. Flexión pasiva de columna.",
      alineacionPasoAPaso: [
        "Arrodíllate con dedos gordos en contacto y rodillas separadas al ancho de la esterilla.",
        "Baja glúteos a los talones y apoya la frente suavemente en el suelo.",
        "Brazos extendidos al frente o hacia atrás relajando los hombros.",
        "Respira profundamente hacia la espalda baja y el sacro."
      ],
      errorComun: "Glúteos despegados de los talones por rigidez en rodillas o tobillos.",
      ajusteManual: "Presión descendente suave sobre el sacro hacia los talones en la exhalación.",
      variantesProps: ["Manta enrollada detrás de las rodillas", "Bolster bajo el torso"],
      contraindicaciones: "Lesiones graves de rodilla o diarrea aguda.",
      consideracionTerapeutica: "Calma inmediata ante taquicardia o sobreesfuerzo en clase.",
      guionVerbal: "Rinde el peso de tu cuerpo a la esterilla; siente cómo cada respiración expande tu espalda."
    },
    {
      id: "savasana",
      familia: "restaurativa",
      nivel: "Universal",
      drishti: "Ojos cerrados",
      sanscrito: "Savasana",
      espanol: "Postura del Cadáver",
      traduccionEtimologica: "Sava = Cadáver; Asana = Postura",
      esencia: "Integración neuromuscular de la práctica y desconexión voluntaria del esfuerzo.",
      musculosActivos: ["Ninguno (relajación total)"],
      musculosElongados: ["Relajación miofascial completa"],
      mecanicaArticular: "Cuerpo en reposo neutro sobre el plano sagital.",
      alineacionPasoAPaso: [
        "Acuéstate boca arriba centrando la columna en la esterilla.",
        "Separa las piernas dejando que los pies caigan hacia afuera.",
        "Brazos a los costados con palmas hacia arriba.",
        "Relaja mandíbulas, ojos y lengua durante 7 a 15 minutos."
      ],
      errorComun: "Salir bruscamente sin girar primero sobre el costado.",
      ajusteManual: "Tracción suave y axial de talones y base occipital antes del descanso.",
      variantesProps: ["Bolster bajo rodillas para aliviar zona lumbar", "Antifaz en los ojos"],
      contraindicaciones: "En el 3.º trimestre de embarazo, recostarse obligatoriamente de lado izquierdo.",
      consideracionTerapeutica: "Reduce la presión arterial y el cortisol sérico.",
      guionVerbal: "No hay nada más que hacer; suelta el control de la respiración y descansa."
    }
  ],

  biomecanica: [
    {
      complejoArticular: "Columna Vertebral",
      movimientosClave: "Flexión, Extensión, Rotación Axial",
      nombre: "Mecánica del Disco & Preservación Lumbar",
      descripcion: "La región lumbar tiene mínima capacidad de rotación (~5° total de L1 a L5). La mayor parte de la rotación del tronco ocurre en la columna torácica (~35°).",
      riesgoEnEsterilla: "Forzar torsiones desde la cintura generando cizallamiento en los discos L4-L5 y L5-S1.",
      estrategiaProteccion: "Alargar la columna antes de rotar; girar desde las costillas manteniendo la pelvis anclada."
    },
    {
      complejoArticular: "Cintura Escapular",
      movimientosClave: "Protracción, Retracción, Rotación Campanal",
      nombre: "Ritmo Escapulohumeral & Hombro",
      descripcion: "Por cada 2° de elevación del brazo, la escápula debe rotar hacia arriba 1° para despejar el tendón del supraespinoso.",
      riesgoEnEsterilla: "Colapsar hombros hacia adelante en Chaturanga o bloquear escápulas en Adho Mukha.",
      estrategiaProteccion: "Activar el serrato anterior y mantener rotación externa del húmero."
    }
  ],

  pranayamas: [
    {
      categoria: "Equilibrante",
      ratio: "1 : 1 : 1 : 1",
      sanscrito: "Sama Vritti",
      espanol: "Respiración Cuadrada",
      mecanismoFisiologico: "Equilibra la respuesta simpática y parasimpática aumentando la Variabilidad Cardíaca.",
      comoEjecutar: "Inhala 4s, retén lleno 4s, exhala 4s, retén vacío 4s sin tensión laríngea.",
      contraindicaciones: "Hipertensión severa o glaucoma (eliminar las retenciones)."
    },
    {
      categoria: "Sedante",
      ratio: "1 : 2",
      sanscrito: "Ujjayi Pranayama",
      espanol: "Respiración Sonora",
      mecanismoFisiologico: "El cierre parcial de la glotis estimula barorreceptores carotídeos reduciendo el pulso cardíaco.",
      comoEjecutar: "Inhala y exhala por la nariz contrayendo sutilmente la laringe con un sonido similar al mar.",
      contraindicaciones: "Afecciones inflamatorias agudas de garganta."
    }
  ],

  terapia: [
    {
      zonaOPerfil: "Columna Lumbar",
      frecuencia: "Muy Alta (~60% de alumnos)",
      patologia: "Hernia Discal Lumbar (L4-S1)",
      mecanismoLesion: "El núcleo pulposo se hernia en sentido posterior comprimiendo raíces nerviosas con la flexión espinal.",
      posturasProhibidas: "Paschimottanasana con piernas rectas, flexiones con torsión simultánea forzada.",
      posturasSagradasYAdaptaciones: "Postura de la Esfinge, Supta Padangusthasana con cinturón y piernas flexionadas en Uttanasana."
    },
    {
      zonaOPerfil: "Embarazo",
      frecuencia: "Población Especial",
      patologia: "Yoga Prenatal (Pautas Generales)",
      mecanismoLesion: "La hormona relaxina genera hiperlaxitud ligamentosa. Compresión de la vena cava en decúbito supino tras semana 20.",
      posturasProhibidas: "Tumbada boca arriba prolongada, boca abajo, torsiones cerradas hacia el vientre, saltos y retenciones respiratorias (Kumbhaka).",
      posturasSagradasYAdaptaciones: "Malasana con bloque, Baddha Konasana, posturas en pared y Savasana recostada sobre el costado izquierdo."
    }
  ],

  plantillas: {
    enraizamiento: [
      { id: "tadasana", sanscrito: "Tadasana", espanol: "Montaña", familia: "de pie", duracionMin: 3 },
      { id: "virabhadrasana-2", sanscrito: "Virabhadrasana II", espanol: "Guerrero II", familia: "de pie", duracionMin: 4 },
      { id: "adho-mukha-svanasana", sanscrito: "Adho Mukha", espanol: "Perro Abajo", familia: "inversión", duracionMin: 4 },
      { id: "balasana", sanscrito: "Balasana", espanol: "Niño", familia: "restaurativa", duracionMin: 4 },
      { id: "savasana", sanscrito: "Savasana", espanol: "Cadáver", familia: "restaurativa", duracionMin: 10 }
    ]
  },

  pedagogia: [
    {
      area: "Vinyasa Krama",
      titulo: "Estructura de la Curva Energética",
      descripcion: "Diseño secuencial inteligente desde la calma inicial hacia una postura pico (Peak Pose) y vuelta al descanso.",
      puntosClave: [
        "Centramiento y pranayama inicial (5 min)",
        "Calentamiento articular y Saludos al Sol",
        "Fase activa de pie para consolidar fuerza y enraizamiento",
        "Postura pico y contracosturas neutralizadoras",
        "Savasana final obligatorio (7 a 10 min)"
      ]
    }
  ]
};
