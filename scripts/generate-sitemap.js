import fs from 'fs';
import path from 'path';

// Configuración del sitio
const SITE_URL = 'https://andresh11.github.io/recaptcha-documentation';
const LANGUAGES = ['es', 'en', 'fr', 'it', 'pt', 'pt-BR', 'ja', 'ko'];
const DEFAULT_LANG = 'es';

// Rutas principales del sitio
const MAIN_ROUTES = [
  '',
  'recaptchatV3/comenzar',
  'recaptchatV3/configuracion',
  'recaptchatV3/configuraciones-avanzadas',
  'recaptchatV3/api-referencia',
  'recaptchatV3/ejemplos-de-usos',
  'recaptchatV3/manejo-de-errores',
  'recaptchatV3/ejemplos/formulario-contacto',
  'recaptchatV3/ejemplos/ecommerce-checkout',
  'recaptchatV3/ejemplos/analiticas-y-metricas'
];

// Configuración de prioridades y frecuencias
const PAGE_CONFIG = {
  '': { priority: 1.0, changefreq: 'weekly' },
  'recaptchatV3/comenzar': { priority: 0.9, changefreq: 'weekly' },
  'recaptchatV3/configuracion': { priority: 0.8, changefreq: 'weekly' },
  'recaptchatV3/api-referencia': { priority: 0.8, changefreq: 'monthly' },
  'recaptchatV3/configuraciones-avanzadas': { priority: 0.7, changefreq: 'monthly' },
  'recaptchatV3/ejemplos-de-usos': { priority: 0.7, changefreq: 'weekly' },
  'recaptchatV3/manejo-de-errores': { priority: 0.6, changefreq: 'monthly' },
  'recaptchatV3/ejemplos/formulario-contacto': { priority: 0.6, changefreq: 'monthly' },
  'recaptchatV3/ejemplos/ecommerce-checkout': { priority: 0.6, changefreq: 'monthly' },
  'recaptchatV3/ejemplos/analiticas-y-metricas': { priority: 0.6, changefreq: 'monthly' }
};

function generateSitemap() {
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">

`;

  // Página principal con hreflang
  sitemap += `  <!-- Página principal en español (idioma por defecto) -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
`;

  // Agregar hreflang para la página principal
  LANGUAGES.forEach(lang => {
    const href = lang === DEFAULT_LANG ? `${SITE_URL}/` : `${SITE_URL}/${lang}/`;
    sitemap += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />
`;
  });
  
  sitemap += `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />
  </url>

`;

  // Páginas principales en otros idiomas
  LANGUAGES.filter(lang => lang !== DEFAULT_LANG).forEach(lang => {
    sitemap += `  <url>
    <loc>${SITE_URL}/${lang}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
  });

  // Generar URLs para cada idioma y ruta
  LANGUAGES.forEach(lang => {
    const isDefaultLang = lang === DEFAULT_LANG;
    const langPrefix = isDefaultLang ? '' : `/${lang}`;
    
    // Determinar prioridad base según el idioma
    const basePriorityMultiplier = lang === 'es' ? 1.0 : 
                                  lang === 'en' ? 0.9 : 
                                  0.8;

    sitemap += `
  <!-- Páginas de reCAPTCHA V3 - ${getLanguageName(lang)} ${isDefaultLang ? '(alta prioridad)' : ''} -->
`;

    MAIN_ROUTES.filter(route => route !== '').forEach(route => {
      const config = PAGE_CONFIG[route];
      const adjustedPriority = Math.min(config.priority * basePriorityMultiplier, 1.0);
      
      sitemap += `  <url>
    <loc>${SITE_URL}${langPrefix}/${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${config.changefreq}</changefreq>
    <priority>${adjustedPriority.toFixed(1)}</priority>
  </url>
`;
    });
  });

  sitemap += '\n</urlset>';

  // Escribir el archivo
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generado exitosamente en public/sitemap.xml');
  console.log(`📊 Total de URLs: ${MAIN_ROUTES.length * LANGUAGES.length}`);
}

function getLanguageName(lang) {
  const names = {
    'es': 'Español',
    'en': 'Inglés',
    'fr': 'Francés',
    'it': 'Italiano',
    'pt': 'Portugués',
    'pt-BR': 'Portugués Brasil',
    'ja': 'Japonés',
    'ko': 'Coreano'
  };
  return names[lang] || lang;
}

// Ejecutar la generación
generateSitemap(); 