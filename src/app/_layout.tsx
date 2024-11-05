import "../styles/global.css"
import PostForm from "./post";
import { Slot } from "expo-router"
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler"

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
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

export default function Layout(){

    const [fontsLoaded] = useFonts(
        {
          Montserrat_400Regular,
          Montserrat_500Medium,
          IBMPlexSans_400Regular,
          IBMPlexSans_500Medium
        }
      )
      
      
    return (
        <QueryClientProvider client={queryClient}>
            <StatusBar backgroundColor={'#111112'} style="light" translucent/>
            <GestureHandlerRootView>                
                {
                    fontsLoaded? <Slot /> : ''
                }
            </GestureHandlerRootView>
        </QueryClientProvider>
    )
} 
