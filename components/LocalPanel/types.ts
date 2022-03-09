import translations from '../../translations';

type LocalePanelType = {
  changeLocale: (locale: string) => void;
  currentLocale: keyof typeof translations;
};

export { LocalePanelType };
