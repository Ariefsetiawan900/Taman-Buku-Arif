import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'

import Login from './src/Screens/Login'
import Home from './src/Screens/Home'

const Stack = createStackNavigator();

class Navigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Login / Register"
          component={Login}
          options={{headerShown: false}}
          />
          <Stack.Screen
          name="Home"
          component={Home}
          options={{headerLeft: false, headerTitle: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default Navigator