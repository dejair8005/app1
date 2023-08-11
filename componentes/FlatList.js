import React from 'react'
import { View, Text, FlatList, StyleSheet} from 'react-native'

const produtos = [
    {
        id:'001',
        desc:['Mouse', '25.00']
    },
    {
        id:'002',
        desc:['Teclado', '50.00']
    },
    {
        id:'003',
        desc:['Monitor', '450']
    },
    {
        id:'004',
        desc:['Gabinete', '900']
    },
    {
        id:'005',
        desc:['SSD', '250']
    },
    {
        id:'006',
        desc:['SSD', '250']
    },
    {
        id:'007',
        desc:['SSD', '250']
    },
    {
        id:'008',
        desc:['SSD', '250']
    },
    {
        id:'009',
        desc:['SSD', '250']
    },

]


export default function(){
    return(
        <View >
            <FlatList
                data={produtos}
                keyExtractor={(item)=>{item.id}}
                renderItem={({item})=><View style={estilos.item}><Text style={estilos.prod}>Descrição:{item.desc[0]} - Preço:{item.desc[1]}</Text></View>}
            />

        </View>
    )
}

const estilos=StyleSheet.create({
    item:{
        backgroundColor: '#008',
        padding: 15,
        marginVertical: 8,
        marginHorizontal:16
    },
    prod:{
        fontSize: 30,
        color:'#fff'
    }
})