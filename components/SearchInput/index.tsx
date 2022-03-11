import React, { useState } from 'react';
import { TextInput } from 'react-native';

import { SearchInputProps } from './types';
import useStyles from './styles';

const SearchInput = ({
  placeholder,
  defaultValue,
  onSubmit,
}: SearchInputProps) => {
  const styles = useStyles();

  const [value, setValue] = useState(defaultValue);

  const handleChangeText = (newValue: string) => setValue(newValue);
  const handleSubmitEditing = () => {
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
