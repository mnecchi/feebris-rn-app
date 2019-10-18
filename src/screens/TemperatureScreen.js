import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {setReading} from '../store/actions';
import {getTemperature} from '../store/selectors';
import Temperature from './components/Temperature';
import Button from './components/Button';
import {homeStyle} from './styles';

const TemperatureScreen = ({navigation}) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const temperature = useSelector(getTemperature);

  const onPress = () => {
    if (isNaN(temperature) || temperature < 35 || temperature > 43) {
      setError(true);
      return;
    }

    navigation.navigate('Cough');
  };

  const setTemperature = value => {
    setError(false);
    dispatch(setReading({temperature: parseFloat(value)}));
  };

  return (
    <SafeAreaView style={homeStyle.container}>
      <Temperature
        temperature={temperature}
        setTemperature={setTemperature}
        containerStyle={homeStyle.temperatureContainer}
        textStyle={homeStyle.temperatureText}
        inputStyle={[
          homeStyle.temperatureInput,
          error && homeStyle.temperatureInputError,
        ]}
        inputContainerStyle={homeStyle.temperatureInputContainer}
      />
      <Button
        title="Next"
        disabled={error}
        onPress={onPress}
        buttonStyle={homeStyle.buttonContainer}
        textStyle={homeStyle.buttonText}
      />
    </SafeAreaView>
  );
};

TemperatureScreen.navigationOptions = {
  title: '',
};

export default TemperatureScreen;
