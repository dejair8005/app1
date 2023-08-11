import React from 'react';
import { Text, View } from 'react-native';
import Estilos from '../estilos/Estilos';

export default function MyComponent(props) {
  return (
    <View style={{ width: '100%', height: 300, flexDirection:'column',
    justifyContent:'center',alignItems:'stretch',
    //flexWrap:'wrap'
    }}>
      {
          props.exibir?
            <View style={{flex:1}}>
              <View style={{ flexGrow:1, backgroundColor: '#00f' }}></View>
              <View style={{ flexGrow:2, backgroundColor: '#00a' }}></View>
              <View style={{ flexGrow:3, backgroundColor: '#005' }}></View>
              
            </View>
          :
            <View style={{flex:1}}>
              <View style={{ flexGrow:1, backgroundColor: '#f00' }}></View>
              <View style={{ flexGrow:1, backgroundColor: '#a00' }}></View>
              <View style={{ flexGrow:1, backgroundColor: '#500' }}></View>
            </View>

      }
    </View>
  );
}
