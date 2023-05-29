import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function ButtonCalculator({focused, size }) {
 return (
   <View style={[styles.container, { backgroundColor: focused ? '#8A84E2' : '#AFAFDC' } ]}>
    <AntDesign name="calculator" size={40} color={focused ? '#fff' : 'rgba(255,255,255, 0.4)'} />
   </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width: 70,
        height: 70,
        borderRadius: 50,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset:{width: 2, height: 3},
        shadowOpacity: 0.2,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
});