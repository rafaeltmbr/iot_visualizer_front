export type localeContent = Record<ContentContext, LanguageContent>;
type LanguageContent = Record<SupportedLanguage, string>;

export const supportedLaguages = <const>["pt", "en"];
export type SupportedLanguage = typeof supportedLaguages[number];

export const contentContext = <const>[
  "lastReadingOn",
  "devicePageTitle",
  "editOption",
  "removeOption",
  "connectionOption",
  "readOn",
  "noReadings",
  "newAttribute",
];
export type ContentContext = typeof contentContext[number];

export const localeContent: localeContent = {
  lastReadingOn: {
    en: "Last reading on",
    pt: "Última leitura em",
  },
  devicePageTitle: {
    en: "Readings",
    pt: "Leituras",
  },
  editOption: {
    en: "Edit",
    pt: "Editar",
  },
  removeOption: {
    en: "Remove",
    pt: "Remover",
  },
  connectionOption: {
    en: "Connect",
    pt: "Conectar",
  },
  readOn: {
    en: "Read on",
    pt: "Lido em",
  },
  noReadings: {
    en: "Nothing here",
    pt: "Nada por aqui",
  },
  newAttribute: {
    en: "New attribute",
    pt: "Novo atributo",
  },
};
