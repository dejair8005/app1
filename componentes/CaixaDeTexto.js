import React, {useState} from "react";
import {View, TextInput, Text} from 'react-native'

export default function(){

    const [nome, setNome]=useState("")
    const mudarNome = (text)=>{setNome(text)}

    return(
        <View>
            <Text>Digite Seu Nome</Text>
            <TextInput
                style={{borderWidth:1, borderColor:'#000'}}
                value={nome}
                onChangeText={mudarNome}
                //autoCapitalize="words"
                keyboardType="numeric"
            />
            <Text>{nome}</Text>
        </View>
    )
}