import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TabHome from './Home';
import TabCalculator from './Calculator';
import TabSobre from './Sobre';

import ButtonCalculator from '../../components/buttonCalculator'

import { Entypo, Feather, AntDesign } from '@expo/vector-icons'
import { AuthContext } from '../contexts/auth';


const Tab = createBottomTabNavigator();

export default function AppStack() {

 return (
    
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
            initialRouteName='Home'
            
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
        
  );
}
