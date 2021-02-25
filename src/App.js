import React from 'react'
import { View,StyleSheet} from 'react-native'
import Primeiro from './componentes/Primeiro'
import { Comp1 ,Comp2, Comp3} from './componentes/Multi'
import MinMax from './componentes/MinMax'
import Frag from './componentes/Frag'
import Botao from './componentes/botao'
import Contador from './componentes/Contador'
import Pai from './componentes/indireta/Pai'
import Diferenciar from './componentes/Diferenciar'

export default () =>  {
    return (
        <View style={style.App}>
            <Diferenciar/>
        </View>
    )
}

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24
    }
})
