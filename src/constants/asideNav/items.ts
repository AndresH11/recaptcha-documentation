import { getLocalizedPath } from "@/i18n/utils";

export interface AsideNavItem {
  titleKey: string;
  path: string;
  isDropdown: boolean;
  children?: AsideNavItem[];
  key: string;
  isActive?: boolean;
}

// Función para generar elementos de navegación con rutas localizadas
export function getAsideNavItems(lang: string): AsideNavItem[] {
  return [
    {
      titleKey: "nav.introduction",
      path: getLocalizedPath(lang, ""),
      isDropdown: false,
      key: "introduction",
      isActive: true,
    },
    {
      titleKey: "nav.recaptcha-v2",
      path: "",
      isDropdown: true,
      isActive: false,
      children: [
        {
          titleKey: "nav.start",
          path: "#",
          isDropdown: false,
          key: "start",
          isActive: false,
        },
        {
          titleKey: "nav.configuration",
          path: "#",
          isDropdown: false,
          key: "configuration",
          isActive: false,
        },
      ],
      key: "recaptcha-v2",
    },
    {
      titleKey: "nav.recaptcha-v3",
      path: "",
      isDropdown: true,
      key: "recaptcha-v3",
      isActive: true,
      children: [
        {
          titleKey: "nav.start",
          path: getLocalizedPath(lang, "recaptchatV3/comenzar"),
          isDropdown: false,
          key: "start",
          isActive: true,
        },
        {
          titleKey: "nav.configuration",
          path: getLocalizedPath(lang, "recaptchatV3/configuracion"),
          isDropdown: false,
          key: "configuration",
          isActive: true,
        },
        {
          titleKey: "nav.architecture",
          path: "#",
          isDropdown: false,
          key: "architecture",
          isActive: false,
        },
        {
          titleKey: "nav.api-reference",
          path: getLocalizedPath(lang, "recaptchatV3/api-referencia"),
          isDropdown: false,
          key: "api-reference",
          isActive: true,
        },
        {
          titleKey: "nav.usage-examples",
          path: getLocalizedPath(lang, "recaptchatV3/ejemplos-de-usos"),
          isDropdown: false,
          key: "usage-examples",
          isActive: true,
        },
        {
          titleKey: "nav.advanced-configurations",
          path: getLocalizedPath(
            lang,
            "recaptchatV3/configuraciones-avanzadas"
          ),
          isDropdown: false,
          key: "advanced-configurations",
          isActive: true,
        },
        {
          titleKey: "nav.error-handling",
          path: getLocalizedPath(lang, "recaptchatV3/manejo-de-errores"),
          isDropdown: false,
          key: "error-handling",
          isActive: true,
        },
        {
          titleKey: "nav.testing",
          path: "#",
          isDropdown: false,
          key: "testing",
          isActive: false,
        },
        {
          titleKey: "nav.performance",
          path: "#",
          isDropdown: false,
          key: "performance",
          isActive: false,
        },
        {
          titleKey: "nav.migration",
          path: "#",
          isDropdown: false,
          key: "migration",
          isActive: false,
        },
        {
          titleKey: "nav.troubleshooting",
          path: "#",
          isDropdown: false,
          key: "troubleshooting",
          isActive: false,
        },
        {
          titleKey: "nav.backend-integration",
          path: "#",
          isDropdown: false,
          key: "backend-integration",
          isActive: false,
        },
        {
          titleKey: "nav.changelog",
          path: "#",
          isDropdown: false,
          key: "changelog",
          isActive: false,
        },
        {
          titleKey: "nav.contribution",
          path: "#",
          isDropdown: false,
          key: "contribution",
          isActive: false,
        },
      ],
    },
  ];
}

// Mantener el array estático para compatibilidad con versiones anteriores
export const ASIDE_NAV_ITEMS = getAsideNavItems("es");
