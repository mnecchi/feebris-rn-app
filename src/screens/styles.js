import {StyleSheet} from 'react-native';

// Common Styles

const labelText = {fontSize: 30, fontWeight: 'bold', color: '#444'};
const fieldContainer = {
  justifyContent: 'center',
  alignItems: 'center',
  margin: 16,
  maxWidth: '80%',
};
const switchContainer = {
  ...fieldContainer,
  textAlignVertical: 'center',
};

const iconInputContainer = {
  flexDirection: 'row',
  marginTop: 8,
  alignItems: 'center',
  justifyContent: 'center',
};

const buttonContainer = {
  padding: 8,
  backgroundColor: 'rgba(60, 142, 183, 1)',
  borderRadius: 8,
  marginTop: 64,
  width: '80%',
  maxWidth: 600,
  justifyContent: 'center',
  alignItems: 'center',
};

const buttonText = {...labelText, color: 'white'};

/**
 * Temperature, cough and fever screens styles
 */
const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  // TEMPERATURE
  temperatureContainer: fieldContainer,
  temperatureText: labelText,
  temperatureInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    fontSize: 20,
    width: 100,
    margin: 8,
  },
  temperatureInputError: {
    borderColor: 'red',
  },
  temperatureInputContainer: iconInputContainer,
  // COUGH
  coughContainer: switchContainer,
  coughText: {...labelText, paddingRight: 8},
  coughSwitchContainer: iconInputContainer,
  // FEVER IN LAST 5 DAYS
  feverContainer: switchContainer,
  feverText: {...labelText, paddingRight: 8},
  feverSwitchContainer: iconInputContainer,
  // BUTTON
  buttonContainer,
  buttonText,
});

/**
 * Results screen styles
 */
const resultsStyle = StyleSheet.create({
  container: {flex: 1, flexDirection: 'column'},
  topContainer: {
    alignItems: 'center',
    paddingBottom: 32,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  // FLU CHECK RESULT
  fluResultContainer: {
    alignItems: 'center',
    marginTop: 32,
    marginHorizontal: 16,
  },
  fluResultText: {
    ...labelText,
  },
  fluResultFlu: {
    color: 'red',
  },
  fluResultNoFlu: {
    color: 'green',
  },
  // RESULTS TABLE
  tableContainer: {
    marginTop: 16,
    marginHorizontal: 8,
  },
  readingsTable: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  readingsTableHeader: {
    backgroundColor: 'rgba(60, 142, 183, 0.5)',
  },
  readingTableCell: {
    margin: 8,
    textAlign: 'center',
  },
  // BUTTON
  buttonContainer,
  buttonText,
});

export {homeStyle, resultsStyle};
