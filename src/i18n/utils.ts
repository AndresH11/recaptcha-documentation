import { defaultLang, ui } from "./ui";

export { defaultLang };
export type SupportedLanguage = keyof typeof ui;

export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as SupportedLanguage;
  return defaultLang;
}

export function useTranslations(lang: SupportedLanguage) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    const translation = ui[lang][key] || ui[defaultLang][key];
    if (typeof translation === "string") {
      return translation;
    }
    // Si la traducción es un array, devolver el primer elemento como string
    if (Array.isArray(translation)) {
      return translation[0] || "";
    }
    return String(translation);
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split("/").filter(Boolean);

  // Si es la raíz, devolver ruta vacía
  if (parts.length === 0) return "";

  // Si el primer segmento es un idioma, quitar y devolver el resto
  if (parts[0] in ui) {
    return parts.slice(1).join("/");
  }

  // Si no hay idioma en la URL, devolver la ruta completa
  return parts.join("/");
}

export function getLocalizedPath(lang: string, path: string): string {
  // Limpiar la ruta
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  if (import.meta.env.DEV) {
    // DESARROLLO: /en/path
    if (lang === defaultLang) {
      return cleanPath ? `/${cleanPath}` : "/";
    }
    return cleanPath ? `/${lang}/${cleanPath}` : `/${lang}`;
  } else {
    // PRODUCCIÓN: /recaptcha-documentation/en/path
    const basePath = (import.meta.env.BASE_URL || "").replace(/\/$/, "");
    if (lang === defaultLang) {
      return cleanPath ? `${basePath}/${cleanPath}` : basePath || "/";
    }
    return cleanPath
      ? `${basePath}/${lang}/${cleanPath}`
      : `${basePath}/${lang}`;
  }
}

export function detectBrowserLanguage(): SupportedLanguage {
  if (typeof window === "undefined") return defaultLang;

  const browserLang = navigator.language || navigator.languages[0];
  const primaryLang = browserLang.split("-")[0];

  // Verificar idioma exacto primero
  if (browserLang in ui) {
    return browserLang as SupportedLanguage;
  }

  // Verificar idioma primario
  if (primaryLang in ui) {
    return primaryLang as SupportedLanguage;
  }

  // Verificar variantes específicas
  if (primaryLang === "pt") {
    const region = browserLang.split("-")[1]?.toUpperCase();
    if (region === "BR") return "pt-BR";
    return "pt";
  }

  return defaultLang;
}

export function getAvailableLanguages() {
  return Object.keys(ui) as SupportedLanguage[];
}

export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return lang in ui;
}
