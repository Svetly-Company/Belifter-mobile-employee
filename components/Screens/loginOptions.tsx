import { SafeAreaView,ScrollView,StatusBar, StyleSheet, Text, Button, useColorScheme, View, TextInput, TouchableOpacity, ImageBackground, Image, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




export default function loginOptions(    ) {

  return (
    <View style={styles.container}>
      <ImageBackground source={require ("../../assets/Background.png")} resizeMode="cover" style={[styles.image, styles.blur]}>
        <Image source={require ("../../assets/LogoLight.png")} style={styles.logo}></Image>
        <View style={styles.bottomDiv}>
          <TouchableOpacity style={styles.beginButton} /*onPress={() => navigation.navigate('Register')}*/>Começar</TouchableOpacity>
          <Pressable>
            <Text style={styles.accountText}>Já tenho uma conta</Text>
          </Pressable>
        </View>
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
    textAlign: 'center',
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
    marginHorizontal: 'auto',
  },
  beginButton: {
    width: 317,
    height: 40,
    backgroundColor : 'white',
    borderRadius: 20,
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 'auto',
    fontWeight: 'bold',
  },
  logo: {
    marginHorizontal: 'auto',
  },
  blur: {
    
  },
  bottomDiv: {
    height: 140,
    gap:10,
  }
});
