import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text } from 'react-native'
import { Estado } from './Home'

interface Params {
  estado: Estado
}

export function Municipio() {
  const route = useRoute()
  const { estado } = route.params as Params
  return (
    <View>
      <Text>Municipios do {estado.nome}</Text>
    </View>
  )
}
