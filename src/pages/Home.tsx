import React, { useEffect, useState } from 'react'
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { api } from '../services/api'
import { useNavigation } from '@react-navigation/native'
import { ItemEstado } from '../components/ItemEstado'

export interface Estado {
  id: number
  nome: string
  sigla: string
  regiao: string
}

export function Home() {
  const [estados, setEstados] = useState<Estado[]>([])
  const navigation = useNavigation()

  async function carregaEstados() {
    const response = await api.get('?orderBy=nome')
    setEstados(response.data)
  }

  function handleToMunicipio(item: Estado) {
    navigation.navigate('Municipio', { estado: item })
  }

  useEffect(() => {
    carregaEstados()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList<Estado>
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        data={estados}
        keyExtractor={estado => String(estado.id)}
        renderItem={({ item }) => (
          <ItemEstado item={item} onPress={() => handleToMunicipio(item)} />
        )}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    padding: 20,
    justifyContent: 'center'
  }
})
