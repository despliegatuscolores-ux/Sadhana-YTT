/**
 * DARSHANA DATABASE
 * Corpus analítico de Filosofía, Historia y Textos Clásicos del Yoga
 * Adaptado a estándares internacionales de formación docente (YTT 200h / 300h)
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
        descripcion: "Swami Vivekananda introduce el Raja Yoga en Occidente (Parlamento de las Religiones, Chicago, 1893). En el palacio de Mysore, T. Krishnamacharya fusiona el Hatha tradicional con la calistenia británica y la gimnasia indígena india, concibiendo el Vinyasa moderno y formando a las figuras que moldearon el siglo XX.",
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
          comentario: "La palabra 'Atha' (ahora) implica una maduración previa. No se llega al yoga por curiosidad superficial, sino tras haber experimentado la insatisfacción con las soluciones mundanas ordinarias.",
          aplicacionPractica: "Presencia absoluta al sentarse en el zafu o pisar la esterilla: dejar el pasado fuera del espacio de práctica."
        },
        {
          numero: "1.2",
          tema: "Definición del Yoga",
          sanscrito: "Yogas citta vrtti nirodhah",
          traduccionLiteral: "El Yoga es la cesación (nirodha) de las fluctuaciones (vrttis) del campo mental (citta).",
          comentario: "Citta engloba Manas (mente sensorial), Buddhi (intelecto discernidor) y Ahamkara (el sentido del yo/ego). El yoga no busca destruir la mente, sino calmar las olas de su superficie para ver el fondo transparente.",
          aplicacionPractica: "Observar las divagaciones durante una asana exigente sin identificarse con la fatiga o la frustración."
        },
        {
          numero: "1.3",
          tema: "El Estado de Realización",
          sanscrito: "Tada drastuh svarupe 'vasthanam",
          traduccionLiteral: "Entonces, el Observador (Purusha) descansa en su verdadera naturaleza esencial.",
          comentario: "Cuando el lago de la mente se aquieta, el testigo no se confunde con los reflejos del agua; reconoce su identidad inmutable más allá de pensamientos o roles sociales.",
          aplicacionPractica: "Savasana consciente: sentir la consciencia pura que permanece alerta mientras el cuerpo y los pensamientos descansan."
        },
        {
          numero: "1.12",
          tema: "Los Dos Pilares",
          sanscrito: "Abhyasa vairagyabhyam tan nirodhah",
          traduccionLiteral: "Esa calma mental se alcanza mediante la práctica constante (abhyasa) y el desapego (vairagya).",
          comentario: "Son las dos alas del pájaro del yoga. El esfuerzo disciplinado sin desapego produce rigidez y frustración; el desapego sin disciplina conduce a la apatía y a la falta de avance.",
          aplicacionPractica: "Practicar a diario con devoción sin obsesionarse por conseguir una postura avanzada o un resultado estético."
        },
        {
          numero: "1.33",
          tema: "Purificación de las Relaciones (Citta Prasadanam)",
          sanscrito: "Maitri karuna muditopeksanam sukha duhkha punya apunya visayanam bhavanatas cittaprasadanam",
          traduccionLiteral: "La mente se pacifica cultivando amistad hacia los felices, compasión hacia los afligidos, alegría hacia los virtuosos y ecuanimidad hacia los malvados.",
          comentario: "El método social de Patanjali para evitar perturbaciones mentales reactivas frente a la conducta ajena.",
          aplicacionPractica: "Respuesta pedagógica en el aula: gestionar alumnos difíciles desde la ecuanimidad y sin juicio."
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
          traduccionLiteral: "La autodisciplina ardiente (tapas), el autoestudio sagrado (svadhyaya) y la entrega a lo Supremo (ishvara pranidhana) constituyen el Kriya Yoga.",
          comentario: "La fórmula práctica preliminar de purificación para disolver los velos que nublan la claridad interior.",
          aplicacionPractica: "Sostener una postura desafiante (tapas), autoobservar los diálogos internos (svadhyaya) y soltar el control (ishvara pranidhana)."
        },
        {
          numero: "2.3",
          tema: "Los 5 Kleshas (Causas del Sufrimiento)",
          sanscrito: "Avidya asmita raga dvesa abhinivesah klesah",
          traduccionLiteral: "La ignorancia espiritual (avidya), el egocentrismo (asmita), el apego al placer (raga), la aversión al dolor (dvesa) y el miedo a la muerte (abhinivesha) son los 5 obstáculos.",
          comentario: "Avidya es la raíz de todos los demás: confundir lo efímero con lo eterno y el cuerpo con la consciencia testigo.",
          aplicacionPractica: "Detectar el miedo a caerse en Sirsasana como manifestación directa de abhinivesha."
        },
        {
          numero: "2.46",
          tema: "Definición Canónica de Asana",
          sanscrito: "Sthira sukham asanam",
          traduccionLiteral: "La postura debe poseer las cualidades de estabilidad firme (sthira) y comodidad gozosa (sukha).",
          comentario: "Patanjali define la postura no por su complejidad física externa, sino por la relación cualitativa del practicante con el cuerpo: equilibrio entre tono muscular y relajación visceral.",
          aplicacionPractica: "Ajustar una postura con soportes (bloques o mantas) cuando el esfuerzo impide una respiración serena y fluida."
        },
        {
          numero: "2.47",
          tema: "El Secreto del Asana",
          sanscrito: "Prayatna saithilyananta samapattibhyam",
          traduccionLiteral: "Se perfecciona mediante la relajación del esfuerzo excesivo y la meditación en lo infinito.",
          comentario: "El asana madura cuando la tensión innecesaria desaparece y la mente se funde con la inmensidad del espacio.",
          aplicacionPractica: "Relajar el entrecejo, la mandíbula y la garganta mientras se sostiene Virabhadrasana II con firmeza en las piernas."
        }
      ]
    },
    pada3: {
      nombre: "Vibhuti Pada (De los Poderes y la Maestría)",
      aforismos: [
        {
          numero: "3.1",
          tema: "Dharana (Concentración)",
          sanscrito: "Desabandhas cittasya dharana",
          traduccionLiteral: "Dharana es la fijación de la mente en un único punto focal o espacio delimitado.",
          comentario: "Enfocar la atención en el entrecejo (ajna), la punta de la nariz o el ritmo respiratorio, trayéndola de vuelta cada vez que se dispersa.",
          aplicacionPractica: "El uso consciente del Drishti en las asanas de equilibrio sobre un pie como Garudasana."
        },
        {
          numero: "3.2",
          tema: "Dhyana (Meditación Continua)",
          sanscrito: "Tatra pratyayaikatanata dhyanam",
          traduccionLiteral: "Allí, el flujo ininterrumpido de la percepción hacia ese objeto único es Dhyana.",
          comentario: "Si Dharana son gotas de agua cayendo una tras otra, Dhyana es el chorro continuo de aceite vertiéndose de una vasija a otra.",
          aplicacionPractica: "Sostener la atención en el pulso respiratorio durante 20 minutos sin necesidad de reconducir la mente de forma forzada."
        },
        {
          numero: "3.4",
          tema: "Samyama (La Integración Trina)",
          sanscrito: "Trayam ekatra samyamah",
          traduccionLiteral: "La práctica simultánea de Dharana, Dhyana y Samadhi sobre un mismo objeto se denomina Samyama.",
          comentario: "La herramienta suprema de cognición y penetración intuitiva del Raja Yoga.",
          aplicacionPractica: "Fundir la mente en la biomecánica y el flujo pránico de una asana hasta que desaparece la separación entre cuerpo y conciencia."
        }
      ]
    },
    pada4: {
      nombre: "Kaivalya Pada (De la Emancipación Absoluta)",
      aforismos: [
        {
          numero: "4.34",
          tema: "Kaivalya (Liberación Suprema)",
          sanscrito: "Purusartha sunyanam gunanam pratiprasavah kaivalyam svarupa pratistha va citi sakter iti",
          traduccionLiteral: "Kaivalya es el retorno de los Gunas a su origen primordial cuando ya no sirven a Purusha, y la Conciencia Pura descansa en su propia naturaleza eterna.",
          comentario: "El fin último del sistema: la desidentificación total de la consciencia respecto a la materia cósmica (Prakriti). La mente ha cumplido su función pedagógica y el testigo es eternamente libre.",
          aplicacionPractica: "Vivir el yoga fuera de la esterilla con ecuanimidad imperturbable frente a los vaivenes de la vida diaria."
        }
      ]
    }
  },

  ashtanga: [
    {
      naturaleza: "Ética Social (Relación con el Mundo)",
      nombreSanscrito: "Yamas (Restricciones Armónicas)",
      traduccion: "Los 5 Principios Éticos de Relación Externa",
      definicion: "Pautas de conducta para desactivar la violencia, el engaño y el acaparamiento en la convivencia con otros seres vivos.",
      subelementos: [
        { nombre: "Ahimsa", detalle: "No violencia ni daño en pensamiento, palabra o acto hacia ningún ser sintiente." },
        { nombre: "Satya", detalle: "Veracidad y autenticidad alineada con la bondad; la verdad que no daña gratuitamente." },
        { nombre: "Asteya", detalle: "No robar ni apropiarse de bienes, tiempo, ideas o méritos ajenos." },
        { nombre: "Brahmacharya", detalle: "Uso sabio y continencia de la energía vital y sexual hacia propósitos elevados." },
        { nombre: "Aparigraha", detalle: "Desapego y no codicia; no acumular posesiones materiales ni aferrarse a expectativas." }
      ]
    },
    {
      naturaleza: "Ética Personal (Relación con Uno Mismo)",
      nombreSanscrito: "Niyamas (Observancias Internas)",
      traduccion: "Los 5 Compromisos de Higiene Psicofísica",
      definicion: "Hábitos interiores que forjan el carácter, clarifican el intelecto y purifican el cuerpo del estudiante.",
      subelementos: [
        { nombre: "Saucha", detalle: "Pureza y limpieza física del cuerpo, entorno, alimentación y pensamientos." },
        { nombre: "Santosha", detalle: "Contentamiento profundo y aceptación incondicional del momento presente tal como es." },
        { nombre: "Tapas", detalle: "Fuego interior, autodisciplina transformadora y perseverancia ante la incomodidad." },
        { nombre: "Svadhyaya", detalle: "Estudio de los textos sagrados y autoobservación lúcida de la propia conducta." },
        { nombre: "Ishvara Pranidhana", detalle: "Humildad, devoción y entrega de los frutos de las acciones a la Conciencia Universal." }
      ]
    },
    {
      naturaleza: "El Recipiente Biológico",
      nombreSanscrito: "Asana (La Postura Cómoda y Firme)",
      traduccion: "Estabilización Corporal",
      definicion: "La consolidación de un vehículo físico firme y desprovisto de dolor para permitir horas de meditación sin distracciones.",
      subelementos: [
        { nombre: "Sthira", detalle: "Enraizamiento, estabilidad arquitectónica, tono muscular y presencia ósea." },
        { nombre: "Sukha", detalle: "Comodidad, relajación visceral, apertura respiratoria y ausencia de lucha." }
      ]
    },
    {
      naturaleza: "El Puente Pránico",
      nombreSanscrito: "Pranayama (Expansión de la Energía Vital)",
      traduccion: "Regulación Respiratoria",
      definicion: "Control de las 4 fases de la respiración: inhalación (Puraka), retención con aire (Antara Kumbhaka), exhalación (Rechaka) y retención en vacío (Bahya Kumbhaka).",
      subelementos: [
        { nombre: "Puraka / Rechaka", detalle: "Equilibrio rítmico entre la toma de aire y la desintoxicación celular." },
        { nombre: "Kumbhaka", detalle: "Suspensión de la respiración para pausar las ondas de pensamiento y entrar en quietud." }
      ]
    },
    {
      naturaleza: "Retiro Sensorial",
      nombreSanscrito: "Pratyahara (Emancipación de los Sentidos)",
      traduccion: "Introspección Sensorial",
      definicion: "Retraer la atención de los estímulos externos como la tortuga mete sus extremidades dentro del caparazón, cortando la reactividad al entorno.",
      subelementos: [
        { nombre: "Desconexión Externa", detalle: "Los ojos, oídos y tacto dejan de enviar alarmas al cerebro reflexivo." },
        { nombre: "Centrado Interno", detalle: "La energía de la percepción se dirige al universo interior de la respiración." }
      ]
    },
    {
      naturaleza: "Enfoque Mental Monopuntual",
      nombreSanscrito: "Dharana (Concentración)",
      traduccion: "Fijación de la Atención",
      definicion: "Anclar la consciencia en un único punto físico o conceptual sin permitir que divague hacia estímulos secundarios.",
      subelementos: [
        { nombre: "Puntos Clásicos", detalle: "La llama de una vela (Trataka), la punta de la nariz o el loto del corazón." },
        { nombre: "Esfuerzo Reeducativo", detalle: "Devolver la mente cada vez que se distrae, con paciencia y sin recriminación." }
      ]
    },
    {
      naturaleza: "Absorción Meditativa Continua",
      nombreSanscrito: "Dhyana (Meditación)",
      traduccion: "Flujo de Consciencia Sostenido",
      definicion: "El estado en que la concentración deja de requerir esfuerzo constante y se convierte en un río ininterrumpido de atención pura.",
      subelementos: [
        { nombre: "Fluidez Perceptiva", detalle: "Disolución del esfuerzo activo; la observación ocurre de manera espontánea." }
      ]
    },
    {
      naturaleza: "Trascendencia y Unidad",
      nombreSanscrito: "Samadhi (Integración Trascendental)",
      traduccion: "Liberación de la Ilusión de Separación",
      definicion: "El sujeto que observa, el objeto observado y el acto de observar se unifican por completo en una sola realidad lúcida.",
      subelementos: [
        { nombre: "Samprajnata", detalle: "Samadhi con soporte cognitivo (se mantiene una semilla de objeto)." },
        { nombre: "Asamprajnata", detalle: "Absorción sin soporte ni semilla (disolución total en el Purusha eterno)." }
      ]
    }
  ],

  bhagavadGita: {
    senderos: [
      {
        nombre: "Karma Yoga (El Yoga de la Acción Desinteresada)",
        sanscrito: "कर्म योग",
        definicion: "Cumplir con el propio deber vital (Svadharma) con impecabilidad y entrega absoluta, renunciando por completo al apego por los frutos, el éxito o el fracaso.",
        versoClave: "Karmanye vadhikaraste ma phaleshu kadachana — Tienes derecho al trabajo, pero nunca a los frutos de tus acciones. (Gita 2.47)",
        aplicacion: "Dar una clase de yoga entregando lo mejor sin condicionar la paz interior al número de alumnos o a sus halagos."
      },
      {
        nombre: "Jnana Yoga (El Yoga del Discernimiento Intelectual)",
        sanscrito: "ज्ञान योग",
        definicion: "El camino del filo de la navaja: indagar mediante el discernimiento lúcido (Viveka) qué es transitorio y perecedero (Prakriti) y qué es la conciencia inmortal que observa (Atman).",
        versoClave: "Na jayate mriyate va kadacin — El alma nunca nace ni muere; no fue creada en el pasado ni dejará de existir en el futuro. (Gita 2.20)",
        aplicacion: "Desidentificarse durante la práctica del cuerpo físico que envejece y reconocer la presencia inmutable que lo habita."
      },
      {
        nombre: "Bhakti Yoga (El Yoga de la Devoción y el Amor Supremo)",
        sanscrito: "भक्ति योग",
        definicion: "La canalización de toda la energía emocional hacia la Divinidad mediante el canto, la entrega personal, la veneración amorosa y la plegaria sincera.",
        versoClave: "Patram puspam phalam toyam yo me bhaktya prayacchati — Si alguien me ofrece con devoción una hoja, una flor, una fruta o un sorbo de agua, yo lo acepto con amor. (Gita 9.26)",
        aplicacion: "Transformar la práctica de asanas en una ofrenda sagrada de gratitud por la vida y por la salud recibida."
      },
      {
        nombre: "Raja / Dhyana Yoga (El Yoga de la Meditación)",
        sanscrito: "ध्यान योग",
        definicion: "El dominio metódico de la respiración, los sentidos y la postura física para sumergir la mente en la calma absoluta del silencio interior.",
        versoClave: "Yatha dipo nivatastho nengate sopama smrta — Como una lámpara cuya llama no oscila en un lugar sin viento, así permanece la mente disciplinada del yogui. (Gita 6.19)",
        aplicacion: "El entrenamiento formal de la atención fija en la respiración al final de la sesión de asanas."
      }
    ]
  },

  hathaTradicional: {
    textos: [
      {
        titulo: "Hatha Yoga Pradipika",
        autor: "Swami Svatmarama (Linaje Nath)",
        siglo: "Siglo XV d.C.",
        resumen: "El manual clásico fundamental del Hatha Yoga. Svatmarama declara que el Hatha es la escalera que conduce al Raja Yoga de Patanjali. Describe 15 asanas principales (la mayoría sentadas, más Mayurasana y Dhanurasana), pranayamas con retención (Kumbhaka), los 10 mudras supremos para despertar Kundalini y el fenómeno del sonido místico interior (Nada Anusandhana).",
        capitulos: [
          "Capítulo 1: Asanas (posturas estables, alimentación mitahara y el lugar propicio)",
          "Capítulo 2: Shatkarmas (las 6 purificaciones) y Pranayama con Kumbhaka",
          "Capítulo 3: Mudras, Bandhas y el despertar de Kundalini",
          "Capítulo 4: Samadhi y la escucha del sonido místico interno (Nada)"
        ]
      },
      {
        titulo: "Gheranda Samhita",
        autor: "Sabio Gheranda (Diálogo con Chanda Kapali)",
        siglo: "Siglo XVII d.C.",
        resumen: "Enseña el Saptanga Yoga (el yoga de los 7 miembros), comparando el cuerpo con una vasija de arcilla cruda que debe cocerse al fuego del yoga para no deshacerse en el agua del sufrimiento.",
        capitulos: [
          "1. Shatkarma (purificación)",
          "2. Asana (fortalecimiento del contenedor)",
          "3. Mudra (firmeza energética)",
          "4. Pratyahara (calma de los sentidos)",
          "5. Pranayama (ligereza)",
          "6. Dhyana (percepción directa)",
          "7. Samadhi (liberación e indiferenciación)"
        ]
      },
      {
        titulo: "Shiva Samhita",
        autor: "Autor anónimo tántrico",
        siglo: "Siglo XIV – XV d.C.",
        resumen: "Tratado profundo estructurado como una revelación directa del dios Shiva a su consorte Parvati. Integra la visión filosófica no-dualista (Advaita Vedanta) con la anatomía sutil tántrica: describe 350.000 nadis, los centros energéticos (chakras) y los 5 aires vitales principales (vayus).",
        capitulos: [
          "Estructura del macrocosmos y microcosmos corporal",
          "Los 10 Vayus principales y secundarios",
          "Pranayama y control tántrico del prana",
          "Meditación en los chakras y trascendencia de la muerte"
        ]
      }
    ]
  },

  panteon: {
    deidades: [
      {
        nombre: "Shiva (Nataraja / Mahadeva)",
        rol: "El Destructor de la Ilusión y Primer Yogui (Adiyogi)",
        consorteOAtributo: "Parvati • Tridente (Trishula), Tambor (Damaru) y Luna Creciente",
        simbolismoPsicologico: "La Conciencia Pura Trascendente que no cambia jamás frente al caos del mundo. Shiva danza para destruir la ignorancia (avidya) y