import { useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import translations from '../translations';

const useLocale = () => {
  const [locale, setLocale] = useState(Localization.locale);

  i18n.translations = translations;
  i18n.fallbacks = true;
  i18n.locale = locale;

  return [locale, setLocale];
};

export default useLocale;
