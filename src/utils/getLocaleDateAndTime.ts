import { getCurrentLocale } from "./getCurrentLocale";

export const getLocaleDate = (dateObject: Date) => {
  const locale = getCurrentLocale();

  const time = dateObject.toLocaleTimeString(locale);

  const date = dateObject.toLocaleDateString(locale);

  const dateAndTime = dateObject.toLocaleString(locale);

  return { time, date, dateAndTime };
};
