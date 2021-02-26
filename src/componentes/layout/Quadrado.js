import React from 'react'
import { ProgressViewIOSComponent, View } from 'react-native'

export default props => {
    const lado = 50
    return (
        <View style={{
            height: lado,
            width: lado,
            backgroundColor: props.cor ? props.cor : '#000'
        }}> 

        </View>
    )
}