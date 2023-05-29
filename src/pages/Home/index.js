
import React, { useContext } from 'react';
import { StyleSheet, FlatList, View, Text, Image} from 'react-native';
import { AuthContext } from '../../contexts/auth';
import GlobalStyle from '../../../components/GlobalStyle';


export default function TabHome() {
  const {user} = useContext(AuthContext)

 return (
   <View style={styles.container} SafeArea>

    <Text style={[ GlobalStyle.CustomFont, styles.title]}>BUTHEALTH</Text>

    <Text style={[ GlobalStyle.CustomFont, styles.descricao]}>
     {` Beneficios da calculadora:

  - Exatidão
  - Melhores adaptações
  - Baseado em Ciência Moderna
  - Testado por Homens e Mulheres`}
      </Text>
    
    <Text style={[ GlobalStyle.CustomFont, styles.descricao]}>{user.nome}, vamos lá!</Text>
    <Image
    source={require('../../images/butlogo.png')}
    style={[styles.logo, {
      width: 400,
      height: 250
    }]}
    />

   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  title: {
    width: '100%',
    marginTop: 40,
    marginLeft: 22,
    fontSize: 48,
    fontWeight: '700',
    textAlign: 'left',
    color: '#8A84E2'
  },

  descricao: {
    marginTop: 20,
    fontSize: 22,
    color: '#8A84E2'
  },

  logo: {
    position: 'absolute',
    bottom: '2%',
    tintColor: '#AFAFDC'
  }
})