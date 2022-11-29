import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
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
  }

  useEffect(() => {
    carregaEstados()
  }, [])

  return <View></View>
}
