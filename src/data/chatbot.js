export const chatbotWelcome = '¡Hola! 👋 Soy el asistente virtual de Fons Bonitatis Foundation. ¿En qué te puedo ayudar?';

export const chatbotMenu = [
  {
    id: 'hospital',
    label: '🏥 Sobre el hospital',
    answer: 'El Sistema de Salud Madre Rafols es nuestro hospital en Maracaibo, Venezuela. Ofrecemos consultas, cirugías, hospitalización y atención materno-infantil gratuita o a bajo costo para familias sin recursos, además de jornadas médicas itinerantes por todo el estado Zulia.',
    links: [
      { label: 'Conoce nuestro trabajo', href: '/trabajo' },
      { label: 'Sobre la fundación', href: '/fundacion' }
    ]
  },
  {
    id: 'aliados',
    label: '🤝 Nuestros aliados',
    answer: 'Trabajamos junto a Cáritas Venezuela, la Fundación Cambiando Vidas, la Universidad del Zulia, las Hermanas de la Caridad de Santa Ana, The Papal Foundation y la Unión Europea, entre otras organizaciones que hacen posible cada proyecto.',
    links: [
      { label: 'Ver proyectos aprobados', href: '/proyectos' }
    ]
  },
  {
    id: 'donar',
    label: '💜 ¿Cómo puedo donar?',
    answer: 'Puedes donar vía Zelle a nombre de "Fons Bonitatis Foundation, Corp." al correo fonsbonitatisfund@gmail.com. También puedes escribirnos para conocer otras formas de aportar (transferencia, en persona, etc.). Cada donación se destina directamente a cirugías, tratamientos y jornadas médicas.',
    links: [
      { label: 'Contáctanos para más opciones', href: '/contactos' }
    ]
  },
  {
    id: 'contacto',
    label: '📞 Contacto',
    answer: 'Puedes escribirnos a contacto@fonsbonitatis.org o llamarnos al +1 (208) 991-0930. Nuestra sede está en Avenida Francisco de Miranda, Circunvalación 2, Maracaibo, Estado Zulia, Venezuela.',
    links: [
      { label: 'Ver página de contacto', href: '/contactos' }
    ]
  },
  {
    id: 'historias',
    label: '📖 Historias de impacto',
    answer: 'Cada semana atendemos jornadas médicas, cirugías y alianzas que transforman vidas en comunidades vulnerables e indígenas del Zulia. Tenemos decenas de historias reales documentadas con fotos y videos.',
    links: [
      { label: 'Ver todas las historias', href: '/historias' }
    ]
  },
  {
    id: 'proyectos',
    label: '📋 Proyectos aprobados',
    answer: 'Contamos con proyectos respaldados por aliados institucionales: la bendición de nuestra Unidad de Infusión Oncológica, la visita de la Embajada de Alemania, la inauguración de nuestra Unidad de Cuidados Intensivos, y un proyecto apoyado por la Unión Europea.',
    links: [
      { label: 'Ver proyectos completos', href: '/proyectos' }
    ]
  },
  {
    id: 'programas',
    label: '🚑 Nuestros programas',
    answer: 'Nuestro programa insignia es "Madre Rafols va a tu Parroquia": equipos médicos multidisciplinarios que visitan parroquias y comunidades de todo el Zulia llevando consultas, vacunación, medicamentos y cirugías gratis a quienes no pueden trasladarse hasta el hospital.',
    links: [
      { label: 'Conoce nuestro trabajo', href: '/trabajo' }
    ]
  }
];
