import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  SafeAreaView,
  StatusBar,
  View,
  Alert,
  Text,
  TextInput,
  Switch,
  TouchableHighlight,
} from 'react-native';
import {postReading} from '../store/actions';

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
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <View>
            <Text>🌡 Temperature</Text>
            <TextInput
              value={temperature}
              disabled={disabled}
              onChangeText={setTemperature}
              keyboardType="decimal-pad"
              style={{borderColor: '#ccc', borderWidth: 1, borderRadius: 4}}
            />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>🤧Cough?</Text>
            <Switch value={cough} onValueChange={setCough} disabled={disabled} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text>🤒Fever for more than 5 days?</Text>
            <Switch
              value={feverInLast5Days}
              onValueChange={setFeverInLast5Days}
              disabled={disabled}
            />
          </View>
          <TouchableHighlight
            onPress={onPress}
            style={{padding: 8, backgroundColor: 'blue', borderRadius: 8}}
            disabled={disabled}>
            <Text style={{color: 'white'}}>Flu??</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};

Home.navigationOptions = {
  title: 'Home',
};

export default Home;
