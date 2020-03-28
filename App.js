import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Login from './src/Screens/Login'
import Register from './src/Screens/Register'
import store from './src/Redux/store'
import Home from './src/Screens/Home'
import BookDetail from './src/Screens/BookDetail'
import { Provider } from 'react-redux'


const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
      name="Login"
      component={Login}
      options={{ headerShown: false }}
      />
        <Stack.Screen
      name="Register"
      component={Register}
      options={{ headerShown: false }}
      /> */}
      <Stack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
      />
      <Stack.Screen
      name="BookDetail"
      component={BookDetail}
      options={{ headerShown: false }}
      />
      </Stack.Navigator>
  </NavigationContainer>
  </Provider>
    )
  }
}

export default App