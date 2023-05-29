import { NavigationContainer } from '@react-navigation/native'
import AuthProvider from './src/contexts/auth';
import AppStack from './src/pages/appStack';
import MainStack from './src/pages/mainStack';
import { useFonts } from 'expo-font';
import Preload from './src/pages/stacks/Preload';
import { AsyncStorage } from 'react-native';



export default function App() {

  const [fontsLoaded] = useFonts({
    'Doppio One': require('./assets/fonts/DoppioOne-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Preload />;
  }

  const auth = false;
  
  return (
    <NavigationContainer>
        <AuthProvider>
            
              {!auth ? <MainStack /> : <AppStack />}
  
        </AuthProvider>  
      </NavigationContainer>
    );
}