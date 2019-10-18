import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, Alert} from 'react-native';
import {setReading, postReading} from '../store/actions';
import {getFeverInLast5Days} from '../store/selectors';
import FeverInLast5Days from './components/FeverInLast5Days';
import Button from './components/Button';
import {homeStyle} from './styles';

const FeverInLast5DaysScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const feverInLast5Days = useSelector(getFeverInLast5Days);

  /**
   * send the reading to the API
   */
  const onPress = async () => {
    // call the API
    try {
      setLoading(true);
      await dispatch(postReading());
      navigation.navigate('Results');
    } catch (err) {
      // Maybe it should be nice to have a better error handling!
      Alert.alert('Error', err.message);
    } finally {
      setLoading(false);
    }
  };

  const setFeverInLast5Days = value => {
    dispatch(setReading({feverInLast5Days: value}));
  };

  return (
    <SafeAreaView style={homeStyle.container}>
      <FeverInLast5Days
        feverInLast5Days={feverInLast5Days}
        setFeverInLast5Days={setFeverInLast5Days}
        containerStyle={homeStyle.feverContainer}
        textStyle={homeStyle.feverText}
        switchContainerStyle={homeStyle.feverSwitchContainer}
      />
      <Button
        title="Flu?"
        loading={loading}
        onPress={onPress}
        buttonStyle={homeStyle.buttonContainer}
        textStyle={homeStyle.buttonText}
      />
    </SafeAreaView>
  );
};

FeverInLast5DaysScreen.navigationOptions = {
  title: '',
};

export default FeverInLast5DaysScreen;
