import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView} from 'react-native';
import {setReading} from '../store/actions';
import {getCough} from '../store/selectors';
import Cough from './components/Cough';
import Button from './components/Button';
import {homeStyle} from './styles';

const CoughScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cough = useSelector(getCough);

  const onPress = () => {
    navigation.navigate('FeverInLast5Days');
  };

  const setCough = value => {
    dispatch(setReading({cough: value}));
  };

  return (
    <SafeAreaView style={homeStyle.container}>
      <Cough
        cough={cough}
        setCough={setCough}
        containerStyle={homeStyle.coughContainer}
        textStyle={homeStyle.coughText}
        switchContainerStyle={homeStyle.coughSwitchContainer}
      />
      <Button
        title="Next"
        onPress={onPress}
        buttonStyle={homeStyle.buttonContainer}
        textStyle={homeStyle.buttonText}
      />
    </SafeAreaView>
  );
};

CoughScreen.navigationOptions = {
  title: '',
};

export default CoughScreen;
