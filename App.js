
import React, { Component } from 'react';
import {Text,View,StyleSheet, ImageBackground} from 'react-native';

import Lp from './componentes/FlatList'
import Estilos from './estilos/Estilos'

const imgbg1='./assets/imagens/bg1.jpg'
const imgbg2='./assets/imagens/bg2.jpg' 
const imgbg3='./assets/imagens/bg3.jpg' 



export default function App() {
  return (
    <View style={Estilos.conteiner}>
        <ImageBackground
          source={require(imgbg1)}
          style={estilos.imagemFundo}
        >  
        <View>     
          <Text style={Estilos.textoPadrao}>youtube.com/cfbcursos</Text>
          <Text style={Estilos.textoTitulo}>www.cfbcursos.com.br</Text>
          {/*<Lp/>*/}

        </View>
        </ImageBackground>
    </View>
  );
}




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










