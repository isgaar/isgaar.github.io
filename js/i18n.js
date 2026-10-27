/* ===========================================================================
   I18N SERVICE
   Chooses English from the browser preferences; Spanish remains the fallback.
   =========================================================================== */

(function () {
  'use strict';

  var browserLanguages = navigator.languages || [navigator.language || 'es'];
  var language = String(browserLanguages[0] || 'es').toLowerCase().indexOf('en') === 0 ? 'en' : 'es';

  var translations = {
    'Navegación principal': 'Main navigation',
    'Portafolio de Ingeniería de Software': 'Software Engineering Portfolio',
    'Proyectos': 'Projects',
    'Trayectoria': 'Experience',
    'Contacto': 'Contact',
    'Cambiar tema': 'Change theme',
    'Tema': 'Theme',
    'Claro': 'Light',
    'Oscuro': 'Dark',
    'Linux diario desde 2022 · Backend e IA aplicada': 'Daily Linux user since 2022 · Backend and applied AI',
    'Ingeniero en Desarrollo y Gestión de Software': 'Software Development and Management Engineer',
    'Plataformas backend con': 'Backend platforms with',
    ', desplegadas y mantenidas en': ', deployed and maintained on',
    'Plataformas backend con Spring Boot y Laravel, desplegadas y mantenidas en Unix/Linux.': 'Backend platforms with Spring Boot and Laravel, deployed and maintained on Unix/Linux.',
    'Trabajo el ciclo de vida del software, desde la arquitectura de servicios y contenedores hasta la integración de modelos de IA para automatizar procesos y apoyar la operación.': 'I work across the software lifecycle, from service and container architecture to integrating AI models that automate processes and support operations.',
    'Ver proyectos': 'View projects',
    'Contactar': 'Get in touch',
    'Perfil técnico en terminal': 'Technical profile in terminal',
    'Ubicación': 'Location',
    'Correo': 'Email',
    'Herramientas de IA': 'AI tools',
    'Formación': 'Education',
    'Idiomas': 'Languages',
    'México': 'Mexico',
    'Ingeniería en Desarrollo y Gestión de Software — UTCV, 2026': 'Software Development and Management Engineering — UTCV, 2026',
    'TSU en TI, Desarrollo de Software Multiplataforma — UTCV, 2023': 'Associate Degree in IT, Cross-platform Software Development — UTCV, 2023',
    'Inglés B1 · Ruso A1': 'English B1 · Russian A1',
    'Stack': 'Stack',
    'Proyectos destacados': 'Featured projects',
    'Proyecto 01': 'Project 01',
    'Enero — abril 2026': 'January — April 2026',
    'Sistema de Seguimiento y Atención Psicopedagógica': 'Psychoeducational Support and Follow-up System',
    'Desarrollo': 'Development',
    'Lideré el desarrollo de una plataforma segura para el seguimiento y atención psicopedagógica, con Java y Spring Boot en el backend y React en el frontend.': 'I led the development of a secure platform for psychoeducational follow-up and support, using Java and Spring Boot on the backend and React on the frontend.',
    'Arquitectura': 'Architecture',
    'La solución se organizó como microservicios en contenedores Docker y Podman, con pods aislados sobre GNU/Linux para proteger datos sensibles.': 'The solution was organized as microservices in Docker and Podman containers, with isolated pods on GNU/Linux to protect sensitive data.',
    'IA aplicada': 'Applied AI',
    'Integré un módulo para analizar patrones de atención con modelos locales DeepSeek-R1 y Qwen, ejecutados mediante Ollama.': 'I integrated a module to analyze care patterns with local DeepSeek-R1 and Qwen models run through Ollama.',
    'Visualizar demo': 'View demo',
    'S.S.A.P. · Sistema de Atención Psicopedagógica CONALEP': 'S.S.A.P. · CONALEP Psychoeducational Support System',
    'Capturas del proyecto S.S.A.P.': 'S.S.A.P. project screenshots',
    'Ampliar captura': 'Expand screenshot',
    'Proyecto 02': 'Project 02',
    'Mayo — septiembre 2026': 'May — September 2026',
    'Traducción, maquetación EPUB y publicación multicanal': 'Translation, EPUB layout and multi-channel publishing',
    'Ecosistema': 'Ecosystem',
    'Desarrollé un ecosistema multiplataforma en Python y Bash para traducción literaria asistida por IA, maquetación EPUB y publicación multicanal.': 'I developed a cross-platform Python and Bash ecosystem for AI-assisted literary translation, EPUB layout and multi-channel publishing.',
    'Automatización': 'Automation',
    'Implementé una arquitectura web Zero-API Cost con Playwright para procesar texto mediante sesiones automatizadas.': 'I implemented a Zero-API Cost web architecture with Playwright to process text through automated sessions.',
    'Control de calidad': 'Quality assurance',
    'Creé una auditoría de ocho fases con LanguageTool local y automatizaciones para la distribución comercial y validación legal de derechos de autor.': 'I created an eight-phase audit with local LanguageTool and automations for commercial distribution and legal copyright validation.',
    'Video y capturas de PipelineBooks': 'PipelineBooks video and screenshots',
    'Ampliar material': 'Expand media',
    'Proyecto 03': 'Project 03',
    'Diciembre 2024 — diciembre 2025': 'December 2024 — December 2025',
    'Plataforma educativa de visualización molecular': 'Educational molecular visualization platform',
    'Backend': 'Backend',
    'Desarrollé el backend de una plataforma educativa mediante una API en Laravel, sincronizada en tiempo real con Unity 3D.': 'I developed the backend for an educational platform through a Laravel API, synchronized in real time with Unity 3D.',
    'Procesamiento': 'Processing',
    'Implementé algoritmos de procesamiento y parseo de archivos .pdb para visualizar y manipular estructuras moleculares complejas.': 'I implemented processing and parsing algorithms for .pdb files to visualize and manipulate complex molecular structures.',
    'Interacción': 'Interaction',
    'Integré sensores Leap Motion para habilitar controles gestuales inmersivos en la experiencia de educación científica.': 'I integrated Leap Motion sensors to enable immersive gesture controls in the science education experience.',
    'Ver PDF académico': 'View academic PDF',
    'Capturas de Átomos Virtuales': 'Átomos Virtuales screenshots',
    'Proyecto 04': 'Project 04',
    'Abril — agosto 2023': 'April — August 2023',
    'Gestión administrativa y operativa': 'Administrative and operational management',
    'Desarrollé una aplicación web para la gestión administrativa y operativa con Laravel y MySQL.': 'I developed a web application for administrative and operational management with Laravel and MySQL.',
    'Operación': 'Operations',
    'Diseñé operaciones CRUD para el control de inventarios, pedidos y servicios automotrices.': 'I designed CRUD operations for inventory, order and automotive-service management.',
    'Resultado': 'Outcome',
    'La digitalización redujo en 30% los tiempos de respuesta administrativa.': 'Digitalization reduced administrative response times by 30%.',
    'Capturas de Frangy Control': 'Frangy Control screenshots',
    'Frangy Control · Sistema administrativo': 'Frangy Control · Administrative system',
    'Proyectos personales y herramientas': 'Personal projects and tools',
    'Herramienta GNU/Linux': 'GNU/Linux tool',
    'Script de automatización para preparar una instalación de KDE Plasma en Void Linux: paquetes esenciales, ajustes de energía y configuración inicial del entorno.': 'Automation script to prepare a KDE Plasma installation on Void Linux: essential packages, power settings and initial environment configuration.',
    'Ver repositorio': 'View repository',
    'Tu navegador no admite video HTML5.': 'Your browser does not support HTML5 video.',
    'Suite de scripts para ajustes de sistema, compatibilidad de mandos en Wine/Proton y configuración de audio con PipeWire y WirePlumber en entornos Fedora y Gentoo.': 'Script suite for system tuning, controller compatibility in Wine/Proton, and PipeWire and WirePlumber audio configuration on Fedora and Gentoo.',
    'Capturas de linux-tools': 'linux-tools screenshots',
    'Streaming en red local': 'Local network streaming',
    'Servicio de streaming musical para red local (LAN). Un servidor en FastAPI indexa la biblioteca y transmite audio sin pérdida a clientes nativos: app Android en Kotlin con motor DSP en Rust, cliente de escritorio en Qt6 con núcleo en Rust y consola web de administración.': 'Music streaming service for local networks (LAN). A FastAPI server indexes the library and streams lossless audio to native clients: a Kotlin Android app with a Rust DSP engine, a Qt6 desktop client with a Rust core, and a web admin console.',
    'Capturas de Dopamina': 'Dopamina screenshots',
    'Prototipo 3D': '3D prototype',
    'Visor interactivo de archivos PDB con representaciones de estructuras moleculares. Funcionó como prueba de concepto para Átomos Virtuales.': 'Interactive PDB file viewer with molecular structure representations. It served as a proof of concept for Átomos Virtuales.',
    'Simulador Molecular 3D · Visor y parser PDB': '3D Molecular Simulator · PDB viewer and parser',
    'En desarrollo': 'In development',
    'Core para multiservicios actualmente en desarrollo.': 'Core for multiservices currently in development.',
    'Trayectoria': 'Experience',
    'Mayo — septiembre': 'May — September',
    'Desarrollador de Software · Orizaba / Remoto': 'Software Developer · Orizaba / Remote',
    'Ecosistema de traducción literaria asistida, maquetación EPUB y publicación multicanal.': 'Ecosystem for assisted literary translation, EPUB layout and multi-channel publishing.',
    'Ver proyecto ↑': 'View project ↑',
    'Enero — abril': 'January — April',
    'Desarrollador de Software · Orizaba': 'Software Developer · Orizaba',
    'Desarrollo de la plataforma S.S.A.P. con Spring Boot, React, contenedores e IA local.': 'Development of the S.S.A.P. platform with Spring Boot, React, containers and local AI.',
    'Septiembre — diciembre': 'September — December',
    'Mantenimiento a equipos · Orizaba': 'Computer maintenance · Orizaba',
    'Mantenimiento preventivo y correctivo, recuperación de datos y administración segura de sistemas de archivos en GNU/Linux.': 'Preventive and corrective maintenance, data recovery and secure GNU/Linux file-system administration.',
    'Ingeniería en Desarrollo y Gestión de Software': 'Software Development and Management Engineering',
    'Universidad Tecnológica del Centro de Veracruz · Graduado': 'Technological University of Central Veracruz · Graduate',
    'Continuación del TSU. Formación en integración de tecnologías, seguridad informática, sistemas inteligentes, IoT y administración de proyectos tecnológicos con enfoque en innovación y vinculación productiva.': 'Continuation of the associate degree. Training in technology integration, information security, intelligent systems, IoT and technology-project management focused on innovation and productive collaboration.',
    'TSU en TI, Área Desarrollo de Software Multiplataforma': 'Associate Degree in IT, Cross-platform Software Development',
    'Formación en programación estructurada, orientada a objetos y de consulta; pruebas de software, redes, sistemas operativos y seguridad informática. Segundo ciclo con énfasis en aplicaciones multiplataforma, realidades extendidas e integración de IA.': 'Training in structured, object-oriented and query programming; software testing, networks, operating systems and information security. A second cycle emphasizes cross-platform applications, extended realities and AI integration.',
    'Certificaciones': 'Certifications',
    'Cubre los fundamentos del análisis de datos: recolección, preparación, visualización e interpretación de conjuntos de datos. Introduce conceptos de análisis estadístico y comunicación de hallazgos orientada a la toma de decisiones.': 'Covers the fundamentals of data analysis: collecting, preparing, visualizing and interpreting datasets. Introduces statistical-analysis concepts and communication of decision-oriented findings.',
    'Conocimientos fundamentales sobre computadoras y dispositivos móviles: funcionamiento interno, instalación de componentes, ensamblaje, reparación y actualización de equipos, así como herramientas y técnicas básicas de diagnóstico y solución de problemas de hardware.': 'Fundamental knowledge of computers and mobile devices: internal operation, component installation, assembly, repair and upgrades, along with basic hardware diagnostic and troubleshooting tools and techniques.',
    'Introducción a los conceptos centrales de la inteligencia artificial moderna: aprendizaje automático, aprendizaje profundo y procesamiento de lenguaje natural. Explora cómo los modelos de IA se aplican en contextos reales de negocio y tecnología.': 'Introduction to the central concepts of modern artificial intelligence: machine learning, deep learning and natural language processing. It explores how AI models are applied in real business and technology contexts.',
    'Reto de aprendizaje continuo de Cisco Networking Academy: completar cursos y módulos en un periodo determinado para acumular horas de formación certificada en tecnologías de redes, seguridad e infraestructura.': 'Cisco Networking Academy continuous-learning challenge: completing courses and modules within a set period to accumulate certified training hours in networking, security and infrastructure technologies.',
    'Fundamentos del lenguaje SQL: consultas de selección, filtrado, agrupación y ordenamiento de datos; operaciones sobre tablas relacionales con enfoque en la lectura y manipulación práctica de bases de datos.': 'SQL language fundamentals: selection queries, data filtering, grouping and sorting; relational-table operations focused on practical database reading and manipulation.',
    'Hablemos de': 'Let’s talk about',
    'software': 'software',
    'y sistemas.': 'and systems.',
    'Para conversar sobre backend, infraestructura Linux o automatización, puedes escribirme directamente.': 'To discuss backend development, Linux infrastructure or automation, you can write to me directly.',
    'Correo electrónico': 'Email',
    'Teléfono': 'Phone',
    'Llamar': 'Call',
    'Ver perfil': 'View profile',
    '© 2026': '© 2026',
    '— Ingeniería en Desarrollo y Gestión de Software': '— Software Development and Management Engineering',
    'Alojado en GitHub Pages': 'Hosted on GitHub Pages',
    'Galería de proyecto': 'Project gallery',
    'Cerrar': 'Close',
    'Ver captura': 'View screenshot',
    'Demo Interactivo': 'Interactive demo',
    '← Anterior': '← Previous',
    'Siguiente →': 'Next →',
    'DEMO INTERACTIVO': 'INTERACTIVE DEMO',
    'Cargando demo…': 'Loading demo…',
    'Abrir en otra pestaña': 'Open in new tab',
    'Cerrar demo': 'Close demo'
  };

  function translate(value) {
    return language === 'en' && translations[value] ? translations[value] : value;
  }

  function translateTextNodes() {
    if (language !== 'en') return;
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    var nodes = [];
    var node;
    while ((node = walker.nextNode())) nodes.push(node);
    nodes.forEach(function (textNode) {
      var original = textNode.nodeValue;
      var trimmed = original.trim();
      if (!translations[trimmed]) return;
      textNode.nodeValue = original.replace(trimmed, translations[trimmed]);
    });
  }

  function translateAttributes() {
    if (language !== 'en') return;
    document.querySelectorAll('[aria-label], [title], [alt], [data-demo-title]').forEach(function (element) {
      ['aria-label', 'title', 'alt', 'data-demo-title'].forEach(function (attribute) {
        var value = element.getAttribute(attribute);
        if (value) element.setAttribute(attribute, translate(value));
      });
    });
  }

  document.documentElement.lang = language;
  document.title = language === 'en' ? 'Software Engineering & Distributed Systems — Portfolio' : document.title;
  var description = document.querySelector('meta[name="description"]');
  if (language === 'en' && description) description.content = 'Software engineering, backend and Linux infrastructure portfolio.';
  translateTextNodes();
  translateAttributes();

  window.portfolioI18n = {
    language: language,
    t: translate
  };
})();
