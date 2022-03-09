import { StyleSheet, Platform } from 'react-native';

import colors from '../../constans/colors';

let settingsStyles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingLeft: 30,
  },
  titleOption: {
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    fontSize: 20,
    marginBottom: 10,
  },
  gap: {
    height: 30,
  },
};

let darkStyles = {
  container: {
    backgroundColor: colors.dark,
  },
  titleOption: {
    color: colors.white,
  },
};

let lightStyles = {
  container: {
    backgroundColor: colors.white,
  },
  titleOption: {
    color: colors.dark,
  },
};

const styles = {
  light: StyleSheet.create(Object.assign(settingsStyles, lightStyles)),
  dark: StyleSheet.create(Object.assign(settingsStyles, darkStyles)),
};

export default styles;
