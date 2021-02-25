import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default (param) => {
    console.warn(param)
    return (
        <Text style={Estilo.textoGrnde}>O valor {param.min} é maior que o valor {param.max}</Text>
    )
    
}