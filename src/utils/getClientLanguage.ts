export const getClientLanguage = (
  accepted: Readonly<string[]> | undefined,
  defaultLanguage = ""
) => {
  const nav = navigator;

  const languages =
    (nav.languages?.length && nav.languages) || [nav.language] || [];

  if (!accepted) return languages[0] || defaultLanguage;

  const acceptedLowerCase = accepted.map((e) => e.toLocaleLowerCase());

  for (const lang of languages)
    if (acceptedLowerCase.includes(lang.toLocaleLowerCase())) return lang;

  return defaultLanguage;
};
