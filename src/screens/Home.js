import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
  Keyboard,
} from 'react-native';

import {postReading} from '../store/actions';
import Temperature from './components/Temperature';
import Cough from './components/Cough';
import FeverInLast5Days from './components/FeverInLast5Days';
import Button from './components/Button';
import {homeStyle} from './styles';

const Home = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [cough, setCough] = useState(false);
  const [feverInLast5Days, setFeverInLast5Days] = useState(false);
  const dispatch = useDispatch();

  /**
   * send the reading to the API
   */
  const onPress = async () => {
    //  do nothingif the form is invalid or we have already called the API
    if (loading || error) {
      return;
    }

    // show an error if the temperaure is empty
    if (temperature.trim() === '') {
      setError(true);
      return;
    }

    // call the API
    try {
      Keyboard.dismiss();
      setLoading(true);
      await dispatch(postReading({temperature, cough, feverInLast5Days}));
      navigation.navigate('Results');
    } catch (err) {
      // Maybe it should be nice to have a better error handling!
      Alert.alert('Error', err.message);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Sets and checks the temperature value
   * @param {String} value
   */
  const onSetTemperature = value => {
    setTemperature(value);
    if (value !== '' && (isNaN(value) || value < 35 || value > 43)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={homeStyle.container}>
        <ScrollView
          keyboardShouldPersistTaps={true}
          style={homeStyle.scrollContainer}
          contentContainerStyle={homeStyle.scrollContent}>
          <Temperature
            temperature={temperature}
            disabled={loading}
            setTemperature={onSetTemperature}
            containerStyle={homeStyle.temperatureContainer}
            textStyle={homeStyle.temperatureText}
            inputStyle={[
              homeStyle.temperatureInput,
              error && homeStyle.temperatureInputError,
            ]}
            inputContainerStyle={homeStyle.temperatureInputContainer}
          />
          <Cough
            cough={cough}
            disabled={loading}
            setCough={setCough}
            containerStyle={homeStyle.coughContainer}
            textStyle={homeStyle.coughText}
            switchContainerStyle={homeStyle.coughSwitchContainer}
          />
          <FeverInLast5Days
            feverInLast5Days={feverInLast5Days}
            disabled={loading}
            setFeverInLast5Days={setFeverInLast5Days}
            containerStyle={homeStyle.feverContainer}
            textStyle={homeStyle.feverText}
            switchContainerStyle={homeStyle.feverSwitchContainer}
          />
          <Button
            disabled={error}
            loading={loading}
            onPress={onPress}
            buttonStyle={homeStyle.buttonContainer}
            textStyle={homeStyle.buttonText}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
