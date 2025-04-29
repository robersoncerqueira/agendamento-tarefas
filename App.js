// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import EditarTarefa from './src/componentes/EditarTarefas';
import NovaTarefa from './src/screens/NovaTarefa';


const RootStack = createNativeStackNavigator({
  
  initialRouteName: "Home",
  screenOptions:{
    headerShown: false
  },
  screens: {
    Home: Home,
    EditarTarefa: EditarTarefa,
    NovaTarefa: NovaTarefa
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
