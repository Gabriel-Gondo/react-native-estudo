import React from 'react'
import { View,StyleSheet} from 'react-native'
import Quadrado from './Quadrado'


export default () =>  {
    return (
        <View style={style.FlexV1}>
            <Quadrado />
            <Quadrado cor='#990' />
            <Quadrado cor='#090' />
            <Quadrado cor='#009' />
        </View>
    )
}

const style = StyleSheet.create({
    FlexV1: {
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: '#000'
    }
})
