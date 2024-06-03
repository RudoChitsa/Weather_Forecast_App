import * as React from 'react';
import { View, Text, Button, Image, TouchableOpacity, Dimensions, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../screens/HomeScreens';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="." option={{headerShown: false}} component={HomeScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;