// Contenido centralizado de la landing. Editar copy aquí sin tocar los componentes.

export const site = {
  name: "Nexora Systems",
  tagline: "Tecnología que impulsa tu futuro",
  whatsappNumber: "527331534406",
  whatsappMessage:
    "Hola, quiero reservar mi diagnóstico gratuito de automatización con Nexora Systems.",
};

export const nav = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Casos de uso", href: "#casos-de-uso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
];

export const hero = {
  eyebrow: "Software + Inteligencia Artificial para PyMEs",
  title: "Haz que tu negocio venda más sin contratar más personal",
  highlight: "sin contratar más personal",
  subtitle:
    "Implementamos sistemas de punto de venta, inventarios y automatización con IA para que dejes atrás las tareas manuales y tomes decisiones con información real.",
  ctaPrimary: "Reserva una llamada",
  ctaSecondary: "Ver cómo funciona",
  note: "Diagnóstico gratuito · Sin compromiso · 30 minutos",
};

export const metrics = [
  { value: "+35%", label: "más rapidez en el seguimiento a clientes" },
  { value: "-60%", label: "de tareas manuales operativas" },
  { value: "24/7", label: "captación y atención automatizada" },
  { value: "100%", label: "visibilidad de inventario y ventas" },
];

export const problems = [
  {
    title: "Pierdes ventas por responder tarde",
    description:
      "Los leads se enfrían mientras alguien del equipo tiene tiempo de contestar. Cada hora de retraso cuesta clientes.",
  },
  {
    title: "El seguimiento comercial depende de la memoria",
    description:
      "Sin un sistema central, las oportunidades se pierden en chats, notas y hojas de cálculo dispersas.",
  },
  {
    title: "Tu equipo repite las mismas tareas todos los días",
    description:
      "Cotizar, agendar, recordar pagos y clasificar clientes consume horas que deberían ir a vender y atender.",
  },
  {
    title: "No tienes visibilidad real del negocio",
    description:
      "Decides con intuición porque tus ventas, inventario y clientes no están conectados en un solo lugar.",
  },
];

export const benefits = [
  {
    title: "Menos tareas manuales",
    description:
      "Automatizamos procesos repetitivos de ventas, inventario y atención para liberar horas de tu equipo cada semana.",
  },
  {
    title: "Respuesta más rápida a tus clientes",
    description:
      "Atención y calificación automática de leads en minutos, no en días, sin importar la hora.",
  },
  {
    title: "Mejor seguimiento comercial",
    description:
      "Cada cliente y oportunidad queda registrado y con seguimiento automático, sin depender de notas sueltas.",
  },
  {
    title: "Herramientas conectadas entre sí",
    description:
      "Integramos tu CRM, punto de venta e inventario para que la información fluya sola.",
  },
  {
    title: "Más eficiencia sin crecer la nómina",
    description:
      "Escala tus operaciones y atiende más clientes sin necesidad de contratar más personal.",
  },
  {
    title: "Decisiones con datos reales",
    description:
      "Reportes y analíticas claras para saber qué está funcionando y dónde están tus oportunidades.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Diagnóstico gratuito",
    description:
      "Analizamos tus procesos actuales y detectamos cuellos de botella, tareas repetitivas y oportunidades de automatización con IA.",
  },
  {
    number: "02",
    title: "Diseño de la solución",
    description:
      "Definimos contigo el sistema y las automatizaciones a la medida: POS, inventarios, CRM o IA aplicada a tu operación.",
  },
  {
    number: "03",
    title: "Implementación y acompañamiento",
    description:
      "Desarrollamos, integramos y ponemos en marcha la solución, con soporte cercano para que tu equipo la adopte sin fricción.",
  },
];

