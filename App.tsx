//APP

//IMPORTING
//REACT/REACT-NATIVE
import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
//THEMES CSS
import { theme } from './src/theme';
//EXPO COMPONENTS
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
//COMPONENTS
import Widget from './src/components/Widget';

export default function App() {

    //FONTS VALIDATION
    const [fontsLoaded] = useFonts({
      Inter_400Regular,
      Inter_500Medium
    });  
    if (!fontsLoaded) {
      return <AppLoading />;
    }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}
    >      
      <StatusBar 
        style="light"
        backgroundColor="transparent"
        translucent
      />
      <Widget />
    </View>
  );
}
