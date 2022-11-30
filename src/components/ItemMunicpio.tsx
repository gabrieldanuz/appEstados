import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableOpacityProps
} from 'react-native'
import { Municipio } from '../pages/Municipio'

interface ItemMunicipioProps extends TouchableOpacityProps {
  item: Municipio
}

export function ItemMunicipio({ item, ...rest }: ItemMunicipioProps) {
  return (
    <TouchableOpacity style={styles.itemEstado} {...rest}>
      <View style={styles.avatarSigla}>
        <Text style={styles.sigla}>{item.nome.substring(0, 2)}</Text>
      </View>

      <Text style={styles.estado}>{item.nome}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
