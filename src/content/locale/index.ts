export type LocaleContent = Record<ContentContext, LanguageContent>;
type LanguageContent = Record<SupportedLanguage, string>;

export const supportedLaguages = ["pt", "en"] as const;
export type SupportedLanguage = typeof supportedLaguages[number];

export const contentContext = [
  "lastReadingOn",
  "devicePageTitle",
  "editOption",
  "removeOption",
  "connectionOption",
  "readOn",
  "noReadings",
  "newAttribute",
] as const;
export type ContentContext = typeof contentContext[number];

export const localeContent: LocaleContent = {
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
