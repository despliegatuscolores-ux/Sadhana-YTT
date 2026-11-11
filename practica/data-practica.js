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
        "Junta las bases de los dedos gordos de los pies con los talones ligeramente separados (o pies al ancho de las caderas si hay inestabilidad sacroilíaca).",
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
      variantesProps: ["Apoyar las manos sobre dos bloques debajo de los hombros (Guerrero III modificado) para priorizar la horizontalidad del sacro."],
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
      musculosActivos: ["Cuádriceps femorales", "Glúteo medio", "Oblicuos abdominales (sostienen el torso)", "Erectores espinales"],
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
      id: "utthita-parsvakonasana",
      familia: "de pie",
      nivel: "Intermedio",
      drishti: "Hastagrai (Palma de la mano superior)",
      sanscrito: "Utthita Parsvakonasana",
      espanol: "Postura del Ángulo Lateral Extendido",
      traduccionEtimologica: "Parsva = Costado; Kona = Ángulo; Asana = Postura",
      esencia: "Línea diagonal continua de estiramiento fascial desde el talón trasero hasta la punta de los dedos superiores.",
      musculosActivos: ["Cuádriceps y glúteo mayor de la pierna flexionada", "Serrato anterior y dorsal ancho del brazo elevado"],
      musculosElongados: ["Línea lateral fascial completa: tensor fascia lata, oblicuos, intercostales y dorsal ancho."],
      mecanicaArticular: "Pierna adelantada: flexión de 90° en cadera y rodilla con abducción. Pierna posterior: extensión con pie anclado.",
      alineacionPasoAPaso: [
        "Desde la separación amplia de Guerrero II, mantén la rodilla adelantada flexionada a 90°.",
        "Apoya el antebrazo sobre el muslo delantero o coloca la palma en el suelo/bloque por fuera del pie.",
        "Gira el brazo superior en rotación externa y proyéctalo sobre la oreja apuntando la palma al suelo.",
        "Presiona el talón trasero contra el suelo manteniendo la pierna posterior completamente extendida.",
        "Abre el pecho hacia el lateral girando las costillas hacia el cielo."
      ],
      errorComun: "Descargar todo el peso muerto sobre el antebrazo colapsando el hombro inferior hacia la oreja.",
      ajusteManual: "Toma la muñeca del brazo superior del alumno y realiza una tracción sutil en la dirección de la diagonal mientras estabilizas su pie trasero.",
      variantesProps: ["Colocar un bloque en la cara exterior del pie delantero para apoyar la mano sin perder alineación torácica."],
      contraindicaciones: "Pinzamiento subacromial severo en el hombro o cefalea tensional.",
      consideracionTerapeutica: "Estimula la motilidad intestinal, descomprime la columna lumbar y abre el tórax.",
      guionVerbal: "Traza una sola línea continua de energía desde el talón de atrás hasta la yema de tu mano elevada."
    },
    {
      id: "prasarita-padottanasana",
      familia: "de pie",
      nivel: "Principiante / Intermedio",
      drishti: "Nasagrai (Punta de la nariz / Al suelo)",
      sanscrito: "Prasarita Padottanasana A",
      espanol: "Flexión hacia Adelante con Piernas Separadas",
      traduccionEtimologica: "Prasarita = Separado; Pada = Pie; Uttana = Estiramiento intenso; Asana = Postura",
      esencia: "Semi-inversión estable en bipedestación. Estiramiento simétrico de la cadena posterior e isquiotibiales con descompresión espinal.",
      musculosActivos: ["Cuádriceps", "Tibial anterior", "Psoas ilíaco"],
      musculosElongados: ["Aductores de cadera", "Isquiotibiales", "Erectores espinales"],
      mecanicaArticular: "Abducción marcada y simétrica de caderas con anteversión pélvica profunda. Flexión de tronco respetando la columna.",
      alineacionPasoAPaso: [
        "Separa los pies ampliamente (1,20 - 1,40 m) paralelos entre sí o con los dedos ligeramente hacia adentro.",
        "Apoya las manos en las caderas, inhala y expande el tórax elevando el esternón.",
        "Exhala y flexiona desde los pliegues de las caderas manteniendo la columna alargada.",
        "Apoya las palmas en el suelo al ancho de los hombros, en línea con los arcos de los pies.",
        "Flexiona los codos hacia atrás y desciende la coronilla progresivamente hacia el suelo.",
        "Distribuye el peso hacia los metatarsos evitando recostarte solo en los talones."
      ],
      errorComun: "Colapsar los arcos internos de los pies (hiperpronación) y redondear la zona lumbar por falta de flexión en las caderas.",
      ajusteManual: "Apoya tus manos sobre las crestas ilíacas del alumno empujando hacia arriba y hacia adelante para descomprimir las lumbares.",
      variantesProps: ["Apoyar las palmas o la cabeza sobre uno o dos bloques si el suelo queda distante."],
      contraindicaciones: "Hernias discales lumbares agudas con dolor irradiado o desprendimiento de retina.",
      consideracionTerapeutica: "Calma el sistema nervioso, reduce la fatiga mental y flexibiliza los aductores rígidos.",
      guionVerbal: "Eleva los isquiones al techo; suelta el peso de la cabeza y respira en la cara interna de tus muslos."
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
      musculosActivos: ["Tibial anterior, gemelos y peroneos de la pierna de base", "Glúteo medio de la pierna de apoyo", "Rotadores externos de la pierna flexionada"],
      musculosElongados: ["Aductores de la pierna flexionada"],
      mecanicaArticular: "Pierna de apoyo: extensión neutra. Pierna flexionada: flexión, abducción y rotación externa de cadera con rodilla doblada.",
      alineacionPasoAPaso: [
        "Desde Tadasana, transfiere el peso hacia el pie derecho enraizando los cuatro apoyos.",
        "Flexiona la rodilla izquierda y apoya la planta del pie en la cara interna del muslo derecho o en la espinilla (nunca contra la rodilla).",
        "Presiona la planta del pie y el muslo interno el uno contra el otro de forma activa.",
        "Orienta la rodilla izquierda hacia el lateral sin rotar la pelvis.",
        "Junta las palmas al centro del pecho en Anjali Mudra o eleva los brazos al cielo como ramas de un árbol.",
        "Fija la mirada en un punto inmóvil al frente manteniendo la respiración suave."
      ],
      errorComun: "Apoyar la planta del pie directamente sobre la cara interna de la rodilla empujando la articulación en un peligroso valgo forzado.",
      ajusteManual: "Coloca una mano en la cadera opuesta para estabilizar la pelvis y la otra en el hombro guiándolo hacia abajo.",
      variantesProps: ["Apoyar los dedos del pie flexionado en el suelo como un trípode de apoyo, o practicar cerca de una pared."],
      contraindicaciones: "Vértigos agudos o lesiones recientes en el tobillo de apoyo.",
      consideracionTerapeutica: "Desarrolla la propiocepción, previene caídas y estimula la capacidad de concentración (Dharana).",
      guionVerbal: "Echa raíces con el pie de apoyo; presiona muslo y pie entre sí y crece con ligereza hacia la coronilla."
    },
    {
      id: "garudasana",
      familia: "de pie",
      nivel: "Intermedio",
      drishti: "Angusthamadhye (Mirada a través de las manos)",
      sanscrito: "Garudasana",
      espanol: "Postura del Águila",
      traduccionEtimologica: "Garuda = Rey de las aves / Montura mítica de Vishnu; Asana = Postura",
      esencia: "Envoltura concéntrica de extremidades. Comprime suavemente los vasos de las articulaciones liberando un torrente circulatorio al deshacer.",
      musculosActivos: ["Cuádriceps y glúteo medio de la pierna base", "Aductores (co-contracción)", "Deltoides posterior y romboides"],
      musculosElongados: ["Glúteo mayor y piriforme", "Trapecio medio y superior (apertura interescapular)"],
      mecanicaArticular: "Flexión y aducción profunda de caderas. Aducción horizontal y flexión de hombros con cruce de codos.",
      alineacionPasoAPaso: [
        "Desde Tadasana, flexiona ligeramente ambas rodillas.",
        "Eleva la pierna derecha y crúzala por encima del muslo izquierdo.",
        "Si es posible, engancha el empeine derecho por detrás de la pantorrilla izquierda.",
        "Cruza el brazo izquierdo por encima del derecho doblando los codos y juntando las palmas de las manos.",
        "Eleva los codos a la altura de los hombros y aleja las manos del rostro.",
        "Desciende las caderas flexionando más la pierna de apoyo mientras mantienes el tronco erguido."
      ],
      errorComun: "Inclinarse excesivamente hacia adelante desalineando la columna y forzar el pie detrás del gemelo retorciendo la rodilla.",
      ajusteManual: "Párate detrás del alumno sujetando suavemente sus caderas para ayudarle a bajar el centro de gravedad sin perder la verticalidad.",
      variantesProps: ["Apoyar los dedos del pie que cruza sobre un bloque en el suelo al lado exterior del tobillo base."],
      contraindicaciones: "Lesiones graves de rodilla o dolor patelar agudo.",
      consideracionTerapeutica: "Abre el espacio articular posterior de los hombros, flexibiliza tobillos y descarga la articulación sacroilíaca.",
      guionVerbal: "Comprime muslos y brazos hacia el centro; desciende las caderas y eleva los codos creando espacio en tu espalda alta."
    },

    /* ==========================================================
       FAMILIA: FLEXIONES HACIA ADELANTE
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
      musculosElongados: ["Isquiotibiales (bíceps femoral, semitendinoso, semimembranoso)", "Glúteo mayor", "Fascia toracolumbar y gemelos"],
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
    {
      id: "janu-sirsasana",
      familia: "flexión",
      nivel: "Principiante / Intermedio",
      drishti: "Padayoragrai (Pie extendido)",
      sanscrito: "Janu Sirsasana",
      espanol: "Postura de la Cabeza a la Rodilla",
      traduccionEtimologica: "Janu = Rodilla; Sirsa = Cabeza; Asana = Postura",
      esencia: "Flexión asimétrica hacia adelante que combina estiramiento de isquiotibiales con una suave torsión del tronco hacia la pierna extendida.",
      musculosActivos: ["Cuádriceps de la pierna extendida", "Oblicuos abdominales"],
      musculosElongados: ["Isquiotibiales de la pierna extendida", "Cuadrado lumbar contralateral", "Aductores de la pierna flexionada"],
      mecanicaArticular: "Pierna extendida en flexión de cadera neutra. Pierna flexionada en rotación externa y abducción con rodilla doblada.",
      alineacionPasoAPaso: [
        "Siéntate con ambas piernas extendidas. Flexiona la rodilla derecha y apoya la planta del pie contra el muslo izquierdo interno.",
        "Abre la rodilla derecha hacia el lateral en un ángulo de unos 85°-90°.",
        "Inhala, eleva los brazos y gira el ombligo ligeramente hacia la pierna izquierda extendida.",
        "Exhala y avanza desde la cadera hacia el pie izquierdo sujetando el pie o la espinilla.",
        "Mantén el pie izquierdo activo en flex y alarga ambos costados del tronco por igual.",
        "Desciende el torso con suavidad manteniendo el hombro derecho alineado con el izquierdo."
      ],
      errorComun: "Subir el hombro de la pierna flexionada retorciendo la espalda y encorvar la columna dorsal.",
      ajusteManual: "Presiona suavemente el muslo flexionado hacia el suelo mientras acompañas la rotación del torso hacia la pierna extendida.",
      variantesProps: ["Colocar un cojín o bloque bajo la rodilla flexionada si queda en el aire o molesta la articulación."],
      contraindicaciones: "Lesión de menisco en la pierna flexionada o desgarro en los ligamentos colaterales.",
      consideracionTerapeutica: "Excelente liberación del músculo cuadrado lumbar y estiramiento selectivo del tendón de la corva.",
      guionVerbal: "Gira tu ombligo hacia el muslo extendido; alarga los dos costados y avanza con el pecho abierto."
    },

    /* ==========================================================
       FAMILIA: EXTENSIONES HACIA ATRÁS (BACKBENDS)
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
      musculosActivos: ["Erectores espinales (iliocostal, dorsal largo)", "Trapecio inferior y romboides", "Glúteo medio"],
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
      id: "urdhva-mukha-svanasana",
      familia: "extensión",
      nivel: "Intermedio",
      drishti: "Bhrumadhye (Entrecejo) o Nasagrai",
      sanscrito: "Urdhva Mukha Svanasana",
      espanol: "Perro Mirando hacia Arriba",
      traduccionEtimologica: "Urdhva = Hacia arriba; Mukha = Rostro; Svana = Perro; Asana = Postura",
      esencia: "Extensión potente en suspensión. El cuerpo descansa exclusivamente sobre las palmas de las manos y los empeines de los pies.",
      musculosActivos: ["Tríceps braquial", "Serrato anterior y pectorales", "Cuádriceps (elevan los muslos del suelo)", "Erectores espinales"],
      musculosElongados: ["Recto abdominal", "Flexores de cadera (psoas)"],
      mecanicaArticular: "Extensión completa de caderas y columna. Depresión escapular activa con extensión de muñecas a 90°.",
      alineacionPasoAPaso: [
        "Desde la posición prona o tras Chaturanga, coloca las manos al lado de la cintura.",
        "Empuja el suelo con fuerza estirando los brazos por completo.",
        "Rueda sobre los dedos de los pies apoyando los empeines firmemente en el suelo.",
        "Eleva los muslos, rodillas y caderas del suelo manteniéndolos en suspensión activa.",
        "Abre el pecho proyectando el esternón hacia adelante entre los brazos.",
        "Aleja los hombros de las orejas y mantén el cuello largo sin colapsar la nuca."
      ],
      errorComun: "Dejar caer las rodillas y muslos en el suelo colgándose pasivamente de la zona lumbar y hundirse en los hombros.",
      ajusteManual: "Párate delante del alumno; coloca tus manos en la parte anterior de sus hombros guiándolos hacia atrás y hacia abajo.",
      variantesProps: ["Manos apoyadas sobre bloques firmes para crear más altura y espacio lumbar."],
      contraindicaciones: "Tendinopatía del manguito rotador, túnel carpiano severo o hernias lumbares agudas.",
      consideracionTerapeutica: "Desarrolla fuerza en muñecas y brazos, expande los pulmones y combate la fatiga.",
      guionVerbal: "Empuja la tierra con manos y empeines; suspende los muslos en el aire y avanza con el pecho orgulloso."
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
      musculosActivos: ["Erectores espinales", "Glúteo mayor y cuádriceps (mantienen muslos verticales)", "Romboides"],
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
    {
      id: "setu-bandhasana",
      familia: "extensión",
      nivel: "Principiante / Intermedio",
      drishti: "Nasagrai o Pecho",
      sanscrito: "Setu Bandha Sarvangasana",
      espanol: "Postura del Medio Puente",
      traduccionEtimologica: "Setu = Puente; Bandha = Cierre; Sarvanga = Todo el cuerpo; Asana = Postura",
      esencia: "Extensión controlada en decúbito supino. Conexión de la cadena posterior y apertura torácica accesible.",
      musculosActivos: ["Glúteo mayor", "Isquiotibiales", "Erectores espinales", "Romboides y trapecio inferior"],
      musculosElongados: ["Cuádriceps", "Psoas ilíaco", "Pectorales mayores"],
      mecanicaArticular: "Extensión de caderas y columna torácica. Retracción escapular sobre el suelo.",
      alineacionPasoAPaso: [
        "Acuéstate boca arriba, dobla las rodillas y apoya los pies en el suelo al ancho de las caderas, cerca de los glúteos.",
        "Alinea los pies paralelos entre sí.",
        "Inhala y presiona las plantas de los pies elevando las caderas hacia el techo.",
        "Entrelaza los dedos por debajo de la espalda y rueda los hombros hacia abajo apoyándote sobre las escápulas.",
        "Mantén los muslos paralelos activando suavemente los aductores.",
        "Eleva el esternón hacia el mentón manteniendo la nuca relajada y libre en el suelo."
      ],
      errorComun: "Abrir las rodillas hacia los lados descontroladamente sobrecargando la zona lumbosacra.",
      ajusteManual: "Coloca tus manos a los lados externos de las rodillas del alumno pidiéndole que mantenga los muslos paralelos.",
      variantesProps: ["Puente restaurativo: colocar un bloque de yoga horizontalmente bajo el hueso sacro."],
      contraindicaciones: "Lesiones cervicales agudas o hernia de hiato sintomática.",
      consideracionTerapeutica: "Fortalece los glúteos inhibidos por sedentarismo y alivia el dolor lumbar crónico.",
      guionVerbal: "Presiona los pies contra el suelo; rueda los hombros hacia la tierra y eleva el pecho al cielo."
    },
    {
      id: "dhanurasana",
      familia: "extensión",
      nivel: "Intermedio",
      drishti: "Nasagrai o Bhrumadhye",
      sanscrito: "Dhanurasana",
      espanol: "Postura del Arco",
      traduccionEtimologica: "Dhanu = Arco; Asana = Postura",
      esencia: "Extensión simétrica completa donde las piernas tiran de los brazos como la cuerda tensa de un arco.",
      musculosActivos: ["Isquiotibiales y glúteos", "Cuádriceps (en extensión forzada de rodillas)", "Erectores de la columna", "Romboides"],
      musculosElongados: ["Pectorales", "Deltoides anterior", "Recto abdominal", "Psoas"],
      mecanicaArticular: "Extensión simultánea de cadera y columna. Retracción escapular y extensión de hombros.",
      alineacionPasoAPaso: [
        "Acuéstate boca abajo con las piernas separadas al ancho de las caderas.",
        "Dobla las rodillas y lleva los talones cerca de los glúteos.",
        "Lleva los brazos hacia atrás y sujeta los tobillos por fuera con firmeza.",
        "Inhala y empuja activamente con los pies hacia atrás y hacia arriba.",
        "Deja que la tracción de las piernas despegue el pecho y los muslos del suelo.",
        "Mantén la mirada al frente y respira hacia el abdomen equilibrando el peso sobre la pelvis."
      ],
      errorComun: "Separar excesivamente las rodillas más allá del ancho de las caderas comprimiendo el sacro.",
      ajusteManual: "Arrodíllate junto al alumno, coloca tus manos en sus espinillas y tracciona suavemente hacia arriba y atrás.",
      variantesProps: ["Pasar un cinturón alrededor de los tobillos para sujetar los extremos si las manos no alcanzan los pies."],
      contraindicaciones: "Cirugías abdominales recientes, hernia discal severa o hipertensión.",
      consideracionTerapeutica: "Masaje profundo de los órganos abdominales, tonificación renal y apertura de hombros caídos.",
      guionVerbal: "Patea con tus pies hacia atrás; siente cómo tus piernas abren tu pecho como la cuerda de un arco."
    },

    /* ==========================================================
       FAMILIA: TORSIÓN
       ========================================================== */
    {
      id: "ardha-matsyendrasana",
      familia: "torsión",
      nivel: "Intermedio",
      drishti: "Parsva Drishti (Hacia el hombro posterior)",
      sanscrito: "Ardha Matsyendrasana",
      espanol: "Media Postura del Señor de los Peces",
      traduccionEtimologica: "Ardha = Medio; Matsyendra = Sabio Matsyendra; Asana = Postura",
      esencia: "Torsión espinal asimétrica en sedestación. Desintoxica los órganos viscerales y restaura el rango de rotación axial.",
      musculosActivos: ["Oblicuos internos y externos contralaterales", "Multífidos y rotadores profundos espinales"],
      musculosElongados: ["Glúteo medio y piriforme de la pierna cruzada", "Dorsal ancho"],
      mecanicaArticular: "Rotación axial torácica (~30°). Flexión, aducción y rotación interna de la cadera superior.",
      alineacionPasoAPaso: [
        "Siéntate en Dandasana. Flexiona la pierna izquierda llevando el talón cerca de la cadera derecha por el suelo.",
        "Cruza el pie derecho por encima del muslo izquierdo apoyándolo plano junto a la rodilla.",
        "Asegúrate de que ambos isquiones permanezcan en contacto con la esterilla.",
        "Apoya la mano derecha en el suelo detrás del sacro como un apoyo erguido.",
        "Inhala, eleva el brazo izquierdo y exhala abrazando la rodilla derecha o pasando el codo por fuera.",
        "Alarga la columna en cada inhalación y gira desde el abdomen y el pecho en cada exhalación."
      ],
      errorComun: "Encorvar la columna lumbar y recostarse sobre la mano posterior, girando una columna flexionada.",
      ajusteManual: "Coloca tu rodilla detrás de su sacro para garantizar la elongación axial y asiste sutilmente la rotación de sus hombros.",
      variantesProps: ["Sentarse sobre una manta firme; mantener la pierna inferior extendida recta al frente."],
      contraindicaciones: "Hernias discales lumbares con ciatalgia aguda o embarazo a partir del segundo trimestre.",
      consideracionTerapeutica: "Estimula el peristaltismo intestinal, masajea hígado y páncreas, y flexibiliza la columna.",
      guionVerbal: "Inhala para crecer hacia la coronilla; exhala para girar suavemente desde el ombligo sin forzar con el cuello."
    },
    {
      id: "parivrtta-trikonasana",
      familia: "torsión",
      nivel: "Intermedio / Avanzado",
      drishti: "Angusthamadhye (Pulgar de la mano elevada)",
      sanscrito: "Parivrtta Trikonasana",
      espanol: "Triángulo en Torsión / Invertido",
      traduccionEtimologica: "Parivrtta = Invertido / Girado; Trikona = Triángulo; Asana = Postura",
      esencia: "Combina base de pie asimétrica, flexión de cadera y rotación espinal contra la gravedad. Exige equilibrio y enraizamiento.",
      musculosActivos: ["Cuádriceps", "Oblicuos del abdomen", "Transverso abdominal", "Erectores espinales"],
      musculosElongados: ["Isquiotibiales (bíceps femoral de la pierna adelantada)", "Banda iliotibial y glúteo medio"],
      mecanicaArticular: "Flexión de cadera adelantada con pelvis cuadrada. Rotación de tronco hacia el lado de la pierna delantera.",
      alineacionPasoAPaso: [
        "Pies separados aproximadamente a un metro, con las caderas cuadradas hacia el frente de la esterilla.",
        "Inhala y eleva el brazo izquierdo alargando el costado izquierdo.",
        "Exhala y flexiona desde la cadera hacia adelante llevando la mano izquierda al exterior del pie derecho (o sobre un bloque).",
        "Apoya la mano derecha en el sacro verificando que las caderas sigan niveladas.",
        "Gira el torso hacia la derecha y extiende el brazo derecho hacia el techo.",
        "Presiona con fuerza el talón posterior contra el suelo y alarga la coronilla hacia adelante."
      ],
      errorComun: "Dejar caer la cadera de la pierna adelantada perdiendo la cuadratura pélvica y colapsar la columna torácica.",
      ajusteManual: "Colócate junto a su cadera adelantada; apoya tu mano en su cresta ilíaca empujándola hacia atrás mientras guías su hombro superior.",
      variantesProps: ["Uso indispensable de un bloque en posición media o alta bajo la mano que apoya en el suelo."],
      contraindicaciones: "Inestabilidad sacroilíaca severa, hernias discales lumbares o migrañas agudas.",
      consideracionTerapeutica: "Excelente estiramiento de la banda iliotibial, tonificación visceral profunda y desarrollo del equilibrio.",
      guionVerbal: "Enraíza el talón de atrás; alarga el torso hacia el frente antes de rotar tu corazón hacia el lateral."
    },

    /* ==========================================================
       FAMILIA: APERTURAS DE CADERA
       ========================================================== */
    {
      id: "baddha-konasana",
      familia: "caderas",
      nivel: "Principiante / Intermedio",
      drishti: "Nasagrai (Punta de la nariz)",
      sanscrito: "Baddha Konasana",
      espanol: "Postura del Ángulo Ligado / Mariposa",
      traduccionEtimologica: "Baddha = Atado; Kona = Ángulo; Asana = Postura",
      esencia: "Rotación externa y abducción bilateral de caderas en sedestación. Libera el suelo pélvico y flexibiliza los aductores.",
      musculosActivos: ["Rotadores externos de cadera", "Erectores espinales para mantener el torso erguido"],
      musculosElongados: ["Aductores de cadera (aductor mayor, mediano, menor y grácil)"],
      mecanicaArticular: "Flexión de cadera con abducción y rotación externa máxima. Flexión de rodillas.",
      alineacionPasoAPaso: [
        "Siéntate erguido en el suelo. Dobla las rodillas y junta las plantas de los pies.",
        "Acerca los talones hacia el pubis cómodamente sin forzar las rodillas.",
        "Sujeta los pies con las manos y abre las plantas hacia arriba como las páginas de un libro.",
        "Alarga la columna hacia el techo alejando los hombros de las orejas.",
        "Permite que las rodillas desciendan hacia el suelo de forma natural sin empujarlas con violencia.",
        "Si la pelvis bascula hacia adelante con facilidad, flexiona suavemente el torso hacia los pies."
      ],
      errorComun: "Empujar bruscamente las rodillas hacia abajo con las manos o encorvar la espalda por falta de anteversión pélvica.",
      ajusteManual: "Coloca tus manos en la parte alta interna de sus muslos (cerca de las ingles, nunca sobre las rodillas) ejerciendo suave presión hacia afuera.",
      variantesProps: ["Sentarse sobre un bloque o manta doblada; colocar un bloque debajo de cada rodilla para que descansen."],
      contraindicaciones: "Lesiones de menisco interno o esguince en ligamentos colaterales de la rodilla.",
      consideracionTerapeutica: "Excelente en el embarazo para preparar el canal pélvico; alivia molestias urogenitales y congestión.",
      guionVerbal: "Abre las plantas de tus pies como un libro; alarga la columna y rinde las ingles al espacio."
    },
    {
      id: "eka-pada-rajakapotasana",
      familia: "caderas",
      nivel: "Intermedio",
      drishti: "Nasagrai o al suelo",
      sanscrito: "Eka Pada Rajakapotasana (Paloma en Flexión)",
      espanol: "La Paloma en Flexión hacia Adelante",
      traduccionEtimologica: "Eka = Uno; Pada = Pie; Raja = Real; Kapota = Paloma; Asana = Postura",
      esencia: "Estiramiento profundo del complejo glúteo y piriforme en la pierna adelantada, y extensión del psoas en la atrasada.",
      musculosActivos: ["Rotadores externos de la cadera anterior", "Extensores de cadera posterior"],
      musculosElongados: ["Músculo piriforme, glúteo medio y rotadores profundos adelantados", "Psoas ilíaco atrasado"],
      mecanicaArticular: "Pierna anterior: flexión, abducción y rotación externa. Pierna posterior: extensión con rotación interna neutra.",
      alineacionPasoAPaso: [
        "Desde Adho Mukha Svanasana, lleva la rodilla derecha hacia la muñeca derecha exterior.",
        "Apoya la espinilla en el suelo orientando el pie hacia la ingle izquierda.",
        "Extiende la pierna izquierda recta hacia atrás en el suelo con el empeine plano.",
        "Nivela ambas crestas ilíacas hacia el frente sin descolgar el peso sobre el glúteo derecho.",
        "Inhala y alarga el tronco; exhala y camina con las manos al frente descansando el pecho sobre la esterilla o un bloque.",
        "Respira de 8 a 10 ciclos sintiendo la descompresión fascial en la cadera derecha."
      ],
      errorComun: "Colapsar de lado sobre el glúteo flexionado torsionando la rodilla y desalineando el sacro.",
      ajusteManual: "Coloca una mano en la cresta ilíaca de la pierna extendida guiándola hacia abajo para nivelar la pelvis horizontalmente.",
      variantesProps: ["Colocar una manta o bloque debajo del glúteo flexionado; variante de la aguja supina si duele la rodilla."],
      contraindicaciones: "Rotura de menisco, artrosis de rodilla avanzada o bursitis trocantérea aguda.",
      consideracionTerapeutica: "Postura clave para aliviar el síndrome del piramidal y la falsa ciática provocada por tensión pélvica.",
      guionVerbal: "Nivela tus caderas como faros hacia la tierra; rinde el peso de tu pecho y respira en tu cadera."
    },
    {
      id: "gomukhasana",
      familia: "caderas",
      nivel: "Intermedio",
      drishti: "Nasagrai (Punta de la nariz)",
      sanscrito: "Gomukhasana",
      espanol: "Postura de la Cara de Vaca",
      traduccionEtimologica: "Go = Vaca; Mukha = Cara; Asana = Postura",
      esencia: "Aducción profunda de caderas combinada con rotación interna y externa asimétrica de hombros. Libera la articulación escapulohumeral.",
      musculosActivos: ["Aductores de cadera", "Deltoides y manguito rotador"],
      musculosElongados: ["Glúteo medio y piriforme de ambas piernas", "Tríceps y dorsal ancho (brazo superior)", "Pectoral mayor (brazo inferior)"],
      mecanicaArticular: "Flexión y aducción extrema de caderas apilando las rodillas. Brazo superior en flexión y rotación externa; brazo inferior en extensión y rotación interna.",
      alineacionPasoAPaso: [
        "Siéntate en el suelo y cruza la rodilla derecha exactamente sobre la rodilla izquierda apilándolas.",
        "Separa los pies hacia los lados y siéntate en el espacio intermedio con ambos isquiones en el suelo.",
        "Eleva el brazo derecho al techo, dobla el codo y lleva la mano a la espalda entre las escápulas.",
        "Lleva el brazo izquierdo por debajo, doblándolo hacia arriba por la espalda para entrelazar los dedos de ambas manos.",
        "Mantén el codo superior apuntando al techo y el pecho abierto sin proyectar las costillas.",
        "Respira profundamente manteniendo la columna erguida."
      ],
      errorComun: "Despegar un isquion del suelo para cruzar las piernas o arquear bruscamente la zona lumbar por falta de movilidad en hombros.",
      ajusteManual: "Apoya suavemente tu mano en el codo superior del alumno ayudándole a orientarlo al cielo sin comprimir su cuello.",
      variantesProps: ["Sentarse sobre un bloque para apoyar ambos isquiones; usar un cinturón entre las manos si no se alcanzan en la espalda."],
      contraindicaciones: "Bursitis subacromial en el hombro o dolor agudo en rodillas.",
      consideracionTerapeutica: "Gran descompresión de las caderas y estiramiento de los rotadores del hombro acortados.",
      guionVerbal: "Apila tus rodillas en una sola línea; crece hacia la coronilla y respira en el espacio entre tus omóplatos."
    },

    /* ==========================================================
       FAMILIA: INVERSIONES
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
      musculosActivos: ["Serrato anterior (protracción y rotación escapular)", "Tríceps braquial", "Cuádriceps", "Hasta Bandha (manos activas)"],
      musculosElongados: ["Isquiotibiales", "Gastrocnemio y sóleo", "Dorsal ancho"],
      mecanicaArticular: "Flexión de hombros a 180° con rotación externa. Flexión bilateral simétrica de caderas.",
      alineacionPasoAPaso: [
        "Desde cuatro puntos de apoyo, coloca las manos al ancho de los hombros con los dedos bien abiertos.",
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
      id: "salamba-sarvangasana",
      familia: "inversión",
      nivel: "Intermedio / Avanzado",
      drishti: "Padayoragrai (Puntas de los pies) o Pecho",
      sanscrito: "Salamba Sarvangasana",
      espanol: "La Vela / Postura sobre los Hombros",
      traduccionEtimologica: "Sa = Con; Alamba = Soporte; Sarva = Todo; Anga = Miembro; Asana = Postura",
      esencia: "Reina de las asanas clásicas. Inversión axial que estimula la glándula tiroides mediante el bloqueo faríngeo (Jalandhara).",
      musculosActivos: ["Deltoides posterior y manguito rotador", "Tríceps braquial", "Glúteos y aductores de las piernas", "Transverso abdominal"],
      musculosElongados: ["Músculos posteriores del cuello (trapecio superior, esplenio del cuello)"],
      mecanicaArticular: "Flexión de hombros con aducción máxima de codos. Extensión de tronco y caderas. Flexión de cuello a 90°.",
      alineacionPasoAPaso: [
        "Coloca de 2 a 3 mantas dobladas con borde liso. Acuéstate de modo que los hombros descansen sobre las mantas y la cabeza quede fuera en el suelo.",
        "Con un impulso suave desde el core, eleva las piernas y la pelvis hacia la vertical.",
        "Apoya las palmas firmemente en la espalda media/alta con los pulgares hacia afuera.",
        "Junta los codos por detrás manteniéndolos al ancho exacto de los hombros.",
        "Extiende las piernas juntas hacia el cielo activando los cuádriceps.",
        "No gires jamás la cabeza hacia los lados mientras te encuentres en la postura."
      ],
      errorComun: "Realizar la postura sin mantas apoyando el peso sobre la 7.ª vértebra cervical (C7) aplanando la lordosis natural.",
      ajusteManual: "Sujeta los tobillos del alumno y tracciona suavemente hacia la vertical mientras con tus espinillas evitas que sus codos se abran.",
      variantesProps: ["Uso indispensable de 2 o 3 mantas firmes bajo los hombros; cinturón alrededor de los codos.", "Viparita Karani en la pared."],
      contraindicaciones: "Rectificación cervical, hernia discal en el cuello, glaucoma o menstruación abundante.",
      consideracionTerapeutica: "Drena el sistema linfático, regula la tiroides y aporta serenidad profunda al sistema nervioso.",
      guionVerbal: "Apoya el peso en la base de tus hombros; mantén el cuello libre y la mirada serena en la punta de tus pies."
    },
    {
      id: "halasana",
      familia: "inversión",
      nivel: "Intermedio",
      drishti: "Nabhicakra (Ombligo) o Pecho",
      sanscrito: "Halasana",
      espanol: "Postura del Arado",
      traduccionEtimologica: "Hala = Arado; Asana = Postura",
      esencia: "Inversión en flexión profunda. Estiramiento total de la línea fascial dorsal y descompresión de las raíces lumbares.",
      musculosActivos: ["Cuádriceps", "Transverso abdominal", "Tríceps braquial"],
      musculosElongados: ["Toda la cadena posterior: erectores espinales, isquiotibiales, ligamento nucal"],
      mecanicaArticular: "Flexión cervical profunda (requiere soporte de mantas). Flexión de caderas y flexión vertebral completa.",
      alineacionPasoAPaso: [
        "Desde Sarvangasana (sobre mantas), exhala y desciende las piernas rectas por detrás de la cabeza.",
        "Apoya los dedos de los pies en el suelo o sobre un bloque o silla detrás de ti.",
        "Mantén las piernas firmes y activas empujando los muslos hacia el techo.",
        "Entrelaza los dedos de las manos en el suelo estirando los brazos para elevar más la columna.",
        "Mantén las caderas alineadas verticalmente sobre los hombros sin mover el cuello.",
        "Respira lentamente sintiendo la expansión dorsal."
      ],
      errorComun: "Dejar caer los pies sin control doblando las rodillas y aplastando las vértebras cervicales.",
      ajusteManual: "Colócate detrás de su cabeza; sujeta sus crestas ilíacas y elévalas hacia arriba para descomprimir su cuello.",
      variantesProps: ["Apoyar los pies sobre el asiento de una silla colocada detrás de la cabeza si no llegan al suelo."],
      contraindicaciones: "Hernias o patologías cervicales agudas, hipertensión o desprendimiento de retina.",
      consideracionTerapeutica: "Masajea los órganos abdominales, alivia la pesadez de piernas y aquieta la agitación mental.",
      guionVerbal: "Lleva los pies por detrás de la cabeza; empuja los muslos al cielo y mantén el cuello largo y seguro."
    },
    {
      id: "salamba-sirsasana",
      familia: "inversión",
      nivel: "Avanzado",
      drishti: "Nasagrai (Punta de la nariz)",
      sanscrito: "Salamba Sirsasana I",
      espanol: "Parada sobre la Cabeza",
      traduccionEtimologica: "Salamba = Con soporte; Sirsa = Cabeza; Asana = Postura",
      esencia: "El rey de las asanas. Exige control escapular impecable, fuerza del core y equilibrio axial contra la gravedad.",
      musculosActivos: ["Serrato anterior y trapecio (sostienen el 80% del peso en los antebrazos)", "Deltoides", "Core completo y aductores"],
      musculosElongados: ["Musculatura cervical en contracción isométrica equilibrada"],
      mecanicaArticular: "Flexión de hombros con abducción y depresión escapular activa. Alineación vertical pura de columna y pelvis.",
      alineacionPasoAPaso: [
        "Arrodíllate y entrelaza los dedos de las manos formando un triángulo estable con los antebrazos.",
        "Apoya los codos separados al ancho exacto de los hombros.",
        "Apoya la coronilla en el suelo encajando la parte posterior de la cabeza contra las palmas.",
        "Eleva las rodillas y camina con los pies hacia el rostro hasta alinear la pelvis sobre los hombros.",
        "Empuja el suelo con fuerza desde los antebrazos para que el cuello no soporte el peso muerto.",
        "Eleva las piernas con control abdominal hasta alcanzar la vertical perfecta."
      ],
      errorComun: "Hundirse en los hombros descargando todo el peso sobre las vértebras cervicales comprimiendo los discos.",
      ajusteManual: "Párate lateralmente al alumno y coloca tus manos en sus crestas ilíacas asistiéndole en el centro de gravedad.",
      variantesProps: ["Practicar con la espalda cerca de una pared; uso de bancos específicos de inversión sin presión cervical."],
      contraindicaciones: "Rectificación cervical, presión ocular elevada, hernias cervicales o problemas cardíacos.",
      consideracionTerapeutica: "Mejora la memoria y concentración al irrigar el encéfalo; tonifica el cinturón abdominal profundo.",
      guionVerbal: "Empuja el suelo con tus antebrazos; crea espacio en tu cuello y elévate hacia el cielo desde el abdomen."
    },

    /* ==========================================================
       FAMILIA: EQUILIBRIOS SOBRE BRAZOS
       ========================================================== */
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
      id: "bakasana",
      familia: "equilibrio brazos",
      nivel: "Intermedio / Avanzado",
      drishti: "Nasagrai (Hacia adelante en el suelo, nunca hacia los pies)",
      sanscrito: "Bakasana / Kakasana",
      espanol: "Postura del Cuervo / Grulla",
      traduccionEtimologica: "Baka = Cuervo; Asana = Postura",
      esencia: "Pionera en los equilibrios sobre brazos. Combina fuerza escapular en protracción, retracción abdominal (Uddiyana) y confianza mental.",
      musculosActivos: ["Pectoral mayor y serrato anterior (protracción)", "Tríceps braquial", "Recto del abdomen y psoas"],
      musculosElongados: ["Romboides y trapecio medio"],
      mecanicaArticular: "Protracción escapular máxima. Flexión dorsal de muñecas a 90°. Flexión profunda de caderas y rodillas.",
      alineacionPasoAPaso: [
        "Ponte en cuclillas con pies juntos y rodillas abiertas hacia los lados.",
        "Apoya las palmas en el suelo al ancho de los hombros con dedos abiertos y activos (Hasta Bandha).",
        "Eleva las caderas y coloca las rodillas lo más alto posible en los tríceps o cerca de las axilas.",
        "Traslada el peso del cuerpo hacia adelante sobre las muñecas inclinando el esternón al frente.",
        "Fija la mirada en un punto del suelo a 30 cm por delante de tus manos.",
        "Despega un pie y luego el otro, juntando los dedos gordos en el aire y flexionando los talones a los glúteos."
      ],
      errorComun: "Mirar hacia atrás entre las manos haciendo caer el centro de gravedad, y saltar sin transferir el peso.",
      ajusteManual: "Colócate frente al alumno y apoya tus manos sobre sus hombros para darle estabilidad y evitar que caiga hacia adelante.",
      variantesProps: ["Colocar un bloque bajo los pies para elevar la pelvis; poner un cojín delante de la cabeza por seguridad."],
      contraindicaciones: "Síndrome del túnel carpiano, esguinces de muñeca recientes o embarazo.",
      consideracionTerapeutica: "Fortalecimiento notable de muñecas y antebrazos, y desarrollo del enfoque mental (Ekagrata).",
      guionVerbal: "Mira hacia adelante, no hacia abajo; redondea tu espalda alta como una cúpula y absorbe el ombligo hacia tu columna."
    },
    {
      id: "vasisthasana",
      familia: "equilibrio brazos",
      nivel: "Intermedio",
      drishti: "Angusthamadhye (Pulgar de la mano superior)",
      sanscrito: "Vasisthasana",
      espanol: "Plancha Lateral",
      traduccionEtimologica: "Vasistha = Sabio iluminado Vasistha; Asana = Postura",
      esencia: "Fuerza y estabilidad lateral unipodal. Integra el serrato anterior, oblicuos del abdomen y los abductores de cadera.",
      musculosActivos: ["Oblicuos abdominales y cuadrado lumbar inferior", "Serrato anterior del brazo base", "Glúteo medio inferior"],
      musculosElongados: ["Costado superior del cuerpo"],
      mecanicaArticular: "Apoyo unibraquial en dorsiflexión de muñeca. Aducción escapular controlada y cuerpo en una sola línea oblicua.",
      alineacionPasoAPaso: [
        "Desde la plancha alta, gira sobre el borde externo del pie derecho apilando el pie izquierdo encima.",
        "Apoya firmemente la mano derecha en el suelo con la muñeca ligeramente por delante del hombro.",
        "Eleva el brazo izquierdo hacia el techo en línea con el hombro.",
        "Empuja el suelo con la mano derecha para alejar el hombro de la oreja.",
        "Eleva las caderas activando los oblicuos inferiores para no hundir la pelvis.",
        "Gira la mirada hacia la mano superior manteniendo el cuerpo firme como una tabla."
      ],
      errorComun: "Dejar caer las caderas hacia el suelo por fatiga del cuadrado lumbar y colapsar el hombro de apoyo.",
      ajusteManual: "Colócate detrás del alumno y sujeta sus caderas elevándolas suavemente para ayudarle a encontrar la línea recta.",
      variantesProps: ["Apoyar la rodilla inferior en el suelo en 90° (Vasisthasana modificada) para reducir la carga en la muñeca."],
      contraindicaciones: "Lesión activa del manguito rotador o inflamación de muñeca.",
      consideracionTerapeutica: "Excelente fortalecimiento del complejo del hombro y del core lateral, muy útil para estabilizar la columna en escoliosis.",
      guionVerbal: "Empuja la tierra con la mano de base; eleva las caderas y proyecta tu pecho hacia el lateral."
    },
    
    /* ==========================================================
       FAMILIA: YIN YOGA (Fascial, Meridianos & Permanencia 3-5 min)
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
        "Siéntate en el suelo y junta las plantas de los pies alejándolas del pubis (formando un rombo amplio, no pegados como en Hatha).",
        "Permite que la columna se redondee naturalmente hacia adelante sin tirar con los brazos.",
        "Deja caer la cabeza hacia los pies rindiendo el peso del cráneo a la gravedad.",
        "Relaja los muslos y las ingles; no fuerces las rodillas hacia el suelo.",
        "Sostén la postura en quietud inmóvil durante 3 a 5 minutos.",
        "Sal muy despacio rodando vértebra a vértebra y descansa 1 minuto en Rebound supino."
      ],
      errorComun: "Intentar mantener la espalda recta como en Hatha o tirar con las manos buscando tocar los pies.",
      ajusteManual: "Colocar un bloque o bolster bajo la frente para que el cuello descanse sin tensión si queda colgando.",
      variantesProps: ["Bloque bajo la frente o el pecho; cojines bajo las rodillas si hay molestia articular."],
      contraindicaciones: "Hernias discales lumbares agudas en fase de protrusión posterior (hacer variante neutra reclinada).",
      consideracionTerapeutica: "Estimula el meridiano de la Vejiga a lo largo de toda la columna; hidrata los discos lumbares por imbibición.",
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
        "Para salir, apoya las manos en el suelo y empuja lentamente hacia arriba con la fuerza de los brazos."
      ],
      errorComun: "Activar los cuádriceps y tensar los pies en flex impidiendo que la tensión se transfiera a la fascia profunda.",
      ajusteManual: "Colocar una manta doblada bajo los isquiones y un cojín grueso sobre los muslos para apoyar el torso.",
      variantesProps: ["Manta enrollada bajo las corvas de las rodillas si hay hiperextensión o dolor en los tendones."],
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
        "Sal muy lentamente hacia Balasana o perro boca abajo para liberar la cadera."
      ],
      errorComun: "Tensar los glúteos frenando el descenso natural de la pelvis por miedo a la intensidad de la apertura.",
      ajusteManual: "Colocar una manta acolchada bajo la rodilla posterior para evitar cualquier compresión sobre la rótula.",
      variantesProps: ["Apoyar las manos o antebrazos sobre bloques altos para graduar la intensidad en el psoas."],
      contraindicaciones: "Bursitis patelar aguda o dolor en el tendón rotuliano.",
      consideracionTerapeutica: "Libera el psoas (músculo de la respuesta de lucha/huida), desbloqueando estrés y tensión emocional.",
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
      errorComun: "Forzar el pie delantero a 90° provocando torsión en la rodilla en vez de permitir que el talón descanse cerca del pubis.",
      ajusteManual: "Asegurar que la cadera elevada tenga soporte firme debajo para que el cuerpo pueda entregarse sin defensa muscular.",
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
        "Apoya los antebrazos en el suelo con los codos debajo o ligeramente por delante de los hombros (Esfinge).",
        "Suelta completamente los glúteos y los muslos; permite que el abdomen descanse en la esterilla.",
        "Si buscas mayor compresión tras 3 minutos, extiende los brazos bloqueando suavemente los codos y abriendo las manos hacia afuera (La Foca).",
        "Mantén el cuello relajado dejando caer el mentón hacia el pecho.",
        "Permanece entre 3 y 5 minutos y sal descansando boca abajo con la cabeza de lado."
      ],
      errorComun: "Apretar los glúteos involuntariamente impidiendo la compresión fascial beneficiosa en el arco lumbosacro.",
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
        "Si el cuerpo lo permite sin dolor en rodillas, desciende la espalda sobre un bolster colocado longitudinalmente o sobre el suelo.",
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
        "Desplaza las piernas hacia la esquina inferior derecha de la esterilla; cruza el tobillo izquierdo sobre el derecho.",
        "Desplaza la cabeza, hombros y brazos hacia la esquina superior derecha formando un arco o plátano con el cuerpo.",
        "Sujeta la muñeca izquierda con la mano derecha asegurando que el glúteo y hombro izquierdo no se despeguen del suelo.",
        "Permanece inmóvil de 3 a 5 minutos sintiendo la apertura en todo el costado izquierdo.",
        "Vuelve al centro, descansa 1 minuto en Rebound y repite hacia el lado contrario."
      ],
      errorComun: "Despegar la cadera o el hombro del suelo girando el cuerpo de costado perdiendo el estiramiento lateral puro.",
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
        "Acuéstate boca arriba, flexiona las rodillas y cruza el muslo derecho sobre el muslo izquierdo (como en Garudasana).",
        "Desplaza las caderas ligeramente hacia la derecha y deja caer ambas rodillas hacia la izquierda sobre el suelo o un cojín.",
        "Abre los brazos en cruz o en cactus con las palmas hacia arriba.",
        "Gira suavemente la cabeza hacia la derecha si el cuello lo permite.",
        "Permanece entre 3 y 4 minutos permitiendo que la torsión disuelva la fatiga de la columna.",
        "Descruza despacio, regresa al centro y repite al lado opuesto."
      ],
      errorComun: "Dejar que el hombro opuesto se despegue excesivamente del suelo generando tensión muscular en el cuello.",
      ajusteManual: "Colocar un bloque o bolster bajo las rodillas caídas para que descansen sin tracción brusca en las vértebras dorsales.",
      variantesProps: ["Mantener las rodillas juntas dobladas sin cruzar si el cruce de piernas es incómodo para la cadera."],
      contraindicaciones: "Hernias discales lumbares en fase inflamatoria aguda con dolor ciático activo.",
      consideracionTerapeutica: "Excelente postura de integración final; masajea el hígado y calma la mente antes de Savasana.",
      guionVerbal: "Deja caer las rodillas a la tierra; siente cómo la gravedad retuerce y limpia suavemente tu columna."
    },

    /* ==========================================================
       FAMILIA: RESTAURATIVAS / DESCANSO
       ========================================================== */
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
      id: "supta-baddha-konasana",
      familia: "restaurativa",
      nivel: "Universal / Terapéutico",
      drishti: "Ojos cerrados",
      sanscrito: "Supta Baddha Konasana",
      espanol: "Ángulo Ligado Reclinado",
      traduccionEtimologica: "Supta = Reclinado; Baddha = Ligado; Kona = Ángulo; Asana = Postura",
      esencia: "Apertura pasiva de pecho y caderas en decúbito supino sostenido. Induce a la relajación profunda y estimula la digestión y el suelo pélvico.",
      musculosActivos: ["Ninguno (rendición gravitatoria total)"],
      musculosElongados: ["Aductores de cadera", "Pectorales mayores e intercostales"],
      mecanicaArticular: "Rotación externa y abducción pasiva de caderas. Extensión suave torácica si se usa soporte.",
      alineacionPasoAPaso: [
        "Siéntate en el suelo y junta las plantas de los pies dejando caer las rodillas hacia los lados.",
        "Acuéstate lentamente hacia atrás apoyando la espalda en el suelo o sobre un bolster inclinado.",
        "Coloca los brazos a los lados del torso con las palmas hacia arriba a unos 45°.",
        "Cierra los ojos y relaja el abdomen, permitiendo que la respiración fluya libre.",
        "Permanece de 5 a 10 minutos rindiendo las ingles y el pecho a la gravedad."
      ],
      errorComun: "Permitir que las rodillas queden colgando en el aire con tensión muscular en las ingles.",
      ajusteManual: "Coloca bloques o mantas bajo los muslos del alumno para que el tejido conectivo pueda relajarse completamente.",
      variantesProps: ["Uso indispensable de un bolster a lo largo de la columna y bloques debajo de cada rodilla."],
      contraindicaciones: "Lesiones graves de ingle o sacroilíaca en fase inflamatoria aguda.",
      consideracionTerapeutica: "Alivia el síndrome premenstrual, reduce la ansiedad y abre suavemente el diafragma torácico.",
      guionVerbal: "Suelta cualquier esfuerzo muscular; permite que tus ingles se abran y que tu corazón descanse en calma."
    },
    {
      id: "viparita-karani",
      familia: "restaurativa",
      nivel: "Universal",
      drishti: "Ojos cerrados",
      sanscrito: "Viparita Karani",
      espanol: "Postura de las Piernas en la Pared",
      traduccionEtimologica: "Viparita = Invertido; Karani = Acción; Asana = Postura",
      esencia: "La inversión restaurativa más accesible. Favorece el retorno venoso y linfático de los miembros inferiores sin fatiga.",
      musculosActivos: ["Ninguno"],
      musculosElongados: ["Isquiotibiales (de forma pasiva y suave)"],
      mecanicaArticular: "Flexión de cadera a 90° con soporte de pared. Columna en reposo en decúbito supino.",
      alineacionPasoAPaso: [
        "Siéntate de lado pegado a una pared y gira el cuerpo subiendo las piernas verticales por la pared mientras apoyas la espalda en el suelo.",
        "Acerca los glúteos lo más cerca posible del zócalo.",
        "Abre los brazos a los costados con las palmas hacia el cielo.",
        "Relaja los pies y las piernas permitiendo que la sangre drene hacia la pelvis.",
        "Permanece entre 8 y 15 minutos con respiración natural y tranquila."
      ],
      errorComun: "Separarse demasiado de la pared provocando tensión lumbar por falta de apoyo en las piernas.",
      ajusteManual: "Coloca un cojín o manta debajo de su pelvis para elevar el sacro por encima del corazón y aumentar el beneficio venoso.",
      variantesProps: ["Poner una cinta alrededor de los muslos para que las piernas no se abran solas al relajarse."],
      contraindicaciones: "Glaucoma no controlado o hipertensión grave.",
      consideracionTerapeutica: "Alivia piernas cansadas, varices, edemas y es un inductor natural del sueño.",
      guionVerbal: "Deja que la pared sostenga tus piernas; siente cómo el peso del día se disuelve y la sangre vuelve a tu corazón."
    },
    {
      id: "savasana",
      familia: "restaurativa",
      nivel: "Universal",
      drishti: "Ojos cerrados (Antar Drishti)",
      sanscrito: "Savasana / Mrtasana",
      espanol: "Postura del Cadáver",
      traduccionEtimologica: "Sava = Cadáver; Asana = Postura",
      esencia: "La asana más importante de la práctica. Asimilación neuromuscular de la sesión y disolución de las tensiones residuales del ego.",
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
    }
  ],

  biomecanica: [
    {
      complejoArticular: "Columna Vertebral",
      movimientosClave: "Flexión, Extensión, Rotación Axial, Inflexión Lateral",
      nombre: "Mecánica del Disco Intervertebral & Preservación Lumbar",
      descripcion: "La región lumbar está anatómicamente diseñada para la flexión y extensión (lordosis natural), con muy baja capacidad de rotación (~5° total de L1 a L5 debido a la orientación de las facetas articulares). Por el contrario, la columna torácica o dorsal, gracias a la orientación de sus carillas articulares en el plano frontal, está diseñada para la mayor parte de la rotación del tronco (~30° a 35°).",
      riesgoEnEsterilla: "Forzar torsiones profundas desde la cintura (zona lumbar) en lugar de la región dorsal, provocando cizallamiento en los anillos fibrosos de los discos L4-L5 y L5-S1.",
      estrategiaProteccion: "Enseñar a los alumnos a alargar axialmente la columna vertebral en la inhalación (crear espacio) antes de iniciar cualquier rotación, girando primero desde las costillas y el esternón, manteniendo la pelvis anclada."
    },
    {
      complejoArticular: "Cintura Escapular",
      movimientosClave: "Protracción, Retracción, Elevación, Depresión, Rotación Campanal",
      nombre: "Ritmo Escapulohumeral & Salud del Manguito Rotador",
      descripcion: "Por cada 2° de movimiento del húmero en abducción/flexión, la escápula debe rotar hacia arriba 1°. Para que el brazo suba a 180° sin pinzar el tendón del supraespinoso contra el acromion (síndrome de impingement), la escápula debe protraerse y rotar de forma ascendente, guiada por el serrato anterior y el trapecio inferior.",
      riesgoEnEsterilla: "Colapsar los hombros hacia adelante en Chaturanga Dandasana o intentar pegar obsesivamente las escápulas hacia abajo en Adho Mukha Svanasana impidiendo la rotación campanal natural.",
      estrategiaProteccion: "Activar el serrato anterior ('empujar el suelo alejándolo') y favorecer la rotación externa del húmero para despejar el espacio subacromial."
    },
    {
      complejoArticular: "Pelvis & Cadera",
      movimientosClave: "Anteversión, Retroversión, Nutación / Contranutación Sacra",
      nombre: "El Complejo Coxofemoral & la Articulación Sacroilíaca (ASI)",
      descripcion: "El sacro se articula con los dos ilíacos a través de superficies rugosas sostenidas por ligamentos densos. En flexiones profundas hacia adelante debe ocurrir nutación sacra. Si los isquiotibiales están acortados, retienen la pelvis en retroversión obligando a la columna lumbar a flexionarse en exceso.",
      riesgoEnEsterilla: "Hipermovilidad o subluxación de la articulación sacroilíaca por forzar asanas asimétricas repetitivas (como guerreros profundos o torsiones con la pelvis bloqueada).",
      estrategiaProteccion: "Flexionar las rodillas en flexiones si la pelvis no gira hacia adelante sobre los fémures, y no obligar a cuadrar rígidamente la pelvis en Guerrero I si el cuerpo no tiene el rango articular."
    },
    {
      complejoArticular: "Rodilla",
      movimientosClave: "Flexión / Extensión (Trocleartrosis modificada)",
      nombre: "Estabilidad de la Rodilla frente a la Rotación de Cadera",
      descripcion: "La articulación fémoro-tibial es mecánicamente una bisagra; no tolera la rotación cuando está en flexión profunda, y es nula en extensión completa. Cualquier postura de apertura de cadera (Padmasana, Baddha Konasana, Paloma) debe originarse en la articulación coxofemoral.",
      riesgoEnEsterilla: "Si la cadera no tiene rango, el practicante retuerce el pie o el tobillo transfiriendo torsión lateral a la rodilla, pellizcando el menisco interno y distendiendo ligamentos colaterales.",
      estrategiaProteccion: "Mantener el pie activo en dorsiflexión suave para co-activar la musculatura que cruza la rodilla y jamás empujar una rodilla hacia el suelo si la cadera está bloqueada."
    },
    {
      complejoArticular: "Aparato Respiratorio",
      movimientosClave: "Descenso y Ascenso del Centro Frénico, Expansión Tridimensional",
      nombre: "Biomecánica del Diafragma Torácico & Suelo Pélvico",
      descripcion: "En la inhalación el diafragma se contrae y desciende aplanando su cúpula, aumentando el volumen torácico y desplazando suavemente las vísceras hacia el abdomen. En respuesta sincrónica, el suelo pélvico desciende elásticamente. En la exhalación, ambos diafragmas ascienden coordinados.",
      riesgoEnEsterilla: "Respiración clavicular superficial provocada por meter el estómago hacia adentro permanentemente, bloqueando la movilidad frénica y disparando el tono simpático.",
      estrategiaProteccion: "Reeducar la respiración diafragmática en 360 grados (vientre, costados y espalda baja) antes de introducir retenciones (Kumbhaka) o pranayamas de hiperventilación."
    }
  ],

  pranayamas: [
    {
      categoria: "Equilibrante / Pacificador",
      ratio: "1 : 1 : 1 : 1 (Caja / Sama Vritti)",
      sanscrito: "Sama Vritti Pranayama",
      espanol: "Respiración Cuadrada / Flujo Homogéneo",
      mecanismoFisiologico: "Iguala la estimulación simpática (asociada a la inhalación) con la respuesta parasimpática vagal (asociada a la exhalación y retención vacía). Aumenta la Variabilidad de la Frecuencia Cardíaca (VFC).",
      comoEjecutar: "Inhala en 4 tiempos, retén con pulmones llenos en 4 tiempos, exhala en 4 tiempos y retén con pulmones vacíos en 4 tiempos. La respiración debe ser silenciosa y sin tensión laríngea.",
      contraindicaciones: "Hipertensión arterial grave o glaucoma no deben realizar retenciones a pulmón lleno (eliminar los tiempos de Kumbhaka si hay mareo)."
    },
    {
      categoria: "Sedante / Parasimpático",
      ratio: "1 : 2 (Ujjayi suave)",
      sanscrito: "Ujjayi Pranayama",
      espanol: "La Respiración Victoriosa / Sonora",
      mecanismoFisiologico: "El cierre parcial voluntario de la glotis genera una ligera resistencia al paso del aire. Esta resistencia activa los barorreceptores en las arterias carótidas, reduciendo la presión sanguínea y ralentizando los latidos del corazón.",
      comoEjecutar: "Inhala y exhala por la nariz contrayendo sutilmente los músculos de la laringe (como empañar un espejo pero con labios cerrados). Produce un sonido similar al oleaje del mar, continuo y suave.",
      contraindicaciones: "Procesos inflamatorios agudos de garganta (faringitis/laringitis). No forzar el sonido hasta hacerlo áspero."
    },
    {
      categoria: "Purificación de Canales",
      ratio: "1 : 1 o 1 : 4 : 2 con Kumbhaka",
      sanscrito: "Nadi Shodhana Pranayama",
      espanol: "Respiración Alternada por las Fosas Nasales",
      mecanismoFisiologico: "Equilibra el ciclo nasal ultradiano y los hemisferios cerebrales: fosa izquierda (Ida Nadi / parasimpático / calma) y fosa derecha (Pingala Nadi / simpático / calor y digestión).",
      comoEjecutar: "Mano derecha en Vishnu Mudra. Tapa la fosa nasal derecha e inhala por la izquierda. Tapa la izquierda y exhala por la derecha. Inhala por la derecha, tapa y exhala por la izquierda.",
      contraindicaciones: "Congestión nasal severa por rinitis o sinusitis aguda. En caso de obstrucción, realizar la técnica mentalmente."
    },
    {
      categoria: "Activador / Shatkarma",
      ratio: "Exhalación activa rápida : Inhalación pasiva",
      sanscrito: "Kapalabhati",
      espanol: "Cráneo Brillante / Purificación Frontal",
      mecanismoFisiologico: "Bombeo rítmico mediante contracciones enérgicas del transverso y recto abdominal. Hiperoxigena los tejidos, estimula el plexo solar y expulsa aire residual de los alvéolos inferiores.",
      comoEjecutar: "Siéntate erguido. Inhala de forma pasiva y exhala contrayendo con fuerza y rapidez el abdomen hacia la columna, expulsando el aire por la nariz. Realiza de 30 a 60 bombeos rítmicos.",
      contraindicaciones: "Embarazo absoluto, hernias inguinales o de hiato, hipertensión arterial alta, desprendimiento de retina o epilepsia."
    },
    {
      categoria: "Sedante / Inductor del Sueño",
      ratio: "Exhalación prolongada con zumbido",
      sanscrito: "Bhramari Pranayama",
      espanol: "La Respiración del Abejorro",
      mecanismoFisiologico: "La vibración del zumbido en los senos paranasales multiplica por 15 la producción de óxido nítrico (NO), un vasodilatador y antiviral endógeno. Estimula intensamente el nervio vago reduciendo la ansiedad.",
      comoEjecutar: "Cierra los ojos o tápate los oídos con los pulgares. Inhala por la nariz y, al exhalar lentamente, emite un zumbido gutural continuo ('Mmmmmm') sintiendo la vibración en los huesos craneales.",
      contraindicaciones: "Infecciones agudas de oído (otitis)."
    }
  ],

  terapia: [
    {
      zonaOPerfil: "Columna Lumbar",
      frecuencia: "Muy Alta (~60% de los practicantes)",
      patologia: "Hernia Discal Lumbar & Protrusión L4-L5 / L5-S1",
      mecanismoLesion: "El núcleo pulposo se hernia en sentido posterolateral comprimiendo las raíces del nervio ciático. El dolor empeora con la flexión del tronco, la carga y la inversión con espalda curvada.",
      posturasProhibidas: "Paschimottanasana con piernas rectas forzadas, Uttanasana sin flexión de rodillas, Halasana, flexiones profundas con torsión simultánea.",
      posturasSagradasYAdaptaciones: "Extensiones suaves: Esfinge (Salamba Bhujangasana), Supta Padangusthasana con cinturón (manteniendo lordosis neutra con toalla lumbar), Setu Bandhasana pasivo con bloque bajo el sacro."
    },
    {
      zonaOPerfil: "Pelvis & Glúteo",
      frecuencia: "Alta (Común en practicantes intensivos de Vinyasa)",
      patologia: "Síndrome del Piriforme (Falsa Ciática)",
      mecanismoLesion: "Hipertrofia o espasmo del músculo piriforme que atrapa mecánicamente al nervio ciático al pasar por debajo del agujero ciático mayor, causando dolor referido por la parte posterior del muslo.",
      posturasProhibidas: "Permanencias excesivas en posturas de fuerza con rotación externa extrema sin calentamiento previo; sentadas prolongadas sobre superficies duras.",
      posturasSagradasYAdaptaciones: "Liberación progresiva: Gomukhasana sobre un bloque, Paloma con soporte bajo el glúteo afectado, estiramiento del ojo de la aguja supino donde la columna no sufre."
    },
    {
      zonaOPerfil: "Columna Cervical",
      frecuencia: "Media / Alta (Asociada a mala técnica en inversiones)",
      patologia: "Rectificación Cervical & Pinzamiento C5-C7",
      mecanismoLesion: "Pérdida de la curvatura lordótica fisiológica provocada por postura adelantada de cabeza. En yoga se agrava al apoyar el peso del cuerpo sobre la coronilla o el cuello sin tono escapular.",
      posturasProhibidas: "Sirsasana clásico sobre el suelo duro, Salamba Sarvangasana sin mantas para hombros, Matsyasana dejando caer la cabeza hacia atrás sin control dorsal.",
      posturasSagradasYAdaptaciones: "Viparita Karani en la pared como sustituto de la vela; fortalecimiento del serrato anterior y romboides; cobra suave manteniendo la mirada al suelo para alinear cervicales."
    },
    {
      zonaOPerfil: "Hombro",
      frecuencia: "Muy Alta en Vinyasa Flow repetitivo",
      patologia: "Pinzamiento Subacromial (Impingement del Supraespinoso)",
      mecanismoLesion: "Atrapamiento del tendón del músculo supraespinoso y de la bursa subacromial bajo el arco coracoacromial durante la flexión y abducción del brazo con rotación interna.",
      posturasProhibidas: "Chaturanga Dandasana colapsando hombros hacia adelante, transiciones rápidas de plancha a chaturanga sin control, brazos elevados con palmas juntas si hay pinzamiento.",
      posturasSagradasYAdaptaciones: "Brazos en 'V' amplia o manos en el corazón; apoyar rodillas en Chaturanga y bajar solo hasta los codos; fortalecer el serrato anterior."
    },
    {
      zonaOPerfil: "Embarazo",
      frecuencia: "Población Especial Permanente",
      patologia: "Protocolo de Yoga Prenatal (1.º, 2.º y 3.º Trimestre)",
      mecanismoLesion: "Aumento de relaxina (hiperlaxitud con riesgo de luxación); compresión de la vena cava inferior en decúbito supino tras la semana 20; diástasis de rectos.",
      posturasProhibidas: "Tumbada boca arriba prolongada tras semana 20; boca abajo (prono); torsiones cerradas hacia el muslo; flexiones intensas de abdomen; saltos y retenciones (Kumbhaka prohibido).",
      posturasSagradasYAdaptaciones: "Posturas de pie con apoyo de pared o silla; Baddha Konasana y Malasana para apertura pélvica; Savasana siempre recostada sobre el costado izquierdo con un cojín entre las piernas; respiración Ujjayi suave."
    }
  ],

  plantillas: {
    enraizamiento: [
      { id: "tadasana", sanscrito: "Tadasana", espanol: "Montaña", familia: "de pie", duracionMin: 3 },
      { id: "vrksasana", sanscrito: "Vrksasana", espanol: "Árbol", familia: "de pie", duracionMin: 3 },
      { id: "virabhadrasana-1", sanscrito: "Virabhadrasana I", espanol: "Guerrero I", familia: "de pie", duracionMin: 4 },
      { id: "virabhadrasana-2", sanscrito: "Virabhadrasana II", espanol: "Guerrero II", familia: "de pie", duracionMin: 4 },
      { id: "utthita-trikonasana", sanscrito: "Utthita Trikonasana", espanol: "Triángulo", familia: "de pie", duracionMin: 4 },
      { id: "prasarita-padottanasana", sanscrito: "Prasarita Padottanasana", espanol: "Flexión Abierta", familia: "de pie", duracionMin: 4 },
      { id: "adho-mukha-svanasana", sanscrito: "Adho Mukha Svanasana", espanol: "Perro Mirando Abajo", familia: "inversión", duracionMin: 4 },
      { id: "balasana", sanscrito: "Balasana", espanol: "Niño", familia: "restaurativa", duracionMin: 3 },
      { id: "paschimottanasana", sanscrito: "Paschimottanasana", espanol: "Flexión Sentada", familia: "flexión", duracionMin: 5 },
      { id: "savasana", sanscrito: "Savasana", espanol: "Cadáver", familia: "restaurativa", duracionMin: 10 }
    ],
    pecho: [
      { id: "tadasana", sanscrito: "Tadasana", espanol: "Montaña", familia: "de pie", duracionMin: 3 },
      { id: "virabhadrasana-1", sanscrito: "Virabhadrasana I", espanol: "Guerrero I", familia: "de pie", duracionMin: 4 },
      { id: "utthita-parsvakonasana", sanscrito: "Parsvakonasana", espanol: "Ángulo Lateral", familia: "de pie", duracionMin: 4 },
      { id: "chaturanga-dandasana", sanscrito: "Chaturanga", espanol: "Bastón 4 Apoyos", familia: "equilibrio brazos", duracionMin: 3 },
      { id: "urdhva-mukha-svanasana", sanscrito: "Urdhva Mukha", espanol: "Perro Arriba", familia: "extensión", duracionMin: 3 },
      { id: "adho-mukha-svanasana", sanscrito: "Adho Mukha Svanasana", espanol: "Perro Abajo", familia: "inversión", duracionMin: 4 },
      { id: "ustrasana", sanscrito: "Ustrasana", espanol: "Camello", familia: "extensión", duracionMin: 5 },
      { id: "dhanurasana", sanscrito: "Dhanurasana", espanol: "El Arco", familia: "extensión", duracionMin: 4 },
      { id: "balasana", sanscrito: "Balasana", espanol: "Niño", familia: "restaurativa", duracionMin: 4 },
      { id: "setu-bandhasana", sanscrito: "Setu Bandhasana", espanol: "Medio Puente", familia: "extensión", duracionMin: 5 },
      { id: "savasana", sanscrito: "Savasana", espanol: "Cadáver", familia: "restaurativa", duracionMin: 10 }
    ],
    terapeutica: [
      { id: "balasana", sanscrito: "Balasana con Soporte", espanol: "Niño Restaurativo", familia: "restaurativa", duracionMin: 5 },
      { id: "adho-mukha-svanasana", sanscrito: "Adho Mukha en Pared", espanol: "Perro Descargado", familia: "inversión", duracionMin: 4 },
      { id: "baddha-konasana", sanscrito: "Baddha Konasana con Bloques", espanol: "Mariposa Adaptada", familia: "caderas", duracionMin: 5 },
      { id: "eka-pada-rajakapotasana", sanscrito: "Paloma con Soporte", espanol: "Estiramiento Glúteo", familia: "caderas", duracionMin: 6 },
      { id: "ardha-matsyendrasana", sanscrito: "Ardha Matsyendrasana Suave", espanol: "Torsión Adaptada", familia: "torsión", duracionMin: 4 },
      { id: "viparita-karani", sanscrito: "Viparita Karani", espanol: "Piernas en Pared", familia: "restaurativa", duracionMin: 6 },
      { id: "supta-baddha-konasana", sanscrito: "Supta Baddha Konasana", espanol: "Mariposa Reclinada", familia: "restaurativa", duracionMin: 6 },
      { id: "savasana", sanscrito: "Savasana con Soporte Lumbar", espanol: "Relajación Profunda", familia: "restaurativa", duracionMin: 10 }
    ]
  },

  pedagogia: [
    {
      area: "Vinyasa Krama",
      titulo: "La Curva Energética de una Clase Magistral",
      descripcion: "El arte de secuenciar de forma progresiva, lógica e inteligente, preparando el cuerpo hacia una asana cúspide (Peak Pose) y devolviéndolo a la calma sin fatiga ni lesiones.",
      puntosClave: [
        "Centramiento inicial y Pranayama preparatorio (5 a 10 min) para aquietar la frecuencia mental.",
        "Calentamiento de articulaciones y Saludos al Sol (Surya Namaskar A y B) para elevar la temperatura sinusal y muscular.",
        "Fase de bipedestación (posturas de pie) para construir enraizamiento y fuerza antes de posturas más complejas.",
        "Pico de la sesión (Peak Pose): la postura más demandante anatómica o técnicamente, introducida cuando el cuerpo está en su temperatura óptima.",
        "Contracosturas y enfriamiento: flexiones suaves hacia adelante y torsiones neutralizadoras.",
        "Savasana ineludible (mínimo 7 a 10 minutos) para consolidar el sistema nervioso parasimpático."
      ]
    },
    {
      area: "Instrucción Verbal",
      titulo: "El Lenguaje Preciso: Menos es Más",
      descripcion: "Cómo dar comandos verbales claros, concisos y funcionales sin saturar la mente del alumno con florituras poéticas que impidan seguir la biomecánica.",
      puntosClave: [
        "Estructura cardinal de comando: Acción + Parte del cuerpo + Dirección (Ejemplo: 'Presiona el talón de atrás contra el suelo').",
        "Nombrar la postura primero en su versión común y luego en sánscrito para fijar el vocabulario sin generar confusión.",
        "Modulación del tono de voz: enérgico y rítmico en las secuencias activas de pie; pausado, grave y espaciado en la fase de suelo y relajación.",
        "Evitar muletillas repetitivas ('muy bien', 'ahora', 'vamos a'). El silencio del profesor también es una herramienta pedagógica."
      ]
    },
    {
      area: "Ética & Ajustes",
      titulo: "El Consentimiento Informado & la Deontología Docente",
      descripcion: "Límites claros del contacto físico en el aula moderna, respeto al espacio personal y profesionalismo ético.",
      puntosClave: [
        "Consentimiento previo obligatorio: usar tarjetas de consentimiento (Hands-on / No touch) o pedir permiso verbal antes de realizar un ajuste táctil.",
        "El ajuste manual es una invitación anatómica, nunca una imposición forzada de palanca mecánica para lograr una estética externa.",
        "Mantener siempre una distancia de seguridad; no apoyarse con el peso muerto sobre el alumno.",
        "Diferenciar con claridad el rol de un profesor de yoga del de un fisioterapeuta, médico o psicoterapeuta."
      ]
    },
    {
      area: "Marketing Ético",
      titulo: "Profesionalización, Presencia Digital & Negocio Sostenible",
      descripcion: "Cómo comunicar el valor de tus clases y retener alumnos sin caer en el sensacionalismo o la mercantilización vacía de la disciplina.",
      puntosClave: [
        "Definir con claridad tu nicho docente: yoga para principiantes, yoga terapéutico para espalda, vinyasa dinámico para atletas, etc.",
        "Comunicar en redes sociales educando con contenido de valor (desgloses anatómicos, errores comunes, filosofía práctica) en lugar de centrarse solo en la exhibición estética de posturas avanzadas.",
        "Construir una base de contactos propia (newsletter / comunidad) para no depender de los algoritmos de plataformas sociales.",
        "Establecer tarifas profesionales justas que dignifiquen el tiempo de preparación, formación continua y presencia en la esterilla."
      ]
    }
  ]
};
