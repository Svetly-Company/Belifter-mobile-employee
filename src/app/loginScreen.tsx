import { SafeAreaView,ScrollView,StatusBar, StyleSheet, Text, useColorScheme, View, TextInput, TouchableOpacity, ImageBackground, Image, Pressable, ToastAndroid } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import axios, { AxiosError } from 'axios';



export default function LoginScreen( ) {

    interface dataModel{
        access_token: string
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState<string>('');
    const [accessToken, setAccessToken] = useState<dataModel>()

    function handleSetEmail(text: string){
        setEmail(text);
    }

    function handleSetPassword(text: string){
        setPassword(text)
    }

    async function verifyUser(){
        try{
            const val = await axios.post('https://belifter-server.onrender.com/auth/signin', {
                email,
                password
            })
            .then((res) => {
                if(res.data.status){
                    throw new Error(String(res.data.message))
                }
                return JSON.stringify(res.data)
            }).catch((err) => {throw err})
                
            const parsedToken = JSON.parse(val) 
            setAccessToken(parsedToken['access_token'])
            router.navigate('/home')
        }catch(err){
            ToastAndroid.show('Usuário inexistente', ToastAndroid.SHORT)
        }

        // const verifyToken = await axios.get('https://belifter-server.onrender.com/auth/profile', {
        //     headers: {
        //         'Authorization': `Bearer ${accessToken}`
        //     }
        // }).then((res) => {
        //     return res.status==200 ? true : false
        // })
        
        
        

        
    }
  return (
    <View style={styles.Main}>
        
        <Text style={styles.text}>Faça login na sua conta</Text>

        <View style={styles.inputView}>
            <TextInput 
                style={styles.input} 
                placeholder='Email' 
                placeholderTextColor={'#A5A5A5'}
                onChangeText={handleSetEmail}
                value={email}
                
            />  
            <TextInput 
                style={styles.input} 
                placeholder='Senha' 
                placeholderTextColor={'#A5A5A5'}
                onChangeText={handleSetPassword}
                value={password}
                
            />  
            <View style={styles.bottomView}>
                <Text style={styles.smallText}>Esqueci minha senha.</Text>
            </View>
            
            <TouchableOpacity 
            onPress={verifyUser}
            style={styles.registerButton}>
                <Text>Entrar</Text>
            </TouchableOpacity> 
            
        </View>

        <View style={styles.middle}>
            <View style={styles.whiteLine}></View>
            <View style={styles.orView}><Text style={styles.or}>ou</Text></View>
            <View style={styles.whiteLine}></View>
        </View>

        <View style={styles.bottom}>
            <TouchableOpacity style={styles.googleButton}><Text style={styles.googleText}>Login com o google</Text></TouchableOpacity>
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
    orView:{
        width: 60,
        textAlign: 'center',
        alignItems: 'center'
    },
    input: {
        height: 40,
        width: 310,
        backgroundColor: '#151415',
        borderRadius: 15,
        marginTop: 30,
        color: '#fff',
        textAlign: 'left',
        padding: 6
    },
    whiteLine: {
        backgroundColor: 'white',
        height: 1,
        width: '30%'
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
        height: 350,
        display: 'flex',
    },
    smallText: {
        color: '#DADADA',
        marginTop: 15,
        fontSize: 12,
        paddingRight: 10
    },
    bottomView: {
        height:30,
        textAlign: 'right',
        alignItems: 'flex-end',
    },
    middle: {
        height: 40,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign:'center',
        justifyContent:'center'
    },
    or:{
        color:'white',
        fontSize: 21,
    },
    bottom: {
        height: '20%',
        marginTop: 90
    },
    googleButton: {
        backgroundColor: 'white',
        width: 312,
        height: 45,
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    googleText: {
        fontSize: 16,
        fontWeight: '600'
    }
});

