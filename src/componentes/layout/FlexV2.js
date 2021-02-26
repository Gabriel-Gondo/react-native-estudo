import React from 'react'
import { View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'


export default () =>  {
    return (
        <View style={style.FlexV2}>
            <Quadrado />
            <Quadrado cor='#990' />
            <Quadrado cor='#090' />
            <Quadrado cor='#009' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV2: {
        width: '100%',
        alignItems: 'flex-end',
        backgroundColor: '#000'
    }
})
