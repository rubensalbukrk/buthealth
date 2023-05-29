import React, { useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import TabHome from './pages/Home';
import TabCalculator from './pages/Calculator';
import TabSobre from './pages/Sobre';
import Login from './pages/stacks/PrimeiroPasso';
import ButtonCalculator from '../components/buttonCalculator'
import { Entypo, Feather, AntDesign } from '@expo/vector-icons'


const Tab = createBottomTabNavigator();

export default function Routes() {
 return (

    <NavigationContainer>
    
        <Tab.Navigator
            screenOptions={{
            tabBarStyle: {
                backgroundColor: '#8A84E2',
                height: 57,
                paddingBottom: 5,
                paddingTop: 5,
                borderTopWidth: 1,
                borderColor: '#ddd'
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: 'rgba(255,255,255, 0.4)'
            
            }}
            initialRouteName='Login'
            
        >
            <Tab.Screen 
            name="Home" 
            component={TabHome}
            options={{
                headerTitle: '',
                headerShown: false,
                tabBarIcon: ({size, color}) => (
                <Feather name="home" size={size} color={color} />
            )
            }}
            />

            <Tab.Screen 
            name="Calculator" 
            component={TabCalculator} 
            options={{
            headerTitle: '',
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: ({ focused, size }) => (
                <ButtonCalculator size={size} focused={focused} />
            )
            }}
            />

            <Tab.Screen 
            name="Sobre" 
            component={TabSobre}
            options={{
                headerShown: false,
            tabBarIcon: ({size, color}) => (
                <Feather name="heart" size={size} color={color} />
            )
            }}
            />

        </Tab.Navigator>
        
    </NavigationContainer>
   
  );
}
