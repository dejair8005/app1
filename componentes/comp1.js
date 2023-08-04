//import React, { Component } from 'react';
import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import Estilos from '../estilos/Estilos'

let nt;


export default function(props){
  nt=props.nota
    return(
        <Text style={Estilos.textoCursos }>CFB Cursos - {props.curso}: Nota={nt}</Text>
    )
}








/*

export default function App1() {
  return (
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
}*/
