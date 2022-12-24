import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackQuiz } from './stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <StackQuiz />
    </NavigationContainer>
  );
}
