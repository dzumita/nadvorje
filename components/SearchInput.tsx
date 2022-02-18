import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

type SearchInputType = {
  placeholder: string;
  defaultValue?: string | undefined;
  onSubmit: (value: string) => void;
};

const SearchInput = ({
  placeholder,
  defaultValue,
  onSubmit
}: SearchInputType) => {
  const [value, setValue] = useState(defaultValue);

  const handleChangeText = (newValue: string): void => setValue(newValue);
  const handleSubmitEditing = (): void => {
    if (!value) return;

    onSubmit(value);
    setValue('')
  };

  return (
    <TextInput
      value={value}
      autoCorrect={false}
      placeholder={placeholder}
      placeholderTextColor="white"
      underlineColorAndroid="transparent"
      style={styles.textInput}
      clearButtonMode="always"
      onChangeText={handleChangeText}
      onSubmitEditing={handleSubmitEditing}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 2,
  },
});

export default SearchInput;
