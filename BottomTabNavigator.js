import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen1 from './screen1';
import Screen2 from './screen2';
import Screen3 from './screen3';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Start" component={Screen1} />
      <Tab.Screen name="Meine Pakete" component={Screen2} />
      <Tab.Screen name="Profil" component={Screen3} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default BottomTabNavigator;
