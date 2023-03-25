import React, { useState } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  Image,
  TouchableOpacity, 
  TextInput} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useFonts, Roboto_300Light} from '@expo-google-fonts/roboto';
import { Kalam_700Bold } from '@expo-google-fonts/kalam';

export default function AppBut({route}) {
 const [fontsLoaded] = useFonts({
  Roboto_300Light,
  Kalam_700Bold,
    
  });
  const [altura, setAltura] = useState(null)
  const [peso , setPeso] = useState(null)
  const [messageImc, setMessageImc] = useState("Preencha todos os campos.")
  const [imc, setImc] = useState(null)
  const [txtButton, setTxtButton] = useState("Calcular")
  
  function imcCalculate() {
    return setImc ((peso/(altura*altura)).toFixed(2))
  }
  
  function validationImc() {
    if (peso != null && altura != null){
    imcCalculate()
    setAltura(null)
    setPeso(null)
    setMessageImc("Seu Imc é igual: ")
    setTxtButton("Calcular Novamente")
    return
  }
  setImc(null)
  setMessageImc("Preencha todos os campos.")
  setTxtButton("Calcular")
  }

  if (!fontsLoaded) {
    return null;
  } 

 return (
  <View style={styles.container}>
    <Animatable.View 
      style={styles.containerHeader}
    >
      
      <Animatable.Image 
        style={{top: -50, width: '100%', maxHeight: 200}}
          animation="bounceInDown"
          delay={500}
          duration={1400}
          source={require('../../../assets/splash.png')}
          resizeMode='contain' />
      
        <Animatable.Text animation="bounceInDown" delay={300} duration={1400} style={styles.txtWelcome}>BUT HEALTH </Animatable.Text>
        <Animatable.Text animation="bounceInRight" delay={300} duration={1400} style={{marginBottom: 30, fontFamily: 'Roboto_300Light', fontSize: 18, textAlign: 'center', color: '#000'}}>Nós sabemos que para a qualidade de saúde certos cuidados devem ser importantes, e um deles é a informação correta do que usar, e quantidades corretas para uma perfomance melhor, deixe-nos te ajudar {route.params?.nome}! </Animatable.Text>
    </Animatable.View>

      
  
      <Animatable.View animation="bounceInUp" duration={1200} style={styles.containerForm}>
        <View style={{top: -30, paddingStart: 14, paddingEnd: 14, width: '100%', justifyContent: 'space-between', flexDirection: 'row'}}>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>TMB</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>iMC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Calórias</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuButton}>
            <Text style={styles.menuText}>Dieta</Text>
          </TouchableOpacity>
        </View>

        <Text>Altura</Text>
        <TextInput onChangeText={setAltura} value={altura} style={styles.input} keyboardType="numeric" placeholder='Ex: 170'></TextInput>
        <Text>Peso</Text>
        <TextInput onChangeText={setPeso} value={peso} style={styles.input} keyboardType="numeric" placeholder='70'></TextInput>
        <Text>Idade</Text>
        <TextInput style={styles.input}>30</TextInput>

        <TouchableOpacity onPress={() => validationImc()} style={styles.button}>
          <Text style={styles.txtButton}>{txtButton}</Text>
        </TouchableOpacity>

        <Animatable.Text style={{marginTop: 10, marginBottom: 5, fontSize: 12, color: '#fff'}} animation="flipInX">{messageImc}</Animatable.Text>
        <Animatable.Text style={{fontSize: 22, color: '#ffc565', fontWeight: 'bold'}} animation="fadeInDown">{imc}</Animatable.Text>
      </Animatable.View>
  </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  menuButton: {
    width: 70,
    heigth: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1e90ff',
    borderRadius: 10,
    borderBottomWidth: 1,
    marginBottom: 20
  },
  menuText: {
    textAlign: 'center',
    color: '#fff'
  },
  containerHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtWelcome: {
    fontSize: 30,
    color: '#1e90ff',
    top: -100,
    fontFamily: 'Kalam_700Bold'
    
  },

  containerForm: {
    flex: 1,
    maxHeight: '50%',
    backgroundColor: '#1e90ff',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    
  },

  input: {
    borderBottomWidth: 1,
    marginBottom: 10,
  },

  txtButton: {
    color: '#1e90ff',
    textAlign: 'center',
    marginTop: 8,
    fontSize: 14,
    fontWeight: 'bold'

  },
  button: {
    width: '60%',
    height: 40,
    marginTop: 30,
    fontWeight: 'bold',
    backgroundColor: '#fff',
    borderRadius: 50,

  }

})