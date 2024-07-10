import { SafeAreaView,ScrollView,StatusBar, StyleSheet, Text, Button, useColorScheme, View, TextInput, TouchableOpacity, ImageBackground, Image, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginOptions(  navigation : any  ) {

  return (
    <View style={styles.container}>
      <ImageBackground source={require ("../assets/Background.webp")} style={[styles.image, styles.blur]}>
        <Image source={require ("../assets/LogoLight.png")} style={styles.logo}></Image>
        <View style={styles.bottomDiv}>
            <Link href={"/registerScreen"} asChild>
              <TouchableOpacity style={styles.beginButton}> 
                
                    <Text>Começar</Text>  
                
                </TouchableOpacity>
            </Link>
          <Link href={"/loginScreen"}>
            <Text className='color-white'>Já tenho uma conta</Text>
          </Link>
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
    flex: 1,
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
    marginHorizontal: 85,
  },
  blur: {
    
  },
  bottomDiv: {
    height: 140,
    gap:10,
    alignItems: 'center',
    alignContent: 'center',
  }
});