import { LocaleNames } from '../../translations/types';

type LocalePanelProps = {
  changeLocale: (locale: LocaleNames) => void;
  currentLocale: LocaleNames;
};

export { LocalePanelProps };
