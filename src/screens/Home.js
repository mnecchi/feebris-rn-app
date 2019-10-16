import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {SafeAreaView, StatusBar, Alert} from 'react-native';
import {postReading} from '../store/actions';
import Temperature from './components/Temperature';
import Cough from './components/Cough';
import FeverInLast5Days from './components/FeverInLast5Days';
import Button from './components/Button';
import {homeStyle} from './styles';

const Home = ({navigation}) => {
  const [disabled, setDisabled] = useState(false);
  const [temperature, setTemperature] = useState('');
  const [cough, setCough] = useState(false);
  const [feverInLast5Days, setFeverInLast5Days] = useState(false);
  const dispatch = useDispatch();

  const onPress = async () => {
    if (disabled) {
      return;
    }

    try {
      setDisabled(true);
      await dispatch(postReading({temperature, cough, feverInLast5Days}));
      navigation.navigate('Results');
    } catch (err) {
      Alert.alert('Error', err.message);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={homeStyle.container}>
        <Temperature
          temperature={temperature}
          disabled={disabled}
          setTemperature={setTemperature}
          inputStyle={homeStyle.temperatureInput}
        />
        <Cough
          cough={cough}
          disabled={disabled}
          setCough={setCough}
          containerStyle={homeStyle.switchContainer}
        />
        <FeverInLast5Days
          feverInLast5Days={feverInLast5Days}
          disabled={disabled}
          setFeverInLast5Days={setFeverInLast5Days}
          containerStyle={homeStyle.switchContainer}
        />
        <Button
          disabled={disabled}
          onPress={onPress}
          buttonStyle={homeStyle.button}
          textStyle={homeStyle.buttonText}
        />
      </SafeAreaView>
    </>
  );
};

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
