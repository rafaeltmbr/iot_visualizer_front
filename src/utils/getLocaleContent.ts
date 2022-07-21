import { getClientLanguage } from "./getClientLanguage";
import {
  ContentContext,
  localeContent,
  supportedLaguages,
  SupportedLanguage,
} from "../content/locale";

export const getLocaleContent = (context: ContentContext) => {
  const language = getClientLanguage(
    supportedLaguages,
    supportedLaguages[0]
  ) as SupportedLanguage;

  return localeContent[context][language];
};
