export const languages = {
  es: "Español",
  en: "English",
  fr: "Français",
  it: "Italiano",
  pt: "Português",
  "pt-BR": "Português do Brasil",
  ja: "日本語",
  ko: "한국어",
} as const;

export const defaultLang = "es";

export const ui = {
  es: {
    // Navegación
    "nav.home": "Inicio",
    "nav.introduction": "Introducción",
    "nav.recaptcha-v2": "ReCaptcha V2",
    "nav.recaptcha-v3": "ReCaptcha V3",
    "nav.start": "Comenzar",
    "nav.configuration": "Configuración",
    "nav.architecture": "Arquitectura",
    "nav.api-reference": "API Reference",
    "nav.usage-examples": "Ejemplos de uso",
    "nav.advanced-configurations": "Configuraciones avanzadas",
    "nav.error-handling": "Manejo de errores",
    "nav.testing": "Testing",
    "nav.performance": "Performance",
    "nav.migration": "Migración",
    "nav.troubleshooting": "Troubleshooting",
    "nav.backend-integration": "Backend Integration",
    "nav.changelog": "Changelog",
    "nav.contribution": "Contribución",

    // UI General
    "ui.search": "Buscar",
    "ui.menu": "Menú",
    "ui.close": "Cerrar",
    "ui.next": "Siguiente",
    "ui.previous": "Anterior",
    "ui.page": "Página",

    // SEO y metadatos
    "seo.title": "Google React reCAPTCHA v3 Documentation",
    "seo.description":
      "Documentación completa de Google React reCAPTCHA v3 - Librería optimizada para React con TypeScript, Trusted Types y características avanzadas de seguridad.",
    "seo.keywords":
      "react, recaptcha, recaptcha-v3, recaptcha-v2, google-recaptcha, typescript, react-component, form-validation, bot-protection, trusted-types, performance, optimized, csp, security, documentación, react-recaptcha, react-recaptcha-v2, react-recaptcha-v3",
    "seo.author": "Andres Felipe Hernandez Aldana",
    "seo.site-name": "Google React reCAPTCHA v3 Documentation",

    // Páginas específicas
    "page.introduction.title":
      "Introducción | Google React reCAPTCHA Documentation",
    "page.start.title": "Comenzar | Google React reCAPTCHA V3 Documentation",
    "page.configuration.title":
      "Configuración | Google React reCAPTCHA V3 Documentation",
    "page.advanced-configurations.title":
      "Configuraciones avanzadas | Google React reCAPTCHA V3 Documentation",
    "page.api-reference.title":
      "API Referencia | Google React reCAPTCHA V3 Documentation",
    "page.usage-examples.title":
      "Ejemplos de uso | Google React reCAPTCHA V3 Documentation",
    "page.error-handling.title":
      "Manejo de errores | Google React reCAPTCHA V3 Documentation",

    // Aprendizaje
    "learn.recaptcha-v2.title": "¿Qué vas a aprender sobre ReCaptcha V2?",
    "learn.recaptcha-v3.title": "¿Qué vas a aprender sobre ReCaptcha V3?",
    "learn.recaptcha-v2.items": [
      'Cómo integrar el componente de checkbox "No soy un robot" en tus formularios.',
      "Implementación del desafío visual con imágenes.",
      "Configuración básica y verificación del token.",
      "Ejemplo práctico para proteger un formulario de contacto.",
      "Uso del paquete google-react-recaptcha-v2.",
    ],
    "learn.recaptcha-v3.items": [
      "Instalación y configuración inicial de la librería.",
      "Uso del hook useRecaptcha y sus opciones de configuración.",
      "Implementación con TypeScript y todas sus interfaces.",
      "Configuraciones avanzadas: Trusted Types, CSP y multi-idioma.",
      "API completa: servicios, utilidades y constantes predefinidas.",
      "Manejo de errores comunes y estrategias de recuperación.",
      "Ejemplos prácticos: formularios de contacto, checkout y analytics.",
    ],

    // Contenido de introducción
    "intro.description":
      "Google ReCaptcha es un servicio esencial para proteger aplicaciones web contra spam, bots y abuso. En React, podemos implementarlo fácilmente usando librerías especializadas para cada versión. En esta documentación, creada por",
    "intro.author.link": "Andrés Hernández",
    "intro.next.button": "Siguiente página",

    // Títulos de secciones - Comenzar
    "start.prerequisites": "Pasos previos antes de usar la librería",
    "start.installation": "Instalación",
    "start.basic-usage": "Uso básico",
    "start.visual-example": "Ejemplo visual",

    // Títulos de secciones - API Referencia
    "api.typescript-interfaces": "Interfaces TypeScript",
    "api.services": "Servicios",
    "api.utilities": "Utilidades",
    "api.predefined-constants": "Constantes Predefinidas",

    // Títulos de ejemplos
    "examples.contact-form": "Formulario de contacto",
    "examples.ecommerce-checkout": "Checkout de ecommerce",
    "examples.analytics-metrics": "Analíticas y métricas",

    // Contenido de componentes - Comenzar
    "start.description.main":
      "ReCaptcha V3 es la versión más avanzada del sistema de verificación de Google que opera silenciosamente en segundo plano sin interrumpir la experiencia del usuario. A diferencia de V2 (que requiere interacción), V3:",
    "start.description.scoring":
      "Asigna una puntuación de confianza (0.0 a 1.0) a cada interacción.",
    "start.description.scoring.suspicious":
      "0.0: Comportamiento sospechoso (posible bot).",
    "start.description.scoring.legitimate": "1.0: Tráfico legítimo.",
    "start.description.behavior":
      "Analiza el comportamiento del usuario (movimientos del mouse, patrones de navegación, etc.).",
    "start.description.ideal": "Es ideal para:",
    "start.description.ideal.forms":
      "Protección de formularios críticos (logins, pagos).",
    "start.description.ideal.monitoring": "Monitoreo continuo de tráfico.",
    "start.description.ideal.actions":
      "Acciones que requieren seguridad sin fricción (ej. APIs).",
    "start.prerequisites.keys": "Obtener las claves de ReCaptcha V3",
    "start.prerequisites.register": "Registra tu sitio en la",
    "start.prerequisites.console": "Consola de Google ReCaptcha",
    "start.prerequisites.type":
      "Selecciona el tipo V3 y agrega tus dominios (ej. localhost para desarrollo).",
    "start.visual.title": "Iniciar sesión",
    "start.visual.email": "Correo",
    "start.visual.email.placeholder": "correo",
    "start.visual.password": "Contraseña",
    "start.visual.password.placeholder": "***********",
    "start.visual.submit": "Iniciar sesión",
    "start.visual.console": "Consola",
    "start.visual.console.placeholder": "Consola de reCAPTCHA",
    "start.visual.author": "By",
    "start.copy.title": "Copiar código",

    // Contenido de página principal
    "learn.recaptcha-v2.items.checkbox":
      'Cómo integrar el componente de checkbox "No soy un robot" en tus formularios.',
    "learn.recaptcha-v2.items.visual":
      "Implementación del desafío visual con imágenes.",
    "learn.recaptcha-v2.items.config":
      "Configuración básica y verificación del token.",
    "learn.recaptcha-v2.items.example":
      "Ejemplo práctico para proteger un formulario de contacto.",
    "learn.recaptcha-v2.items.package":
      "Uso del paquete google-react-recaptcha-v2.",
    "learn.recaptcha-v3.items.install":
      "Instalación y configuración inicial de la librería.",
    "learn.recaptcha-v3.items.hook":
      "Uso del hook useRecaptcha y sus opciones de configuración.",
    "learn.recaptcha-v3.items.typescript":
      "Implementación con TypeScript y todas sus interfaces.",
    "learn.recaptcha-v3.items.advanced":
      "Configuraciones avanzadas: Trusted Types, CSP y multi-idioma.",
    "learn.recaptcha-v3.items.api":
      "API completa: servicios, utilidades y constantes predefinidas.",
    "learn.recaptcha-v3.items.errors":
      "Manejo de errores comunes y estrategias de recuperación.",
    "learn.recaptcha-v3.items.examples":
      "Ejemplos prácticos: formularios de contacto, checkout y analytics.",

    // Subtítulos de componentes
    "config.base.example": "Ejemplo de Configuración Base",
    "config.props.component": "Props del Componente ReCaptchaV3",
    "config.hook.options": "Opciones del Hook useReCaptcha",
    "config.hook.example": "Ejemplo de Configuración",
    "advanced.multilang": "Configuración Multi-idioma",
    "advanced.timeouts": "Timeouts Personalizados",
    "advanced.trusted.types": "Trusted Types Support",
    "advanced.environment": "Configuración por Ambiente",

    // Botones y acciones
    "ui.copy.code": "Copiar código",
    "actions.copy.success": "Código copiado",
    "actions.copy.error": "Error al copiar",

    // Mensajes de ejemplos
    "examples.payment.secure": "Pago seguro con",
    "examples.console.placeholder": "Token de reCAPTCHA aparecerá aquí...",
    "examples.error.security": "Error en verificación de seguridad",
    "examples.slow.connection": "Conexión lenta detectada. Reintentando...",

    // Comentarios en código
    "code.comments.warning": "Advertencia: no usar autoExecute",
    "code.comments.optional":
      "No es necesario usar TRANSACTIONAL_ACTIONS, puedes escribir la acción que quieras",
    "code.comments.recommended": "Recomendado para acciones transaccionales",

    // API Reference - Componentes
    "api.ref.methods.title": "Ref Methods",
    "api.ref.methods.comment": "Métodos disponibles",
    "api.ref.methods.execute":
      "await recaptchaRef.current?.execute(); // Ejecutar manualmente",
    "api.ref.methods.ready":
      "recaptchaRef.current?.isReady(); // Verificar si está listo",
    "api.ref.methods.reset": "recaptchaRef.current?.reset(); // Reiniciar",
    "api.ref.methods.loading":
      "recaptchaRef.current?.isLoading(); // Verificar si está cargando",

    "api.response.title": "RecaptchaV3Response",
    "api.response.success.comment": "Si la verificación fue exitosa",
    "api.response.score.comment": "Puntuación (0.0 - 1.0)",
    "api.response.action.comment": "Acción verificada",
    "api.response.challenge.comment": "Timestamp del desafío",
    "api.response.hostname.comment": "Hostname donde se ejecutó",
    "api.response.errors.comment": "Códigos de error (si los hay)",

    "api.execution.result.title": "RecaptchaExecutionResult",
    "api.execution.result.success.comment": "Si la ejecución fue exitosa",
    "api.execution.result.token.comment": "Token generado por reCAPTCHA",
    "api.execution.result.error.comment": "Error si la ejecución falló",

    "api.service.title": "RecaptchaService",
    "api.service.verify.comment": "Verificar token con el servidor",
    "api.service.execute.comment": "Ejecutar reCAPTCHA manualmente",

    "api.factory.title": "Factory para Testing",
    "api.factory.comment": "Acciones incluidas:",
    "api.factory.actions":
      "['login', 'register', 'purchase', 'payment', 'submit', 'checkout', 'order', 'signup', 'signin', 'transaction']",

    "api.script.loader.title": "ScriptLoader",
    "api.script.loader.comment": "Cargar script de reCAPTCHA dinámicamente",

    "api.constants.title": "Constantes de Configuración",
    "api.constants.comment": "Constantes predefinidas para configuración",

    "api.transactional.actions.title": "Acciones Transaccionales",
    "api.transactional.actions.comment":
      "Acciones predefinidas para transacciones",

    // Manejo de Errores - Componentes
    "errors.types.title": "Tipos de Errores Comunes",
    "errors.types.script.load": "1. Error de Carga de Script",
    "errors.types.timeout": "2. Timeout de Inicialización",
    "errors.types.invalid.key": "3. Site Key Inválida",

    "errors.recovery.title": "Estrategias de Recuperación",
    "errors.recovery.retry": "Retry Automático",
    "errors.recovery.fallback": "Fallback sin reCAPTCHA",
    "errors.recovery.logging": "Logging de Errores",

    // Comentarios en código de manejo de errores
    "errors.code.script.blocked": "Script bloqueado o red lenta",
    "errors.code.script.load": "reCAPTCHA script no pudo cargar",
    "errors.code.script.user": "Mostrar mensaje al usuario o fallback",
    "errors.code.timeout.retry": "Reintentar o mostrar mensaje",
    "errors.code.timeout.load": "reCAPTCHA tardó mucho en cargar",
    "errors.code.invalid.notify": "Notificar al desarrollador",
    "errors.code.retry.count": "Reintentar con el mismo key o usar fallback",
    "errors.code.retry.fallback": "Fallback final - desactivar reCAPTCHA",
    "errors.code.retry.warn":
      "reCAPTCHA falló múltiples veces, desactivando...",
    "errors.code.fallback.validation": "Verificación alternativa requerida:",
    "errors.code.fallback.question": "¿Cuánto es 2 + 2?",
    "errors.code.fallback.send": "Enviar",
    "errors.code.logging.local": "Log local",
    "errors.code.logging.service": "Enviar a servicio de logging",
    "errors.code.logging.warn": "No se pudo enviar log de error:",

    "code.comments.test.key": "Test key",
    "code.comments.slow.network": "Para conexiones lentas",
    "code.comments.timeout": "15 segundos",
    "code.comments.security":
      "Para entornos con políticas de seguridad estrictas",

    // Ejemplos de uso - Formulario de contacto
    "examples.contact.title": "Formulario de Contacto",
    "examples.contact.name": "Nombre",
    "examples.contact.name.placeholder": "Ingresa tu nombre",
    "examples.contact.email": "Email",
    "examples.contact.email.placeholder": "tu@email.com",
    "examples.contact.message": "Mensaje",
    "examples.contact.message.placeholder": "Escribe tu mensaje aquí...",
    "examples.contact.submit": "Enviar Mensaje",
    "examples.contact.sending": "Enviando...",
    "examples.contact.success": "Mensaje enviado exitosamente",
    "examples.contact.error": "Error al enviar el mensaje",
    "examples.contact.protected": "Protegido con",
    "examples.contact.console": "Consola",
    "examples.contact.console.placeholder": "Consola de reCAPTCHA",

    // Ejemplos de uso - Ecommerce Checkout
    "examples.checkout.title": "Checkout - Ecommerce",
    "examples.checkout.summary": "Resumen del Pedido",
    "examples.checkout.total": "Total:",
    "examples.checkout.payment.method": "Método de Pago",
    "examples.checkout.payment.credit": "Tarjeta de Crédito",
    "examples.checkout.payment.debit": "Tarjeta de Débito",
    "examples.checkout.payment.paypal": "PayPal",
    "examples.checkout.pay": "Pagar",
    "examples.checkout.processing": "Procesando...",
    "examples.checkout.success": "Pago procesado exitosamente",
    "examples.checkout.error": "Error al procesar el pago. Intente nuevamente.",
    "examples.checkout.security.error": "Error en verificación de seguridad",
    "examples.checkout.secure.payment": "Pago seguro con",

    // Ejemplos de uso - Analytics
    "examples.analytics.title": "Analytics & Métricas",
    "examples.analytics.realtime": "Métricas en Tiempo Real",
    "examples.analytics.views": "Vistas",
    "examples.analytics.clicks": "Clics",
    "examples.analytics.signups": "Registro",
    "examples.analytics.trackable": "Acciones Rastreables",
    "examples.analytics.cta": "🎯 Call to Action (con tracking)",
    "examples.analytics.newsletter": "📧 Suscribirse al Newsletter",
    "examples.analytics.clear": "🗑️ Limpiar Métricas",
    "examples.analytics.protected": "Analytics protegido con",
    "examples.analytics.token.title": "Token reCAPTCHA",
    "examples.analytics.events.title": "Log de Eventos",
    "examples.analytics.events.empty": "No hay eventos registrados aún...",
    "examples.analytics.page.view": "Page View - Token generado",
    "examples.analytics.event.generated": "Token generado",

    // Productos de ejemplo
    "examples.products.premium": "Producto Premium",
    "examples.products.basic": "Producto Básico",
    "examples.products.deluxe": "Producto Deluxe",

    // Enlaces de ejemplo
    "examples.demo.link": "Ver ejemplo demo",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.introduction": "Introduction",
    "nav.recaptcha-v2": "ReCaptcha V2",
    "nav.recaptcha-v3": "ReCaptcha V3",
    "nav.start": "Get Started",
    "nav.configuration": "Configuration",
    "nav.architecture": "Architecture",
    "nav.api-reference": "API Reference",
    "nav.usage-examples": "Usage Examples",
    "nav.advanced-configurations": "Advanced Configurations",
    "nav.error-handling": "Error Handling",
    "nav.testing": "Testing",
    "nav.performance": "Performance",
    "nav.migration": "Migration",
    "nav.troubleshooting": "Troubleshooting",
    "nav.backend-integration": "Backend Integration",
    "nav.changelog": "Changelog",
    "nav.contribution": "Contribution",

    // General UI
    "ui.search": "Search",
    "ui.menu": "Menu",
    "ui.close": "Close",
    "ui.next": "Next",
    "ui.previous": "Previous",
    "ui.page": "Page",

    // SEO and metadata
    "seo.title": "Google React reCAPTCHA v3 Documentation",
    "seo.description":
      "Complete documentation for Google React reCAPTCHA v3 - Optimized library for React with TypeScript, Trusted Types and advanced security features.",
    "seo.keywords":
      "react, recaptcha, recaptcha-v3, recaptcha-v2, google-recaptcha, typescript, react-component, form-validation, bot-protection, trusted-types, performance, optimized, csp, security, documentation, react-recaptcha, react-recaptcha-v2, react-recaptcha-v3",
    "seo.author": "Andres Felipe Hernandez Aldana",
    "seo.site-name": "Google React reCAPTCHA v3 Documentation",

    // Specific pages
    "page.introduction.title":
      "Introduction | Google React reCAPTCHA Documentation",
    "page.start.title": "Get Started | Google React reCAPTCHA V3 Documentation",
    "page.configuration.title":
      "Configuration | Google React reCAPTCHA V3 Documentation",
    "page.advanced-configurations.title":
      "Advanced Configurations | Google React reCAPTCHA V3 Documentation",
    "page.api-reference.title":
      "API Reference | Google React reCAPTCHA V3 Documentation",
    "page.usage-examples.title":
      "Usage Examples | Google React reCAPTCHA V3 Documentation",
    "page.error-handling.title":
      "Error Handling | Google React reCAPTCHA V3 Documentation",

    // Learning
    "learn.recaptcha-v2.title": "What will you learn about ReCaptcha V2?",
    "learn.recaptcha-v3.title": "What will you learn about ReCaptcha V3?",
    "learn.recaptcha-v2.items": [
      'How to integrate the "I\'m not a robot" checkbox component into your forms.',
      "Implementation of the visual challenge with images.",
      "Basic configuration and token verification.",
      "Practical example to protect a contact form.",
      "Usage of the google-react-recaptcha-v2 package.",
    ],
    "learn.recaptcha-v3.items": [
      "Installation and initial configuration of the library.",
      "Usage of the useRecaptcha hook and its configuration options.",
      "Implementation with TypeScript and all its interfaces.",
      "Advanced configurations: Trusted Types, CSP and multi-language.",
      "Complete API: services, utilities and predefined constants.",
      "Common error handling and recovery strategies.",
      "Practical examples: contact forms, checkout and analytics.",
    ],

    // Introduction content
    "intro.description":
      "Google ReCaptcha is an essential service for protecting web applications against spam, bots and abuse. In React, we can easily implement it using specialized libraries for each version. In this documentation, created by",
    "intro.author.link": "Andrés Hernández",
    "intro.next.button": "Next page",

    // Section titles - Getting Started
    "start.prerequisites": "Prerequisites before using the library",
    "start.installation": "Installation",
    "start.basic-usage": "Basic usage",
    "start.visual-example": "Visual example",

    // Section titles - API Reference
    "api.typescript-interfaces": "TypeScript Interfaces",
    "api.services": "Services",
    "api.utilities": "Utilities",
    "api.predefined-constants": "Predefined Constants",

    // Example titles
    "examples.contact-form": "Contact Form",
    "examples.ecommerce-checkout": "E-commerce Checkout",
    "examples.analytics-metrics": "Analytics and Metrics",

    // Component content - Get Started
    "start.description.main":
      "ReCaptcha V3 is the most advanced version of Google's verification system that operates silently in the background without disrupting the user experience. Unlike V2 (which requires interaction), V3:",
    "start.description.scoring":
      "Assigns a confidence score (0.0 to 1.0) to each interaction.",
    "start.description.scoring.suspicious":
      "0.0: Suspicious behavior (possible bot).",
    "start.description.scoring.legitimate": "1.0: Legitimate traffic.",
    "start.description.behavior":
      "Analyzes user behavior (mouse movements, navigation patterns, etc.).",
    "start.description.ideal": "Is ideal for:",
    "start.description.ideal.forms":
      "Protection of critical forms (logins, payments).",
    "start.description.ideal.monitoring": "Continuous traffic monitoring.",
    "start.description.ideal.actions":
      "Actions that require security without friction (e.g. APIs).",
    "start.prerequisites.keys": "Get ReCaptcha V3 keys",
    "start.prerequisites.register": "Register your site on the",
    "start.prerequisites.console": "Google ReCaptcha Console",
    "start.prerequisites.type":
      "Select V3 type and add your domains (e.g. localhost for development).",
    "start.visual.title": "Sign In",
    "start.visual.email": "Email",
    "start.visual.email.placeholder": "email",
    "start.visual.password": "Password",
    "start.visual.password.placeholder": "***********",
    "start.visual.submit": "Sign In",
    "start.visual.console": "Console",
    "start.visual.console.placeholder": "reCAPTCHA Console",
    "start.visual.author": "By",
    "start.copy.title": "Copy code",

    // Main page content
    "learn.recaptcha-v2.items.checkbox":
      'How to integrate the "I\'m not a robot" checkbox component into your forms.',
    "learn.recaptcha-v2.items.visual":
      "Implementation of the visual challenge with images.",
    "learn.recaptcha-v2.items.config":
      "Basic configuration and token verification.",
    "learn.recaptcha-v2.items.example":
      "Practical example to protect a contact form.",
    "learn.recaptcha-v2.items.package":
      "Usage of the google-react-recaptcha-v2 package.",
    "learn.recaptcha-v3.items.install":
      "Installation and initial configuration of the library.",
    "learn.recaptcha-v3.items.hook":
      "Usage of the useRecaptcha hook and its configuration options.",
    "learn.recaptcha-v3.items.typescript":
      "Implementation with TypeScript and all its interfaces.",
    "learn.recaptcha-v3.items.advanced":
      "Advanced configurations: Trusted Types, CSP and multi-language.",
    "learn.recaptcha-v3.items.api":
      "Complete API: services, utilities and predefined constants.",
    "learn.recaptcha-v3.items.errors":
      "Common error handling and recovery strategies.",
    "learn.recaptcha-v3.items.examples":
      "Practical examples: contact forms, checkout and analytics.",

    // Component subtitles
    "config.base.example": "Basic Configuration Example",
    "config.props.component": "ReCaptchaV3 Component Props",
    "config.hook.options": "useReCaptcha Hook Options",
    "config.hook.example": "Configuration Example",
    "advanced.multilang": "Multi-language Configuration",
    "advanced.timeouts": "Custom Timeouts",
    "advanced.trusted.types": "Trusted Types Support",
    "advanced.environment": "Environment Configuration",

    // Buttons and actions
    "ui.copy.code": "Copy code",
    "actions.copy.success": "Code copied",
    "actions.copy.error": "Copy error",

    // Example messages
    "examples.payment.secure": "Secure payment with",
    "examples.console.placeholder": "reCAPTCHA token will appear here...",
    "examples.error.security": "Security verification error",
    "examples.slow.connection": "Slow connection detected. Retrying...",

    // Code comments
    "code.comments.warning": "Warning: don't use autoExecute",
    "code.comments.optional":
      "You don't need to use TRANSACTIONAL_ACTIONS, you can write any action you want",
    "code.comments.recommended": "Recommended for transactional actions",

    // API Reference - Components
    "api.ref.methods.title": "Ref Methods",
    "api.ref.methods.comment": "Available methods",
    "api.ref.methods.execute":
      "await recaptchaRef.current?.execute(); // Execute manually",
    "api.ref.methods.ready":
      "recaptchaRef.current?.isReady(); // Check if ready",
    "api.ref.methods.reset": "recaptchaRef.current?.reset(); // Reset",
    "api.ref.methods.loading":
      "recaptchaRef.current?.isLoading(); // Check if loading",

    "api.response.title": "RecaptchaV3Response",
    "api.response.success.comment": "If verification was successful",
    "api.response.score.comment": "Score (0.0 - 1.0)",
    "api.response.action.comment": "Verified action",
    "api.response.challenge.comment": "Challenge timestamp",
    "api.response.hostname.comment": "Hostname where it was executed",
    "api.response.errors.comment": "Error codes (if any)",

    "api.execution.result.title": "RecaptchaExecutionResult",
    "api.execution.result.success.comment": "If execution was successful",
    "api.execution.result.token.comment": "Token generated by reCAPTCHA",
    "api.execution.result.error.comment": "Error if execution failed",

    "api.service.title": "RecaptchaService",
    "api.service.verify.comment": "Verify token with server",
    "api.service.execute.comment": "Execute reCAPTCHA manually",

    "api.factory.title": "Factory for Testing",
    "api.factory.comment": "Included actions:",
    "api.factory.actions":
      "['login', 'register', 'purchase', 'payment', 'submit', 'checkout', 'order', 'signup', 'signin', 'transaction']",

    "api.script.loader.title": "ScriptLoader",
    "api.script.loader.comment": "Load reCAPTCHA script dynamically",

    "api.constants.title": "Configuration Constants",
    "api.constants.comment": "Predefined constants for configuration",

    "api.transactional.actions.title": "Transactional Actions",
    "api.transactional.actions.comment": "Predefined actions for transactions",

    // Error Handling - Components
    "errors.types.title": "Common Error Types",
    "errors.types.script.load": "1. Script Load Error",
    "errors.types.timeout": "2. Initialization Timeout",
    "errors.types.invalid.key": "3. Invalid Site Key",

    "errors.recovery.title": "Recovery Strategies",
    "errors.recovery.retry": "Automatic Retry",
    "errors.recovery.fallback": "Fallback without reCAPTCHA",
    "errors.recovery.logging": "Error Logging",

    // Code comments for error handling
    "errors.code.script.blocked": "Script blocked or slow network",
    "errors.code.script.load": "reCAPTCHA script could not load",
    "errors.code.script.user": "Show message to user or fallback",
    "errors.code.timeout.retry": "Retry or show message",
    "errors.code.timeout.load": "reCAPTCHA took too long to load",
    "errors.code.invalid.notify": "Notify developer",
    "errors.code.retry.count": "Retry with same key or use fallback",
    "errors.code.retry.fallback": "Final fallback - disable reCAPTCHA",
    "errors.code.retry.warn": "reCAPTCHA failed multiple times, disabling...",
    "errors.code.fallback.validation": "Alternative verification required:",
    "errors.code.fallback.question": "What is 2 + 2?",
    "errors.code.fallback.send": "Send",
    "errors.code.logging.local": "Local log",
    "errors.code.logging.service": "Send to logging service",
    "errors.code.logging.warn": "Could not send error log:",

    "code.comments.test.key": "Test key",
    "code.comments.slow.network": "For slow connections",
    "code.comments.timeout": "15 seconds",
    "code.comments.security": "For environments with strict security policies",

    // Usage examples - Contact form
    "examples.contact.title": "Contact Form",
    "examples.contact.name": "Name",
    "examples.contact.name.placeholder": "Enter your name",
    "examples.contact.email": "Email",
    "examples.contact.email.placeholder": "your@email.com",
    "examples.contact.message": "Message",
    "examples.contact.message.placeholder": "Write your message here...",
    "examples.contact.submit": "Send Message",
    "examples.contact.sending": "Sending...",
    "examples.contact.success": "Message sent successfully",
    "examples.contact.error": "Error sending message",
    "examples.contact.protected": "Protected with",
    "examples.contact.console": "Console",
    "examples.contact.console.placeholder": "reCAPTCHA Console",

    // Usage examples - Ecommerce Checkout
    "examples.checkout.title": "Checkout - Ecommerce",
    "examples.checkout.summary": "Order Summary",
    "examples.checkout.total": "Total:",
    "examples.checkout.payment.method": "Payment Method",
    "examples.checkout.payment.credit": "Credit Card",
    "examples.checkout.payment.debit": "Debit Card",
    "examples.checkout.payment.paypal": "PayPal",
    "examples.checkout.pay": "Pay",
    "examples.checkout.processing": "Processing...",
    "examples.checkout.success": "Payment processed successfully",
    "examples.checkout.error": "Error processing payment. Please try again.",
    "examples.checkout.security.error": "Security verification error",
    "examples.checkout.secure.payment": "Secure payment with",

    // Usage examples - Analytics
    "examples.analytics.title": "Analytics & Metrics",
    "examples.analytics.realtime": "Real-time Metrics",
    "examples.analytics.views": "Views",
    "examples.analytics.clicks": "Clicks",
    "examples.analytics.signups": "Signups",
    "examples.analytics.trackable": "Trackable Actions",
    "examples.analytics.cta": "🎯 Call to Action (with tracking)",
    "examples.analytics.newsletter": "📧 Subscribe to Newsletter",
    "examples.analytics.clear": "🗑️ Clear Metrics",
    "examples.analytics.protected": "Analytics protected with",
    "examples.analytics.token.title": "reCAPTCHA Token",
    "examples.analytics.events.title": "Event Log",
    "examples.analytics.events.empty": "No events logged yet...",
    "examples.analytics.page.view": "Page View - Token generated",
    "examples.analytics.event.generated": "Token generated",

    // Example products
    "examples.products.premium": "Premium Product",
    "examples.products.basic": "Basic Product",
    "examples.products.deluxe": "Deluxe Product",

    // Example links
    "examples.demo.link": "View demo example",
  },
  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.introduction": "Introduction",
    "nav.recaptcha-v2": "ReCaptcha V2",
    "nav.recaptcha-v3": "ReCaptcha V3",
    "nav.start": "Commencer",
    "nav.configuration": "Configuration",
    "nav.architecture": "Architecture",
    "nav.api-reference": "Référence API",
    "nav.usage-examples": "Exemples d'utilisation",
    "nav.advanced-configurations": "Configurations avancées",
    "nav.error-handling": "Gestion des erreurs",
    "nav.testing": "Tests",
    "nav.performance": "Performance",
    "nav.migration": "Migration",
    "nav.troubleshooting": "Dépannage",
    "nav.backend-integration": "Intégration Backend",
    "nav.changelog": "Changelog",
    "nav.contribution": "Contribution",

    // General UI
    "ui.search": "Rechercher",
    "ui.menu": "Menu",
    "ui.close": "Fermer",
    "ui.next": "Suivant",
    "ui.previous": "Précédent",
    "ui.page": "Page",

    // SEO and metadata
    "seo.title": "Documentation Google React reCAPTCHA v3",
    "seo.description":
      "Documentation complète pour Google React reCAPTCHA v3 - Bibliothèque optimisée pour React avec TypeScript, Trusted Types et fonctionnalités de sécurité avancées.",
    "seo.keywords":
      "react, recaptcha, recaptcha-v3, recaptcha-v2, google-recaptcha, typescript, react-component, form-validation, bot-protection, trusted-types, performance, optimized, csp, security, documentation, react-recaptcha, react-recaptcha-v2, react-recaptcha-v3",
    "seo.author": "Andres Felipe Hernandez Aldana",
    "seo.site-name": "Documentation Google React reCAPTCHA v3",

    // Specific pages
    "page.introduction.title":
      "Introduction | Documentation Google React reCAPTCHA",
    "page.start.title": "Commencer | Documentation Google React reCAPTCHA V3",
    "page.configuration.title":
      "Configuration | Documentation Google React reCAPTCHA V3",
    "page.advanced-configurations.title":
      "Configurations avancées | Documentation Google React reCAPTCHA V3",
    "page.api-reference.title":
      "Référence API | Documentation Google React reCAPTCHA V3",
    "page.usage-examples.title":
      "Exemples d'utilisation | Documentation Google React reCAPTCHA V3",
    "page.error-handling.title":
      "Gestion des erreurs | Documentation Google React reCAPTCHA V3",

    // Learning
    "learn.recaptcha-v2.title": "Que vas-tu apprendre sur ReCaptcha V2?",
    "learn.recaptcha-v3.title": "Que vas-tu apprendre sur ReCaptcha V3?",
    "learn.recaptcha-v2.items": [
      'Comment intégrer le composant de case à cocher "Je ne suis pas un robot" dans vos formulaires.',
      "Implémentation du défi visuel avec des images.",
      "Configuration de base et vérification du token.",
      "Exemple pratique pour protéger un formulaire de contact.",
      "Utilisation du package google-react-recaptcha-v2.",
    ],
    "learn.recaptcha-v3.items": [
      "Installation et configuration initiale de la bibliothèque.",
      "Utilisation du hook useRecaptcha et ses options de configuration.",
      "Implémentation avec TypeScript et toutes ses interfaces.",
      "Configurations avancées: Trusted Types, CSP et multi-langue.",
      "API complète: services, utilitaires et constantes prédéfinies.",
      "Gestion des erreurs communes et stratégies de récupération.",
      "Exemples pratiques: formulaires de contact, checkout et analytics.",
    ],

    // Introduction content
    "intro.description":
      "Google ReCaptcha est un service essentiel pour protéger les applications web contre le spam, les bots et les abus. Dans React, nous pouvons facilement l'implémenter en utilisant des bibliothèques spécialisées pour chaque version. Dans cette documentation, créée par",
    "intro.author.link": "Andrés Hernández",
    "intro.next.button": "Page suivante",

    // Titres de sections - Commencer
    "start.prerequisites": "Prérequis avant d'utiliser la bibliothèque",
    "start.installation": "Installation",
    "start.basic-usage": "Utilisation de base",
    "start.visual-example": "Exemple visuel",

    // Titres de sections - Référence API
    "api.typescript-interfaces": "Interfaces TypeScript",
    "api.services": "Services",
    "api.utilities": "Utilitaires",
    "api.predefined-constants": "Constantes Prédéfinies",

    // Titres d'exemples
    "examples.contact-form": "Formulaire de contact",
    "examples.ecommerce-checkout": "Checkout e-commerce",
    "examples.analytics-metrics": "Analyses et métriques",

    // Contenu des composants - Commencer
    "start.description.main":
      "ReCaptcha V3 est la version la plus avancée du système de vérification de Google qui fonctionne silencieusement en arrière-plan sans interrompre l'expérience utilisateur. Contrairement à V2 (qui nécessite une interaction), V3:",
    "start.description.scoring":
      "Attribue un score de confiance (0.0 à 1.0) à chaque interaction.",
    "start.description.scoring.suspicious":
      "0.0: Comportement suspect (bot possible).",
    "start.description.scoring.legitimate": "1.0: Trafic légitime.",
    "start.description.behavior":
      "Analyse le comportement de l'utilisateur (mouvements de souris, modèles de navigation, etc.).",
    "start.description.ideal": "Est idéal pour:",
    "start.description.ideal.forms":
      "Protection des formulaires critiques (connexions, paiements).",
    "start.description.ideal.monitoring": "Surveillance continue du trafic.",
    "start.description.ideal.actions":
      "Actions qui nécessitent une sécurité sans friction (ex. APIs).",
    "start.prerequisites.keys": "Obtenir les clés ReCaptcha V3",
    "start.prerequisites.register": "Inscrivez votre site sur la",
    "start.prerequisites.console": "Console Google ReCaptcha",
    "start.prerequisites.type":
      "Sélectionnez le type V3 et ajoutez vos domaines (ex. localhost pour le développement).",
    "start.visual.title": "Se connecter",
    "start.visual.email": "Email",
    "start.visual.email.placeholder": "email",
    "start.visual.password": "Mot de passe",
    "start.visual.password.placeholder": "***********",
    "start.visual.submit": "Se connecter",
    "start.visual.console": "Console",
    "start.visual.console.placeholder": "Console reCAPTCHA",
    "start.visual.author": "Par",
    "start.copy.title": "Copier le code",

    // Contenu de la page principale
    "learn.recaptcha-v2.items.checkbox":
      'Comment intégrer le composant de case à cocher "Je ne suis pas un robot" dans vos formulaires.',
    "learn.recaptcha-v2.items.visual":
      "Implémentation du défi visuel avec des images.",
    "learn.recaptcha-v2.items.config":
      "Configuration de base et vérification du token.",
    "learn.recaptcha-v2.items.example":
      "Exemple pratique pour protéger un formulaire de contact.",
    "learn.recaptcha-v2.items.package":
      "Utilisation du package google-react-recaptcha-v2.",
    "learn.recaptcha-v3.items.install":
      "Installation et configuration initiale de la bibliothèque.",
    "learn.recaptcha-v3.items.hook":
      "Utilisation du hook useRecaptcha et ses options de configuration.",
    "learn.recaptcha-v3.items.typescript":
      "Implémentation avec TypeScript et toutes ses interfaces.",
    "learn.recaptcha-v3.items.advanced":
      "Configurations avancées: Trusted Types, CSP et multi-langue.",
    "learn.recaptcha-v3.items.api":
      "API complète: services, utilitaires et constantes prédéfinies.",
    "learn.recaptcha-v3.items.errors":
      "Gestion des erreurs communes et stratégies de récupération.",
    "learn.recaptcha-v3.items.examples":
      "Exemples pratiques: formulaires de contact, checkout et analytics.",

    // Sous-titres des composants
    "config.base.example": "Exemple de Configuration de Base",
    "config.props.component": "Props du Composant ReCaptchaV3",
    "config.hook.options": "Options du Hook useReCaptcha",
    "config.hook.example": "Exemple de Configuration",
    "advanced.multilang": "Configuration Multi-langue",
    "advanced.timeouts": "Timeouts Personnalisés",
    "advanced.trusted.types": "Support Trusted Types",
    "advanced.environment": "Configuration par Environnement",

    // Boutons et actions
    "ui.copy.code": "Copier le code",
    "actions.copy.success": "Code copié",
    "actions.copy.error": "Erreur de copie",

    // Messages d'exemples
    "examples.payment.secure": "Paiement sécurisé avec",
    "examples.console.placeholder": "Le token reCAPTCHA apparaîtra ici...",
    "examples.error.security": "Erreur de vérification de sécurité",
    "examples.slow.connection":
      "Connexion lente détectée. Nouvelle tentative...",

    // Commentaires de code
    "code.comments.warning": "Avertissement: ne pas utiliser autoExecute",
    "code.comments.optional":
      "Il n'est pas nécessaire d'utiliser TRANSACTIONAL_ACTIONS, vous pouvez écrire l'action que vous voulez",
    "code.comments.recommended":
      "Recommandé pour les actions transactionnelles",

    // API Reference - Composants
    "api.ref.methods.title": "Méthodes Ref",
    "api.ref.methods.comment": "Méthodes disponibles",
    "api.ref.methods.execute":
      "await recaptchaRef.current?.execute(); // Exécuter manuellement",
    "api.ref.methods.ready":
      "recaptchaRef.current?.isReady(); // Vérifier si prêt",
    "api.ref.methods.reset": "recaptchaRef.current?.reset(); // Réinitialiser",
    "api.ref.methods.loading":
      "recaptchaRef.current?.isLoading(); // Vérifier si en cours de chargement",

    "api.response.title": "RecaptchaV3Response",
    "api.response.success.comment": "Si la vérification a réussi",
    "api.response.score.comment": "Score (0.0 - 1.0)",
    "api.response.action.comment": "Action vérifiée",
    "api.response.challenge.comment": "Timestamp du défi",
    "api.response.hostname.comment": "Nom d'hôte où il a été exécuté",
    "api.response.errors.comment": "Codes d'erreur (s'il y en a)",

    "api.execution.result.title": "RecaptchaExecutionResult",
    "api.execution.result.success.comment": "Si l'exécution a réussi",
    "api.execution.result.token.comment": "Token généré par reCAPTCHA",
    "api.execution.result.error.comment": "Erreur si l'exécution a échoué",

    "api.service.title": "RecaptchaService",
    "api.service.verify.comment": "Vérifier le token avec le serveur",
    "api.service.execute.comment": "Exécuter reCAPTCHA manuellement",

    "api.factory.title": "Factory pour les Tests",
    "api.factory.comment": "Actions incluses:",
    "api.factory.actions":
      "['login', 'register', 'purchase', 'payment', 'submit', 'checkout', 'order', 'signup', 'signin', 'transaction']",

    "api.script.loader.title": "ScriptLoader",
    "api.script.loader.comment": "Charger le script reCAPTCHA dynamiquement",

    "api.constants.title": "Constantes de Configuration",
    "api.constants.comment": "Constantes prédéfinies pour la configuration",

    "api.transactional.actions.title": "Actions Transactionnelles",
    "api.transactional.actions.comment":
      "Actions prédéfinies pour les transactions",

    // Gestion des Erreurs - Composants
    "errors.types.title": "Types d'Erreurs Communes",
    "errors.types.script.load": "1. Erreur de Chargement de Script",
    "errors.types.timeout": "2. Timeout d'Initialisation",
    "errors.types.invalid.key": "3. Clé de Site Invalide",

    "errors.recovery.title": "Stratégies de Récupération",
    "errors.recovery.retry": "Nouvelle Tentative Automatique",
    "errors.recovery.fallback": "Fallback sans reCAPTCHA",
    "errors.recovery.logging": "Journalisation d'Erreurs",

    // Commentaires de code pour la gestion d'erreurs
    "errors.code.script.blocked": "Script bloqué ou réseau lent",
    "errors.code.script.load": "Le script reCAPTCHA n'a pas pu se charger",
    "errors.code.script.user":
      "Afficher un message à l'utilisateur ou fallback",
    "errors.code.timeout.retry": "Nouvelle tentative ou afficher un message",
    "errors.code.timeout.load": "reCAPTCHA a pris trop de temps à charger",
    "errors.code.invalid.notify": "Notifier le développeur",
    "errors.code.retry.count":
      "Nouvelle tentative avec la même clé ou utiliser fallback",
    "errors.code.retry.fallback": "Fallback final - désactiver reCAPTCHA",
    "errors.code.retry.warn":
      "reCAPTCHA a échoué plusieurs fois, désactivation...",
    "errors.code.fallback.validation": "Vérification alternative requise:",
    "errors.code.fallback.question": "Combien font 2 + 2?",
    "errors.code.fallback.send": "Envoyer",
    "errors.code.logging.local": "Journal local",
    "errors.code.logging.service": "Envoyer au service de journalisation",
    "errors.code.logging.warn": "Impossible d'envoyer le journal d'erreur:",

    "code.comments.test.key": "Clé de test",
    "code.comments.slow.network": "Pour les connexions lentes",
    "code.comments.timeout": "15 secondes",
    "code.comments.security":
      "Pour les environnements avec des politiques de sécurité strictes",

    // Exemples d'utilisation - Formulaire de contact
    "examples.contact.title": "Formulaire de Contact",
    "examples.contact.name": "Nom",
    "examples.contact.name.placeholder": "Entrez votre nom",
    "examples.contact.email": "Email",
    "examples.contact.email.placeholder": "votre@email.com",
    "examples.contact.message": "Message",
    "examples.contact.message.placeholder": "Écrivez votre message ici...",
    "examples.contact.submit": "Envoyer le Message",
    "examples.contact.sending": "Envoi en cours...",
    "examples.contact.success": "Message envoyé avec succès",
    "examples.contact.error": "Erreur lors de l'envoi du message",
    "examples.contact.protected": "Protégé avec",
    "examples.contact.console": "Console",
    "examples.contact.console.placeholder": "Console reCAPTCHA",

    // Exemples d'utilisation - Checkout Ecommerce
    "examples.checkout.title": "Checkout - Ecommerce",
    "examples.checkout.summary": "Résumé de la Commande",
    "examples.checkout.total": "Total:",
    "examples.checkout.payment.method": "Méthode de Paiement",
    "examples.checkout.payment.credit": "Carte de Crédit",
    "examples.checkout.payment.debit": "Carte de Débit",
    "examples.checkout.payment.paypal": "PayPal",
    "examples.checkout.pay": "Payer",
    "examples.checkout.processing": "Traitement en cours...",
    "examples.checkout.success": "Paiement traité avec succès",
    "examples.checkout.error":
      "Erreur lors du traitement du paiement. Veuillez réessayer.",
    "examples.checkout.security.error": "Erreur de vérification de sécurité",
    "examples.checkout.secure.payment": "Paiement sécurisé avec",

    // Exemples d'utilisation - Analytics
    "examples.analytics.title": "Analytics & Métriques",
    "examples.analytics.realtime": "Métriques en Temps Réel",
    "examples.analytics.views": "Vues",
    "examples.analytics.clicks": "Clics",
    "examples.analytics.signups": "Inscriptions",
    "examples.analytics.trackable": "Actions Traçables",
    "examples.analytics.cta": "🎯 Call to Action (avec suivi)",
    "examples.analytics.newsletter": "📧 S'abonner à la Newsletter",
    "examples.analytics.clear": "🗑️ Effacer les Métriques",
    "examples.analytics.protected": "Analytics protégé avec",
    "examples.analytics.token.title": "Token reCAPTCHA",
    "examples.analytics.events.title": "Journal d'Événements",
    "examples.analytics.events.empty":
      "Aucun événement enregistré pour le moment...",
    "examples.analytics.page.view": "Vue de Page - Token généré",
    "examples.analytics.event.generated": "Token généré",

    // Produits d'exemple
    "examples.products.premium": "Produit Premium",
    "examples.products.basic": "Produit Basique",
    "examples.products.deluxe": "Produit Deluxe",

    // Liens d'exemple
    "examples.demo.link": "Voir l'exemple démo",
  },
  it: {
    // Navigation
    "nav.home": "Home",
    "nav.introduction": "Introduzione",
    "nav.recaptcha-v2": "ReCaptcha V2",
    "nav.recaptcha-v3": "ReCaptcha V3",
    "nav.start": "Iniziare",
    "nav.configuration": "Configurazione",
    "nav.architecture": "Architettura",
    "nav.api-reference": "Riferimento API",
    "nav.usage-examples": "Esempi di utilizzo",
    "nav.advanced-configurations": "Configurazioni avanzate",
    "nav.error-handling": "Gestione degli errori",
    "nav.testing": "Testing",
    "nav.performance": "Performance",
    "nav.migration": "Migrazione",
    "nav.troubleshooting": "Risoluzione dei problemi",
    "nav.backend-integration": "Integrazione Backend",
    "nav.changelog": "Changelog",
    "nav.contribution": "Contribuzione",

    // General UI
    "ui.search": "Cerca",
    "ui.menu": "Menu",
    "ui.close": "Chiudi",
    "ui.next": "Successivo",
    "ui.previous": "Precedente",
    "ui.page": "Pagina",

    // SEO and metadata
    "seo.title": "Documentazione Google React reCAPTCHA v3",
    "seo.description":
      "Documentazione completa per Google React reCAPTCHA v3 - Libreria ottimizzata per React con TypeScript, Trusted Types e funzionalità di sicurezza avanzate.",
    "seo.keywords":
      "react, recaptcha, recaptcha-v3, recaptcha-v2, google-recaptcha, typescript, react-component, form-validation, bot-protection, trusted-types, performance, optimized, csp, security, documentation, react-recaptcha, react-recaptcha-v2, react-recaptcha-v3",
    "seo.author": "Andres Felipe Hernandez Aldana",
    "seo.site-name": "Documentazione Google React reCAPTCHA v3",

    // Specific pages
    "page.introduction.title":
      "Introduzione | Documentazione Google React reCAPTCHA",
    "page.start.title": "Iniziare | Documentazione Google React reCAPTCHA V3",
    "page.configuration.title":
      "Configurazione | Documentazione Google React reCAPTCHA V3",
    "page.advanced-configurations.title":
      "Configurazioni avanzate | Documentazione Google React reCAPTCHA V3",
    "page.api-reference.title":
      "Riferimento API | Documentazione Google React reCAPTCHA V3",
    "page.usage-examples.title":
      "Esempi di utilizzo | Documentazione Google React reCAPTCHA V3",
    "page.error-handling.title":
      "Gestione degli errori | Documentazione Google React reCAPTCHA V3",

    // Learning
    "learn.recaptcha-v2.title": "Cosa imparerai su ReCaptcha V2?",
    "learn.recaptcha-v3.title": "Cosa imparerai su ReCaptcha V3?",
    "learn.recaptcha-v2.items": [
      'Come integrare il componente checkbox "Non sono un robot" nei tuoi moduli.',
      "Implementazione della sfida visiva con le immagini.",
      "Configurazione di base e verifica del token.",
      "Esempio pratico per proteggere un modulo di contatto.",
      "Utilizzo del pacchetto google-react-recaptcha-v2.",
    ],
    "learn.recaptcha-v3.items": [
      "Installazione e configurazione iniziale della libreria.",
      "Utilizzo dell'hook useRecaptcha e le sue opzioni di configurazione.",
      "Implementazione con TypeScript e tutte le sue interfacce.",
      "Configurazioni avanzate: Trusted Types, CSP e multi-lingua.",
      "API completa: servizi, utilità e costanti predefinite.",
      "Gestione degli errori comuni e strategie di recupero.",
      "Esempi pratici: moduli di contatto, checkout e analytics.",
    ],

    // Introduction content
    "intro.description":
      "Google ReCaptcha è un servizio essenziale per proteggere le applicazioni web contro spam, bot e abusi. In React, possiamo implementarlo facilmente utilizzando librerie specializzate per ogni versione. In questa documentazione, creata da",
    "intro.author.link": "Andrés Hernández",
    "intro.next.button": "Pagina successiva",

    // Titoli delle sezioni - Iniziare
    "start.prerequisites": "Prerequisiti prima di utilizzare la libreria",
    "start.installation": "Installazione",
    "start.basic-usage": "Uso base",
    "start.visual-example": "Esempio visivo",

    // Titoli delle sezioni - Riferimento API
    "api.typescript-interfaces": "Interfacce TypeScript",
    "api.services": "Servizi",
    "api.utilities": "Utilità",
    "api.predefined-constants": "Costanti Predefinite",

    // Titoli degli esempi
    "examples.contact-form": "Modulo di contatto",
    "examples.ecommerce-checkout": "Checkout e-commerce",
    "examples.analytics-metrics": "Analisi e metriche",

    // Contenuto dei componenti - Iniziare
    "start.description.main":
      "ReCaptcha V3 è la versione più avanzata del sistema di verifica di Google che funziona silenziosamente in background senza interrompere l'esperienza utente. A differenza di V2 (che richiede interazione), V3:",
    "start.description.scoring":
      "Assegna un punteggio di confidenza (0.0 a 1.0) a ogni interazione.",
    "start.description.scoring.suspicious":
      "0.0: Comportamento sospetto (possibile bot).",
    "start.description.scoring.legitimate": "1.0: Traffico legittimo.",
    "start.description.behavior":
      "Analizza il comportamento dell'utente (movimenti del mouse, modelli di navigazione, ecc.).",
    "start.description.ideal": "È ideale per:",
    "start.description.ideal.forms":
      "Protezione di moduli critici (accessi, pagamenti).",
    "start.description.ideal.monitoring": "Monitoraggio continuo del traffico.",
    "start.description.ideal.actions":
      "Azioni che richiedono sicurezza senza attrito (ex. API).",
    "start.prerequisites.keys": "Ottenere le chiavi ReCaptcha V3",
    "start.prerequisites.register": "Registra il tuo sito nella",
    "start.prerequisites.console": "Console Google ReCaptcha",
    "start.prerequisites.type":
      "Seleziona il tipo V3 e aggiungi i tuoi domini (es. localhost per lo sviluppo).",
    "start.visual.title": "Accedi",
    "start.visual.email": "Email",
    "start.visual.email.placeholder": "email",
    "start.visual.password": "Password",
    "start.visual.password.placeholder": "***********",
    "start.visual.submit": "Accedi",
    "start.visual.console": "Console",
    "start.visual.console.placeholder": "Console reCAPTCHA",
    "start.visual.author": "Di",
    "start.copy.title": "Copia codice",

    // Contenuto della pagina principale
    "learn.recaptcha-v2.items.checkbox":
      'Come integrare il componente checkbox "Non sono un robot" nei tuoi moduli.',
    "learn.recaptcha-v2.items.visual":
      "Implementazione della sfida visiva con le immagini.",
    "learn.recaptcha-v2.items.config":
      "Configurazione di base e verifica del token.",
    "learn.recaptcha-v2.items.example":
      "Esempio pratico per proteggere un modulo di contatto.",
    "learn.recaptcha-v2.items.package":
      "Utilizzo del pacchetto google-react-recaptcha-v2.",
    "learn.recaptcha-v3.items.install":
      "Installazione e configurazione iniziale della libreria.",
    "learn.recaptcha-v3.items.hook":
      "Utilizzo dell'hook useRecaptcha e le sue opzioni di configurazione.",
    "learn.recaptcha-v3.items.typescript":
      "Implementazione con TypeScript e tutte le sue interfacce.",
    "learn.recaptcha-v3.items.advanced":
      "Configurazioni avanzate: Trusted Types, CSP e multi-lingua.",
    "learn.recaptcha-v3.items.api":
      "API completa: servizi, utilità e costanti predefinite.",
    "learn.recaptcha-v3.items.errors":
      "Gestione degli errori comuni e strategie di recupero.",
    "learn.recaptcha-v3.items.examples":
      "Esempi pratici: moduli di contatto, checkout e analytics.",

    // Sottotitoli dei componenti
    "config.base.example": "Esempio di Configurazione Base",
    "config.props.component": "Props del Componente ReCaptchaV3",
    "config.hook.options": "Opzioni dell'Hook useReCaptcha",
    "config.hook.example": "Esempio di Configurazione",
    "advanced.multilang": "Configurazione Multi-lingua",
    "advanced.timeouts": "Timeout Personalizzati",
    "advanced.trusted.types": "Supporto Trusted Types",
    "advanced.environment": "Configurazione per Ambiente",

    // Pulsanti e azioni
    "ui.copy.code": "Copia codice",
    "actions.copy.success": "Codice copiato",
    "actions.copy.error": "Errore di copia",

    // Messaggi di esempio
    "examples.payment.secure": "Pagamento sicuro con",
    "examples.console.placeholder": "Il token reCAPTCHA apparirà qui...",
    "examples.error.security": "Errore di verifica della sicurezza",
    "examples.slow.connection": "Connessione lenta rilevata. Riprovando...",

    // Commenti del codice
    "code.comments.warning": "Avvertimento: non usare autoExecute",
    "code.comments.optional":
      "Non è necessario usare TRANSACTIONAL_ACTIONS, puoi scrivere l'azione che vuoi",
    "code.comments.recommended": "Raccomandato per azioni transazionali",

    // API Reference - Componenti
    "api.ref.methods.title": "Metodi Ref",
    "api.ref.methods.comment": "Metodi disponibili",
    "api.ref.methods.execute":
      "await recaptchaRef.current?.execute(); // Esegui manualmente",
    "api.ref.methods.ready":
      "recaptchaRef.current?.isReady(); // Verifica se pronto",
    "api.ref.methods.reset": "recaptchaRef.current?.reset(); // Reset",
    "api.ref.methods.loading":
      "recaptchaRef.current?.isLoading(); // Verifica se in caricamento",

    "api.response.title": "RecaptchaV3Response",
    "api.response.success.comment": "Se la verifica è riuscita",
    "api.response.score.comment": "Punteggio (0.0 - 1.0)",
    "api.response.action.comment": "Azione verificata",
    "api.response.challenge.comment": "Timestamp della sfida",
    "api.response.hostname.comment": "Hostname dove è stato eseguito",
    "api.response.errors.comment": "Codici di errore (se presenti)",

    "api.execution.result.title": "RecaptchaExecutionResult",
    "api.execution.result.success.comment": "Se l'esecuzione è riuscita",
    "api.execution.result.token.comment": "Token generato da reCAPTCHA",
    "api.execution.result.error.comment": "Errore se l'esecuzione è fallita",

    "api.service.title": "RecaptchaService",
    "api.service.verify.comment": "Verifica token con il server",
    "api.service.execute.comment": "Esegui reCAPTCHA manualmente",

    "api.factory.title": "Factory per i Test",
    "api.factory.comment": "Azioni incluse:",
    "api.factory.actions":
      "['login', 'register', 'purchase', 'payment', 'submit', 'checkout', 'order', 'signup', 'signin', 'transaction']",

    "api.script.loader.title": "ScriptLoader",
    "api.script.loader.comment": "Carica script reCAPTCHA dinamicamente",

    "api.constants.title": "Costanti di Configurazione",
    "api.constants.comment": "Costanti predefinite per la configurazione",

    "api.transactional.actions.title": "Azioni Transazionali",
    "api.transactional.actions.comment":
      "Azioni predefinite per le transazioni",

    // Gestione degli Errori - Componenti
    "errors.types.title": "Tipi di Errore Comuni",
    "errors.types.script.load": "1. Errore di Caricamento Script",
    "errors.types.timeout": "2. Timeout di Inizializzazione",
    "errors.types.invalid.key": "3. Chiave del Sito Non Valida",

    "errors.recovery.title": "Strategie di Recupero",
    "errors.recovery.retry": "Riprova Automatica",
    "errors.recovery.fallback": "Fallback senza reCAPTCHA",
    "errors.recovery.logging": "Registrazione Errori",

    // Commenti del codice per la gestione degli errori
    "errors.code.script.blocked": "Script bloccato o rete lenta",
    "errors.code.script.load": "Lo script reCAPTCHA non è riuscito a caricarsi",
    "errors.code.script.user": "Mostra messaggio all'utente o fallback",
    "errors.code.timeout.retry": "Riprova o mostra messaggio",
    "errors.code.timeout.load":
      "reCAPTCHA ha impiegato troppo tempo per caricarsi",
    "errors.code.invalid.notify": "Notifica lo sviluppatore",
    "errors.code.retry.count": "Riprova con la stessa chiave o usa fallback",
    "errors.code.retry.fallback": "Fallback finale - disabilita reCAPTCHA",
    "errors.code.retry.warn":
      "reCAPTCHA è fallito più volte, disabilitazione...",
    "errors.code.fallback.validation": "Verifica alternativa richiesta:",
    "errors.code.fallback.question": "Quanto fa 2 + 2?",
    "errors.code.fallback.send": "Invia",
    "errors.code.logging.local": "Log locale",
    "errors.code.logging.service": "Invia al servizio di logging",
    "errors.code.logging.warn": "Impossibile inviare il log di errore:",

    "code.comments.test.key": "Chiave di test",
    "code.comments.slow.network": "Per connessioni lente",
    "code.comments.timeout": "15 secondi",
    "code.comments.security":
      "Per ambienti con politiche di sicurezza rigorose",

    // Esempi di utilizzo - Modulo di contatto
    "examples.contact.title": "Modulo di Contatto",
    "examples.contact.name": "Nome",
    "examples.contact.name.placeholder": "Inserisci il tuo nome",
    "examples.contact.email": "Email",
    "examples.contact.email.placeholder": "tuo@email.com",
    "examples.contact.message": "Messaggio",
    "examples.contact.message.placeholder": "Scrivi il tuo messaggio qui...",
    "examples.contact.submit": "Invia Messaggio",
    "examples.contact.sending": "Invio in corso...",
    "examples.contact.success": "Messaggio inviato con successo",
    "examples.contact.error": "Errore nell'invio del messaggio",
    "examples.contact.protected": "Protetto con",
    "examples.contact.console": "Console",
    "examples.contact.console.placeholder": "Console reCAPTCHA",

    // Esempi di utilizzo - Checkout Ecommerce
    "examples.checkout.title": "Checkout - Ecommerce",
    "examples.checkout.summary": "Riepilogo Ordine",
    "examples.checkout.total": "Totale:",
    "examples.checkout.payment.method": "Metodo di Pagamento",
    "examples.checkout.payment.credit": "Carta di Credito",
    "examples.checkout.payment.debit": "Carta di Debito",
    "examples.checkout.payment.paypal": "PayPal",
    "examples.checkout.pay": "Paga",
    "examples.checkout.processing": "Elaborazione in corso...",
    "examples.checkout.success": "Pagamento elaborato con successo",
    "examples.checkout.error":
      "Errore nell'elaborazione del pagamento. Riprova.",
    "examples.checkout.security.error": "Errore di verifica della sicurezza",
    "examples.checkout.secure.payment": "Pagamento sicuro con",

    // Esempi di utilizzo - Analytics
    "examples.analytics.title": "Analytics & Metriche",
    "examples.analytics.realtime": "Metriche in Tempo Reale",
    "examples.analytics.views": "Visualizzazioni",
    "examples.analytics.clicks": "Clic",
    "examples.analytics.signups": "Registrazioni",
    "examples.analytics.trackable": "Azioni Tracciabili",
    "examples.analytics.cta": "🎯 Call to Action (con tracciamento)",
    "examples.analytics.newsletter": "📧 Iscriviti alla Newsletter",
    "examples.analytics.clear": "🗑️ Cancella Metriche",
    "examples.analytics.protected": "Analytics protetto con",
    "examples.analytics.token.title": "Token reCAPTCHA",
    "examples.analytics.events.title": "Log Eventi",
    "examples.analytics.events.empty": "Nessun evento registrato ancora...",
    "examples.analytics.page.view": "Visualizzazione Pagina - Token generato",
    "examples.analytics.event.generated": "Token generato",

    // Prodotti di esempio
    "examples.products.premium": "Prodotto Premium",
    "examples.products.basic": "Prodotto Base",
    "examples.products.deluxe": "Prodotto Deluxe",

    // Link di esempio
    "examples.demo.link": "Vedi esempio demo",
  },
  pt: {
    // Navigation
    "nav.home": "Início",
    "nav.introduction": "Introdução",
    "nav.recaptcha-v2": "ReCaptcha V2",
    "nav.recaptcha-v3": "ReCaptcha V3",
    "nav.start": "Começar",
    "nav.configuration": "Configuração",
    "nav.architecture": "Arquitetura",
    "nav.api-reference": "Referência API",
    "nav.usage-examples": "Exemplos de uso",
    "nav.advanced-configurations": "Configurações avançadas",
    "nav.error-handling": "Tratamento de erros",
    "nav.testing": "Testes",
    "nav.performance": "Performance",
    "nav.migration": "Migração",
    "nav.troubleshooting": "Solução de problemas",
    "nav.backend-integration": "Integração Backend",
    "nav.changelog": "Changelog",
    "nav.contribution": "Contribuição",

    // General UI
    "ui.search": "Pesquisar",
    "ui.menu": "Menu",
    "ui.close": "Fechar",
    "ui.next": "Próximo",
    "ui.previous": "Anterior",
    "ui.page": "Página",

    // SEO and metadata
    "seo.title": "Documentação Google React reCAPTCHA v3",
    "seo.description":
      "Documentação completa para Google React reCAPTCHA v3 - Biblioteca otimizada para React com TypeScript, Trusted Types e recursos de segurança avançados.",
    "seo.keywords":
      "react, recaptcha, recaptcha-v3, recaptcha-v2, google-recaptcha, typescript, react-component, form-validation, bot-protection, trusted-types, performance, optimized, csp, security, documentation, react-recaptcha, react-recaptcha-v2, react-recaptcha-v3",
    "seo.author": "Andres Felipe Hernandez Aldana",
    "seo.site-name": "Documentação Google React reCAPTCHA v3",

    // Specific pages
    "page.introduction.title":
      "Introdução | Documentação Google React reCAPTCHA",
    "page.start.title": "Começar | Documentação Google React reCAPTCHA V3",
    "page.configuration.title":
      "Configuração | Documentação Google React reCAPTCHA V3",
    "page.advanced-configurations.title":
      "Configurações avançadas | Documentação Google React reCAPTCHA V3",
    "page.api-reference.title":
      "Referência API | Documentação Google React reCAPTCHA V3",
    "page.usage-examples.title":
      "Exemplos de uso | Documentação Google React reCAPTCHA V3",
    "page.error-handling.title":
      "Tratamento de erros | Documentação Google React reCAPTCHA V3",

    // Learning
    "learn.recaptcha-v2.title": "O que você vai aprender sobre ReCaptcha V2?",
    "learn.recaptcha-v3.title": "O que você vai aprender sobre ReCaptcha V3?",
    "learn.recaptcha-v2.items": [
      'Como integrar o componente checkbox "Não sou um robô" nos seus formulários.',
      "Implementação do desafio visual com imagens.",
      "Configuração básica e verificação do token.",
      "Exemplo prático para proteger um formulário de contato.",
      "Uso do pacote google-react-recaptcha-v2.",
    ],
    "learn.recaptcha-v3.items": [
      "Instalação e configuração inicial da biblioteca.",
      "Uso do hook useRecaptcha e suas opções de configuração.",
      "Implementação com TypeScript e todas as suas interfaces.",
      "Configurações avançadas: Trusted Types, CSP e multi-idioma.",
      "API completa: serviços, utilitários e constantes predefinidas.",
      "Tratamento de erros comuns e estratégias de recuperação.",
      "Exemplos práticos: formulários de contato, checkout e analytics.",
    ],

    // Introduction content
    "intro.description":
      "Google ReCaptcha é um serviço essencial para proteger aplicações web contra spam, bots e abuso. No React, podemos implementá-lo facilmente usando bibliotecas especializadas para cada versão. Nesta documentação, criada por",
    "intro.author.link": "Andrés Hernández",
    "intro.next.button": "Próxima página",

    // Títulos das seções - Começar
    "start.prerequisites": "Pré-requisitos antes de usar a biblioteca",
    "start.installation": "Instalação",
    "start.basic-usage": "Uso básico",
    "start.visual-example": "Exemplo visual",

    // Títulos das seções - Referência API
    "api.typescript-interfaces": "Interfaces TypeScript",
    "api.services": "Serviços",
    "api.utilities": "Utilitários",
    "api.predefined-constants": "Constantes Predefinidas",

    // Títulos dos exemplos
    "examples.contact-form": "Formulário de contato",
    "examples.ecommerce-checkout": "Checkout e-commerce",
    "examples.analytics-metrics": "Análises e métricas",

    // Conteúdo dos componentes - Começar
    "start.description.main":
      "ReCaptcha V3 é a versão mais avançada do sistema de verificação do Google que opera silenciosamente em segundo plano sem interromper a experiência do usuário. Ao contrário do V2 (que requer interação), V3:",
    "start.description.scoring":
      "Atribui uma pontuação de confiança (0.0 a 1.0) a cada interação.",
    "start.description.scoring.suspicious":
      "0.0: Comportamento suspeito (possível bot).",
    "start.description.scoring.legitimate": "1.0: Tráfego legítimo.",
    "start.description.behavior":
      "Analisa o comportamento do usuário (movimentos do mouse, padrões de navegação, etc.).",
    "start.description.ideal": "É ideal para:",
    "start.description.ideal.forms":
      "Proteção de formulários críticos (logins, pagamentos).",
    "start.description.ideal.monitoring": "Monitoramento contínuo de tráfego.",
    "start.description.ideal.actions":
      "Ações que requerem segurança sem fricção (ex. APIs).",
    "start.prerequisites.keys": "Obter as chaves ReCaptcha V3",
    "start.prerequisites.register": "Registre seu site no",
    "start.prerequisites.console": "Console Google ReCaptcha",
    "start.prerequisites.type":
      "Selecione o tipo V3 e adicione seus domínios (ex. localhost para desenvolvimento).",
    "start.visual.title": "Entrar",
    "start.visual.email": "Email",
    "start.visual.email.placeholder": "email",
    "start.visual.password": "Senha",
    "start.visual.password.placeholder": "***********",
    "start.visual.submit": "Entrar",
    "start.visual.console": "Console",
    "start.visual.console.placeholder": "Console reCAPTCHA",
    "start.visual.author": "Por",
    "start.copy.title": "Copiar código",

    // Contenuto da página principal
    "learn.recaptcha-v2.items.checkbox":
      'Como integrar o componente checkbox "Não sou um robô" nos seus formulários.',
    "learn.recaptcha-v2.items.visual":
      "Implementação do desafio visual com imagens.",
    "learn.recaptcha-v2.items.config":
      "Configuração básica e verificação do token.",
    "learn.recaptcha-v2.items.example":
      "Exemplo prático para proteger um formulário de contato.",
    "learn.recaptcha-v2.items.package":
      "Uso do pacote google-react-recaptcha-v2.",
    "learn.recaptcha-v3.items.install":
      "Instalação e configuração inicial da biblioteca.",
    "learn.recaptcha-v3.items.hook":
      "Uso do hook useRecaptcha e suas opções de configuração.",
    "learn.recaptcha-v3.items.typescript":
      "Implementação com TypeScript e todas as suas interfaces.",
    "learn.recaptcha-v3.items.advanced":
      "Configurações avançadas: Trusted Types, CSP e multi-idioma.",
    "learn.recaptcha-v3.items.api":
      "API completa: serviços, utilitários e constantes predefinidas.",
    "learn.recaptcha-v3.items.errors":
      "Tratamento de erros comuns e estratégias de recuperação.",
    "learn.recaptcha-v3.items.examples":
      "Exemplos práticos: formulários de contato, checkout e analytics.",

    // Subtítulos dos componentes
    "config.base.example": "Exemplo de Configuração Base",
    "config.props.component": "Props do Componente ReCaptchaV3",
    "config.hook.options": "Opções do Hook useReCaptcha",
    "config.hook.example": "Exemplo de Configuração",
    "advanced.multilang": "Configuração Multi-idioma",
    "advanced.timeouts": "Timeouts Personalizados",
    "advanced.trusted.types": "Suporte Trusted Types",
    "advanced.environment": "Configuração por Ambiente",

    // Botões e ações
    "ui.copy.code": "Copiar código",
    "actions.copy.success": "Código copiado",
    "actions.copy.error": "Erro ao copiar",

    // Mensagens de exemplos
    "examples.payment.secure": "Pagamento seguro com",
    "examples.console.placeholder": "Token reCAPTCHA aparecerá aqui...",
    "examples.error.security": "Erro na verificação de segurança",
    "examples.slow.connection":
      "Conexão lenta detectada. Tentando novamente...",

    // Comentários do código
    "code.comments.warning": "Aviso: não use autoExecute",
    "code.comments.optional":
      "Não é necessário usar TRANSACTIONAL_ACTIONS, você pode escrever a ação que quiser",
    "code.comments.recommended": "Recomendado para ações transacionais",

    // API Reference - Componentes
    "api.ref.methods.title": "Métodos Ref",
    "api.ref.methods.comment": "Métodos disponíveis",
    "api.ref.methods.execute":
      "await recaptchaRef.current?.execute(); // Executar manualmente",
    "api.ref.methods.ready":
      "recaptchaRef.current?.isReady(); // Verificar se está pronto",
    "api.ref.methods.reset": "recaptchaRef.current?.reset(); // Reiniciar",
    "api.ref.methods.loading":
      "recaptchaRef.current?.isLoading(); // Verificar se está carregando",

    "api.response.title": "RecaptchaV3Response",
    "api.response.success.comment": "Se a verificação foi bem-sucedida",
    "api.response.score.comment": "Pontuação (0.0 - 1.0)",
    "api.response.action.comment": "Ação verificada",
    "api.response.challenge.comment": "Timestamp do desafio",
    "api.response.hostname.comment": "Hostname onde foi executado",
    "api.response.errors.comment": "Códigos de erro (se houver)",

    "api.execution.result.title": "RecaptchaExecutionResult",
    "api.execution.result.success.comment": "Se a execução foi bem-sucedida",
    "api.execution.result.token.comment": "Token gerado pelo reCAPTCHA",
    "api.execution.result.error.comment": "Erro se a execução falhou",

    "api.service.title": "RecaptchaService",
    "api.service.verify.comment": "Verificar token com o servidor",
    "api.service.execute.comment": "Executar reCAPTCHA manualmente",

    "api.factory.title": "Factory para Testes",
    "api.factory.comment": "Ações incluídas:",
    "api.factory.actions":
      "['login', 'register', 'purchase', 'payment', 'submit', 'checkout', 'order', 'signup', 'signin', 'transaction']",

    "api.script.loader.title": "ScriptLoader",
    "api.script.loader.comment": "Carregar script reCAPTCHA dinamicamente",

    "api.constants.title": "Constantes de Configuração",
    "api.constants.comment": "Constantes predefinidas para configuração",

    "api.transactional.actions.title": "Ações Transacionais",
    "api.transactional.actions.comment": "Ações predefinidas para transações",
    "code.comments.test.key": "Chave de teste",
    "code.comments.slow.network": "Para conexões lentas",
    "code.comments.timeout": "15 segundos",
    "code.comments.security":
      "Para ambientes com políticas de segurança rigorosas",

    // Exemplos de uso - Formulário de contato
    "examples.contact.title": "Formulário de Contato",
    "examples.contact.name": "Nome",
    "examples.contact.name.placeholder": "Digite seu nome",
    "examples.contact.email": "Email",
    "examples.contact.email.placeholder": "seu@email.com",
    "examples.contact.message": "Mensagem",
    "examples.contact.message.placeholder": "Escreva sua mensagem aqui...",
    "examples.contact.submit": "Enviar Mensagem",
    "examples.contact.sending": "Enviando...",
    "examples.contact.success": "Mensagem enviada com sucesso",
    "examples.contact.error": "Erro ao enviar mensagem",
    "examples.contact.protected": "Protegido com",
    "examples.contact.console": "Console",
    "examples.contact.console.placeholder": "Console reCAPTCHA",

    // Exemplos de uso - Checkout Ecommerce
    "examples.checkout.title": "Checkout - Ecommerce",
    "examples.checkout.summary": "Resumo do Pedido",
    "examples.checkout.total": "Total:",
    "examples.checkout.payment.method": "Método de Pagamento",
    "examples.checkout.payment.credit": "Cartão de Crédito",
    "examples.checkout.payment.debit": "Cartão de Débito",
    "examples.checkout.payment.paypal": "PayPal",
    "examples.checkout.pay": "Pagar",
    "examples.checkout.processing": "Processando...",
    "examples.checkout.success": "Pagamento processado com sucesso",
    "examples.checkout.error": "Erro ao processar pagamento. Tente novamente.",
    "examples.checkout.security.error": "Erro na verificação de segurança",
    "examples.checkout.secure.payment": "Pagamento seguro com",

    // Exemplos de uso - Analytics
    "examples.analytics.title": "Analytics & Métricas",
    "examples.analytics.realtime": "Métricas em Tempo Real",
    "examples.analytics.views": "Visualizações",
    "examples.analytics.clicks": "Cliques",
    "examples.analytics.signups": "Inscrições",
    "examples.analytics.trackable": "Ações Rastreáveis",
    "examples.analytics.cta": "🎯 Call to Action (com rastreamento)",
    "examples.analytics.newsletter": "📧 Inscrever-se na Newsletter",
    "examples.analytics.clear": "🗑️ Limpar Métricas",
    "examples.analytics.protected": "Analytics protegido com",
    "examples.analytics.token.title": "Token reCAPTCHA",
    "examples.analytics.events.title": "Log de Eventos",
    "examples.analytics.events.empty": "Nenhum evento registrado ainda...",
    "examples.analytics.page.view": "Visualização de Página - Token gerado",
    "examples.analytics.event.generated": "Token gerado",

    // Produtos de exemplo
    "examples.products.premium": "Produto Premium",
    "examples.products.basic": "Produto Básico",
    "examples.products.deluxe": "Produto Deluxe",

    // Links de exemplo
    "examples.demo.link": "Ver exemplo demo",
  },
  "pt-BR": {
    // Navigation
    "nav.home": "Início",
    "nav.introduction": "Introdução",
    "nav.recaptcha-v2": "ReCaptcha V2",
    "nav.recaptcha-v3": "ReCaptcha V3",
    "nav.start": "Começar",
    "nav.configuration": "Configuração",
    "nav.architecture": "Arquitetura",
    "nav.api-reference": "Referência API",
    "nav.usage-examples": "Exemplos de uso",
    "nav.advanced-configurations": "Configurações avançadas",
    "nav.error-handling": "Tratamento de erros",
    "nav.testing": "Testes",
    "nav.performance": "Performance",
    "nav.migration": "Migração",
    "nav.troubleshooting": "Solução de problemas",
    "nav.backend-integration": "Integração Backend",
    "nav.changelog": "Changelog",
    "nav.contribution": "Contribuição",

    // General UI
    "ui.search": "Pesquisar",
    "ui.menu": "Menu",
    "ui.close": "Fechar",
    "ui.next": "Próximo",
    "ui.previous": "Anterior",
    "ui.page": "Página",

    // SEO and metadata
    "seo.title": "Documentação Google React reCAPTCHA v3",
    "seo.description":
      "Documentação completa para Google React reCAPTCHA v3 - Biblioteca otimizada para React com TypeScript, Trusted Types e recursos de segurança avançados.",
    "seo.keywords":
      "react, recaptcha, recaptcha-v3, recaptcha-v2, google-recaptcha, typescript, react-component, form-validation, bot-protection, trusted-types, performance, optimized, csp, security, documentação, react-recaptcha, react-recaptcha-v2, react-recaptcha-v3",
    "seo.author": "Andres Felipe Hernandez Aldana",
    "seo.site-name": "Documentação Google React reCAPTCHA v3",

    // Specific pages
    "page.introduction.title":
      "Introdução | Documentação Google React reCAPTCHA",
    "page.start.title": "Começar | Documentação Google React reCAPTCHA V3",
    "page.configuration.title":
      "Configuração | Documentação Google React reCAPTCHA V3",
    "page.advanced-configurations.title":
      "Configurações avançadas | Documentação Google React reCAPTCHA V3",
    "page.api-reference.title":
      "Referência API | Documentação Google React reCAPTCHA V3",
    "page.usage-examples.title":
      "Exemplos de uso | Documentação Google React reCAPTCHA V3",
    "page.error-handling.title":
      "Tratamento de erros | Documentação Google React reCAPTCHA V3",

    // Learning
    "learn.recaptcha-v2.title": "O que você vai aprender sobre ReCaptcha V2?",
    "learn.recaptcha-v3.title": "O que você vai aprender sobre ReCaptcha V3?",
    "learn.recaptcha-v2.items": [
      'Como integrar o componente checkbox "Não sou um robô" nos seus formulários.',
      "Implementação do desafio visual com imagens.",
      "Configuração básica e verificação do token.",
      "Exemplo prático para proteger um formulário de contato.",
      "Uso do pacote google-react-recaptcha-v2.",
    ],
    "learn.recaptcha-v3.items": [
      "Instalação e configuração inicial da biblioteca.",
      "Uso do hook useRecaptcha e suas opções de configuração.",
      "Implementação com TypeScript e todas as suas interfaces.",
      "Configurações avançadas: Trusted Types, CSP e multi-idioma.",
      "API completa: serviços, utilitários e constantes predefinidas.",
      "Tratamento de erros comuns e estratégias de recuperação.",
      "Exemplos práticos: formulários de contato, checkout e analytics.",
    ],

    // Introduction content
    "intro.description":
      "Google ReCaptcha é um serviço essencial para proteger aplicações web contra spam, bots e abuso. No React, podemos implementá-lo facilmente usando bibliotecas especializadas para cada versão. Nesta documentação, criada por",
    "intro.author.link": "Andrés Hernández",
    "intro.next.button": "Próxima página",

    // Títulos das seções - Começar
    "start.prerequisites": "Pré-requisitos antes de usar a biblioteca",
    "start.installation": "Instalação",
    "start.basic-usage": "Uso básico",
    "start.visual-example": "Exemplo visual",

    // Títulos das seções - Referência API
    "api.typescript-interfaces": "Interfaces TypeScript",
    "api.services": "Serviços",
    "api.utilities": "Utilitários",
    "api.predefined-constants": "Constantes Predefinidas",

    // Títulos dos exemplos
    "examples.contact-form": "Formulário de contato",
    "examples.ecommerce-checkout": "Checkout e-commerce",
    "examples.analytics-metrics": "Análises e métricas",

    // Conteúdo dos componentes - Começar
    "start.description.main":
      "ReCaptcha V3 é a versão mais avançada do sistema de verificação do Google que opera silenciosamente em segundo plano sem interromper a experiência do usuário. Ao contrário do V2 (que requer interação), V3:",
    "start.description.scoring":
      "Atribui uma pontuação de confiança (0.0 a 1.0) a cada interação.",
    "start.description.scoring.suspicious":
      "0.0: Comportamento suspeito (possível bot).",
    "start.description.scoring.legitimate": "1.0: Tráfego legítimo.",
    "start.description.behavior":
      "Analisa o comportamento do usuário (movimentos do mouse, padrões de navegação, etc.).",
    "start.description.ideal": "É ideal para:",
    "start.description.ideal.forms":
      "Proteção de formulários críticos (logins, pagamentos).",
    "start.description.ideal.monitoring": "Monitoramento contínuo de tráfego.",
    "start.description.ideal.actions":
      "Ações que requerem segurança sem fricção (ex. APIs).",
    "start.prerequisites.keys": "Obter as chaves ReCaptcha V3",
    "start.prerequisites.register": "Registre seu site no",
    "start.prerequisites.console": "Console Google ReCaptcha",
    "start.prerequisites.type":
      "Selecione o tipo V3 e adicione seus domínios (ex. localhost para desenvolvimento).",
    "start.visual.title": "Entrar",
    "start.visual.email": "Email",
    "start.visual.email.placeholder": "email",
    "start.visual.password": "Senha",
    "start.visual.password.placeholder": "***********",
    "start.visual.submit": "Entrar",
    "start.visual.console": "Console",
    "start.visual.console.placeholder": "Console reCAPTCHA",
    "start.visual.author": "Por",
    "start.copy.title": "Copiar código",

    // Contenuto da página principal
    "learn.recaptcha-v2.items.checkbox":
      'Como integrar o componente checkbox "Não sou um robô" nos seus formulários.',
    "learn.recaptcha-v2.items.visual":
      "Implementação do desafio visual com imagens.",
    "learn.recaptcha-v2.items.config":
      "Configuração básica e verificação do token.",
    "learn.recaptcha-v2.items.example":
      "Exemplo prático para proteger um formulário de contato.",
    "learn.recaptcha-v2.items.package":
      "Uso do pacote google-react-recaptcha-v2.",
    "learn.recaptcha-v3.items.install":
      "Instalação e configuração inicial da biblioteca.",
    "learn.recaptcha-v3.items.hook":
      "Uso do hook useRecaptcha e suas opções de configuração.",
    "learn.recaptcha-v3.items.typescript":
      "Implementação com TypeScript e todas as suas interfaces.",
    "learn.recaptcha-v3.items.advanced":
      "Configurações avançadas: Trusted Types, CSP e multi-idioma.",
    "learn.recaptcha-v3.items.api":
      "API completa: serviços, utilitários e constantes predefinidas.",
    "learn.recaptcha-v3.items.errors":
      "Tratamento de erros comuns e estratégias de recuperação.",
    "learn.recaptcha-v3.items.examples":
      "Exemplos práticos: formulários de contato, checkout e analytics.",

    // Subtítulos dos componentes
    "config.base.example": "Exemplo de Configuração Base",
    "config.props.component": "Props do Componente ReCaptchaV3",
    "config.hook.options": "Opções do Hook useReCaptcha",
    "config.hook.example": "Exemplo de Configuração",
    "advanced.multilang": "Configuração Multi-idioma",
    "advanced.timeouts": "Timeouts Personalizados",
    "advanced.trusted.types": "Suporte Trusted Types",
    "advanced.environment": "Configuração por Ambiente",

    // Botões e ações
    "ui.copy.code": "Copiar código",
    "actions.copy.success": "Código copiado",
    "actions.copy.error": "Erro ao copiar",

    // Mensagens de exemplos
    "examples.payment.secure": "Pagamento seguro com",
    "examples.console.placeholder": "Token reCAPTCHA aparecerá aqui...",
    "examples.error.security": "Erro na verificação de segurança",
    "examples.slow.connection":
      "Conexão lenta detectada. Tentando novamente...",

    // Comentários do código
    "code.comments.warning": "Aviso: não use autoExecute",
    "code.comments.optional":
      "Não é necessário usar TRANSACTIONAL_ACTIONS, você pode escrever a ação que quiser",
    "code.comments.recommended": "Recomendado para ações transacionais",
    "code.comments.test.key": "Chave de teste",
    "code.comments.slow.network": "Para conexões lentas",
    "code.comments.timeout": "15 segundos",
    "code.comments.security":
      "Para ambientes com políticas de segurança rigorosas",

    // Exemplos de uso - Formulário de contato
    "examples.contact.title": "Formulário de Contato",
    "examples.contact.name": "Nome",
    "examples.contact.name.placeholder": "Digite seu nome",
    "examples.contact.email": "Email",
    "examples.contact.email.placeholder": "seu@email.com",
    "examples.contact.message": "Mensagem",
    "examples.contact.message.placeholder": "Escreva sua mensagem aqui...",
    "examples.contact.submit": "Enviar Mensagem",
    "examples.contact.sending": "Enviando...",
    "examples.contact.success": "Mensagem enviada com sucesso",
    "examples.contact.error": "Erro ao enviar mensagem",
    "examples.contact.protected": "Protegido com",
    "examples.contact.console": "Console",
    "examples.contact.console.placeholder": "Console reCAPTCHA",

    // Exemplos de uso - Checkout Ecommerce
    "examples.checkout.title": "Checkout - Ecommerce",
    "examples.checkout.summary": "Resumo do Pedido",
    "examples.checkout.total": "Total:",
    "examples.checkout.payment.method": "Método de Pagamento",
    "examples.checkout.payment.credit": "Tarjeta de Crédito",
    "examples.checkout.payment.debit": "Tarjeta de Débito",
    "examples.checkout.payment.paypal": "PayPal",
    "examples.checkout.pay": "Pagar",
    "examples.checkout.processing": "Procesando...",
    "examples.checkout.success": "Pago procesado exitosamente",
    "examples.checkout.error": "Error al procesar el pago. Intente nuevamente.",
    "examples.checkout.security.error": "Error en verificación de seguridad",
    "examples.checkout.secure.payment": "Pago seguro con",

    // Exemplos de uso - Analytics
    "examples.analytics.title": "Analytics & Métricas",
    "examples.analytics.realtime": "Métricas em Tempo Real",
    "examples.analytics.views": "Visualizações",
    "examples.analytics.clicks": "Cliques",
    "examples.analytics.signups": "Inscrições",
    "examples.analytics.trackable": "Ações Rastreáveis",
    "examples.analytics.cta": "🎯 Call to Action (com rastreamento)",
    "examples.analytics.newsletter": "📧 Inscrever-se na Newsletter",
    "examples.analytics.clear": "🗑️ Limpar Métricas",
    "examples.analytics.protected": "Analytics protegido com",
    "examples.analytics.token.title": "Token reCAPTCHA",
    "examples.analytics.events.title": "Log de Eventos",
    "examples.analytics.events.empty": "Nenhum evento registrado ainda...",
    "examples.analytics.page.view": "Visualização de Página - Token gerado",
    "examples.analytics.event.generated": "Token gerado",

    // Produtos de exemplo
    "examples.products.premium": "Produto Premium",
    "examples.products.basic": "Produto Básico",
    "examples.products.deluxe": "Produto Deluxe",

    // Links de exemplo
    "examples.demo.link": "Ver exemplo demo",
  },
  ja: {
    // Navigation
    "nav.home": "ホーム",
    "nav.introduction": "はじめに",
    "nav.recaptcha-v2": "ReCaptcha V2",
    "nav.recaptcha-v3": "ReCaptcha V3",
    "nav.start": "スタート",
    "nav.configuration": "設定",
    "nav.architecture": "アーキテクチャ",
    "nav.api-reference": "APIリファレンス",
    "nav.usage-examples": "使用例",
    "nav.advanced-configurations": "高度な設定",
    "nav.error-handling": "エラーハンドリング",
    "nav.testing": "テスト",
    "nav.performance": "パフォーマンス",
    "nav.migration": "マイグレーション",
    "nav.troubleshooting": "トラブルシューティング",
    "nav.backend-integration": "バックエンド統合",
    "nav.changelog": "チェンジログ",
    "nav.contribution": "コントリビューション",

    // General UI
    "ui.search": "検索",
    "ui.menu": "メニュー",
    "ui.close": "閉じる",
    "ui.next": "次へ",
    "ui.previous": "前へ",
    "ui.page": "ページ",

    // SEO and metadata
    "seo.title": "Google React reCAPTCHA v3 ドキュメント",
    "seo.description":
      "Google React reCAPTCHA v3の完全なドキュメント - TypeScript、Trusted Types、高度なセキュリティ機能を備えたReact用最適化ライブラリ。",
    "seo.keywords":
      "react, recaptcha, recaptcha-v3, recaptcha-v2, google-recaptcha, typescript, react-component, form-validation, bot-protection, trusted-types, performance, optimized, csp, security, documentation, react-recaptcha, react-recaptcha-v2, react-recaptcha-v3",
    "seo.author": "Andres Felipe Hernandez Aldana",
    "seo.site-name": "Google React reCAPTCHA v3 ドキュメント",

    // Specific pages
    "page.introduction.title": "はじめに | Google React reCAPTCHA ドキュメント",
    "page.start.title": "スタート | Google React reCAPTCHA V3 ドキュメント",
    "page.configuration.title": "設定 | Google React reCAPTCHA V3 ドキュメント",
    "page.advanced-configurations.title":
      "高度な設定 | Google React reCAPTCHA V3 ドキュメント",
    "page.api-reference.title":
      "APIリファレンス | Google React reCAPTCHA V3 ドキュメント",
    "page.usage-examples.title":
      "使用例 | Google React reCAPTCHA V3 ドキュメント",
    "page.error-handling.title":
      "エラーハンドリング | Google React reCAPTCHA V3 ドキュメント",

    // Learning
    "learn.recaptcha-v2.title": "ReCaptcha V2について学ぶこと",
    "learn.recaptcha-v3.title": "ReCaptcha V3について学ぶこと",
    "learn.recaptcha-v2.items": [
      "フォームに「私はロボットではありません」チェックボックスコンポーネントを統合する方法。",
      "画像を使用した視覚的チャレンジの実装。",
      "基本設定とトークンの検証。",
      "お問い合わせフォームを保護する実用的な例。",
      "google-react-recaptcha-v2パッケージの使用。",
    ],
    "learn.recaptcha-v3.items": [
      "ライブラリのインストールと初期設定。",
      "useRecaptchaフックとその設定オプションの使用。",
      "TypeScriptとすべてのインターフェースでの実装。",
      "高度な設定：Trusted Types、CSP、多言語対応。",
      "完全なAPI：サービス、ユーティリティ、定義済み定数。",
      "一般的なエラーハンドリングと回復戦略。",
      "実用的な例：お問い合わせフォーム、チェックアウト、アナリティクス。",
    ],

    // Introduction content
    "intro.description":
      "Google ReCaptchaは、Webアプリケーションをスパム、ボット、悪用から保護するための重要なサービスです。Reactでは、各バージョンに特化したライブラリを使用して簡単に実装できます。このドキュメントは、",
    "intro.author.link": "Andrés Hernández",
    "intro.next.button": "次のページ",

    // セクションタイトル - 開始
    "start.prerequisites": "ライブラリ使用前の前提条件",
    "start.installation": "インストール",
    "start.basic-usage": "基本的な使用方法",
    "start.visual-example": "視覚的な例",

    // セクションタイトル - APIリファレンス
    "api.typescript-interfaces": "TypeScriptインターフェース",
    "api.services": "サービス",
    "api.utilities": "ユーティリティ",
    "api.predefined-constants": "定義済み定数",

    // 例のタイトル
    "examples.contact-form": "コンタクトフォーム",
    "examples.ecommerce-checkout": "Eコマースチェックアウト",
    "examples.analytics-metrics": "アナリティクスとメトリクス",

    // コンポーネントの内容 - 開始
    "start.description.main":
      "ReCaptcha V3は、ユーザーエクスペリエンスを中断することなく、バックグラウンドで静かに動作するGoogleの検証システムの最も高度なバージョンです。V2（インタラクションが必要）とは異なり、V3:",
    "start.description.scoring":
      "各インタラクションに信頼スコア（0.0〜1.0）を割り当てます。",
    "start.description.scoring.suspicious":
      "0.0: 疑わしい行動（ボットの可能性）。",
    "start.description.scoring.legitimate": "1.0: 正当なトラフィック。",
    "start.description.behavior":
      "ユーザーの行動（マウスの動き、ナビゲーションパターンなど）を分析します。",
    "start.description.ideal": "以下に最適です：",
    "start.description.ideal.forms":
      "重要なフォームの保護（ログイン、支払い）。",
    "start.description.ideal.monitoring": "継続的なトラフィック監視。",
    "start.description.ideal.actions":
      "摩擦なしでセキュリティが必要なアクション（例：API）。",
    "start.prerequisites.keys": "ReCaptcha V3キーの取得",
    "start.prerequisites.register": "サイトを登録する",
    "start.prerequisites.console": "Google ReCaptcha コンソール",
    "start.prerequisites.type":
      "V3タイプを選択し、ドメインを追加（例：開発用localhost）。",
    "start.visual.title": "サインイン",
    "start.visual.email": "メール",
    "start.visual.email.placeholder": "メール",
    "start.visual.password": "パスワード",
    "start.visual.password.placeholder": "***********",
    "start.visual.submit": "サインイン",
    "start.visual.console": "コンソール",
    "start.visual.console.placeholder": "reCAPTCHA コンソール",
    "start.visual.author": "作成者",
    "start.copy.title": "コードをコピー",

    // メインページの内容
    "learn.recaptcha-v2.items.checkbox":
      "フォームに「私はロボットではありません」チェックボックスコンポーネントを統合する方法。",
    "learn.recaptcha-v2.items.visual": "画像を使用した視覚的チャレンジの実装。",
    "learn.recaptcha-v2.items.config": "基本設定とトークンの検証。",
    "learn.recaptcha-v2.items.example":
      "お問い合わせフォームを保護する実用的な例。",
    "learn.recaptcha-v2.items.package":
      "google-react-recaptcha-v2パッケージの使用。",
    "learn.recaptcha-v3.items.install": "ライブラリのインストールと初期設定。",
    "learn.recaptcha-v3.items.hook":
      "useRecaptchaフックとその設定オプションの使用。",
    "learn.recaptcha-v3.items.typescript":
      "TypeScriptとすべてのインターフェースでの実装。",
    "learn.recaptcha-v3.items.advanced":
      "高度な設定：Trusted Types、CSP、多言語対応。",
    "learn.recaptcha-v3.items.api":
      "完全なAPI：サービス、ユーティリティ、定義済み定数。",
    "learn.recaptcha-v3.items.errors": "一般的なエラーハンドリングと回復戦略。",
    "learn.recaptcha-v3.items.examples":
      "実用的な例：お問い合わせフォーム、チェックアウト、アナリティクス。",

    // コンポーネントのサブタイトル
    "config.base.example": "基本設定例",
    "config.props.component": "ReCaptchaV3コンポーネントProps",
    "config.hook.options": "useRecaptchaフックオプション",
    "config.hook.example": "設定例",
    "advanced.multilang": "多言語設定",
    "advanced.timeouts": "カスタムタイムアウト",
    "advanced.trusted.types": "Trusted Typesサポート",
    "advanced.environment": "環境設定",

    // ボタンとアクション
    "ui.copy.code": "コードをコピー",
    "actions.copy.success": "コードがコピーされました",
    "actions.copy.error": "コピーエラー",

    // 例のメッセージ
    "examples.payment.secure": "セキュアな支払い",
    "examples.console.placeholder": "reCAPTCHAトークンがここに表示されます...",
    "examples.error.security": "セキュリティ検証エラー",
    "examples.slow.connection": "低速接続が検出されました。再試行中...",

    // コードコメント
    "code.comments.warning": "警告：autoExecuteを使用しないでください",
    "code.comments.optional":
      "TRANSACTIONAL_ACTIONSを使用する必要はありません。任意のアクションを書くことができます",
    "code.comments.recommended": "トランザクションアクションに推奨",
    "code.comments.test.key": "テストキー",
    "code.comments.slow.network": "低速接続用",
    "code.comments.timeout": "15秒",
    "code.comments.security": "厳格なセキュリティポリシーを持つ環境用",

    // 使用例 - お問い合わせフォーム
    "examples.contact.title": "お問い合わせフォーム",
    "examples.contact.name": "名前",
    "examples.contact.name.placeholder": "お名前を入力してください",
    "examples.contact.email": "メール",
    "examples.contact.email.placeholder": "your@email.com",
    "examples.contact.message": "メッセージ",
    "examples.contact.message.placeholder":
      "メッセージをここに書いてください...",
    "examples.contact.submit": "メッセージを送信",
    "examples.contact.sending": "送信中...",
    "examples.contact.success": "メッセージが正常に送信されました",
    "examples.contact.error": "メッセージの送信エラー",
    "examples.contact.protected": "保護されています",
    "examples.contact.console": "コンソール",
    "examples.contact.console.placeholder": "reCAPTCHAコンソール",

    // 使用例 - Eコマースチェックアウト
    "examples.checkout.title": "チェックアウト - Eコマース",
    "examples.checkout.summary": "注文サマリー",
    "examples.checkout.total": "合計:",
    "examples.checkout.payment.method": "支払い方法",
    "examples.checkout.payment.credit": "クレジットカード",
    "examples.checkout.payment.debit": "デビットカード",
    "examples.checkout.payment.paypal": "PayPal",
    "examples.checkout.pay": "支払う",
    "examples.checkout.processing": "処理中...",
    "examples.checkout.success": "支払いが正常に処理されました",
    "examples.checkout.error": "支払い処理エラー。もう一度お試しください。",
    "examples.checkout.security.error": "セキュリティ検証エラー",
    "examples.checkout.secure.payment": "安全な支払い",

    // 使用例 - アナリティクス
    "examples.analytics.title": "アナリティクス & メトリクス",
    "examples.analytics.realtime": "リアルタイムメトリクス",
    "examples.analytics.views": "ビュー",
    "examples.analytics.clicks": "クリック",
    "examples.analytics.signups": "登録",
    "examples.analytics.trackable": "追跡可能なアクション",
    "examples.analytics.cta": "🎯 コールトゥアクション（追跡付き）",
    "examples.analytics.newsletter": "📧 ニュースレターに登録",
    "examples.analytics.clear": "🗑️ メトリクスをクリア",
    "examples.analytics.protected": "アナリティクスは保護されています",
    "examples.analytics.token.title": "reCAPTCHAトークン",
    "examples.analytics.events.title": "イベントログ",
    "examples.analytics.events.empty": "まだイベントが記録されていません...",
    "examples.analytics.page.view": "ページビュー - トークン生成",
    "examples.analytics.event.generated": "トークン生成",

    // サンプル商品
    "examples.products.premium": "プレミアム商品",
    "examples.products.basic": "ベーシック商品",
    "examples.products.deluxe": "デラックス商品",

    // サンプルリンク
    "examples.demo.link": "デモ例を見る",

    // API Reference - Componentes
    "api.ref.methods.title": "Ref Methods",
    "api.ref.methods.comment": "利用可能なメソッド",
    "api.ref.methods.execute":
      "await recaptchaRef.current?.execute(); // 手動で実行",
    "api.ref.methods.ready":
      "recaptchaRef.current?.isReady(); // 準備完了かチェック",
    "api.ref.methods.reset": "recaptchaRef.current?.reset(); // リセット",
    "api.ref.methods.loading":
      "recaptchaRef.current?.isLoading(); // 読み込み中かチェック",

    "api.response.title": "RecaptchaV3Response",
    "api.response.success.comment": "検証が成功した場合",
    "api.response.score.comment": "スコア (0.0 - 1.0)",
    "api.response.action.comment": "検証されたアクション",
    "api.response.challenge.comment": "チャレンジのタイムスタンプ",
    "api.response.hostname.comment": "実行されたホスト名",
    "api.response.errors.comment": "エラーコード（ある場合）",

    "api.execution.result.title": "RecaptchaExecutionResult",
    "api.execution.result.success.comment": "実行が成功した場合",
    "api.execution.result.token.comment": "reCAPTCHAによって生成されたトークン",
    "api.execution.result.error.comment": "実行が失敗した場合のエラー",

    "api.service.title": "RecaptchaService",
    "api.service.verify.comment": "サーバーでトークンを検証",
    "api.service.execute.comment": "reCAPTCHAを手動で実行",

    "api.factory.title": "テスト用ファクトリー",
    "api.factory.comment": "含まれるアクション:",
    "api.factory.actions":
      "['login', 'register', 'purchase', 'payment', 'submit', 'checkout', 'order', 'signup', 'signin', 'transaction']",

    "api.script.loader.title": "ScriptLoader",
    "api.script.loader.comment": "reCAPTCHAスクリプトを動的に読み込み",

    "api.constants.title": "設定定数",
    "api.constants.comment": "設定用の事前定義された定数",

    "api.transactional.actions.title": "トランザクションアクション",
    "api.transactional.actions.comment":
      "トランザクション用の事前定義されたアクション",

    // Manejo de Errores - Componentes
    "errors.types.title": "一般的なエラータイプ",
    "errors.types.script.load": "1. スクリプト読み込みエラー",
    "errors.types.timeout": "2. 初期化タイムアウト",
    "errors.types.invalid.key": "3. 無効なサイトキー",

    "errors.recovery.title": "回復戦略",
    "errors.recovery.retry": "自動リトライ",
    "errors.recovery.fallback": "reCAPTCHAなしのフォールバック",
    "errors.recovery.logging": "エラーログ",

    // Comentarios en código de manejo de errores
    "errors.code.script.blocked":
      "スクリプトがブロックされているか、ネットワークが遅い",
    "errors.code.script.load": "reCAPTCHAスクリプトが読み込めませんでした",
    "errors.code.script.user":
      "ユーザーにメッセージを表示するか、フォールバック",
    "errors.code.timeout.retry": "再試行するか、メッセージを表示",
    "errors.code.timeout.load": "reCAPTCHAの読み込みに時間がかかりすぎました",
    "errors.code.invalid.notify": "開発者に通知",
    "errors.code.retry.count": "同じキーで再試行するか、フォールバックを使用",
    "errors.code.retry.fallback": "最終フォールバック - reCAPTCHAを無効化",
    "errors.code.retry.warn": "reCAPTCHAが複数回失敗しました、無効化中...",
    "errors.code.fallback.validation": "代替検証が必要:",
    "errors.code.fallback.question": "2 + 2は何ですか？",
    "errors.code.fallback.send": "送信",
    "errors.code.logging.local": "ローカルログ",
    "errors.code.logging.service": "ログサービスに送信",
    "errors.code.logging.warn": "エラーログを送信できませんでした:",
  },
  ko: {
    // Navigation
    "nav.home": "홈",
    "nav.introduction": "소개",
    "nav.recaptcha-v2": "ReCaptcha V2",
    "nav.recaptcha-v3": "ReCaptcha V3",
    "nav.start": "시작하기",
    "nav.configuration": "구성",
    "nav.architecture": "아키텍처",
    "nav.api-reference": "API 참조",
    "nav.usage-examples": "사용 예제",
    "nav.advanced-configurations": "고급 구성",
    "nav.error-handling": "오류 처리",
    "nav.testing": "테스트",
    "nav.performance": "성능",
    "nav.migration": "마이그레이션",
    "nav.troubleshooting": "문제 해결",
    "nav.backend-integration": "백엔드 통합",
    "nav.changelog": "변경사항",
    "nav.contribution": "기여",

    // General UI
    "ui.search": "검색",
    "ui.menu": "메뉴",
    "ui.close": "닫기",
    "ui.next": "다음",
    "ui.previous": "이전",
    "ui.page": "페이지",

    // SEO and metadata
    "seo.title": "Google React reCAPTCHA v3 문서",
    "seo.description":
      "Google React reCAPTCHA v3의 완전한 문서 - TypeScript, Trusted Types 및 고급 보안 기능을 갖춘 React용 최적화 라이브러리.",
    "seo.keywords":
      "react, recaptcha, recaptcha-v3, recaptcha-v2, google-recaptcha, typescript, react-component, form-validation, bot-protection, trusted-types, performance, optimized, csp, security, documentation, react-recaptcha, react-recaptcha-v2, react-recaptcha-v3",
    "seo.author": "Andres Felipe Hernandez Aldana",
    "seo.site-name": "Google React reCAPTCHA v3 문서",

    // Specific pages
    "page.introduction.title": "소개 | Google React reCAPTCHA 문서",
    "page.start.title": "시작하기 | Google React reCAPTCHA V3 문서",
    "page.configuration.title": "구성 | Google React reCAPTCHA V3 문서",
    "page.advanced-configurations.title":
      "고급 구성 | Google React reCAPTCHA V3 문서",
    "page.api-reference.title": "API 참조 | Google React reCAPTCHA V3 문서",
    "page.usage-examples.title": "사용 예제 | Google React reCAPTCHA V3 문서",
    "page.error-handling.title": "오류 처리 | Google React reCAPTCHA V3 문서",

    // Learning
    "learn.recaptcha-v2.title": "ReCaptcha V2에 대해 배울 내용",
    "learn.recaptcha-v3.title": "ReCaptcha V3에 대해 배울 내용",
    "learn.recaptcha-v2.items": [
      '폼에 "나는 로봇이 아닙니다" 체크박스 컴포넌트를 통합하는 방법.',
      "이미지를 사용한 시각적 도전의 구현.",
      "기본 구성 및 토큰 검증.",
      "연락처 폼을 보호하는 실용적인 예제.",
      "google-react-recaptcha-v2 패키지 사용.",
    ],
    "learn.recaptcha-v3.items": [
      "라이브러리 설치 및 초기 구성.",
      "useRecaptcha 훅 및 구성 옵션 사용.",
      "TypeScript 및 모든 인터페이스로 구현.",
      "고급 구성: Trusted Types, CSP 및 다국어.",
      "완전한 API: 서비스, 유틸리티 및 미리 정의된 상수.",
      "일반적인 오류 처리 및 복구 전략.",
      "실용적인 예제: 연락처 폼, 체크아웃 및 분석.",
    ],

    // Introduction content
    "intro.description":
      "Google ReCaptcha는 웹 애플리케이션을 스팸, 봇 및 악용으로부터 보호하기 위한 필수 서비스입니다. React에서는 각 버전에 특화된 라이브러리를 사용하여 쉽게 구현할 수 있습니다. 이 문서는",
    "intro.author.link": "Andrés Hernández",
    "intro.next.button": "다음 페이지",

    // 섹션 제목 - 시작하기
    "start.prerequisites": "라이브러리 사용 전 전제 조건",
    "start.installation": "설치",
    "start.basic-usage": "기본 사용법",
    "start.visual-example": "시각적 예제",

    // 섹션 제목 - API 참조
    "api.typescript-interfaces": "TypeScript 인터페이스",
    "api.services": "서비스",
    "api.utilities": "유틸리티",
    "api.predefined-constants": "미리 정의된 상수",

    // 예제 제목
    "examples.contact-form": "연락처 양식",
    "examples.ecommerce-checkout": "전자상거래 체크아웃",
    "examples.analytics-metrics": "분석 및 메트릭",

    // 컴포넌트 내용 - 시작하기
    "start.description.main":
      "ReCaptcha V3는 사용자 경험을 방해하지 않고 백그라운드에서 조용히 작동하는 Google 검증 시스템의 가장 고급 버전입니다. 상호 작용이 필요한 V2와 달리 V3:",
    "start.description.scoring":
      "각 상호 작용에 신뢰 점수(0.0~1.0)를 할당합니다.",
    "start.description.scoring.suspicious": "0.0: 의심스러운 행동(봇 가능성).",
    "start.description.scoring.legitimate": "1.0: 정당한 트래픽.",
    "start.description.behavior":
      "사용자 행동(마우스 움직임, 탐색 패턴 등)을 분석합니다.",
    "start.description.ideal": "다음에 이상적입니다:",
    "start.description.ideal.forms": "중요한 양식 보호(로그인, 결제).",
    "start.description.ideal.monitoring": "지속적인 트래픽 모니터링.",
    "start.description.ideal.actions": "마찰 없이 보안이 필요한 작업(예: API).",
    "start.prerequisites.keys": "ReCaptcha V3 키 얻기",
    "start.prerequisites.register": "사이트를 등록하세요",
    "start.prerequisites.console": "Google ReCaptcha 콘솔",
    "start.prerequisites.type":
      "V3 유형을 선택하고 도메인을 추가하세요(예: 개발용 localhost).",
    "start.visual.title": "로그인",
    "start.visual.email": "이메일",
    "start.visual.email.placeholder": "이메일",
    "start.visual.password": "비밀번호",
    "start.visual.password.placeholder": "***********",
    "start.visual.submit": "로그인",
    "start.visual.console": "콘솔",
    "start.visual.console.placeholder": "reCAPTCHA 콘솔",
    "start.visual.author": "작성자",
    "start.copy.title": "코드 복사",

    // 메인 페이지 내용
    "learn.recaptcha-v2.items.checkbox":
      '폼에 "나는 로봇이 아닙니다" 체크박스 컴포넌트를 통합하는 방법.',
    "learn.recaptcha-v2.items.visual": "이미지를 사용한 시각적 도전의 구현.",
    "learn.recaptcha-v2.items.config": "기본 구성 및 토큰 검증.",
    "learn.recaptcha-v2.items.example": "연락처 폼을 보호하는 실용적인 예제.",
    "learn.recaptcha-v2.items.package":
      "google-react-recaptcha-v2 패키지 사용.",
    "learn.recaptcha-v3.items.install": "라이브러리 설치 및 초기 구성.",
    "learn.recaptcha-v3.items.hook": "useRecaptcha 훅 및 구성 옵션 사용.",
    "learn.recaptcha-v3.items.typescript":
      "TypeScript 및 모든 인터페이스로 구현.",
    "learn.recaptcha-v3.items.advanced":
      "고급 구성: Trusted Types, CSP 및 다국어.",
    "learn.recaptcha-v3.items.api":
      "완전한 API: 서비스, 유틸리티 및 미리 정의된 상수.",
    "learn.recaptcha-v3.items.errors": "일반적인 오류 처리 및 복구 전략.",
    "learn.recaptcha-v3.items.examples":
      "실용적인 예제: 연락처 폼, 체크아웃 및 분석.",

    // 컴포넌트 부제목
    "config.base.example": "기본 구성 예제",
    "config.props.component": "ReCaptchaV3 컴포넌트 Props",
    "config.hook.options": "useRecaptcha 훅 옵션",
    "config.hook.example": "구성 예제",
    "advanced.multilang": "다국어 구성",
    "advanced.timeouts": "사용자 정의 타임아웃",
    "advanced.trusted.types": "Trusted Types 지원",
    "advanced.environment": "환경 구성",

    // 버튼 및 액션
    "ui.copy.code": "코드 복사",
    "actions.copy.success": "코드가 복사되었습니다",
    "actions.copy.error": "복사 오류",

    // 예제 메시지
    "examples.payment.secure": "안전한 결제",
    "examples.console.placeholder": "reCAPTCHA 토큰이 여기에 나타납니다...",
    "examples.error.security": "보안 검증 오류",
    "examples.slow.connection": "느린 연결이 감지되었습니다. 재시도 중...",

    // 코드 주석
    "code.comments.warning": "경고: autoExecute를 사용하지 마세요",
    "code.comments.optional":
      "TRANSACTIONAL_ACTIONS를 사용할 필요가 없습니다. 원하는 액션을 작성할 수 있습니다",
    "code.comments.recommended": "거래 액션에 권장",
    "code.comments.test.key": "테스트 키",
    "code.comments.slow.network": "느린 연결용",
    "code.comments.timeout": "15초",
    "code.comments.security": "엄격한 보안 정책을 가진 환경용",

    // 사용 예제 - 연락처 폼
    "examples.contact.title": "연락처 폼",
    "examples.contact.name": "이름",
    "examples.contact.name.placeholder": "이름을 입력하세요",
    "examples.contact.email": "이메일",
    "examples.contact.email.placeholder": "your@email.com",
    "examples.contact.message": "메시지",
    "examples.contact.message.placeholder": "메시지를 여기에 작성하세요...",
    "examples.contact.submit": "메시지 보내기",
    "examples.contact.sending": "전송 중...",
    "examples.contact.success": "메시지가 성공적으로 전송되었습니다",
    "examples.contact.error": "메시지 전송 오류",
    "examples.contact.protected": "보호됨",
    "examples.contact.console": "콘솔",
    "examples.contact.console.placeholder": "reCAPTCHA 콘솔",

    // 사용 예제 - E커머스 체크아웃
    "examples.checkout.title": "체크아웃 - E커머스",
    "examples.checkout.summary": "주문 요약",
    "examples.checkout.total": "총액:",
    "examples.checkout.payment.method": "결제 방법",
    "examples.checkout.payment.credit": "신용카드",
    "examples.checkout.payment.debit": "체크카드",
    "examples.checkout.payment.paypal": "PayPal",
    "examples.checkout.pay": "결제",
    "examples.checkout.processing": "처리 중...",
    "examples.checkout.success": "결제가 성공적으로 처리되었습니다",
    "examples.checkout.error": "결제 처리 오류. 다시 시도해 주세요.",
    "examples.checkout.security.error": "보안 검증 오류",
    "examples.checkout.secure.payment": "안전한 결제",

    // 사용 예제 - 분석
    "examples.analytics.title": "분석 & 메트릭",
    "examples.analytics.realtime": "실시간 메트릭",
    "examples.analytics.views": "조회수",
    "examples.analytics.clicks": "클릭",
    "examples.analytics.signups": "가입",
    "examples.analytics.trackable": "추적 가능한 작업",
    "examples.analytics.cta": "🎯 행동 유도 (추적 포함)",
    "examples.analytics.newsletter": "📧 뉴스레터 구독",
    "examples.analytics.clear": "🗑️ 메트릭 지우기",
    "examples.analytics.protected": "분석이 보호됨",
    "examples.analytics.token.title": "reCAPTCHA 토큰",
    "examples.analytics.events.title": "이벤트 로그",
    "examples.analytics.events.empty": "아직 기록된 이벤트가 없습니다...",
    "examples.analytics.page.view": "페이지 뷰 - 토큰 생성",
    "examples.analytics.event.generated": "토큰 생성",

    // 샘플 제품
    "examples.products.premium": "프리미엄 제품",
    "examples.products.basic": "기본 제품",
    "examples.products.deluxe": "델럭스 제품",

    // 샘플 링크
    "examples.demo.link": "데모 예제 보기",

    // API Reference - Componentes
    "api.ref.methods.title": "Ref Methods",
    "api.ref.methods.comment": "사용 가능한 메서드",
    "api.ref.methods.execute":
      "await recaptchaRef.current?.execute(); // 수동으로 실행",
    "api.ref.methods.ready":
      "recaptchaRef.current?.isReady(); // 준비되었는지 확인",
    "api.ref.methods.reset": "recaptchaRef.current?.reset(); // 재설정",
    "api.ref.methods.loading":
      "recaptchaRef.current?.isLoading(); // 로딩 중인지 확인",

    "api.response.title": "RecaptchaV3Response",
    "api.response.success.comment": "검증이 성공한 경우",
    "api.response.score.comment": "점수 (0.0 - 1.0)",
    "api.response.action.comment": "검증된 액션",
    "api.response.challenge.comment": "챌린지 타임스탬프",
    "api.response.hostname.comment": "실행된 호스트명",
    "api.response.errors.comment": "오류 코드 (있는 경우)",

    "api.execution.result.title": "RecaptchaExecutionResult",
    "api.execution.result.success.comment": "실행이 성공한 경우",
    "api.execution.result.token.comment": "reCAPTCHA에 의해 생성된 토큰",
    "api.execution.result.error.comment": "실행이 실패한 경우의 오류",

    "api.service.title": "RecaptchaService",
    "api.service.verify.comment": "서버에서 토큰 검증",
    "api.service.execute.comment": "reCAPTCHA를 수동으로 실행",

    "api.factory.title": "테스트용 팩토리",
    "api.factory.comment": "포함된 액션:",
    "api.factory.actions":
      "['login', 'register', 'purchase', 'payment', 'submit', 'checkout', 'order', 'signup', 'signin', 'transaction']",

    "api.script.loader.title": "ScriptLoader",
    "api.script.loader.comment": "reCAPTCHA 스크립트를 동적으로 로드",

    "api.constants.title": "구성 상수",
    "api.constants.comment": "구성을 위한 사전 정의된 상수",

    "api.transactional.actions.title": "트랜잭션 액션",
    "api.transactional.actions.comment": "트랜잭션을 위한 사전 정의된 액션",

    // Manejo de Errores - Componentes
    "errors.types.title": "일반적인 오류 유형",
    "errors.types.script.load": "1. 스크립트 로드 오류",
    "errors.types.timeout": "2. 초기화 타임아웃",
    "errors.types.invalid.key": "3. 잘못된 사이트 키",

    "errors.recovery.title": "복구 전략",
    "errors.recovery.retry": "자동 재시도",
    "errors.recovery.fallback": "reCAPTCHA 없는 폴백",
    "errors.recovery.logging": "오류 로깅",

    // Comentarios en código de manejo de errores
    "errors.code.script.blocked": "스크립트가 차단되었거나 네트워크가 느림",
    "errors.code.script.load": "reCAPTCHA 스크립트를 로드할 수 없었습니다",
    "errors.code.script.user": "사용자에게 메시지를 표시하거나 폴백",
    "errors.code.timeout.retry": "다시 시도하거나 메시지 표시",
    "errors.code.timeout.load": "reCAPTCHA 로드에 너무 오래 걸렸습니다",
    "errors.code.invalid.notify": "개발자에게 알림",
    "errors.code.retry.count": "같은 키로 다시 시도하거나 폴백 사용",
    "errors.code.retry.fallback": "최종 폴백 - reCAPTCHA 비활성화",
    "errors.code.retry.warn":
      "reCAPTCHA가 여러 번 실패했습니다, 비활성화 중...",
    "errors.code.fallback.validation": "대체 검증이 필요합니다:",
    "errors.code.fallback.question": "2 + 2는 무엇입니까?",
    "errors.code.fallback.send": "보내기",
    "errors.code.logging.local": "로컬 로그",
    "errors.code.logging.service": "로그 서비스로 보내기",
    "errors.code.logging.warn": "오류 로그를 보낼 수 없었습니다:",
  },
} as const;
