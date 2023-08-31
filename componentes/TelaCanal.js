

function TelaCanal({navigation}){
    return(
      <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
          <Text>Tela Canal</Text>
          <Text>youtube.com/cfbcursos</Text>
          <Button
            title='Home'
            onPress={()=>navigation.navigate('Home')}
          />
          <Button
            title='Voltar'
            onPress={()=>navigation.goBack()}
          />
      </View>
    )
  }
