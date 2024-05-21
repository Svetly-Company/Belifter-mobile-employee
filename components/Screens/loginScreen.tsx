import { SafeAreaView,ScrollView,StatusBar, StyleSheet, Text, useColorScheme, View, TextInput, TouchableOpacity, ImageBackground, Image, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LinearGradient } from 'expo-linear-gradient';





export default function registerScreen() {
  return (
    <View style={styles.Main}>
        <Text style={styles.text}>Faça login na sua conta</Text>
        <View style={styles.inputView}>
            <TextInput style={styles.input} value='Email'></TextInput>
            <TextInput style={styles.input} value='Senha'></TextInput>
            <Text style={styles.smallText}>Esqueci minha senha</Text>
            <TouchableOpacity style={styles.registerButton}>Entrar</TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    Main: {
        backgroundColor: '#0D0D0D',
        height: '100%',
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    text:{
        color: 'white',
        alignSelf: 'auto',
        marginRight: 117,
        fontSize: 17,
    },
    input: {
        height: 40,
        width: 308,
        backgroundColor: '#151415',
        borderRadius: 15,
        marginTop: 30,
        color: '#A5A5A5',
        textAlign: 'left'
    },
    registerButton: {
        backgroundColor: '#00BF63',
        width: 312,
        height: 45,
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        color: 'white',
    },
    inputView: {
        height: 700,
    },
    smallText: {
        color: '#DADADA',
        marginLeft: 180,
        marginTop: 15,
        fontSize: 12,
    },

});


