import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//NÃO está autenticado
import AuthScreens from './Auth.routes';

//SIM está autenticado
import MainScreens from './Main.routes';

export default function Routes() {
  const signed = false;
  return (
    <NavigationContainer>
      {signed ? <MainScreens /> : <AuthScreens />}
    </NavigationContainer>
  );
}
