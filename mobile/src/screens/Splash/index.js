/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { Container } from './styles';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

export function Splash() {
  const navigation = useNavigation();

  function startApp() {
    navigation.navigate('Dashboard');
  }

  useEffect(() => {
    setTimeout(() => {
      startApp();
    }, 4000);
  }, []);

  return (
    <Container>
      <Image
        style={{ width: 200, height: 200 }}
        source={require('../../assets/splash.gif')}
      />
    </Container>
  );
}
