import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Products } from '../screens/Products';
import { TabRoutes } from './Tab.routes';

export function StackRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='Home' component={TabRoutes} />
      <Screen name='Products' component={Products} />
    </Navigator>
  )
}