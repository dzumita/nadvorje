import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { SearchInputType } from './types';

import useStyles from './styles';

const SearchInput = ({
  placeholder,
  defaultValue,
  onSubmit,
}: SearchInputType) => {
  const styles = useStyles();

  const [value, setValue] = useState(defaultValue);

  const handleChangeText = (newValue: string): void => setValue(newValue);
  const handleSubmitEditing = (): void => {
    if (!value) return;

    onSubmit(value);
    setValue('');
  };

  return (
    <TextInput
      value={value}
      autoCorrect={false}
      placeholder={placeholder}
      clearButtonMode="always"
      onChangeText={handleChangeText}
      onSubmitEditing={handleSubmitEditing}
      {...styles}
    />
  );
};

export default SearchInput;
