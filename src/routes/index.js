import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import AppBut from '../pages/AppBut'


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Welcome" 
            component={Welcome}
            options={{ headerShown: false }}
        />
            <Stack.Screen 
            name="AppBut" 
            component={AppBut}
            options={{ headerShown: false }} 
        />

        </Stack.Navigator>
    )
}