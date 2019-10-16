/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView, StatusBar, Button} from 'react-native';
import {postReading} from './src/store/actions';

const App = () => {
  const dispatch = useDispatch();

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button
          title="Test!"
          onPress={() => dispatch(postReading({test: true}))}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
