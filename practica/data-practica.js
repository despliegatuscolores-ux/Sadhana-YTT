/**
 * KINESIS DATABASE — ENCICLOPEDIA TÉCNICA DE ASANAS & ANATOMÍA
 * Formación de Profesores de Yoga (Estándar YTT 200h / 300h)
 */

const PRACTICA_DB = {
  asanas: [
    /* ==========================================================
       FAMILIA: DE PIE
       ========================================================== */
    {
      id: "tadasana",
      familia: "de pie",
      nivel: "Fundamental",
      drishti: "Nasagrai (Punta de la nariz / Al frente)",
      sanscrito: "Tadasana / Samasthiti",
      espanol: "Postura de la Montaña",
      traduccionEtimologica: "Tada = Montaña; Asana = Asiento / Postura",
      esencia: "Plano basal y mapa axial de todas las posturas erguidas. Enseña la distribución simétrica de la carga y la activación postural neutra.",
      musculosActivos: ["Cuádriceps femorales (fijación rotuliana)", "Glúteo medio y menor (estabilidad pélvica)", "Transverso del abdomen", "Erectores espinales"],
      musculosElongados: ["Pectorales menores", "Fascia plantar", "Suboccipitales"],
      mecanicaArticular: "Columna en curvaturas fisiológicas neutras. Pelvis en posición horizontal simétrica. Rodillas en extensión neutra sin recurvatum.",
      alineacionPasoAPaso: [
        "Junta las bases de los dedos gordos con talones ligeramente separados (o pies al ancho de caderas si hay inestabilidad sacroilíaca).",
        "Activa Pada Bandha elevando los arcos plantares internos y repartiendo el peso en los cuatro vértices del pie.",
        "Eleva las rótulas tonificando cuádriceps sin bloquear las articulaciones en hiperextensión.",
        "Orienta suavemente el cóccix hacia los talones mientras el pubis asciende hacia el ombligo para alargar la zona lumbar.",
        "Rueda los hombros atrás y abajo, abre las clavículas y orienta las palmas suavemente al frente.",
        "Proyecta la coronilla hacia el cielo manteniendo el mentón paralelo al suelo."
      ],
      errorComun: "Hiperextensión de rodillas (genu recurvatum) con anteversión pélvica excesiva que comprime las carillas lumbares.",
      ajusteManual: "Apoya una mano en el sacro del alumno dirigiéndolo suavemente hacia el suelo, y la punta de los dedos de la otra mano en el esternón guiándolo hacia arriba.",
      variantesProps: ["Colocar un bloque de corcho entre los muslos internos empujándolo hacia atrás para enseñar la rotación interna neutra."],
      contraindicaciones: "Cefalea migrañosa activa o mareos por hipotensión ortostática repentina.",
      consideracionTerapeutica: "Reeducación postural para pie plano, genu valgo y corrección de la hiperlordosis lumbar.",
      guionVerbal: "Pisa la tierra con firmeza; crece desde tus arcos plantares hasta la coronilla, creando espacio entre cada una de tus vértebras."
    },
    {
      id: "utkatasana",
      familia: "de pie",
      nivel: "Principiante / Intermedio",
      drishti: "Angusthamadhye (Pulgares hacia arriba)",
      sanscrito: "Utkatasana",
      espanol: "Postura de la Silla / Feroz",
      traduccionEtimologica: "Utkata = Feroz, poderoso; Asana = Postura",
      esencia: "Fuerte trabajo excéntrico e isométrico de cuádriceps y estabilidad central. Despierta el fuego metabólico y la fuerza basal.",
      musculosActivos: ["Cuádriceps femorales", "Glúteo mayor", "Erectores espinales", "Serrato anterior y deltoides"],
      musculosElongados: ["Tendón de Aquiles y sóleo", "Romboides"],
      mecanicaArticular: "Dorsiflexión de tobillos, flexión de rodillas y caderas a 90° o inferior. Flexión escapulohumeral completa.",
      alineacionPasoAPaso: [
        "Desde Tadasana, junta pies y flexiona profundamente las rodillas transfiriendo el peso hacia los talones.",
        "Baja la pelvis como si fueras a sentarte en un taburete bajo, manteniendo las rodillas detrás de la línea de los dedos.",
        "Inhala y eleva los brazos junto a las orejas, uniendo las palmas o manteniéndolas separadas al ancho de los hombros.",
        "Mantén el esternón elevado y las costillas flotantes recogidas hacia adentro.",
        "Sostén 5 respiraciones lentas buscando firmeza en la base y ligereza en los brazos."
      ],
      errorComun: "Colapso medial de rodillas (valgo dinámico) y descolgamiento pasivo del abdomen sobre los muslos.",
      ajusteManual: "Desde atrás, sujeta las crestas ilíacas del alumno y tracciona suavemente en diagonal descendente hacia los talones.",
      variantesProps: ["Bloque entre los muslos para evitar el colapso de aductores", "Manos en el pecho en Anjali Mudra si hay sobrecarga escapular."],
      contraindicaciones: "Condromalacia rotuliana severa, lesiones agudas de menisco o rotura de ligamentos cruzados.",
      consideracionTerapeutica: "Tonifica los músculos estabilizadores del tobillo y estimula el retorno venoso periférico.",
      guionVerbal: "Lleva el peso a los talones, desciende las caderas y eleva el corazón hacia tus manos."
    },
    {
      id: "virabhadrasana-1",
      familia: "de pie",
      nivel: "Intermedio",
      drishti: "Angusthamadhye (Mirada a los pulgares)",
      sanscrito: "Virabhadrasana I",
      espanol: "Guerrero I",
      traduccionEtimologica: "Virabhadra = Guerrero mítico de Shiva; Asana = Postura",
      esencia: "Asimetría en bipedestación con extensión de cadera posterior y cuadratura sagital de la pelvis. Desarrolla estabilidad y enraizamiento.",
      musculosActivos: ["Cuádriceps e isquiotibiales de la pierna adelantada", "Glúteo mayor de la pierna atrasada", "Serrato anterior"],
      musculosElongados: ["Psoas ilíaco y recto femoral de la pierna atrasada", "Gemelos y sóleo"],
      mecanicaArticular: "Pierna anterior a 90° de flexión. Pierna posterior en extensión con pie apoyado a 45°. Pelvis en cuadratura al frente.",
      alineacionPasoAPaso: [
        "Da un paso amplio hacia atrás con el pie izquierdo (1,10 - 1,20 m).",
        "Apoya el talón izquierdo en el suelo a 45° manteniendo la pierna extendida y firme.",
        "Flexiona la rodilla derecha hasta que quede directamente vertical sobre el tobillo.",
        "Orienta las dos crestas ilíacas hacia el frente de la esterilla avanzando la cadera izquierda.",
        "Inhala y eleva los brazos hacia el cielo alargando los costados del cuerpo.",
        "Presiona con fuerza el canto externo del pie trasero contra la esterilla."
      ],
      errorComun: "Despegar el borde exterior del pie trasero y quebrar excesivamente la zona lumbar por falta de extensión en la cadera atrasada.",
      ajusteManual: "Apoya suavemente tu cadera sobre el muslo adelantado del alumno para estabilizarlo y con tus manos guía la cadera atrasada hacia adelante.",
      variantesProps: ["Separar los pies al ancho de las caderas (en dos carriles paralelos) para liberar tensión en la articulación sacroilíaca."],
      contraindicaciones: "Espondilolistesis activa, inflamación aguda de la articulación sacroilíaca o problemas cardíacos graves.",
      consideracionTerapeutica: "Apertura profunda del psoas acortado por sedentarismo y aumento de la capacidad ventilatoria apical.",
      guionVerbal: "Ancla el talón de atrás al suelo, avanza la cadera izquierda y eleva el pecho sin comprimir el cuello."
    },
    {
      id: "virabhadrasana-2",
      familia: "de pie",
      nivel: "Principiante / Intermedio",
      drishti: "Hastagrai (Dedo medio de la mano adelantada)",
      sanscrito: "Virabhadrasana II",
      espanol: "Guerrero II",
      traduccionEtimologica: "Virabhadra = Guerrero mítico; Asana = Postura",
      esencia: "Apertura de caderas en el plano coronal con proyección horizontal de la energía. Fomenta el equilibrio entre fuerza y quietud mental.",
      musculosActivos: ["Glúteo medio y rotadores externos de cadera", "Cuádriceps de ambas piernas", "Deltoides medio"],
      musculosElongados: ["Aductores de la pierna adelantada", "Músculos intercostales"],
      mecanicaArticular: "Pierna anterior: abducción, flexión a 90° y rotación externa. Pierna posterior: extensión, abducción y rotación externa neutra.",
      alineacionPasoAPaso: [
        "Separa los pies ampliamente (1,20 m). Alinea el talón delantero con el arco interno del pie trasero.",
        "Gira el pie delantero 90° al frente y el pie trasero unos 5° hacia adentro.",
        "Flexiona la rodilla delantera sobre el tobillo asegurando que la rótula apunte al segundo dedo del pie.",
        "Extiende activamente la pierna trasera presionando el canto externo del pie contra el suelo.",
        "Extiende los brazos paralelos al suelo a la altura de los hombros con las palmas hacia abajo.",
        "Mantén el tronco centrado verticalmente sobre la pelvis y gira la mirada sobre la mano delantera."
      ],
      errorComun: "Colapso medial de la rodilla delantera e inclinación anterior del tronco sobre el muslo adelantado.",
      ajusteManual: "Coloca tu mano en la cara interna de la rodilla adelantada invitándola a abrirse hacia el meñique del pie, mientras nivelas sus hombros.",
      variantesProps: ["Apoyar la espalda contra una pared para experimentar la alineación pélvica y escapular en el plano frontal."],
      contraindicaciones: "Bursitis trocantérea severa o lesiones agudas de los ligamentos de la rodilla.",
      consideracionTerapeutica: "Fortalecimiento del glúteo medio, prevención del valgo de rodilla y estabilización de la cintura pélvica.",
      guionVerbal: "Extiende tus brazos desde el centro del corazón; firmeza y arraigo en la base, calma en la mirada."
    },
    {
      id: "virabhadrasana-3",
      familia: "de pie",
      nivel: "Intermedio / Avanzado",
      drishti: "Nasagrai (Hacia el suelo a un punto fijo)",
      sanscrito: "Virabhadrasana III",
      espanol: "Guerrero III",
      traduccionEtimologica: "Virabhadra = Guerrero; Asana = Postura",
      esencia: "Equilibrio monopodal dinámico. Forma una 'T' horizontal con el cuerpo, integrando la cadena posterior y el control del core.",
      musculosActivos: ["Glúteo medio y glúteo mayor de la pierna de apoyo", "Isquiotibiales", "Erectores espinales", "Transverso abdominal"],
      musculosElongados: ["Isquiotibiales de la pierna de base"],
      mecanicaArticular: "Pierna de base en extensión neutra de cadera y rodilla. Pierna suspendida en extensión horizontal con rotación interna neutra.",
      alineacionPasoAPaso: [
        "Desde Guerrero I, transfiere el peso hacia el pie derecho adelantado.",
        "Inclina el torso hacia adelante mientras despegas la pierna izquierda del suelo.",
        "Eleva la pierna izquierda hasta que quede paralela al suelo, con el pie en flex activo y los dedos apuntando a la tierra.",
        "Nivela las dos crestas ilíacas; no dejes que la cadera izquierda se abra hacia el techo.",
        "Extiende los brazos hacia adelante alineados con las orejas o llévalos en avión a los lados del torso.",
        "Mantén el cuello largo mirando a un punto fijo en el suelo."
      ],
      errorComun: "Rotar la cadera elevada hacia arriba desalineando la pelvis y bloqueando la rodilla de apoyo en hiperextensión.",
      ajusteManual: "Colócate junto a la pierna en el aire, coloca tu mano sobre su cresta ilíaca elevada y gírala suavemente hacia el suelo para nivelar la pelvis.",
      variantesProps: ["Apoyar las manos sobre dos bloques debajo de los hombros para priorizar la horizontalidad del sacro."],
      contraindicaciones: "Inestabilidad ligamentosa de tobillo, hipertensión arterial grave o crisis de vértigo.",
      consideracionTerapeutica: "Excelente estímulo propioceptivo de tobillo, rodilla y reeducación de la estabilidad del glúteo medio.",
      guionVerbal: "Alarga desde el talón que vuela hasta la punta de tus dedos; nivela tus caderas como una mesa plana."
    },
    {
      id: "utthita-trikonasana",
      familia: "de pie",
      nivel: "Principiante / Intermedio",
      drishti: "Angusthamadhye (Pulgar de la mano superior)",
      sanscrito: "Utthita Trikonasana",
      espanol: "Postura del Triángulo Extendido",
      traduccionEtimologica: "Utthita = Extendido; Trikona = Tres ángulos (Triángulo); Asana = Postura",
      esencia: "Flexión lateral de tronco en plano frontal puro. Elonga la cadena isquiotibial y expande la caja torácica.",
      musculosActivos: ["Cuádriceps femorales", "Glúteo medio", "Oblicuos abdominales", "Erectores espinales"],
      musculosElongados: ["Isquiotibiales de la pierna delantera", "Aductores de cadera", "Músculos intercostales superiores"],
      mecanicaArticular: "Pierna anterior: flexión de cadera en rotación externa. Tronco en flexión lateral pura sin flexión hacia adelante.",
      alineacionPasoAPaso: [
        "Pies separados un metro. Pie delantero abierto 90°; pie trasero a 75° apuntando hacia adentro.",
        "Activa los cuádriceps de ambas piernas protegiendo las rodillas.",
        "Inhala y alarga ambos costados del tronco; exhala y flexiona desde la articulación de la cadera delantera.",
        "Apoya la mano delantera en la espinilla, en el tobillo o sobre un bloque en el exterior del pie.",
        "Extiende el brazo opuesto hacia el cielo alineado con el hombro inferior.",
        "Gira el torso hacia el lateral y rota suavemente el cuello para mirar el pulgar superior."
      ],
      errorComun: "Colapsar el pecho hacia el suelo por intentar tocar el suelo a la fuerza, flexionando la columna lumbar.",
      ajusteManual: "Sujeta suavemente la cresta ilíaca superior del alumno llevándola hacia atrás y alinea su brazo superior con el plano de la espalda.",
      variantesProps: ["Uso indispensable de un bloque en posición media o alta bajo la mano inferior."],
      contraindicaciones: "Dolor sacroilíaco agudo o hernias lumbares con ciática irradiada.",
      consideracionTerapeutica: "Alivia la rigidez en la cintura pélvica, tonifica órganos digestivos y abre los costados intercostales.",
      guionVerbal: "Crea espacio en ambos costados del cuerpo; alarga la columna hacia adelante antes de girar el pecho al cielo."
    },
    {
      id: "vrksasana",
      familia: "de pie",
      nivel: "Principiante",
      drishti: "Trataka (Punto inmóvil al frente)",
      sanscrito: "Vrksasana",
      espanol: "Postura del Árbol",
      traduccionEtimologica: "Vrksa = Árbol; Asana = Postura",
      esencia: "Equilibrio estático unipodal y concentración mental. Trabaja la apertura asimétrica de cadera y el enraizamiento neuromuscular.",
      musculosActivos: ["Tibial anterior, gemelos y peroneos de apoyo", "Glúteo medio", "Rotadores externos de la pierna flexionada"],
      musculosElongados: ["Aductores de la pierna flexionada"],
      mecanicaArticular: "Pierna de apoyo: extensión neutra. Pierna flexionada: flexión, abducción y rotación externa de cadera con rodilla doblada.",
      alineacionPasoAPaso: [
        "Desde Tadasana, transfiere el peso hacia el pie derecho enraizando los cuatro apoyos.",
        "Flexiona la rodilla izquierda y apoya la planta del pie en la cara interna del muslo derecho o en la espinilla (nunca contra la rodilla).",
        "Presiona la planta del pie y el muslo interno el uno contra el otro de forma activa.",
        "Orienta la rodilla izquierda hacia el lateral sin rotar la pelvis.",
        "Junta las palmas al centro del pecho en Anjali Mudra o eleva los brazos al cielo.",
        "Fija la mirada en un punto inmóvil al frente manteniendo la respiración suave."
      ],
      errorComun: "Apoyar la planta del pie directamente sobre la cara interna de la rodilla empujando la articulación en un valgo forzado.",
      ajusteManual: "Coloca una mano en la cadera opuesta para estabilizar la pelvis y la otra en el hombro guiándolo hacia abajo.",
      variantesProps: ["Apoyar los dedos del pie flexionado en el suelo como un trípode de apoyo, o practicar cerca de una pared."],
      contraindicaciones: "Vértigos agudos o lesiones recientes en el tobillo de apoyo.",
      consideracionTerapeutica: "Desarrolla la propiocepción, previene caídas y estimula la capacidad de concentración (Dharana).",
      guionVerbal: "Echa raíces con el pie de apoyo; presiona muslo y pie entre sí y crece con ligereza hacia la coronilla."
    },

    /* ==========================================================
       FAMILIA: FLEXIÓN
       ========================================================== */
    {
      id: "uttanasana",
      familia: "flexión",
      nivel: "Principiante / Intermedio",
      drishti: "Nasagrai (Punta de la nariz / Rodillas)",
      sanscrito: "Uttanasana",
      espanol: "Flexión Intensa hacia Adelante",
      traduccionEtimologica: "Ut = Intenso; Tan = Extender; Asana = Postura",
      esencia: "Inversión suave con estiramiento profundo de toda la cadena fascial posterior. Calma la mente y reduce la frecuencia cardíaca.",
      musculosActivos: ["Cuádriceps (inhibición recíproca de isquiotibiales)", "Psoas ilíaco y recto del abdomen"],
      musculosElongados: ["Isquiotibiales", "Glúteo mayor", "Fascia toracolumbar y gemelos"],
      mecanicaArticular: "Anteversión y nutación pélvica sobre las cabezas femorales. Flexión de columna distribuida armónicamente.",
      alineacionPasoAPaso: [
        "Desde Tadasana, inhala y alarga la columna elevando los brazos.",
        "Exhala y flexiona desde las caderas, manteniendo la espalda recta el mayor tiempo posible.",
        "Flexiona ligeramente las rodillas si los isquiotibiales están tensos para apoyar el abdomen sobre los muslos.",
        "Apoya las palmas en el suelo junto a los pies o sujeta los codos contrarios.",
        "Distribuye el peso hacia los metatarsos sin cargar solo los talones.",
        "Suelta completamente el peso de la cabeza, mandíbula y cuello."
      ],
      errorComun: "Trabar las rodillas en hiperextensión con la pelvis en retroversión, curvando la columna lumbar de forma lesiva.",
      ajusteManual: "Apoya tus antebrazos en las crestas ilíacas del alumno traccionando suavemente hacia arriba y adelante.",
      variantesProps: ["Manos apoyadas sobre dos bloques al lado de los pies para no suspender la espalda en el aire."],
      contraindicaciones: "Hernias discales lumbares agudas (L4-S1), glaucoma ocular o hipertensión descompensada.",
      consideracionTerapeutica: "Reduce el estrés, estimula hígado y riñones, y alivia la pesadez en la cadena posterior.",
      guionVerbal: "Flexiona las rodillas lo que tu cuerpo pida; rinde el peso de tu cabeza al suelo y respira en tu espalda."
    },
    {
      id: "paschimottanasana",
      familia: "flexión",
      nivel: "Intermedio",
      drishti: "Padayoragrai (Dedos de los pies)",
      sanscrito: "Paschimottanasana",
      espanol: "Estiramiento Intenso del Oeste / Posterior",
      traduccionEtimologica: "Paschima = Oeste / Espalda; Uttana = Estiramiento; Asana = Postura",
      esencia: "La flexión sentada clásica por excelencia. Pacifica el flujo mental, masajea las vísceras y activa Sushumna Nadi.",
      musculosActivos: ["Cuádriceps femorales", "Tibial anterior (pies en flex activa)", "Psoas"],
      musculosElongados: ["Isquiotibiales", "Glúteo mayor", "Erectores espinales", "Ligamentos supraespinosos"],
      mecanicaArticular: "Flexión simétrica bilateral de caderas en rotación neutra. Flexión vertebral longitudinal.",
      alineacionPasoAPaso: [
        "Siéntate en Dandasana sobre los isquiones retirando la carne de los glúteos hacia atrás.",
        "Flexiona los tobillos a 90° con los dedos apuntando al techo.",
        "Inhala y eleva los brazos al cielo alargando la pared abdominal.",
        "Exhala y flexiona desde los pliegues de las caderas avanzando con el esternón hacia los pies.",
        "Sujeta los bordes externos de los pies, los dedos gordos o un cinturón.",
        "Mantén los hombros lejos de las orejas y profundiza en cada exhalación alargando la columna."
      ],
      errorComun: "Tirar con los brazos redondeando la zona dorsal alta para tocar las rodillas con la frente a toda costa.",
      ajusteManual: "Apoya una mano en el sacro del alumno empujando hacia adelante y abajo, y la otra mano en la zona interescapular alargando el torso.",
      variantesProps: ["Sentarse sobre una manta doblada para facilitar la anteversión pélvica; rodear las plantas con un cinturón."],
      contraindicaciones: "Ciática inflamada activa, hernias lumbares discales o crisis de asma aguda.",
      consideracionTerapeutica: "Mejora la digestión, calma el sistema nervioso simpático e induce a la introspección (Pratyahara).",
      guionVerbal: "No busques llegar a los pies con la cabeza; proyecta tu corazón hacia adelante y alarga la cintura."
    },

    /* ==========================================================
       FAMILIA: EXTENSIÓN
       ========================================================== */
    {
      id: "bhujangasana",
      familia: "extensión",
      nivel: "Principiante",
      drishti: "Bhrumadhye (Entrecejo) o al frente",
      sanscrito: "Bhujangasana",
      espanol: "Postura de la Cobra",
      traduccionEtimologica: "Bhujanga = Serpiente / Cobra; Asana = Postura",
      esencia: "Extensión activa de columna sin apoyo de peso en las manos. Fortalece la musculatura dorsal profunda y abre el corazón.",
      musculosActivos: ["Erectores espinales", "Trapecio inferior y romboides", "Glúteo medio"],
      musculosElongados: ["Recto del abdomen", "Pectorales mayores", "Intercostales anteriores"],
      mecanicaArticular: "Extensión de columna torácica con retracción escapular. Extensión de caderas con piernas ancladas en neutro.",
      alineacionPasoAPaso: [
        "Acuéstate boca abajo con las piernas extendidas al ancho de las caderas y los empeines presionando la esterilla.",
        "Coloca las palmas en el suelo junto a las costillas flotantes con los dedos abiertos.",
        "Pega los codos a los costados del tronco y rótalos hacia atrás.",
        "Presiona el hueso del pubis contra el suelo y activa suavemente los muslos.",
        "Inhala y eleva la cabeza y el pecho del suelo usando la musculatura de la espalda.",
        "Mantén los hombros lejos de las orejas y el cuello largo sin comprimir las cervicales."
      ],
      errorComun: "Empujar excesivamente con las manos hiperlordosando la zona lumbar sin activar la musculatura dorsal.",
      ajusteManual: "Arrodíllate a horcajadas sobre sus muslos; coloca tus manos sobre sus escápulas guiándolas hacia abajo y hacia su columna.",
      variantesProps: ["Esfinge (Salamba Bhujangasana): antebrazos en el suelo si hay molestia o rigidez lumbar."],
      contraindicaciones: "Cirugía abdominal reciente, síndrome del túnel carpiano agudo o embarazo a partir del segundo trimestre.",
      consideracionTerapeutica: "Excelente correctivo para la hipercifosis dorsal provocada por el uso prolongado de pantallas.",
      guionVerbal: "Ancla tus empeines y el pubis; usa la fuerza de tu espalda alta para abrir el corazón como una cobra."
    },
    {
      id: "ustrasana",
      familia: "extensión",
      nivel: "Intermedio",
      drishti: "Nasagrai (Punta de la nariz)",
      sanscrito: "Ustrasana",
      espanol: "Postura del Camello",
      traduccionEtimologica: "Ustra = Camello; Asana = Postura",
      esencia: "Apertura profunda de toda la cadena fascial anterior en posición de rodillas. Expansión torácica y liberación emocional.",
      musculosActivos: ["Erectores espinales", "Glúteo mayor y cuádriceps", "Romboides"],
      musculosElongados: ["Psoas ilíaco", "Recto femoral anterior", "Recto del abdomen", "Escalenos y pectoral mayor"],
      mecanicaArticular: "Extensión de cadera y extensión torácica completa. Extensión y rotación externa de hombros.",
      alineacionPasoAPaso: [
        "Colócate de rodillas, separadas al ancho de las caderas, con tibias y empeines anclados.",
        "Apoya las palmas sobre el sacro con los dedos apuntando hacia abajo.",
        "Inhala y empuja la pelvis suavemente hacia adelante asegurando que los muslos queden perpendiculares al suelo.",
        "Eleva el esternón al techo expandiendo la caja torácica.",
        "Lleva una mano al talón del mismo lado y luego la otra si no hay molestia lumbar.",
        "Sigue empujando las caderas hacia el frente sobre las rodillas y proyecta el corazón hacia arriba."
      ],
      errorComun: "Dejar caer las caderas hacia atrás por detrás de las rodillas para alcanzar los talones fácilmente.",
      ajusteManual: "Apoya tus muslos contra los fémures del alumno para mantenerlos verticales mientras acompañas la apertura de su pecho.",
      variantesProps: ["Apoyar los dedos de los pies en flexión para elevar la altura de los talones; colocar bloques al lado de los tobillos."],
      contraindicaciones: "Hipertensión severa, espondilolistesis activa o artrosis cervical dolorosa.",
      consideracionTerapeutica: "Incrementa la capacidad pulmonar, estimula la tiroides y contrarresta el encorvamiento postural.",
      guionVerbal: "Mantén los muslos verticales sobre tus rodillas; eleva el corazón al cielo antes de buscar los talones."
    },

    /* ==========================================================
       FAMILIA: INVERSIONES & EQUILIBRIOS
       ========================================================== */
    {
      id: "adho-mukha-svanasana",
      familia: "inversión",
      nivel: "Principiante / Intermedio",
      drishti: "Nabhicakra (Ombligo) o entre las rodillas",
      sanscrito: "Adho Mukha Svanasana",
      espanol: "Postura del Perro Mirando hacia Abajo",
      traduccionEtimologica: "Adho = Abajo; Mukha = Rostro; Svana = Perro; Asana = Postura",
      esencia: "Inversión fundamental y descanso activo del Vinyasa. Descomprime la columna vertebral y estira la cadena miofascial posterior.",
      musculosActivos: ["Serrato anterior (protracción y rotación escapular)", "Tríceps braquial", "Cuádriceps", "Hasta Bandha"],
      musculosElongados: ["Isquiotibiales", "Gastrocnemio y sóleo", "Dorsal ancho"],
      mecanicaArticular: "Flexión de hombros a 180° con rotación externa. Flexión bilateral simétrica de caderas.",
      alineacionPasoAPaso: [
        "Desde cuatro apoyos, coloca las manos al ancho de los hombros con los dedos bien abiertos.",
        "Presiona la base del índice y pulgar firmemente en el suelo (Hasta Bandha).",
        "Eleva las caderas hacia arriba y hacia atrás empujando los isquiones al cielo.",
        "Rota los hombros externamente (axilas mirándose entre sí) alejando los hombros de las orejas.",
        "Flexiona ligeramente las rodillas si la espalda se redondea, priorizando la rectitud de la columna.",
        "Desciende los talones progresivamente hacia el suelo."
      ],
      errorComun: "Colapsar el peso sobre las muñecas y hundir el pecho hacia el suelo arqueando la zona dorsal de forma lesiva.",
      ajusteManual: "Pasa tus manos por delante de las crestas ilíacas del alumno y tracciona firmemente hacia arriba y hacia atrás a 45°.",
      variantesProps: ["Manos apoyadas sobre bloques contra la pared para descargar muñecas; pies al ancho de la esterilla."],
      contraindicaciones: "Síndrome del túnel carpiano severo, glaucoma o hipertensión arterial descontrolada.",
      consideracionTerapeutica: "Irrigación cerebral segura sin compresión cervical; alivia la rigidez en piernas y columna.",
      guionVerbal: "Empuja el suelo con las bases de tus dedos; proyecta tus caderas al cielo y alarga tu columna como un puente."
    },
    {
      id: "chaturanga-dandasana",
      familia: "equilibrio brazos",
      nivel: "Intermedio",
      drishti: "Nasagrai (Hacia adelante en el suelo)",
      sanscrito: "Chaturanga Dandasana",
      espanol: "Postura del Bastón en Cuatro Apoyos",
      traduccionEtimologica: "Chatur = Cuatro; Anga = Miembro; Danda = Bastón; Asana = Postura",
      esencia: "Transición axial del Vinyasa. Exige fuerza isométrica total para mantener el cuerpo rígido como una vara sin arquear la zona lumbar.",
      musculosActivos: ["Tríceps braquial", "Serrato anterior y manguito rotador", "Pectoral mayor", "Transverso abdominal y cuádriceps"],
      musculosElongados: ["Flexores de muñeca"],
      mecanicaArticular: "Codos a 90° pegados a las costillas. Muñecas en dorsiflexión. Hombros neutros a la altura de los codos.",
      alineacionPasoAPaso: [
        "Desde la plancha alta, avanza el cuerpo hacia adelante sobre los dedos de los pies.",
        "Activa el abdomen y las piernas formando una línea recta desde los talones a la coronilla.",
        "Exhala y flexiona los codos hacia atrás hasta formar un ángulo exacto de 90°.",
        "Mantén los hombros a la misma altura que los codos (nunca por debajo).",
        "Sostén el pecho abierto y el cuello largo mirando un palmo por delante de las manos."
      ],
      errorComun: "Hundir la pelvis hacia el suelo descolgando las lumbares y rotar los hombros hacia adelante pellizcando los tendones.",
      ajusteManual: "Pasa un cinturón ajustado alrededor de sus brazos justo sobre los codos para sostener el torso a 90°.",
      variantesProps: ["Apoyar las rodillas en el suelo (Chaturanga modificada) para construir fuerza escapular segura."],
      contraindicaciones: "Tendinopatía del manguito rotador, dolor agudo de muñeca o bursitis de hombro.",
      consideracionTerapeutica: "Desarrolla la propiocepción escapular y la estabilidad del core en cadena cinética cerrada.",
      guionVerbal: "Avanza sobre tus dedos de los pies; desciende en una sola pieza firme con los codos pegados a las costillas."
    },
    {
      id: "balasana",
      familia: "restaurativa",
      nivel: "Principiante / Terapéutico",
      drishti: "Cerrado / Hacia el interior",
      sanscrito: "Balasana",
      espanol: "Postura del Niño",
      traduccionEtimologica: "Bala = Niño; Asana = Postura",
      esencia: "Descanso, enraizamiento y recogimiento interior. Estimula el sistema nervioso parasimpático y descomprime la zona lumbosacra.",
      musculosActivos: ["Pasiva (mínimo tono muscular de apoyo)"],
      musculosElongados: ["Glúteo mayor", "Erectores espinales", "Fascia toracolumbar"],
      mecanicaArticular: "Flexión profunda de caderas y rodillas. Flexión pasiva de columna vertebral.",
      alineacionPasoAPaso: [
        "Arrodíllate con los dedos gordos en contacto y las rodillas separadas al ancho de la esterilla.",
        "Desciende los glúteos hacia los talones.",
        "Exhala y alarga el torso hacia adelante entre los muslos apoyando la frente en el suelo.",
        "Extiende los brazos al frente o llévalos hacia atrás junto a las piernas con las palmas arriba.",
        "Respira profundamente hacia la espalda baja y el sacro soltando toda tensión residual."
      ],
      errorComun: "Dejar los glúteos elevados en el aire por falta de flexión en las rodillas cargando peso sobre la frente.",
      ajusteManual: "Coloca tus manos sobre el sacro del alumno ejerciendo una presión suave y prolongada hacia sus talones al exhalar.",
      variantesProps: ["Colocar una manta enrollada detrás de las rodillas; apoyar el pecho sobre un bolster largo."],
      contraindicaciones: "Lesiones severas de rodilla o diarrea aguda.",
      consideracionTerapeutica: "Regula las pulsaciones cardíacas durante clases intensas y alivia el estrés y la sobrecarga lumbar.",
      guionVerbal: "Rinde el peso de tu cuerpo a la esterilla; siente cómo cada respiración expande y calma tu espalda."
    },
    {
      id: "savasana",
      familia: "restaurativa",
      nivel: "Universal",
      drishti: "Ojos cerrados (Antar Drishti)",
      sanscrito: "Savasana / Mrtasana",
      espanol: "Postura del Cadáver",
      traduccionEtimologica: "Sava = Cadáver; Asana = Postura",
      esencia: "La asana más importante de la práctica. Asimilación neuromuscular de la sesión y disolución de las tensiones residuales.",
      musculosActivos: ["Ninguno (desactivación voluntaria absoluta de todo tono motor)"],
      musculosElongados: ["Relajación miofascial completa"],
      mecanicaArticular: "Columna y extremidades en descompresión neutra sobre el plano sagital.",
      alineacionPasoAPaso: [
        "Acuéstate boca arriba centrando la columna en la esterilla.",
        "Separa las piernas al ancho de la esterilla dejando que los pies caigan naturalmente hacia afuera.",
        "Separa los brazos unos 30 cm del cuerpo con las palmas hacia arriba.",
        "Alarga la nuca recogiendo suavemente el mentón hacia el pecho.",
        "Relaja mandíbulas, lengua, ojos y cuero cabelludo.",
        "Permanece inmóvil de 7 a 15 minutos observando la respiración sin intervenir en ella."
      ],
      errorComun: "Salir de forma apresurada y brusca de la postura sin girar previamente sobre el costado.",
      ajusteManual: "Tracción suave y axial de los talones y de la base occipital antes del descanso en silencio.",
      variantesProps: ["Un bolster bajo las rodillas para personas con hiperlordosis o molestias lumbares; un antifaz en los ojos."],
      contraindicaciones: "Ninguna. En el tercer trimestre de embarazo, recostarse obligatoriamente sobre el costado izquierdo.",
      consideracionTerapeutica: "Disminuye la presión arterial, reduce el cortisol y consolida los beneficios neurológicos de la sesión.",
      guionVerbal: "No hay nada más que hacer, ningún lugar a donde ir; suelta el control de la respiración y descansa profundamente."
    },

    /* ==========================================================
       FAMILIA: YIN YOGA (8 Posturas Maestras)
       ========================================================== */
    {
      id: "yin-mariposa",
      familia: "yin yoga",
      nivel: "Universal / Yin",
      drishti: "Ojos cerrados / Interior",
      sanscrito: "Baddha Konasana Pasiva (Mariposa Yin)",
      espanol: "La Mariposa (Butterfly)",
      traduccionEtimologica: "En Yin Yoga: Butterfly Pose",
      esencia: "Flexión pasiva hacia adelante con espalda redondeada. Estimula la fascia toracolumbar y los meridianos de Vejiga y Riñón.",
      musculosActivos: ["Ninguno (desactivación muscular completa para incidir en la fascia)"],
      musculosElongados: ["Fascia toracolumbar", "Ligamentos espinales posteriores", "Aductores de cadera"],
      mecanicaArticular: "Flexión espinal pasiva total. Flexión y rotación externa de caderas con pies alejados del pubis formando un rombo amplio.",
      alineacionPasoAPaso: [
        "Siéntate en el suelo y junta las plantas de los pies alejándolas del pubis (formando un rombo amplio).",
        "Permite que la columna se redondee naturalmente hacia adelante sin tirar con los brazos.",
        "Deja caer la cabeza hacia los pies rindiendo el peso del cráneo a la gravedad.",
        "Relaja los muslos y las ingles; no fuerces las rodillas hacia el suelo.",
        "Sostén la postura en quietud inmóvil durante 3 a 5 minutos.",
        "Sal muy despacio rodando vértebra a vértebra y descansa 1 minuto en Rebound supino."
      ],
      errorComun: "Intentar mantener la espalda recta como en Hatha o tirar con las manos buscando tocar los pies.",
      ajusteManual: "Colocar un bloque o bolster bajo la frente para que el cuello descanse sin tensión si queda colgando.",
      variantesProps: ["Bloque bajo la frente o el pecho; cojines bajo las rodillas si hay molestia articular."],
      contraindicaciones: "Hernias discales lumbares agudas en fase de protrusión posterior.",
      consideracionTerapeutica: "Estimula el meridiano de la Vejiga a lo largo de toda la columna; hidrata los discos lumbares.",
      guionVerbal: "Suelta todo esfuerzo muscular; redondea tu columna como un puente suave y permite que la gravedad haga el trabajo."
    },
    {
      id: "yin-oruga",
      familia: "yin yoga",
      nivel: "Universal / Yin",
      drishti: "Ojos cerrados",
      sanscrito: "Paschimottanasana Pasiva (Oruga Yin)",
      espanol: "La Oruga (Caterpillar)",
      traduccionEtimologica: "En Yin Yoga: Caterpillar Pose",
      esencia: "Tracción fascial longitudinal de toda la línea posterior profunda. Calma el sistema nervioso y enfría el cuerpo.",
      musculosActivos: ["Ninguno"],
      musculosElongados: ["Fascia plantar", "Tendón de Aquiles", "Isquiotibiales", "Fascia toracolumbar", "Ligamento nucal"],
      mecanicaArticular: "Flexión gravitatoria pasiva de columna y caderas con piernas relajadas en neutro.",
      alineacionPasoAPaso: [
        "Siéntate con las piernas extendidas al frente separadas al ancho de las caderas.",
        "Relaja los pies completamente (sin flexión activa de tobillos).",
        "Redondea la columna hacia adelante dejando caer el pecho hacia los muslos y la cabeza hacia las espinillas.",
        "Apoya los antebrazos en el suelo a los costados de las piernas con las palmas hacia arriba.",
        "Permanece entre 4 y 5 minutos observando la respiración sin modificarla.",
        "Para salir, apoya las manos en el suelo y empuja lentamente hacia arriba con los brazos."
      ],
      errorComun: "Activar los cuádriceps y tensar los pies en flex impidiendo que la tensión se transfiera a la fascia profunda.",
      ajusteManual: "Colocar una manta doblada bajo los isquiones y un cojín grueso sobre los muslos para apoyar el torso.",
      variantesProps: ["Manta enrollada bajo las corvas de las rodillas si hay dolor en los tendones."],
      contraindicaciones: "Ciática activa irritativa o desplazamiento vertebral lumbar (espondilolistesis).",
      consideracionTerapeutica: "Descompresión fascial de la espalda baja y estimulación profunda del sistema parasimpático.",
      guionVerbal: "Olvida la alineación activa; rinde el peso de tu espalda y siente cómo la respiración masajea tus riñones."
    },
    {
      id: "yin-dragon",
      familia: "yin yoga",
      nivel: "Intermedio / Yin",
      drishti: "Hacia el suelo",
      sanscrito: "Anjaneyasana Pasiva (El Dragón)",
      espanol: "El Dragón (Dragon Pose)",
      traduccionEtimologica: "En Yin Yoga: Dragon Pose",
      esencia: "Apertura profunda de los flexores de cadera (psoas) e ingles. Estimula los meridianos de Estómago, Bazo e Hígado.",
      musculosActivos: ["Mínimo soporte óseo en manos/bloques"],
      musculosElongados: ["Psoas ilíaco", "Recto femoral anterior", "Fascia de la ingle"],
      mecanicaArticular: "Extensión profunda pasiva de cadera atrasada y flexión de cadera adelantada.",
      alineacionPasoAPaso: [
        "Desde cuatro apoyos, avanza el pie derecho entre las manos hasta que el tobillo quede bajo la rodilla.",
        "Desliza la rodilla izquierda hacia atrás hasta sentir un estiramiento claro en la ingle y muslo anterior.",
        "Apoya las manos en el suelo o sobre dos bloques a los costados del pie.",
        "Permite que la pelvis descienda pesada hacia la tierra con cada exhalación.",
        "Sostén la postura durante 3 minutos por lado en quietud.",
        "Sal muy lentamente hacia Balasana para liberar la cadera."
      ],
      errorComun: "Tensar los glúteos frenando el descenso natural de la pelvis por miedo a la intensidad de la apertura.",
      ajusteManual: "Colocar una manta acolchada bajo la rodilla posterior para evitar cualquier compresión sobre la rótula.",
      variantesProps: ["Apoyar las manos o antebrazos sobre bloques altos para graduar la intensidad en el psoas."],
      contraindicaciones: "Bursitis patelar aguda o dolor en el tendón rotuliano.",
      consideracionTerapeutica: "Libera el psoas (músculo de la respuesta de lucha/huida), desbloqueando estrés acumulado.",
      guionVerbal: "Deja que la pelvis pese hacia la tierra; respira en la ingle y disuelve la resistencia con cada exhalación."
    },
    {
      id: "yin-cisne",
      familia: "yin yoga",
      nivel: "Intermedio / Yin",
      drishti: "Ojos cerrados",
      sanscrito: "Kapotasana Pasiva (El Cisne Durmiente)",
      espanol: "El Cisne / Cisne Durmiente (Swan)",
      traduccionEtimologica: "En Yin Yoga: Sleeping Swan",
      esencia: "Rotación externa pasiva profunda de cadera. Estimula el tejido fascial glúteo y los meridianos de Vesícula Biliar e Hígado.",
      musculosActivos: ["Ninguno"],
      musculosElongados: ["Glúteo mayor y medio", "Piriforme", "Fascia lata"],
      mecanicaArticular: "Cadera delantera en flexión, abducción y rotación externa sin carga muscular activa.",
      alineacionPasoAPaso: [
        "Lleva la rodilla derecha hacia adelante detrás de la muñeca derecha.",
        "Extiende la pierna izquierda recta hacia atrás en el suelo.",
        "Coloca un soporte (bloque o manta) bajo el glúteo derecho para estabilizar la pelvis sin esfuerzo.",
        "Camina con las manos hacia adelante y descansa el pecho sobre un bolster o sobre el suelo.",
        "Permanece inmóvil de 3 a 5 minutos rindiendo la cadera a la esterilla.",
        "Cambia de lado con extrema lentitud integrando una pausa en Rebound boca abajo."
      ],
      errorComun: "Forzar el pie delantero a 90° provocando torsión en la rodilla.",
      ajusteManual: "Asegurar que la cadera elevada tenga soporte firme debajo para que el cuerpo pueda entregarse sin defensa.",
      variantesProps: ["Cojín largo (bolster) debajo de todo el torso para un descanso sin compresión."],
      contraindicaciones: "Meniscopatías agudas o dolor en la cara interna de la rodilla flexionada.",
      consideracionTerapeutica: "Libera la tensión crónica del piriforme y la rigidez de la cápsula posterior de la cadera.",
      guionVerbal: "Rinde todo el peso de tu pecho; permite que la cadera se abra desde la quietud y el tiempo sostenido."
    },
    {
      id: "yin-esfinge-foca",
      familia: "yin yoga",
      nivel: "Universal / Yin",
      drishti: "Nasagrai o al suelo",
      sanscrito: "Salamba Bhujangasana Pasiva (Esfinge y Foca)",
      espanol: "La Esfinge & La Foca (Sphinx / Seal)",
      traduccionEtimologica: "En Yin Yoga: Sphinx and Seal Pose",
      esencia: "Compresión pasiva suave del arco lumbosacro. Estimula los riñones, las glándulas suprarrenales y la hidratación discal lumbar.",
      musculosActivos: ["Ninguno (glúteos y piernas completamente relajados)"],
      musculosElongados: ["Fascia anterior abdominal", "Músculos intercostales"],
      mecanicaArticular: "Extensión pasiva sostenida de la columna vertebral con carga hidrostática sobre las carillas lumbares.",
      alineacionPasoAPaso: [
        "Acuéstate boca abajo con las piernas relajadas separadas al ancho de la esterilla.",
        "Apoya los antebrazos en el suelo con los codos debajo o por delante de los hombros (Esfinge).",
        "Suelta completamente los glúteos y los muslos; permite que el abdomen descanse en la esterilla.",
        "Si buscas mayor compresión tras 3 minutos, extiende los brazos abriendo las manos hacia afuera (La Foca).",
        "Mantén el cuello relajado dejando caer el mentón hacia el pecho.",
        "Permanece entre 3 y 5 minutos y sal descansando boca abajo con la cabeza de lado."
      ],
      errorComun: "Apretar los glúteos involuntariamente impidiendo la compresión fascial en el arco lumbosacro.",
      ajusteManual: "Recordar verbalmente al alumno relajar los talones hacia afuera para apagar el tono del glúteo mayor.",
      variantesProps: ["Colocar un bolster bajo las costillas inferiores para apoyar el pecho sin esfuerzo de hombros."],
      contraindicaciones: "Estenosis de canal lumbar sintomática, espondilolistesis o embarazo avanzado.",
      consideracionTerapeutica: "Restaura la lordosis lumbar natural perdida por el exceso de horas sentados en sillas.",
      guionVerbal: "Desactiva los glúteos por completo; siente la compresión dulce y cálida en la base de tu columna."
    },
    {
      id: "yin-silla-montar",
      familia: "yin yoga",
      nivel: "Intermedio / Avanzado Yin",
      drishti: "Ojos cerrados",
      sanscrito: "Supta Virasana Pasiva (Saddle Pose)",
      espanol: "La Silla de Montar (Saddle)",
      traduccionEtimologica: "En Yin Yoga: Saddle Pose",
      esencia: "Apertura fascial profunda de cuádriceps, flexores de cadera y arco lumbar. Potente estimulador del meridiano del Estómago.",
      musculosActivos: ["Ninguno"],
      musculosElongados: ["Cuádriceps (recto anterior)", "Psoas", "Fascia toracoabdominal"],
      mecanicaArticular: "Flexión completa de rodillas en rotación neutra combinada con extensión de caderas y columna.",
      alineacionPasoAPaso: [
        "Siéntate sobre los talones o entre los pies (separando los talones al ancho de las caderas).",
        "Apoya las manos detrás de ti y reclínate lentamente hacia atrás sobre los antebrazos.",
        "Si el cuerpo lo permite sin dolor en rodillas, desciende la espalda sobre un bolster longitudinal o al suelo.",
        "Extiende los brazos por detrás de la cabeza sujetando los codos contrarios.",
        "Permanece entre 3 y 4 minutos con respiración serena.",
        "Para salir, apóyate en los codos, eleva el pecho despacio y pasa a Balasana de inmediato."
      ],
      errorComun: "Separar descontroladamente las rodillas o soportar dolor punzante en la articulación de la rodilla.",
      ajusteManual: "Colocar un bolster firme bajo toda la columna y elevar la pelvis sentándose sobre un bloque si las rodillas molestan.",
      variantesProps: ["Variante de media silla de montar (Half Saddle) con una pierna extendida al frente."],
      contraindicaciones: "Lesiones de ligamentos cruzados o meniscos de rodilla; compresión lumbar aguda.",
      consideracionTerapeutica: "Excelente estímulo de la circulación pélvica, digestión y estiramiento de cuádriceps rígidos.",
      guionVerbal: "Si tus rodillas están tranquilas, rinde tu espalda hacia atrás y respira en el arco de tu vientre."
    },
    {
      id: "yin-bananasana",
      familia: "yin yoga",
      nivel: "Universal / Yin",
      drishti: "Ojos cerrados",
      sanscrito: "Inflexión Lateral Supina (Bananasana)",
      espanol: "Bananasana",
      traduccionEtimologica: "En Yin Yoga: Banana Pose",
      esencia: "Flexión lateral pasiva completa de la línea lateral fascial y de la banda iliotibial. Estimula el meridiano de la Vesícula Biliar.",
      musculosActivos: ["Ninguno"],
      musculosElongados: ["Cadena lateral fascial completa", "Banda iliotibial", "Oblicuos e intercostales"],
      mecanicaArticular: "Inflexión lateral pasiva de columna vertebral en decúbito supino manteniendo ambas caderas en el suelo.",
      alineacionPasoAPaso: [
        "Acuéstate boca arriba con el cuerpo extendido en una línea recta.",
        "Desplaza las piernas hacia la esquina inferior derecha; cruza el tobillo izquierdo sobre el derecho.",
        "Desplaza la cabeza, hombros y brazos hacia la esquina superior derecha formando un arco con el cuerpo.",
        "Sujeta la muñeca izquierda con la mano derecha asegurando que el glúteo y hombro izquierdo no se despeguen.",
        "Permanece inmóvil de 3 a 5 minutos sintiendo la apertura en todo el costado izquierdo.",
        "Vuelve al centro, descansa 1 minuto en Rebound y repite hacia el lado contrario."
      ],
      errorComun: "Despegar la cadera o el hombro del suelo girando el cuerpo de costado.",
      ajusteManual: "Apoyar suavemente una mano en la cresta ilíaca del costado abierto recordándole pesar contra la esterilla.",
      variantesProps: ["Cojín bajo los brazos si los hombros molestan al extenderse por detrás de la cabeza."],
      contraindicaciones: "Problemas agudos de la articulación sacroilíaca que se irriten con la flexión lateral asimétrica.",
      consideracionTerapeutica: "Abre la respiración intercostal, alivia la tensión en la fascia lata y descomprime la cintura.",
      guionVerbal: "Dibuja un arco con tu cuerpo; mantén ambos hombros en la tierra y respira en el costado que se abre."
    },
    {
      id: "yin-torsion-raices",
      familia: "yin yoga",
      nivel: "Universal / Yin",
      drishti: "Hacia el lado opuesto o arriba",
      sanscrito: "Jathara Parivartanasana Pasiva (Torsión de Raíces Caídas)",
      espanol: "Torsión de Raíces Caídas (Reclining Twist)",
      traduccionEtimologica: "En Yin Yoga: Reclining Roots Twist",
      esencia: "Torsión espinal pasiva asistida por la gravedad. Equilibra el sistema nervioso autónomo y estimula meridianos de Vejiga y Vesícula.",
      musculosActivos: ["Ninguno"],
      musculosElongados: ["Glúteos", "Piriforme", "Multífidos y rotadores espinales", "Pectoral mayor"],
      mecanicaArticular: "Rotación axial de columna vertebral en descarga total de peso sin compresión intervertebral.",
      alineacionPasoAPaso: [
        "Acuéstate boca arriba, flexiona las rodillas y cruza el muslo derecho sobre el izquierdo.",
        "Desplaza las caderas ligeramente a la derecha y deja caer ambas rodillas a la izquierda sobre el suelo o un cojín.",
        "Abre los brazos en cruz con las palmas hacia arriba.",
        "Gira suavemente la cabeza hacia la derecha si el cuello lo permite.",
        "Permanece entre 3 y 4 minutos permitiendo que la torsión disuelva la fatiga de la columna.",
        "Descruza despacio, regresa al centro y repite al lado opuesto."
      ],
      errorComun: "Dejar que el hombro opuesto se despegue excesivamente del suelo generando tensión muscular en el cuello.",
      ajusteManual: "Colocar un bloque o bolster bajo las rodillas caídas para que descansen sin tracción brusca.",
      variantesProps: ["Mantener las rodillas juntas dobladas sin cruzar si el cruce de piernas es incómodo para la cadera."],
      contraindicaciones: "Hernias discales lumbares en fase inflamatoria aguda con dolor ciático activo.",
      consideracionTerapeutica: "Excelente postura de integración final; masajea el hígado y calma la mente antes de Savasana.",
      guionVerbal: "Deja caer las rodillas a la tierra; siente cómo la gravedad retuerce y limpia suavemente tu columna."
    }
  ],

  biomecanica: [
    {
      complejoArticular: "Columna Vertebral",
      movimientosClave: "Flexión, Extensión, Rotación Axial, Inflexión Lateral",
      nombre: "Mecánica del Disco Intervertebral & Preservación Lumbar",
      descripcion: "La región lumbar está diseñada para la flexión y extensión, con muy baja rotación (~5° total de L1 a L5). La rotación del tronco ocurre en la columna torácica (~35°).",
      riesgoEnEsterilla: "Forzar torsiones profundas desde la cintura en lugar de la región dorsal, cizallando los discos L4-L5 y L5-S1.",
      estrategiaProteccion: "Alargar la columna antes de rotar; girar desde las costillas manteniendo la pelvis anclada."
    },
    {
      complejoArticular: "Cintura Escapular",
      movimientosClave: "Protracción, Retracción, Elevación, Depresión, Rotación Campanal",
      nombre: "Ritmo Escapulohumeral & Salud del Manguito Rotador",
      descripcion: "Por cada 2° de movimiento del brazo, la escápula rota 1° hacia arriba para evitar el pinzamiento del supraespinoso.",
      riesgoEnEsterilla: "Colapsar hombros hacia adelante en Chaturanga o bloquear escápulas en Adho Mukha.",
      estrategiaProteccion: "Activar el serrato anterior ('empujar el suelo') y favorecer la rotación externa del húmero."
    },
    {
      complejoArticular: "Pelvis & Cadera",
      movimientosClave: "Anteversión, Retroversión, Nutación / Contranutación Sacra",
      nombre: "El Complejo Coxofemoral & la Articulación Sacroilíaca (ASI)",
      descripcion: "En flexiones profundas debe ocurrir nutación sacra. Si los isquiotibiales están acortados, retienen la pelvis en retroversión obligando a las lumbares a flexionar en exceso.",
      riesgoEnEsterilla: "Hipermovilidad o subluxación sacroilíaca por forzar asanas asimétricas repetitivas.",
      estrategiaProteccion: "Flexionar las rodillas si la pelvis no bascula al frente, y no forzar la cuadratura en Guerrero I."
    },
    {
      complejoArticular: "Rodilla",
      movimientosClave: "Flexión / Extensión (Trocleartrosis modificada)",
      nombre: "Estabilidad de la Rodilla frente a la Rotación de Cadera",
      descripcion: "La rodilla es una bisagra; no tolera la rotación en flexión profunda y es nula en extensión completa. La apertura de cadera debe ocurrir en la articulación coxofemoral.",
      riesgoEnEsterilla: "Retorcer el pie o el tobillo forzando la rodilla, pellizcando el menisco interno.",
      estrategiaProteccion: "Mantener el pie activo en dorsiflexión y jamás empujar una rodilla hacia el suelo si la cadera está bloqueada."
    },
    {
      complejoArticular: "Aparato Respiratorio",
      movimientosClave: "Descenso y Ascenso Frénico, Expansión Tridimensional",
      nombre: "Biomecánica del Diafragma Torácico & Suelo Pélvico",
      descripcion: "En la inhalación el diafragma desciende y el suelo pélvico acompaña elásticamente. En la exhalación, ambos ascienden coordinados.",
      riesgoEnEsterilla: "Respiración clavicular superficial provocada por meter el estómago hacia adentro permanentemente.",
      estrategiaProteccion: "Reeducar la respiración diafragmática 360° antes de introducir retenciones respiratorias avanzadas."
    }
  ],

  pranayamas: [
    {
      categoria: "Equilibrante / Pacificador",
      ratio: "1 : 1 : 1 : 1 (Caja / Sama Vritti)",
      sanscrito: "Sama Vritti Pranayama",
      espanol: "Respiración Cuadrada / Flujo Homogéneo",
      mecanismoFisiologico: "Iguala la estimulación simpática y parasimpática aumentando la Variabilidad Cardíaca.",
      comoEjecutar: "Inhala 4s, retén lleno 4s, exhala 4s, retén vacío 4s sin tensión laríngea.",
      contraindicaciones: "Hipertensión severa o glaucoma (eliminar las retenciones)."
    },
    {
      categoria: "Sedante / Parasimpático",
      ratio: "1 : 2 (Ujjayi suave)",
      sanscrito: "Ujjayi Pranayama",
      espanol: "La Respiración Victoriosa / Sonora",
      mecanismoFisiologico: "El cierre parcial voluntario de la glotis activa barorreceptores carotídeos reduciendo el pulso cardíaco.",
      comoEjecutar: "Inhala y exhala por la nariz contrayendo sutilmente la laringe con un sonido similar al oleaje del mar.",
      contraindicaciones: "Procesos inflamatorios agudos de garganta."
    },
    {
      categoria: "Purificación de Canales",
      ratio: "1 : 1 o 1 : 4 : 2 con Kumbhaka",
      sanscrito: "Nadi Shodhana Pranayama",
      espanol: "Respiración Alternada por las Fosas Nasales",
      mecanismoFisiologico: "Equilibra el ciclo nasal y los hemisferios cerebrales: fosa izquierda (parasimpático) y derecha (simpático).",
      comoEjecutar: "Mano derecha en Vishnu Mudra. Tapa la fosa derecha e inhala por la izquierda. Tapa la izquierda y exhala por la derecha. Inhala por la derecha, tapa y exhala por la izquierda.",
      contraindicaciones: "Congestión nasal severa por rinitis o sinusitis aguda."
    },
    {
      categoria: "Activador / Shatkarma",
      ratio: "Exhalación activa rápida : Inhalación pasiva",
      sanscrito: "Kapalabhati",
      espanol: "Cráneo Brillante / Purificación Frontal",
      mecanismoFisiologico: "Bombeo rítmico mediante contracciones enérgicas del abdomen. Hiperoxigena tejidos y expulsa aire viciado.",
      comoEjecutar: "Inhala pasivo y exhala contrayendo con fuerza y rapidez el abdomen hacia la columna. 30 a 60 bombeos rítmicos.",
      contraindicaciones: "Embarazo absoluto, hernias inguinales o hipertensión alta."
    },
    {
      categoria: "Sedante / Inductor del Sueño",
      ratio: "Exhalación prolongada con zumbido",
      sanscrito: "Bhramari Pranayama",
      espanol: "La Respiración del Abejorro",
      mecanismoFisiologico: "El zumbido en los senos paranasales eleva la producción de óxido nítrico y estimula el nervio vago.",
      comoEjecutar: "Inhala por la nariz y, al exhalar lentamente, emite un zumbido gutural continuo ('Mmmmmm').",
      contraindicaciones: "Infecciones de oído agudas (otitis)."
    }
  ],

  terapia: [
    {
      zonaOPerfil: "Columna Lumbar",
      frecuencia: "Muy Alta (~60% de los practicantes)",
      patologia: "Hernia Discal Lumbar & Protrusión L4-L5 / L5-S1",
      mecanismoLesion: "El núcleo pulposo se hernia en sentido posterolateral comprimiendo las raíces del nervio ciático con la flexión del tronco.",
      posturasProhibidas: "Paschimottanasana con piernas rectas forzadas, Uttanasana sin flexión de rodillas, Halasana.",
      posturasSagradasYAdaptaciones: "Extensiones suaves: Esfinge, Supta Padangusthasana con cinturón (manteniendo lordosis neutra con toalla lumbar).",
    },
    {
      zonaOPerfil: "Pelvis & Glúteo",
      frecuencia: "Alta (Común en practicantes intensivos de Vinyasa)",
      patologia: "Síndrome del Piriforme (Falsa Ciática)",
      mecanismoLesion: "Hipertrofia o espasmo del músculo piriforme que atrapa al nervio ciático en el agujero ciático mayor.",
      posturasProhibidas: "Permanencias en rotación externa extrema sin calentamiento previo; sentadas duras prolongadas.",
      posturasSagradasYAdaptaciones: "Liberación progresiva: Paloma con soporte bajo el glúteo afectado, estiramiento del ojo de la aguja supino.",
    },
    {
      zonaOPerfil: "Columna Cervical",
      frecuencia: "Media / Alta (Asociada a mala técnica en inversiones)",
      patologia: "Rectificación Cervical & Pinzamiento C5-C7",
      mecanismoLesion: "Pérdida de lordosis cervical fisiológica agravada al apoyar peso sobre la coronilla o el cuello sin fuerza escapular.",
      posturasProhibidas: "Sirsasana clásico sobre el suelo duro, Salamba Sarvangasana sin mantas para hombros.",
      posturasSagradasYAdaptaciones: "Viparita Karani en la pared como sustituto de la vela; fortalecimiento del serrato anterior y romboides.",
    },
    {
      zonaOPerfil: "Hombro",
      frecuencia: "Muy Alta en Vinyasa Flow repetitivo",
      patologia: "Pinzamiento Subacromial (Impingement del Supraespinoso)",
      mecanismoLesion: "Atrapamiento del tendón del supraespinoso y de la bursa subacromial bajo el acromion al flexionar y abducir el brazo.",
      posturasProhibidas: "Chaturanga colapsando hombros adelante, transiciones rápidas sin control.",
      posturasSagradasYAdaptaciones: "Brazos en 'V' amplia o manos en el corazón; apoyar rodillas en Chaturanga y bajar solo hasta los codos.",
    },
    {
      zonaOPerfil: "Embarazo",
      frecuencia: "Población Especial Permanente",
      patologia: "Protocolo de Yoga Prenatal (1.º, 2.º y 3.º Trimestre)",
      mecanismoLesion: "Aumento de relaxina (hiperlaxitud); compresión de la vena cava inferior en decúbito supino tras la semana 20.",
      posturasProhibidas: "Tumbada boca arriba prolongada tras semana 20; boca abajo; torsiones cerradas hacia el vientre; saltos y retenciones (Kumbhaka).",
      posturasSagradasYAdaptaciones: "Posturas de pie con apoyo de pared o silla; Malasana con bloque; Savasana recostada sobre el costado izquierdo.",
    }
  ],

  plantillas: {
    vinyasa65: [
      { id: "balasana", sanscrito: "Balasana", espanol: "Niño", familia: "restaurativa", fase: 1, duracionMin: 4 },
      { id: "tadasana", sanscrito: "Tadasana & Pranayama Ujjayi", espanol: "Centramiento erguido", familia: "de pie", fase: 1, duracionMin: 4 },
      { id: "adho-mukha-svanasana", sanscrito: "Adho Mukha Svanasana", espanol: "Perro Mirando Abajo", familia: "inversión", fase: 2, duracionMin: 4 },
      { id: "uttanasana", sanscrito: "Surya Namaskar A (Ciclos)", espanol: "Saludos al Sol dinámicos", familia: "flexión", fase: 2, duracionMin: 8 },
      { id: "virabhadrasana-1", sanscrito: "Virabhadrasana I", espanol: "Guerrero I", familia: "de pie", fase: 3, duracionMin: 4 },
      { id: "virabhadrasana-2", sanscrito: "Virabhadrasana II", espanol: "Guerrero II", familia: "de pie", fase: 3, duracionMin: 4 },
      { id: "utthita-trikonasana", sanscrito: "Utthita Trikonasana", espanol: "Triángulo", familia: "de pie", fase: 3, duracionMin: 4 },
      { id: "virabhadrasana-3", sanscrito: "Virabhadrasana III (Clímax)", espanol: "Guerrero III", familia: "de pie", fase: 3, duracionMin: 5 },
      { id: "chaturanga-dandasana", sanscrito: "Chaturanga Dandasana", espanol: "Fuerza 4 apoyos", familia: "equilibrio brazos", fase: 3, duracionMin: 4 },
      { id: "bhujangasana", sanscrito: "Bhujangasana", espanol: "Cobra", familia: "extensión", fase: 3, duracionMin: 4 },
      { id: "paschimottanasana", sanscrito: "Paschimottanasana", espanol: "Flexión Sentada", familia: "flexión", fase: 4, duracionMin: 4 },
      { id: "savasana", sanscrito: "Savasana & Namaste", espanol: "Relajación Final e Integración", familia: "restaurativa", fase: 5, duracionMin: 10 }
    ],
    hatha60: [
      { id: "balasana", sanscrito: "Balasana & Toma de Consciencia", espanol: "Niño", familia: "restaurativa", fase: 1, duracionMin: 5 },
      { id: "tadasana", sanscrito: "Tadasana", espanol: "Montaña", familia: "de pie", fase: 1, duracionMin: 3 },
      { id: "adho-mukha-svanasana", sanscrito: "Adho Mukha Svanasana", espanol: "Perro Abajo", familia: "inversión", fase: 2, duracionMin: 5 },
      { id: "virabhadrasana-2", sanscrito: "Virabhadrasana II", espanol: "Guerrero II", familia: "de pie", fase: 3, duracionMin: 5 },
      { id: "utthita-trikonasana", sanscrito: "Utthita Trikonasana", espanol: "Triángulo", familia: "de pie", fase: 3, duracionMin: 5 },
      { id: "vrksasana", sanscrito: "Vrksasana (Pico de equilibrio)", espanol: "Árbol", familia: "de pie", fase: 3, duracionMin: 5 },
      { id: "bhujangasana", sanscrito: "Bhujangasana", espanol: "Cobra", familia: "extensión", fase: 3, duracionMin: 5 },
      { id: "ustrasana", sanscrito: "Ustrasana", espanol: "Camello", familia: "extensión", fase: 4, duracionMin: 5 },
      { id: "paschimottanasana", sanscrito: "Paschimottanasana", espanol: "Flexión Sentada", familia: "flexión", fase: 4, duracionMin: 5 },
      { id: "savasana", sanscrito: "Savasana", espanol: "Relajación Completa", familia: "restaurativa", fase: 5, duracionMin: 12 }
    ],
    yin60: [
      { id: "yin-mariposa", sanscrito: "La Mariposa (Butterfly)", espanol: "Apertura lumbar y meridianos", familia: "yin yoga", fase: 1, duracionMin: 6 },
      { id: "yin-dragon", sanscrito: "El Dragón (Dragon Pose)", espanol: "Apertura profunda de psoas", familia: "yin yoga", fase: 3, duracionMin: 8 },
      { id: "yin-cisne", sanscrito: "El Cisne Durmiente (Swan)", espanol: "Liberación fascial de cadera", familia: "yin yoga", fase: 3, duracionMin: 8 },
      { id: "yin-esfinge-foca", sanscrito: "La Esfinge & La Foca", espanol: "Compresión pasiva lumbar", familia: "yin yoga", fase: 3, duracionMin: 6 },
      { id: "yin-silla-montar", sanscrito: "La Silla de Montar (Saddle)", espanol: "Apertura de cuádriceps y estómago", familia: "yin yoga", fase: 3, duracionMin: 6 },
      { id: "yin-oruga", sanscrito: "La Oruga (Caterpillar)", espanol: "Tracción pasiva de espalda", familia: "yin yoga", fase: 4, duracionMin: 6 },
      { id: "yin-bananasana", sanscrito: "Bananasana", espanol: "Apertura de la cadena lateral", familia: "yin yoga", fase: 4, duracionMin: 8 },
      { id: "yin-torsion-raices", sanscrito: "Torsión de Raíces Caídas", espanol: "Neutralización y calma", familia: "yin yoga", fase: 4, duracionMin: 6 },
      { id: "savasana", sanscrito: "Savasana Profundo & Rebound Final", espanol: "Rehidratación fascial e integración", familia: "restaurativa", fase: 5, duracionMin: 10 }
    ],
    terapeutica60: [
      { id: "balasana", sanscrito: "Balasana con Bolster", espanol: "Niño Restaurativo", familia: "restaurativa", fase: 1, duracionMin: 7 },
      { id: "adho-mukha-svanasana", sanscrito: "Adho Mukha en Pared", espanol: "Descarga de hombros", familia: "inversión", fase: 2, duracionMin: 5 },
      { id: "yin-mariposa", sanscrito: "Mariposa con Bloques", espanol: "Apertura suave", familia: "yin yoga", fase: 2, duracionMin: 6 },
      { id: "yin-cisne", sanscrito: "Paloma con Soporte (Pico)", espanol: "Liberación glúteo", familia: "yin yoga", fase: 3, duracionMin: 10 },
      { id: "yin-esfinge-foca", sanscrito: "Esfinge Pasiva", espanol: "Extensión lumbar suave", familia: "yin yoga", fase: 3, duracionMin: 8 },
      { id: "yin-torsion-raices", sanscrito: "Torsión Pasiva Suave", espanol: "Torsión digestiva", familia: "yin yoga", fase: 4, duracionMin: 6 },
      { id: "savasana", sanscrito: "Savasana con Manta Cervical", espanol: "Integración", familia: "restaurativa", fase: 5, duracionMin: 10 }
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
    },
    {
      area: "Instrucción Verbal",
      titulo: "El Lenguaje Preciso: Menos es Más",
      descripcion: "Cómo dar comandos verbales claros, concisos y funcionales sin saturar la mente del alumno.",
      puntosClave: [
        "Comando cardinal: Acción + Parte del cuerpo + Dirección.",
        "Nombrar la postura primero en su versión común y luego en sánscrito.",
        "Modular el tono de voz: enérgico en fase de pie, grave y pausado en suelo.",
        "Evitar muletillas repetitivas."
      ]
    },
    {
      area: "Ética & Ajustes",
      titulo: "El Consentimiento Informado & Deontología",
      descripcion: "Límites claros del contacto físico en el aula moderna y respeto al espacio personal.",
      puntosClave: [
        "Consentimiento previo obligatorio antes de cualquier ajuste táctil.",
        "El ajuste manual es una invitación anatómica, nunca una palanca forzada.",
        "Mantener siempre distancia de seguridad.",
        "Diferenciar el rol docente del rol fisioterapéutico o médico."
      ]
    },
    {
      area: "Marketing Ético",
      titulo: "Profesionalización & Presencia Sostenible",
      descripcion: "Cómo comunicar el valor de tus clases y retener alumnos sin caer en sensacionalismos.",
      puntosClave: [
        "Definir con claridad tu nicho docente.",
        "Educar con contenido de valor en redes en vez de solo exhibición estética.",
        "Construir base de contactos propia (newsletter).",
        "Establecer tarifas justas y sostenibles."
      ]
    }
  ]
};
