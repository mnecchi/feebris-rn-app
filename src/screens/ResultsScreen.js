/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, View, ScrollView, BackHandler} from 'react-native';
import {getIsFlu, getLatestReadings} from '../store/selectors';
import {clearReading, fetchReadings} from '../store/actions';
import FluResult from './components/FluResult';
import ReadingsTable from './components/ReadingsTable';
import Button from './components/Button';
import {resultsStyle} from './styles';

const ResultsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const isFlu = useSelector(getIsFlu);
  const readings = useSelector(getLatestReadings);

  useEffect(() => {
    // loads reading at mount
    dispatch(fetchReadings());

    // disable Android's hardware back button
    const handleBackButton = () => true;
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

  const onPress = () => {
    dispatch(clearReading());
    navigation.navigate('Temperature');
  };

  return (
    <SafeAreaView style={resultsStyle.container}>
      <View style={resultsStyle.topContainer}>
        <FluResult
          isFlu={isFlu}
          containerStyle={resultsStyle.fluResultContainer}
          textStyle={resultsStyle.fluResultText}
          textFluStyle={resultsStyle.fluResultFlu}
          textNoFluStyle={resultsStyle.fluResultNoFlu}
        />
        <Button
          title="Start Again"
          onPress={onPress}
          buttonStyle={resultsStyle.buttonContainer}
          textStyle={resultsStyle.buttonText}
        />
      </View>
      <ScrollView style={resultsStyle.tableContainer}>
        <ReadingsTable
          readings={readings}
          headerStyle={resultsStyle.readingsTableHeader}
          cellStyle={resultsStyle.readingTableCell}
          tableStyle={resultsStyle.readingsTable}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

ResultsScreen.navigationOptions = {
  title: 'Screen',
  headerLeft: null,
};

export default ResultsScreen;
