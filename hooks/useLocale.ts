import { useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import translations from '../translations';
import { useLocaleFunction } from './types';
import { LocaleNames } from '../translations/types';

const useLocale: useLocaleFunction = () => {
  const [locale, setLocale] = useState(Localization.locale);

  i18n.translations = translations;
  i18n.fallbacks = true;
  i18n.locale = locale;

  return [locale as LocaleNames, setLocale];
};

export default useLocale;
