import { SafeAreaView,ScrollView,StatusBar, StyleSheet, Text, Button, useColorScheme, View, TextInput, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Link, router } from 'expo-router';
import { Image } from 'expo-image';
export default function LoginOptions(  navigation : any  ) {



  return (
      <View style={styles.container}>
        <ImageBackground source={require ("../assets/Background.webp")} style={[styles.image]} imageStyle={{opacity: 0.3}}>
          <Image source={require ("../assets/logoLight.png")} style={styles.logo}></Image>
          <View style={styles.bottomDiv}>
            <View className='m-4 mt-20'>
              <Text className='text-white font-ibmMedium text-2xl'>Bem-Vindos(as)</Text>
              <Text className='text-[#ADADAD] text-xs'>Transforme sua jornada fitness com o BeLifter, o aplicativo definitivo para alcançar seus objetivos de saúde e bem-estar.</Text>
            </View>
            
              <Link href={"/registerScreen"} asChild>
                <TouchableOpacity style={styles.beginButton}> 
                  
                      <Text className='font-ibmMedium'>Começar</Text>  
                  
                  </TouchableOpacity>
              </Link>
            <Link href={"/loginScreen"}>
              <Text className='color-white font-ibmMedium'>Já tenho uma conta</Text>
            </Link>
          </View>
        </ImageBackground>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    flex: 1,
    display: 'flex',
    alignContent: 'center',
    textAlign: 'center',
    justifyContent: 'center'
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
  beginButton: {
    width: 317,
    height: 40,
    backgroundColor : '#DADADA',
    borderRadius: 20,
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  logo: {
    flex: 1/2,
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