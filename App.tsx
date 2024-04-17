import { SafeAreaView,ScrollView,StatusBar, StyleSheet, Text, useColorScheme, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require ("./assets/backgroung_image_login.png")} resizeMode="cover" style={styles.image}>
        <View style={styles.bigDiv}>
          <TouchableOpacity style={styles.button}><Image source={require ("./assets/google_icon.png")} style={styles.imageicon}></Image><Text>Login com o Google</Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}><Text>Login com email</Text></TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: 'sans-serif',
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%', 
    height: '100%',
  },
  button: {
    width: 250,
    height: 50,
    backgroundColor : 'white',
    borderRadius: 10,
    display: 'flex',
    flexDirection:'row',
  },
  imageicon: {
    width: 30,
    height: 30,
  },
  bigDiv: {
    height: '30%',
    width: '100%',
  },
});
