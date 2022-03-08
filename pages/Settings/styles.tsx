import { StyleSheet, Platform } from 'react-native';

import colors from '../../constans/colors';

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.dark,
    paddingTop: 30,
    paddingLeft: 30,
  },
  titleOption: {
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: colors.white,
    fontSize: 20,
    marginBottom: 10,
  },
  gap: {
    height: 30,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    paddingTop: 30,
    paddingLeft: 30,
  },
  titleOption: {
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: colors.dark,
    fontSize: 20,
    marginBottom: 10,
  },
  gap: {
    height: 30,
  },
});

const styles = {
  light: lightStyles,
  dark: darkStyles,
};

export default styles;
