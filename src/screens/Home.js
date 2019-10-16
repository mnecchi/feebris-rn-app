import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, StatusBar, Button} from 'react-native';
import {fetchReadings} from '../store/actions';
import {getReadings} from '../store/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const readings = useSelector(getReadings);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title="Test!" onPress={() => dispatch(fetchReadings())} />
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
