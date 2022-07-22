import { getCurrentLocale } from "./getCurrentLocale";
import { ContentContext, localeContent } from "../content/locale";

export const getLocaleContent = (context: ContentContext) =>
  localeContent[context][getCurrentLocale()];