export const projects = [
  {
    id: "punto-de-venta",
    name: "Punto de Venta",
    category: "Comercio y retail",
    tagline: "Cobra rápido, controla tu inventario y conoce tus números al instante.",
    description:
      "Un sistema de punto de venta completo para tiendas, abarrotes y comercios: ventas, cortes de caja, inventario y reportes en una sola pantalla, sin hojas de cálculo ni libretas.",
    features: [
      "Ventas rápidas con lector de código de barras",
      "Control de inventario con alertas de stock bajo",
      "Cortes de caja y control por usuario",
      "Reportes de ventas por día, producto y vendedor",
    ],
    benefits: [
      "Sabes exactamente cuánto vendes y cuánto ganas, todos los días",
      "Se acaban los faltantes de caja y la mercancía que “desaparece”",
      "Compras con datos: reabasteces lo que sí se vende",
    ],
    highlight: "Tu negocio, en números claros desde el primer día.",
    idealFor: "Abarrotes, papelerías, ferreterías, boutiques y cualquier comercio con mostrador.",
  },
  {
    id: "hotel",
    name: "Gestión Hotelera",
    category: "Hospedaje",
    tagline: "Reservaciones, habitaciones y huéspedes bajo control, sin dobles reservas.",
    description:
      "Plataforma para hoteles, posadas y casas de huéspedes que centraliza reservaciones, disponibilidad de habitaciones, check-in, check-out y cobros.",
    features: [
      "Calendario de disponibilidad por habitación",
      "Registro de huéspedes, check-in y check-out",
      "Control de estados: libre, ocupada, en limpieza",
      "Reportes de ocupación e ingresos",
    ],
    benefits: [
      "Cero sobreventas ni reservaciones perdidas",
      "Tu recepción atiende más rápido y con menos errores",
      "Ves tu ocupación real y planeas temporadas con datos",
    ],
    highlight: "Más huéspedes felices, menos caos en recepción.",
    idealFor: "Hoteles boutique, posadas, moteles y casas de huéspedes.",
  },
  {
    id: "citas",
    name: "Sistema de Citas",
    category: "Servicios profesionales",
    tagline: "Agenda llena, menos ausencias y clientes que reservan solos.",
    description:
      "Agenda en línea para consultorios, estéticas, barberías y despachos: tus clientes eligen fecha y hora, y el sistema se encarga de confirmar y recordar.",
    features: [
      "Reservación en línea 24/7",
      "Recordatorios automáticos de cita",
      "Agenda por profesional o por servicio",
      "Historial de clientes y servicios",
    ],
    benefits: [
      "Menos citas olvidadas gracias a los recordatorios",
      "Dejas de perder tiempo agendando por mensajes",
      "Tu agenda se llena incluso mientras duermes",
    ],
    highlight: "Tu agenda trabaja por ti, a cualquier hora.",
    idealFor: "Consultorios, estéticas, barberías, spas, despachos y talleres.",
  },
  {
    id: "taxis",
    name: "Gestión de Taxis",
    category: "Transporte",
    tagline: "Viajes, unidades y choferes organizados desde un solo panel.",
    description:
      "Sistema para sitios y flotillas de taxis que organiza solicitudes de viaje, asignación de unidades, choferes y cobros, con visibilidad de toda la operación.",
    features: [
      "Registro y asignación de viajes",
      "Control de unidades y choferes",
      "Historial de servicios y cobros",
      "Reportes de ingresos por unidad y chofer",
    ],
    benefits: [
      "Asignas viajes más rápido y atiendes más clientes",
      "Cuentas claras con cada chofer, sin discusiones",
      "Sabes qué unidad produce y cuál te cuesta",
    ],
    highlight: "Tu flotilla organizada, tus cuentas siempre claras.",
    idealFor: "Sitios de taxis, flotillas, transporte ejecutivo y servicios de traslado.",
  },
  {
    id: "restaurantes",
    name: "Restaurantes",
    category: "Alimentos y bebidas",
    tagline: "Comandas, mesas y cocina sincronizadas para servir más rápido.",
    description:
      "Sistema para restaurantes, cafeterías y fondas que conecta meseros, cocina y caja: toma de comandas, control de mesas, cuentas e inventario de insumos.",
    features: [
      "Toma de comandas por mesa",
      "Comandas directas a cocina",
      "División de cuentas y cobro ágil",
      "Control de insumos y platillos más vendidos",
    ],
    benefits: [
      "Menos errores en pedidos y menos platillos regresados",
      "Rotas mesas más rápido en horas pico",
      "Sabes qué platillos te dejan más ganancia",
    ],
    highlight: "Del pedido a la mesa, sin errores ni esperas.",
    idealFor: "Restaurantes, cafeterías, fondas, bares y food trucks.",
  },
  {
    id: "gym",
    name: "Gestión de Gimnasios",
    category: "Fitness y bienestar",
    tagline: "Membresías, accesos y pagos al día, sin perseguir a nadie.",
    description:
      "Plataforma para gimnasios y estudios fitness que administra socios, membresías, vencimientos, pagos y asistencias.",
    features: [
      "Alta de socios y planes de membresía",
      "Control de vencimientos y renovaciones",
      "Registro de pagos y asistencias",
      "Reportes de socios activos e ingresos",
    ],
    benefits: [
      "Nadie entrena con la membresía vencida",
      "Detectas a tiempo a los socios que dejan de venir",
      "Ingresos más estables con renovaciones bajo control",
    ],
    highlight: "Más socios activos, menos cobranza manual.",
    idealFor: "Gimnasios, boxes de crossfit, estudios de yoga, pilates y artes marciales.",
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    category: "Tienda en línea",
    tagline: "Tu tienda abierta 24/7, vendiendo en todo México.",
    description:
      "Tienda en línea a la medida para cualquier giro: catálogo con búsqueda, carrito de compras, pagos y gestión de pedidos, conectada a tu inventario.",
    features: [
      "Catálogo con búsqueda y categorías",
      "Carrito de compras y pagos en línea",
      "Gestión de pedidos y envíos",
      "Inventario conectado a tu operación",
    ],
    benefits: [
      "Vendes a clientes fuera de tu ciudad",
      "Tu tienda sigue vendiendo cuando cierras la cortina",
      "Un solo inventario para tienda física y en línea",
    ],
    highlight: "Tus productos, al alcance de un clic.",
    idealFor: "Tiendas de ropa, librerías, refacciones, regalos, productos artesanales y cualquier negocio que quiera vender en línea.",
  },
];

