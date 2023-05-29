import React from 'react';
import { ScrollView, Box, Text, TextField, Button, Pressable, Heading} from 'native-base';

export default function Imc() {
 return (
  <Box bg="violet.200" rounded="xl" width={250} height={340} marginTop={10} paddingX={5} safeArea>
  
  <Heading size="md" color="violet.700" marginBottom={5}>Indíce de Massa Muscular</Heading>

    <Text>Sua altura:</Text>
    <TextField
    backgroundColor="violet.300"
    borderRadius="10" 
    placeholder='Ex. 1,70' 
    keyboardType="number-pad"/>

    <Text>Seu peso:</Text>
    <TextField 
    backgroundColor="violet.300"
    borderRadius="10" 
    placeholder='Ex. 70' 
    keyboardType="number-pad"/> 

    <Button backgroundColor="violet.400" marginTop={2}>Obter</Button>
  </Box>
  );
}