// Enumeration representing possible languages
// Each language has a corresponding string representation
export enum LanguageEnum {
  KANNADA = 'ಕನ್ನಡ',
  ENGLISH = 'English',
}

const languageToLocale = {
  [LanguageEnum.KANNADA as string]: 'bg',
  [LanguageEnum.ENGLISH as string]: 'en',
};

export const getLocaleByLanguage = (language: string) => {
  return languageToLocale[language];
};