export const useCases = [
  {
    title: "Captación automática de leads",
    description: "Formularios, anuncios y landing pages conectados directo a tu sistema comercial.",
  },
  {
    title: "Seguimiento por email o WhatsApp",
    description: "Secuencias automáticas que mantienen viva la conversación con cada prospecto.",
  },
  {
    title: "Agendado automático de reuniones",
    description: "Tus clientes reservan llamadas o citas sin ida y vuelta de mensajes.",
  },
  {
    title: "Clasificación de leads con IA",
    description: "Prioriza automáticamente a los prospectos con mayor probabilidad de compra.",
  },
  {
    title: "Atención al cliente automatizada",
    description: "Respuestas inmediatas a preguntas frecuentes, disponibles a toda hora.",
  },
  {
    title: "Presupuestos y recordatorios automáticos",
    description: "Cotizaciones, pagos y recordatorios que se envían solos, en el momento correcto.",
  },
  {
    title: "Sincronización entre CRM y herramientas internas",
    description: "Tu inventario y ventas siempre alineados, sin captura duplicada.",
  },
  {
    title: "Reportes y analítica de negocio",
    description: "Visualiza ventas, productos e indicadores clave en tiempo real desde un solo panel.",
  },
];

export const testimonials = [
  {
    quote:
      "Dejamos de perder clientes por tardar en responder. Ahora el seguimiento pasa solo y el equipo se enfoca en cerrar ventas.",
    name: "Dueña de negocio de retail",
    role: "Cliente Nexora Systems",
  },
  {
    quote:
      "Automatizamos cotizaciones y recordatorios que antes hacíamos a mano. Ahorramos horas cada semana sin contratar a nadie más.",
    name: "Director de agencia de servicios",
    role: "Cliente Nexora Systems",
  },
  {
    quote:
      "Con el punto de venta y los reportes conectados por fin sabemos qué está vendiendo bien y dónde estamos perdiendo dinero.",
    name: "Propietario de negocio de consumo",
    role: "Cliente Nexora Systems",
  },
];

export const faqs = [
  {
    question: "¿Necesito conocimientos técnicos para trabajar con Nexora Systems?",
    answer:
      "No. Nos encargamos del desarrollo, la integración y la puesta en marcha. Tu equipo solo necesita usar las herramientas ya implementadas, con acompañamiento incluido.",
  },
  {
    question: "¿En cuánto tiempo veo resultados?",
    answer:
      "Depende del alcance del proyecto, pero la mayoría de nuestros clientes empiezan a ahorrar tiempo operativo desde las primeras semanas de implementación.",
  },
  {
    question: "¿Qué incluye el diagnóstico gratuito?",
    answer:
      "Una llamada de 30 minutos donde revisamos tus procesos actuales, identificamos cuellos de botella y te mostramos oportunidades concretas de automatización con IA.",
  },
  {
    question: "¿Trabajan con cualquier tipo de negocio?",
    answer:
      "Sí. Diseñamos soluciones a la medida para pequeñas y medianas empresas, agencias, consultores e infoproductores con procesos de venta, inventario o atención al cliente.",
  },
  {
    question: "¿Qué pasa después de la implementación?",
    answer:
      "Ofrecemos soporte cercano y continuo para resolver dudas, ajustar procesos y acompañar el crecimiento de tu negocio.",
  },
];

export const mission =
  "En Nexora Systems nuestra misión es impulsar el crecimiento de las empresas mediante soluciones tecnológicas innovadoras, desarrollando software confiable, seguro y a la medida que optimice sus procesos, facilite la toma de decisiones y contribuya al éxito de cada uno de nuestros clientes, ofreciendo siempre un servicio cercano, profesional y de calidad.";

export const vision =
  "En Nexora Systems nuestra visión es convertirnos en un referente en innovación tecnológica, siendo el aliado estratégico de empresas que buscan transformar sus procesos mediante soluciones de software inteligentes, seguras y escalables. Aspiramos a impulsar la digitalización y el crecimiento sostenible de nuestros clientes, expandiendo nuestra presencia y generando un impacto positivo en México y Latinoamérica.";

export const footerServices = [
  "Punto de venta",
  "Gestión hotelera",
  "Sistema de citas",
  "Gestión de taxis",
  "Restaurantes",
  "Gimnasios",
  "E-commerce",
  "Desarrollo a la medida",
];
