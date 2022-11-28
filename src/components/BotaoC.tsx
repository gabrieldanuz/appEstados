import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export class BotaoC extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          width: 80,
          height: 50
        }}
      >
        <Text>Botão de Classe</Text>
      </TouchableOpacity>
    )
  }
}
