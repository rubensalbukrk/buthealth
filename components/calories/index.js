import React from 'react';
import { Box, Text, TextField, Image, Button, Heading } from 'native-base';
export default function Calorias() {
 return (
   
    <Box bg="violet.200" rounded="xl" width={250} height={420} marginTop={10} marginBottom={10} paddingX={5} safeArea>
      <Heading size="md" color="violet.700" marginBottom={3}>Calorias diárias</Heading>
      <Text>Sua altura:</Text>
      <TextField 
      placeholder='Ex. 1,70' 
      backgroundColor="violet.300"
      border="0"
      borderRadius="10"
      keyboardType="number-pad"/>

      <Text>Seu peso:</Text>
      <TextField
      backgroundColor="violet.300"
      borderRadius="10"  
      placeholder='Ex. 70' 
      keyboardType="number-pad"/>

      <Text>Sua idade:</Text>
      <TextField
      backgroundColor="violet.300"
      borderRadius="10" 
      placeholder='' 
      keyboardType="number-pad" /> 

      <Button backgroundColor="violet.400" marginTop={5}>Obter</Button> 
    </Box>
  );
}