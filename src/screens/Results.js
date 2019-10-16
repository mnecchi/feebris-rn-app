/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {Table, Row, Rows} from 'react-native-table-component';
import {isFlu as isFluSelector, getLastReadings} from '../store/selectors';
import {fetchReadings} from '../store/actions';

const Results = () => {
  const dispatch = useDispatch();
  const isFlu = useSelector(isFluSelector);
  const readings = useSelector(getLastReadings);

  useEffect(() => {
    dispatch(fetchReadings());
  }, []);

  const data = readings.reduce((acc, reading) => {
    acc.push([
      new Date(reading.createdAt).toLocaleString(),
      reading.temperature,
      reading.cough ? '🤧' : '',
      reading.feverInLast5Days ? '🤒' : '',
      reading.isFlu ? '💊' : '',
    ]);

    return acc;
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
        <View style={{alignItems: 'center'}}>
          <Text>{isFlu ? 'You have the flu!' : 'No Flu! Hooray!'}</Text>
        </View>
        {readings && (
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
            <Row
              data={[
                'date',
                'temperature',
                'cough?',
                'fever in the last 5 days',
                'is flu?',
              ]}
            />
            <Rows data={data} />
          </Table>
        )}
      </SafeAreaView>
    </>
  );
};

Results.navigationOptions = {
  title: 'Results',
};

export default Results;
