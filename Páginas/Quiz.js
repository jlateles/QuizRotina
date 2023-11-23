import React from 'react';
import { View, StyleSheet } from 'react-native';
import QuestionScreen from '../QuestionScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
      <QuestionScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Quiz;