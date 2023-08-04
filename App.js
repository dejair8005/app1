
import React, { Component } from 'react';
import {Text,View,StyleSheet} from 'react-native';

import Estilos from './estilos/Estilos'
import Caixas from './componentes/Caixas'





export default function App1() {
  return (
    <View style={Estilos.conteiner}>     
        <Caixas/>
        <Text style={Estilos.textoPadrao}>youtube.com/cfbcursos</Text>
        <Text style={Estilos.textoTitulo}>www.cfbcursos.com.br</Text>       
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










