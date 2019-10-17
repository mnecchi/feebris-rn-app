/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, SafeAreaView, ScrollView} from 'react-native';
import {isFlu as isFluSelector, getLatestReadings} from '../store/selectors';
import {fetchReadings} from '../store/actions';
import FluResult from './components/FluResult';
import ReadingsTable from './components/ReadingsTable';
import {resultsStyle} from './styles';

const Results = () => {
  const dispatch = useDispatch();
  const isFlu = useSelector(isFluSelector);
  const readings = useSelector(getLatestReadings);

  useEffect(() => {
    // loads reading at mount
    dispatch(fetchReadings());
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={resultsStyle.container}>
        <FluResult
          isFlu={isFlu}
          containerStyle={resultsStyle.fluResultContainer}
          textStyle={resultsStyle.fluResultText}
          textFluStyle={resultsStyle.fluResultFlu}
          textNoFluStyle={resultsStyle.fluResultNoFlu}
        />
        <ScrollView style={resultsStyle.tableContainer}>
          <ReadingsTable
            readings={readings}
            headerStyle={resultsStyle.readingsTableHeader}
            cellStyle={resultsStyle.readingTableCell}
            tableStyle={resultsStyle.readingsTable}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

Results.navigationOptions = {
  title: 'Results',
};

export default Results;
