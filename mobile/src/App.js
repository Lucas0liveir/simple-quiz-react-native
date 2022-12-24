/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { Routes } from './routes';
import { QuizProvider } from './context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <QuizProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Routes />
        </GestureHandlerRootView>
      </QuizProvider>
    </ThemeProvider>
  );
};

export default App;
