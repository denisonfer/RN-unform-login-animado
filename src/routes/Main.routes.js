import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TelaInicial from '~/pages/TelaInicial';

const Stack = createStackNavigator();

export default function MainScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TelaInicial" component={TelaInicial} />
    </Stack.Navigator>
  );
}
