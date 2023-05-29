import React,{ useContext, useState } from 'react';
import { StyleSheet, Animated, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../../contexts/auth';
import GlobalStyle from '../../../../components/GlobalStyle';
import Field, {InputArea, Label, InputField } from '../../../../components/InputField';
import * as Animatable from 'react-native-animatable';


export default function PrimeiroPasso() {

    const [nome, setNome] = useState('');
    const { user, getStarted } = useContext(AuthContext)
  


    function handleStarter(){
      getStarted(nome)

    }

 return (
   <Animatable.View style={styles.container}
   animation={'zoomInRight'}
   duration={1300}
   
   >
    <Animatable.Text 
    style={[GlobalStyle.CustomFont, styles.title]}
    animation={'bounceInDown'}
    duration={1000}
    delay={1200}
    >BUT HEALTH</Animatable.Text>
      
    <Animatable.Text style={[GlobalStyle.CustomFont, styles.descricao]}
    animation={'bounceInRight'}
    duration={1000}
    delay={1400}
    >{`Primeiro informe
seu nome!`}</Animatable.Text>

    <Animatable.View
    animation={'bounceInUp'}
    duration={1000}
    delay={300}
    style={{width: '80%', justifyContent: 'center', alignItems: 'center'}}
    >
      <TextInput
      style={styles.input} 
      value={nome}
      placeholder='João'
      onChangeText={(text) => setNome(text)}></TextInput>
    </Animatable.View>

    <Animatable.View
    animation={'rubberBand'}
    iterationCount={'infinite'}
    >
        <TouchableOpacity style={styles.button} onPress={handleStarter}>
          <Image source={require('../../../images/icon-getstart.png')} />
        </TouchableOpacity>
      </Animatable.View>


   </Animatable.View>
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