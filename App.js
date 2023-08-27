
import React, {useState} from 'react';
import {Text,View,StyleSheet,SafeAreaView,StatusBar,Button} from 'react-native';
import Estilos from './estilos/Estilos.js'





export default function App() { 

  const [cor,setCor] = useState("black")
  const changeCor=(c)=>{setCor(c)}

  return (
    <SafeAreaView style={Estilos.conteiner}>
      <StatusBar 
        backgroundColor={cor} 
        barStyle='default'
        hidden={false}
        animated={true}
        translucent={true}
      />
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <Button
        title='Vermelho'
        onPress={()=>changeCor("red")}
      />
      <Button
        title='Azul'
        onPress={()=>changeCor("blue")}
      />
      <Button
        title='Verde'
        onPress={()=>changeCor("green")}
      />
        
    </SafeAreaView>
  );
}




const estilos = StyleSheet.create({
  logo: {
    width: 300,
    resizeMode:'contain'

  },
  imagemFundo:{
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    

  }
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






