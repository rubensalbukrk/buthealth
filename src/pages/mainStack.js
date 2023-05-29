import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import PrimeiroPasso from "./stacks/PrimeiroPasso";
import SegundoPasso from "./stacks/SegundoPasso";
import AppStack from "./appStack";


const Stack = createStackNavigator();

export default function MainStack(){
  
    function GetInfo({ navigation }) {
        return (
          <View style={{ flex: 1, height: 200, alignItems: 'center', justifyContent: 'center', backgroundColor: '#8A84E2' }}>
            <SegundoPasso />
          </View>
        );
      }

    return (

    <Stack.Navigator>

        <Stack.Group
        initialRouteName="PrimeiroPasso"
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="PrimeiroPasso" component={PrimeiroPasso} />
            <Stack.Screen name="SegundoPasso" component={SegundoPasso} />
            <Stack.Screen name ="appStack" component={AppStack} />
        
        </Stack.Group>
        <Stack.Group screenOptions={{ 
            presentation: 'modal',
            freezeOnBlur: true,
            headerBackTitleVisible: false,
            headerTitle: 'Segundo passo',
            headerTitleStyle: {
              fontSize: 32,
              color: '#fff'
            },
            headerStyle: {
              backgroundColor: '#8A84E2'
            }
            }}>
            <Stack.Screen name="GetInfo" component={GetInfo} />
        </Stack.Group>
    </Stack.Navigator>   
    )
}