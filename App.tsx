import { SafeAreaView,ScrollView,StatusBar, StyleSheet, Text, useColorScheme, View, TextInput, TouchableOpacity, ImageBackground, Image, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Options from './components/Screens/loginOptions'
import Login from './components/Screens/loginScreen'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';





export default function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Options' component={Options} options={{ headerShown: false}}/>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
