import React from 'react'
import { View,Text } from 'react-native'
import Estilo from './estilo'

export default props => {
    return (
        <View>
            <Text>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </View>
    )
}
