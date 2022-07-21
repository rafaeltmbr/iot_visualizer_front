export type localeContent = Record<ContentContext, LanguageContent>;
type LanguageContent = Record<SupportedLanguage, string>;

export const supportedLaguages = <const>["pt", "en"];
export type SupportedLanguage = typeof supportedLaguages[number];

export const contentContext = <const>["lastReadingOn", "devicePageTitle"];
export type ContentContext = typeof contentContext[number];

export const localeContent: localeContent = {
  lastReadingOn: {
    pt: "Última leitura em",
    en: "Last reading on",
  },
  devicePageTitle: {
    pt: "Leituras",
    en: "Readings",
  },
};
