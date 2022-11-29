import React, { useEffect, useState } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { api } from './src/services/api'

interface Estado {
  id: number
  nome: string
  sigla: string
  regiao: string
}

export default function App() {
  const [estados, setEstados] = useState<Estado[]>([])

  async function carregaEstados() {
    const response = await api.get('?orderBy=nome')
    setEstados(response.data)
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
        renderItem={({ item }) => {
          return (
            <View style={styles.itemEstado}>
              <View style={styles.avatarSigla}>
                <Text style={styles.sigla}>{item.sigla}</Text>
              </View>

              <Text style={styles.estado}>{item.nome}</Text>
            </View>
          )
        }}
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
  },
  itemEstado: {
    paddingVertical: 10,
    marginTop: 5,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderRadius: 10
  },
  avatarSigla: {
    width: 60,
    height: 60,
    backgroundColor: '#E76F51',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  sigla: {
    fontSize: 20,
    color: 'white'
  },
  estado: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#264653',
    marginLeft: 10,
    alignSelf: 'center'
  }
})
