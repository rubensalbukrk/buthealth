import React, {useContext} from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { AuthContext } from '../../contexts/auth';


export default function TabSobre() {
  const {user} = useContext(AuthContext)

 return (
   <View safeArea>
    <Text style={styles.title}>SOBRE</Text>
    <Text style={styles.descri}>
      {`Este software foi desenvolvido sem fins lucrativos,
com o intuito de aprendizagem de desenvolvimento de sistemas.`}
    </Text>
  <Text>Obrigado {user.email}</Text>
   </View>
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 48,
    color: '#8A84E2',
    marginTop: 40,
    marginLeft: 22,
  },
  descri: {
    marginTop: 20,
    marginLeft: 22,
    color: '#8A84E2',
    fontSize: 22
  }
})