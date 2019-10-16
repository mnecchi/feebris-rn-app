/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, StatusBar, Button} from 'react-native';
import {fetchReadings} from './src/store/actions';
import {getReadings} from './src/store/selectors';

const App = () => {
  const dispatch = useDispatch();

  const readings = useSelector(getReadings);
  console.log(readings);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title="Test!" onPress={() => dispatch(fetchReadings())} />
      </SafeAreaView>
    </>
  );
};

export default App;
