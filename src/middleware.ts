import { defineMiddleware } from "astro:middleware";
import { defaultLang, getLocalizedPath, isValidLanguage } from "./i18n/utils";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const pathname = url.pathname;

  // Verificar si es la página raíz
  if (pathname === "/") {
    // Detectar idioma del navegador
    const acceptLanguage = context.request.headers.get("accept-language");
    let detectedLang = defaultLang;

    if (acceptLanguage) {
      // Parsear Accept-Language header
      const languages = acceptLanguage
        .split(",")
        .map((lang) => {
          const [code, q = "1"] = lang.trim().split(";q=");
          return {
            code: code.trim(),
            quality: parseFloat(q),
          };
        })
        .sort((a, b) => b.quality - a.quality);

      // Buscar el primer idioma soportado
      for (const { code } of languages) {
        const primaryLang = code.split("-")[0];

        // Verificar idioma exacto
        if (isValidLanguage(code)) {
          detectedLang = code;
          break;
        }

        // Verificar idioma primario
        if (isValidLanguage(primaryLang)) {
          detectedLang = primaryLang;
          break;
        }

        // Verificar variantes específicas de portugués
        if (primaryLang === "pt") {
          const region = code.split("-")[1]?.toUpperCase();
          if (region === "BR" && isValidLanguage("pt-BR")) {
            detectedLang = "pt-BR";
            break;
          } else if (isValidLanguage("pt")) {
            detectedLang = "pt";
            break;
          }
        }
      }
    }

    // Redirigir al idioma detectado si no es el por defecto
    if (detectedLang !== defaultLang) {
      return Response.redirect(new URL(`/${detectedLang}`, url.origin), 302);
    }
  }

  // Verificar si la URL tiene un prefijo de idioma válido
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0) {
    const firstSegment = segments[0];

    // Si el primer segmento es un idioma válido, continuar
    if (isValidLanguage(firstSegment)) {
      return next();
    }

    // Si no es un idioma válido y no estamos en el idioma por defecto,
    // podría ser una ruta del idioma por defecto
    if (firstSegment && !isValidLanguage(firstSegment)) {
      // Verificar si existe una página para esta ruta en el idioma por defecto
      return next();
    }
  }

  return next();
});
