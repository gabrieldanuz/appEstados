import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { Botao } from './src/components/Botao'
import { BotaoC } from './src/components/BotaoC'

export default function App() {
  return (
    <View style={styles.container}>
      <Botao />
      <Botao />
      <Botao />
      <Botao />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
