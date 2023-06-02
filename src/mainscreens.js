import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import loadingscrren from './screens/loadingscrren';
import loginscreens from './screens/loginscreens';
import mainmenuscreen from './screens/mainmenuscreen';
import registerscreens from './screens/registerscreens';

const mainscreens = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='loginscreens' component={loginscreens} options={{headerShown:false}}/>
            <Stack.Screen name='mainmenuscreen' component={mainmenuscreen} />
            <Stack.Screen name='registerscreens' component={registerscreens} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default mainscreens