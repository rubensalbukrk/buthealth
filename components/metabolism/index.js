import React from 'react';
import { StyleSheet, Box, Text, TextField, Button, Heading, Checkbox } from 'native-base';


export default function Metabolismo() {
 return (
    <Box bg="violet.200" rounded="xl" width={250} height={600} marginTop={10} paddingX={5} safeArea>

      <Heading size="md" color="violet.700" marginBottom={3}>Metabolismo Basal</Heading>
      
      <Text>Sexo:</Text>
      <Checkbox name='Homem'>Homem</Checkbox>
      <Checkbox name='Mulher'>Mulher</Checkbox>
      <Text style={{marginTop: 15}}>Sua Altura:</Text>
      <TextField
      backgroundColor="violet.300"
      borderRadius="10" 
      keyboardType='number-pad'
      placeholder='Ex. 1,70'
      />

      <Text>Seu peso:</Text>
      <TextField
      backgroundColor="violet.300"
      borderRadius="10" 
      keyboardType='number-pad'
      placeholder='Ex. 70' 
      />

      <Text>Sua idade:</Text>
      <TextField
      backgroundColor="violet.300"
      borderRadius="10" 
      keyboardType='number-pad' 
      placeholder='' 
      />

      <Text>Nivel de atividade fisica:</Text>
      <TextField 
      backgroundColor="violet.300"
      borderRadius="10" 
      keyboardType='number-pad'
      placeholder='de 1 a 5'/> 

      <Button backgroundColor="violet.400" marginTop={5}>Obter</Button>
    </Box>
  );
}