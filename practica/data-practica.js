/**
 * KINESIS DATABASE
 * Laboratorio Técnico, Biomecánica, Asana Lab 360°, Fisiología Respiratoria, Terapia y Pedagogía
 * Estándar Formativo Yoga Alliance (200h / 300h)
 */

const PRACTICA_DB = {
  asanas: [
    /* ==========================================
       FAMILIA: DE PIE
       ========================================== */
    {
      id: "tadasana",
      familia: "de pie",
      nivel: "Fundamental",
      drishti: "Nasagrai (Punta de la nariz / Al frente)",
      sanscrito: "Tadasana / Samasthiti",
      espanol: "Postura de la Montaña",
      traduccionEtimologica: "Tada = Montaña; Asana = Asiento / Postura",
      esencia: "El plano basal de todas las asanas erguidas. Enseña la distribución axial del peso y la co-activación neutra.",
      musculosActivos: ["Cuádriceps (fijación rotuliana)", "Glúteo medio y menor (estabilidad pélvica)", "Transverso abdominal (faja natural)", "Erectores espinales"],
      musculosElongados: ["Pectorales menores", "Fascia plantar (distribución de carga)", "Músculos suboccipitales"],
      mecanicaArticular: "Columna en curvaturas fisiológicas neutras. Pelvis en posición neutra (ni anteversión ni retroversión). Extensión neutra de rodillas y caderas sin recurvatum.",
      alineacionPasoAPaso: [
        "Junta las bases de los dedos gordos de los pies, dejando los talones ligeramente separados (o pies al ancho de caderas si hay inestabilidad sacroilíaca).",
        "Activa Pada Bandha elevando los arcos internos y enraizando los cuatro puntos de apoyo del pie (base del 1.º metatarsiano, base del 5.º, talón interno y talón externo).",
        "Eleva las rótulas activando cuádriceps sin empujar las rodillas hacia atrás en hiperextensión.",
        "Orienta suavemente el cóccix hacia la tierra mientras el pubis asciende sutilmente hacia el ombligo para alargar la zona lumbar.",
        "Rueda los hombros atrás y abajo, alejándolos de las orejas; expande las clavículas y extiende los brazos con las palmas mirando al frente.",
        "Proyecta la coronilla al techo mientras recoges el mentón paralelamente al suelo (Jalandhara Bandha sutil)."
      ],
      errorComun: "Hiperextensión de rodillas (genu recurvatum) bloqueando el flujo vascular y acentuando la lordosis lumbar por anteversión de pelvis.",
      ajusteManual: "Colócate lateralmente al alumno. Apoya una mano en su sacro orientándolo suavemente hacia el suelo, y la yema de los dedos de la otra mano en su esternón dirigiéndolo hacia arriba, recordándole mantener costillas flotantes recogidas.",
      variantesProps: [
        "Sujetar un bloque entre los muslos internos (aductores) rodándolo hacia atrás para enseñar rotación interna neutra de fémures.",
        "Espalda contra la pared para percibir los puntos de contacto: talones, sacro, zona dorsal media y occipital."
      ],
      contraindicaciones: "Cefaleas agudas migrañosas, mareos ortostáticos o hipotensión repentina.",
      consideracionTerapeutica: "Excelente reeducador propioceptivo para escoliosis postural, pie plano y corrección de la hiperlordosis.",
      guionVerbal: "Pisa la tierra con firmeza; crece desde tus arcos plantares hasta la coronilla, creando espacio entre cada una de tus vértebras."
    },
    {
      id: "utkatasana",
      familia: "de pie",
      nivel: "Principiante / Intermedio",
      drishti: "Angusthamadhye (Pulgares hacia arriba)",
      sanscrito: "Utkatasana",
      espanol: "Postura de la Silla / Feroz",
      traduccionEtimologica: "Utkata = Feroz, poderoso, inmenso; Asana = Postura",
      esencia: "Fuerte trabajo excéntrico de cuádriceps y estabilización central. Genera fuego interno (Tapas).",
      musculosActivos: ["Cuádriceps femoral", "Glúteo mayor", "Erectores espinales (ilio-costal, dorsal largo)", "Serrato anterior y deltoides"],
      musculosElongados: ["Tendón de Aquiles y sóleo", "Músculos romboides (por la tracción escapular ascendente)"],
      mecanicaArticular: "Flexión dorsal de tobillos, flexión de 90° o inferior en rodillas y caderas. Flexión y rotación ascendente de escápulas con hombros en abducción.",
      alineacionPasoAPaso: [
        "Desde Tadasana, junta pies y dobla profundamente las rodillas desplazando el peso hacia los talones.",
        "Baja la pelvis como si fueras a sentarte en una silla baja; las rodillas no deben sobrepasar excesivamente la línea de las puntas de los pies.",
        "Inhala y extiende los brazos hacia el cielo junto a las orejas, juntando palmas o manteniéndolas al ancho de hombros si hay tirantez escapular.",
        "Mantén el pecho abierto y el corazón proyectado hacia arriba sin arquear en exceso la columna lumbar.",
        "Sostén durante 5 respiraciones lentas buscando firmeza (Sthira) y mirada calma (Drishti)."
      ],
      errorComun: "Colapsar las rodillas hacia adentro (valgo dinámico) y descolgar el abdomen sobre los muslos perdiendo el tono de la faja central.",
      ajusteManual: "Sitúate detrás del alumno, coloca tus manos en las crestas ilíacas y aplica una suave tracción diagonal hacia abajo y hacia atrás, permitiendo que su columna se alargue con menor sobrecarga patelar.",
      variantesProps: [
        "Un bloque entre los muslos para evitar la separación o el colapso de las rodillas.",
        "Manos en Anjali Mudra al pecho para personas con pinzamiento subacromial o rigidez dorsal alta."
      ],
      contraindicaciones: "Lesiones activas de ligamentos cruzados (LCA/LCP), meniscopatías graves o artrosis femoropatelar severa.",
      consideracionTerapeutica: "Fortalecimiento de la musculatura estabilizadora de tobillos y rodillas; estimulación del retorno venoso.",
      guionVerbal: "Baja las caderas al suelo, eleva el pecho hacia las manos; transfiere el peso a los talones y encuentra serenidad en el fuego de tus piernas."
    },
    {
      id: "virabhadrasana-1",
      familia: "de pie",
      nivel: "Intermedio",
      drishti: "Angusthamadhye (Mirada a los pulgares)",
      sanscrito: "Virabhadrasana I",
      espanol: "Guerrero I",
      traduccionEtimologica: "Virabhadra = Héroe mítico emanado de la trenza de Shiva; Asana = Postura",
      esencia: "Asimetría en bipedestación con extensión de cadera posterior y cuadratura pélvica sagital.",
      musculosActivos: ["Psoas ilíaco y cuádriceps de la pierna anterior (isometría)", "Glúteo mayor y gemelos de la pierna posterior", "Dorsal ancho y trapecio inferior"],
      musculosElongados: ["Psoas ilíaco y recto femoral de la pierna posterior", "Gastrocnemio y sóleo posterior"],
      mecanicaArticular: "Pierna anterior: flexión de cadera y rodilla a 90°. Pierna posterior: extensión de cadera con rotación interna neutra y pie en el suelo a 45°.",
      alineacionPasoAPaso: [
        "Da un gran paso hacia atrás con el pie izquierdo (aproximadamente un metro y veinte centímetros).",
        "Apoya el talón izquierdo en el suelo rotando el pie hacia afuera unos 45°, manteniendo alineados ambos talones o con separación al ancho de caderas.",
        "Flexiona la rodilla derecha hasta que quede directamente sobre el tobillo (tibia vertical a 90°).",
        "Orienta las dos crestas ilíacas hacia el frente de la esterilla; no dejes que la cadera izquierda se abra hacia el lateral.",
        "Presiona con fuerza el borde externo del pie posterior contra el suelo manteniendo la pierna izquierda extendida e inmóvil.",
        "Inhala, eleva los brazos al cielo, abre el pecho y junta las palmas si los hombros lo permiten."
      ],
      errorComun: "Despegar el canto externo del pie posterior y permitir que la rodilla anterior colapse en valgo medial, forzando la zona lumbar al forzar las caderas al frente.",
      ajusteManual: "Colócate en la parte externa de la cadera adelantada; apoya tu cadera contra su fémur para estabilizarlo y con tus manos guía la cadera retrasada hacia adelante y la adelantada hacia atrás para cuadrar la pelvis.",
      variantesProps: [
        "Apoyar el talón trasero en la pared o elevarlo sobre una cuña/bloque si los gemelos o el tendón de Aquiles están acortados.",
        "Separar los pies al ancho de las caderas (en dos vías de
