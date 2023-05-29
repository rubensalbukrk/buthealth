'use strict';
import React, {useContext, useState} from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from "../../../contexts/auth";
import Field, {InputArea, Label, InputField} from "../../../../components/InputField";
import GlobalStyle from "../../../../components/GlobalStyle";


export default function SegundoPasso(){
    const { user, getInfo } = useContext(AuthContext)
    const [idade , setIdade] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    

    function handleGetInfo(){
        
        getInfo(user.nome, idade, altura, peso)
    }

    return (
         <View style={styles.container}>
            <Text style={[
                GlobalStyle.CustomFont,
                styles.titulo]}>AGORA INFORME SEUS DADOS O MAIS EXATO POSSÍVEL PARA O MELHOR RESULTADO</Text>
            
            <InputArea>
            <Label>Altura</Label>
            <TextInput
            style={styles.input}
             value={altura} 
             onChangeText={(text) => setAltura(text)}
             placeholder="Ex. 170"
             keyboardType='numbers-and-punctuation'
             />
            </InputArea>
          

            <InputArea>
            <Label>Idade</Label>
            <TextInput
            style={styles.input}
            value={idade}
             onChangeText={(text) => setIdade(text)} 
             placeholder="0"
             keyboardType='numbers-and-punctuation'
             />
            </InputArea>
            

            <InputArea>
            <Label>Peso</Label>
            <TextInput
            style={styles.input}
            value={peso}
            onChangeText={(text) => setPeso(text)} 
            placeholder="kgs"
            keyboardType='numbers-and-punctuation' />
            </InputArea>

        <TouchableOpacity 
        style={styles.button}
        onPress={handleGetInfo}>
            <Image source={require('../../../images/icon-getstart.png')} />
        </TouchableOpacity>
         </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8A84E2',
    },
    titulo: {
        fontSize: 28,
        color: '#fff',
        marginHorizontal: 19,
        marginBottom: 30
    },
    input: {
        color: '#f4f',
        fontSize: 26,
        fontWeight: '400'
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