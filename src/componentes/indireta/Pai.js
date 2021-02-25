import React, { useState } from 'react'
import Filho from './Filho'
import { Text } from "react-native";
export default () => {
    const[num, setNum] = useState(0)

    function exibirValor(numero) {
        setNum(numero)
    }

    return (
        <>
            <Text>{num}</Text>
            <Filho 
                funcao={exibirValor} 
                min={1}
                max={60}
            />
           
        </>
    )
}