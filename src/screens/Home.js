import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, StatusBar, Button, Alert} from 'react-native';
import {fetchReadings} from '../store/actions';
import {getReadings} from '../store/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const readings = useSelector(getReadings);

  const onPress = () => {
    dispatch(fetchReadings()).catch(err => {
      Alert.alert(err.message);
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title="Test!" onPress={onPress} />
      </SafeAreaView>
    </>
  );
};

Home.navigationOptions = {
  title: 'Home',
  headerStyle: {
    backgroundColor: '#ccf',
  },
};

export default Home;
