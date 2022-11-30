import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import { Home } from './src/pages/Home'
import { Municipio } from './src/pages/Municipio'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Municipio" component={Municipio} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
