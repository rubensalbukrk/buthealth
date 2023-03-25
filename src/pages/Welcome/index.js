import React, { useState } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity, 
  TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
  const nagivation = useNavigation();
  const [newUser, setUserName] = useState('');




 return (
   <View style={styles.container}>

          <Animatable.View 
            style={styles.containerLogo}>
            
              <Animatable.Image 
                animation="flipInY"
                delay={800}
                style={{width: '100%', maxHeight: 800}}
                source={require('../../../assets/splash.png')}
                resizeMode='cover' >
              </Animatable.Image>   
          </Animatable.View>
              
          <Animatable.View animation="fadeInUp" style={styles.containerForm}>

            <Animatable.Text 
            style={styles.txtWelcome}
            animation="fadeInLeft"
            delay={400}>Olá, bem vindo ao nosso sistema de calculos fitness!</Animatable.Text>
            <Animatable.View style={{justifyContent: 'center', alignItems:'center'}}>
            <TextInput
             onChangeText={(newUser) => setUserName(newUser)}
             defaultValue={newUser}
            style={{textAlign: 'center', marginTop: 20, borderBottomWidth: 1, width: '60%'}} 
            placeholder='Digite seu nome' />
            </Animatable.View>
           
            <TouchableOpacity 
              style={styles.button}
              onPress={() => nagivation.navigate('AppBut', {nome: newUser})
              }>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </Animatable.View>  
          <StatusBar barStyle="light-content" backgroundColor="#1e90ff" />
  </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1e90ff',
      justifyContent: 'center',
      alignItems:'center',
    },

    containerLogo: {
      flex: 2,
      width: '100%', 
      height: 300,
      justifyContent: 'center',
      alignItems: 'center',
  
    },

    containerForm: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,

    },

    txtWelcome: {
      textAlign: 'center',
      fontSize: 24,
      fontWeight: 'bold',
      paddingTop: 20,
      paddingStart: '5%',
      paddingEnd: '5%',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 18,
      paddingTop: 10,
      fontWeight: 'bold'

    },
    button: {
      shadowOpacity: 2,
      position: 'absolute',
      width: '60%',
      height: 50,
      paddingStart: '5%',
      paddingEnd: '5%',
      backgroundColor: '#1e90ff',
      borderRadius: 50,
      alignSelf: 'center',
      alignItems: 'center',
      bottom: '15%'
    }
})