export const RETURN_VALUES_OF_THE_HOOK = [
  {
    prop: "isReady",
    type: "boolean",
    description: "Si reCAPTCHA está listo para usar",
  },
  {
    prop: "execute",
    type: "()=>Promise<string | null>",
    description: "Ejecutar reCAPTCHA manualmente",
  },
  {
    prop: "reset",
    type: "()=> void",
    description: "Reiniciar la instancia",
  },
  {
    prop: "isLoading",
    type: "boolean",
    description: "Si está cargando",
  },
];
