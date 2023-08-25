
import React, {useState} from 'react';
import {Text,View,StyleSheet,SafeAreaView} from 'react-native';
import Estilos from './estilos/Estilos.js'
import CarroC from './componentes/CarroC.js'
import CarroF from './componentes/CarroF.js'
import CxTx from  './componentes/CaixaDeTexto.js'




export default function App() { 

  const [ligado,setLigado] = useState(false)

  return (
    <SafeAreaView style={Estilos.conteiner}>
      <Text>CFB Cursos</Text>
      <Text>Curso de React Native</Text>
      <CxTx/> 
        
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






