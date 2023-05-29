import React,{ useContext, useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../../contexts/auth';
import GlobalStyle from '../../../../components/GlobalStyle';

import Field, {InputArea, Label, InputField } from '../../../../components/InputField';

export default function PrimeiroPasso() {

    const [nome, setNome] = useState('');
    const { user, getStarted } = useContext(AuthContext)
  


    function handleStarter(){
      getStarted(nome)

    }

 return (
   <View style={styles.container}>
    <Text style={[GlobalStyle.CustomFont, styles.title]}>BUT HEALTH</Text>
      
    <Text style={[GlobalStyle.CustomFont, styles.descricao]}>{`Primeiro informe
seu nome!`}</Text>

    <TextInput
    style={styles.input} 
    value={nome}
    placeholder='João'
    onChangeText={(text) => setNome(text)}></TextInput>


    <TouchableOpacity style={styles.button} onPress={handleStarter}>
      <Image source={require('../../../images/icon-getstart.png')} />
    </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#8A84E2'
  },
  title: {
    fontSize: 48,
    color: '#fff',
    paddingLeft: 14,
    paddingTop: 60, 
    fontWeight: '600'
  },
  descricao: {
    fontSize: 32,
    color: '#fff',
    marginTop: 100,
    marginBottom: 30
  },
  input: {
    fontFamily: 'Doppio One',
    width: '80%',
    height: 51,
    borderRadius: 50,
    opacity: 0.8,
    textAlign: 'center',
    fontSize: 36,
    color: '#FFF',
    backgroundColor: '#C8C8E2',
    marginBottom: 100
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    opacity: 1,
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.4,
    shadowColor: 'rgba(0,0,0, 0.25)',
    elevation: 2
  }
})