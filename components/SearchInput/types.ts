import { ThemeColorsType } from '../../theme/types';

type SearchInputType = {
  placeholder: string;
  defaultValue?: string | undefined;
  onSubmit: (value: string) => void;
};

export { SearchInputType };
