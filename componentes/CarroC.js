import React, {Component} from "react";
import { View, Text, Button  } from "react-native";

export default class Carro extends Component {
    state={
        ligado:true
    }
    render(props){
        return(
            <View>
                <Text>Carro:{this.props.nome} - Ligado:{this.state.ligado?"SIM":"NÃO"}</Text>
                <Button
                    title={this.state.ligado?"Desligar":"Ligar"}
                    onPress={
                        ()=>{this.setState({ligado:!this.state.ligado})}
                    }
                />
            </View>
        )
    }
}