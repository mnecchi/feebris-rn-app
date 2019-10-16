import {StyleSheet} from 'react-native';

const homeStyle = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column', alignItems: 'center'},
  button: {padding: 8, backgroundColor: 'blue', borderRadius: 8},
  buttonText: {color: 'white'},
  switchContainer: {flexDirection: 'row'},
  temperatureInput: {borderColor: '#ccc', borderWidth: 1, borderRadius: 4},
});

const resultsStyle = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
  fluResultContainer: {alignItems: 'center'},
  readingsTable: {borderWidth: 2, borderColor: '#c8e1ff'},
});

export {homeStyle, resultsStyle};
