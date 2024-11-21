import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import './src/styles/global.css'
import Home from './src/app/(tabs)/home';
import LoginOptions from './src/app/index';

import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium
 } from '@expo-google-fonts/montserrat';

 import {
  IBMPlexSans_100Thin,
  IBMPlexSans_100Thin_Italic,
  IBMPlexSans_200ExtraLight,
  IBMPlexSans_200ExtraLight_Italic,
  IBMPlexSans_300Light,
  IBMPlexSans_300Light_Italic,
  IBMPlexSans_400Regular,
  IBMPlexSans_400Regular_Italic,
  IBMPlexSans_500Medium,
  IBMPlexSans_500Medium_Italic,
  IBMPlexSans_600SemiBold,
  IBMPlexSans_600SemiBold_Italic,
  IBMPlexSans_700Bold,
  IBMPlexSans_700Bold_Italic,
} from '@expo-google-fonts/ibm-plex-sans';
import Comunidade from './src/app/(tabs)/comunidade';
import LoadingScreen from './src/app/loading';

export default function App() {
  const [fontsLoaded] = useFonts(
    {
      Montserrat_400Regular,
      Montserrat_500Medium,
      IBMPlexSans_400Regular,
      IBMPlexSans_500Medium
    }
  )
  return (
    <>
    <>
    <StatusBar backgroundColor={'#111112'} style="light" translucent/>
    {
      fontsLoaded? <Comunidade /> : <LoadingScreen />
    }
    
    </>
    
    </>
  );
}
