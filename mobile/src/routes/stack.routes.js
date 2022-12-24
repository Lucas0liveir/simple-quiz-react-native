/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../screens/Dashboard';
import { Quiz } from '../screens/Quiz';
import { Splash } from '../screens/Splash';

const { Navigator, Screen } = createStackNavigator();

export function StackQuiz() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="Dashboard" component={Dashboard} />
      <Screen name="Quiz" component={Quiz} />
    </Navigator>
  );
}
