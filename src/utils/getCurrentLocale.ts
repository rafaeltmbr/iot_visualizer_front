import { supportedLaguages, SupportedLanguage } from "../content/locale";
import { getClientLanguage } from "./getClientLanguage";

export const getCurrentLocale = () =>
  getClientLanguage(
    supportedLaguages,
    supportedLaguages[0]
  ) as SupportedLanguage;
