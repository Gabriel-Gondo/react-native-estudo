import React from 'react'
import { Platform, Text } from 'react-native'

export default () => {
    if(Platform.OS === 'ios'){
        return (
            <Text>IOS</Text>
        )
    }else {
        return (
            <Text>Android</Text>
        )
    }
    
}