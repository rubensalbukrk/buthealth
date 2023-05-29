import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Imc from '../../../components/imc/index';
import Metabolismo from '../../../components/metabolism/index';
import Calorias from '../../../components/calories/index';
import { NativeBaseProvider } from 'native-base'


export default function TabCalculator() {
 return (
 
  <NativeBaseProvider> 
      <ScrollView alignItems={'center'} paddingBottom={40}>

        <Imc />
        <Metabolismo />
        <Calorias />
        
      </ScrollView>
  </NativeBaseProvider>

  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
   

    }
})
