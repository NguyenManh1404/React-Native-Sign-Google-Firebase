import React from 'react';
import { LogBox } from 'react-native';
import StackNavigator from './StackNavigator';
LogBox.ignoreAllLogs();
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';


export default function App() {
  return (
    <NavigationContainer>
       <AuthProvider>
        <StackNavigator/>
       </AuthProvider> 
    </NavigationContainer>
   
  );  
}

