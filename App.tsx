import { SafeAreaView,ScrollView,StatusBar, StyleSheet, Text, useColorScheme, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Emailform from './components/emailform';
import { useState } from 'react';
import Login from './components/login';





export default function App() {

    function switchForm(){
      setEmail((email) => !email)
      console.log(email)
    } 

  const [email, setEmail] = useState(true)

  return (
    <View style={styles.container}>
      <ImageBackground source={require ("./assets/Background.png")} resizeMode="cover" style={[styles.image, !email && styles.blur]}>
        <Image source={require ("./assets/LogoLight.png")} style={styles.logo}></Image>
        {
          email ? <Login onPress={switchForm}/> :  <Emailform onPress={switchForm}/>
        }
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'sans-serif',
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    display: 'flex',
    
  },
  image: {
    width: '100%', 
    height: '100%',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: 317,
    height: 40,
    backgroundColor : 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
  },
  imageicon: {
    width: 20,
    height: 20,
  },
  bigDiv: {
    height: '30%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountText: {
    color: 'white',
    
  },
  mainButton: {
    width: 317,
    height: 40,
    backgroundColor : 'transparent',
    borderRadius: 10,
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 7,
  },
  logo: {
    marginHorizontal: 'auto',
  },
  textEmail: {
    opacity: 1,
    color: 'white',
  },
  blur: {
    
  }
});
