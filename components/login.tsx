import { LinearGradient } from "expo-linear-gradient";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";


interface loginProps {
    onPress: () => void
}

export default function Login(loginProps: loginProps) {
    return(
        <View style={styles.bigDiv}>
          <TouchableOpacity style={styles.button}><Image source={require ("../assets/google_icon.png")} style={styles.imageicon}></Image><Text>Login com o Google</Text></TouchableOpacity>
          <LinearGradient colors={['#00BF63', '#00592E']} start={{ x: 0.7, y: 0 }} style={styles.mainButton}>
            <TouchableOpacity
            onPress={loginProps.onPress} 
            style={styles.mainButton}><Text style={styles.textEmail}>Login com email</Text></TouchableOpacity>
          </LinearGradient>
          <Text style={styles.accountText}>Ainda não tenho uma conta.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
    
    logo: {
      marginHorizontal: 'auto',
    },
    textEmail: {
        opacity: 1,
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
  });