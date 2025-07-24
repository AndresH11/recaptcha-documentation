import { type SupportedLanguage } from "@/i18n/utils";
import { getCollection } from "astro:content";

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  structuredData?: any;
  openGraph?: {
    type: string;
    title: string;
    description: string;
    image: string;
    url: string;
  };
}

export function generateStructuredData(
  lang: SupportedLanguage,
  pageType: "homepage" | "documentation" | "api" | "tutorial",
  data: {
    title: string;
    description: string;
    url: string;
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
  }
) {
  const baseStructured = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: data.title,
    description: data.description,
    url: data.url,
    datePublished: data.publishedTime || new Date().toISOString(),
    dateModified: data.modifiedTime || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: data.author || "Andres Felipe Hernandez Aldana",
      url: "https://www.linkedin.com/in/andresh11/",
    },
    publisher: {
      "@type": "Organization",
      name: "Google React reCAPTCHA v3 Documentation",
      url: "https://your-domain.com",
    },
    inLanguage: lang,
    about: {
      "@type": "SoftwareApplication",
      name: "Google React reCAPTCHA v3",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Web Browser",
      description: "React library for Google reCAPTCHA v3 integration",
    },
  };

  // Añadir datos específicos según el tipo de página
  switch (pageType) {
    case "homepage":
      return {
        ...baseStructured,
        "@type": "WebSite",
        name: "Google React reCAPTCHA v3 Documentation",
        potentialAction: {
          "@type": "SearchAction",
          target: `${data.url}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      };

    case "documentation":
      return {
        ...baseStructured,
        "@type": "TechnicalArticle",
        genre: "Documentation",
        teaches: "React reCAPTCHA v3 implementation",
      };

    case "api":
      return {
        ...baseStructured,
        "@type": "APIReference",
        programmingLanguage: "JavaScript/TypeScript",
      };

    case "tutorial":
      return {
        ...baseStructured,
        "@type": "HowTo",
        step: [],
      };

    default:
      return baseStructured;
  }
}

export function generateKeywords(
  lang: SupportedLanguage,
  pageType: "homepage" | "documentation" | "api" | "tutorial",
  specificKeywords: string[] = []
): string[] {
  const baseKeywords = [
    "react",
    "recaptcha",
    "recaptcha-v3",
    "google-recaptcha",
    "typescript",
    "react-component",
    "form-validation",
    "bot-protection",
    "security",
    "web-security",
  ];

  const langKeywords = {
    es: ["documentación", "guía", "tutorial", "español"],
    en: ["documentation", "guide", "tutorial", "english"],
    fr: ["documentation", "guide", "tutoriel", "français"],
    it: ["documentazione", "guida", "tutorial", "italiano"],
    pt: ["documentação", "guia", "tutorial", "português"],
    "pt-BR": ["documentação", "guia", "tutorial", "português brasileiro"],
    ja: ["ドキュメント", "ガイド", "チュートリアル", "日本語"],
    ko: ["문서", "가이드", "튜토리얼", "한국어"],
  };

  const typeKeywords = {
    homepage: ["introduction", "getting-started", "overview"],
    documentation: ["docs", "reference", "manual"],
    api: ["api", "reference", "methods", "functions"],
    tutorial: ["tutorial", "how-to", "step-by-step", "examples"],
  };

  return [
    ...baseKeywords,
    ...langKeywords[lang],
    ...typeKeywords[pageType],
    ...specificKeywords,
  ];
}

export function generateRobotsTxt(languages: SupportedLanguage[]): string {
  const baseRobots = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://your-domain.com/sitemap.xml

# Allow all languages
${languages.map((lang) => `Allow: /${lang}/`).join("\n")}

# Disallow search parameters
Disallow: /*?*

# Disallow dev/staging URLs
Disallow: /dev/
Disallow: /staging/

# Cache optimization
User-agent: *
Crawl-delay: 1`;

  return baseRobots;
}

export function generateSitemapUrls(languages: SupportedLanguage[]): Array<{
  url: string;
  lastmod: string;
  changefreq: string;
  priority: string;
  alternates: Array<{ lang: string; url: string }>;
}> {
  const baseUrls = [
    { path: "", priority: "1.0", changefreq: "weekly" },
    { path: "recaptchatV3/comenzar", priority: "0.9", changefreq: "monthly" },
    {
      path: "recaptchatV3/configuracion",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      path: "recaptchatV3/configuraciones-avanzadas",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      path: "recaptchatV3/api-referencia",
      priority: "0.9",
      changefreq: "monthly",
    },
    {
      path: "recaptchatV3/ejemplos-de-usos",
      priority: "0.7",
      changefreq: "monthly",
    },
    {
      path: "recaptchatV3/manejo-de-errores",
      priority: "0.7",
      changefreq: "monthly",
    },
  ];

  const sitemapUrls = [];
  const baseUrl = "https://your-domain.com";

  for (const urlInfo of baseUrls) {
    for (const lang of languages) {
      const urlPath = lang === "es" ? urlInfo.path : `${lang}/${urlInfo.path}`;
      const fullUrl =
        `${baseUrl}/${urlPath}`.replace(/\/+/g, "/").replace(/\/$/, "") ||
        `${baseUrl}/`;

      // Generar alternates para este URL
      const alternates = languages.map((altLang) => {
        const altPath =
          altLang === "es" ? urlInfo.path : `${altLang}/${urlInfo.path}`;
        const altUrl =
          `${baseUrl}/${altPath}`.replace(/\/+/g, "/").replace(/\/$/, "") ||
          `${baseUrl}/`;
        return { lang: altLang, url: altUrl };
      });

      sitemapUrls.push({
        url: fullUrl,
        lastmod: new Date().toISOString().split("T")[0],
        changefreq: urlInfo.changefreq,
        priority: urlInfo.priority,
        alternates,
      });
    }
  }

  return sitemapUrls;
}

export function getPageSEOData(
  lang: SupportedLanguage,
  pagePath: string,
  customTitle?: string,
  customDescription?: string
): SEOData {
  // Mapear rutas a tipos de página
  const pageTypeMap: Record<
    string,
    "homepage" | "documentation" | "api" | "tutorial"
  > = {
    "": "homepage",
    "/": "homepage",
    "recaptchatV3/comenzar": "tutorial",
    "recaptchatV3/configuracion": "documentation",
    "recaptchatV3/configuraciones-avanzadas": "documentation",
    "recaptchatV3/api-referencia": "api",
    "recaptchatV3/ejemplos-de-usos": "tutorial",
    "recaptchatV3/manejo-de-errores": "documentation",
  };

  const pageType = pageTypeMap[pagePath] || "documentation";
  const keywords = generateKeywords(lang, pageType);

  // Generar metadatos específicos según la página
  const seoData: SEOData = {
    title: customTitle || `Google React reCAPTCHA v3 Documentation - ${lang}`,
    description:
      customDescription ||
      "Complete documentation for Google React reCAPTCHA v3",
    keywords,
    structuredData: generateStructuredData(lang, pageType, {
      title: customTitle || `Google React reCAPTCHA v3 Documentation - ${lang}`,
      description:
        customDescription ||
        "Complete documentation for Google React reCAPTCHA v3",
      url: `https://your-domain.com/${lang}/${pagePath}`,
      publishedTime: "2025-01-01T00:00:00Z",
      modifiedTime: new Date().toISOString(),
    }),
  };

  return seoData;
}
