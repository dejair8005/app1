
import React from 'react';
import {Text,View,StyleSheet,Button, Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { create } from 'react-test-renderer';


const Guias = createBottomTabNavigator();

function TelaHome({navigation}){
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <Text>Tela Home</Text>
        <Text>CFB Cursos</Text>
        
    </View>
  )
}

function TelaCanal({navigation}){
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <Text>Tela Canal</Text>
        <Text>youtube.com/cfbcursos</Text>
        
       
    </View>
  )
}

function TelaCursos({navigation}){
  return(
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
        <Text>Tela Cursos</Text>
        <Text>CFB Cursos</Text>
       
        
    </View>
  )
}






export default function App() { 
  return (
    
    <NavigationContainer>
        <Guias.Navigator initialRouteName='TelaCanal'>
          <Guias.Screen
            name="Home"
            component={TelaHome}
            options={{
              title: "Tela Inicial",
              headerStyle:{
                backgroundColor: '#008'
              },
              headerTintColor:'#fff',
              headerRight:()=>(
                  <Button
                    title="Cursos"
                    color="#000"
                    onPress={()=>alert('Voce Clicou no Botao')}
                  />
              ),
            }}
          />
          <Guias.Screen
            name="Canal"
            component={TelaCanal}
            options={{title: "Tela Canal",
            headerStyle:{
              backgroundColor: '#008'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold'
            }}}
          />
          <Guias.Screen
            name="Cursos"
            component={TelaCursos}
            options={{title: "Cursos do Canal"}}
          />
        
        </Guias.Navigator>
    </NavigationContainer>
    
  );
}




const estilos = StyleSheet.create({
 
})






/*
export default class App1 extends Component{
  render() {
    return(
      <View>
        <View>
          <Text>CFB Cursos</Text>
          <Text>Curso de React-Native</Text>
        </View>
        <View>
          <Text>Aula3</Text>
          <Text>www.cfbcursos.com.br</Text>
        </View>
      </View>
    );
  }

}
*/






