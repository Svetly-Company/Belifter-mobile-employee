import { Text, View, TextInput, TouchableOpacity, ToastAndroid, Image } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import axios from 'axios';
import { setUserData } from '../storage/userData/setUserData';
import { userStorage } from '../storage/zustand/store';

export default function LoginScreen() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState<string>('');
    const [accessToken, setAccessToken] = useState<string>('')
    const {setUser} = userStorage()
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
            await getUserFromToken(parsedToken['access_token'])
            router.navigate('/home')
            
            
        }catch(err){
            ToastAndroid.show(`Usuário inexistente ${err}`, ToastAndroid.SHORT)
        }

        

        // const verifyToken = await axios.get('https://belifter-server.onrender.com/auth/profile', {
        //     headers: {
        //         'Authorization': `Bearer ${accessToken}`
        //     }
        // }).then((res) => {
        //     return res.status==200 ? true : false
        // })
        

        
    }

    async function getUserFromToken(token? : string){
        if(token==undefined){
            return;
        }

        const userData = await axios.get('https://belifter-server.onrender.com/auth/profile', { 
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((res) => {
            const savedData = {...res.data, token}
            return JSON.stringify(savedData)
        }).catch((err) => {throw new err})
        
        setUserData(userData)
        
        setUser(JSON.parse(userData))
    }

    function navigateToforgotPass(){
        router.navigate("./forgotPass")
    }

    return (
        <View className='bg-gray-950 h-full p-8 w-full text-center items-center content-center-center flex'>
            <Text className='color-white mx-4 self-start font-ibmMedium text-lg mt-5'>Faça login na sua conta</Text>
            <View className='flex w-full justify-center items-center gap-2'>
                <TextInput 
                    className='h-10 w-full bg-red bg-neutral-900 rounded-2xl mt-8 color-white text-left p-2' 
                    placeholder='Email' 
                    placeholderTextColor={'#A5A5A5'}
                    onChangeText={handleSetEmail}
                    value={email}
                />  
                <TextInput 
                    className='h-10 w-full bg-neutral-900 rounded-2xl mt-8 color-white text-left p-2'
                    placeholder='Senha' 
                    placeholderTextColor={'#A5A5A5'}
                    secureTextEntry
                    onChangeText={handleSetPassword}
                    value={password}
                />  
                <View className='h-8 w-full text-right items-end'>
                    <TouchableOpacity onPress={navigateToforgotPass}>
                        <Text className='color-gray-100 font-ibmRegular text-sm '>Esqueci minha senha.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className='h-1/2 w-full text-center items-center justify-around flex mt-10'>
                <View className='w-11/12'>
                    <TouchableOpacity onPress={verifyUser}>
                        <View className='bg-red-550 h-12 rounded-3xl flex items-center flex-row justify-center px-2'>
                            <Text className='text-center font-ibmMedium align-middle color-white'>Entrar</Text>
                        </View>
                    </TouchableOpacity> 
                </View>
                <View className='h-10 w-full flex flex-row items-center text-center justify-center content-center'>
                    <View className='h-px w-28 bg-white'></View>
                    <View className='w-16 text-center items-center'><Text className='color-white text-2xl font-ibmMedium'>ou</Text></View>
                    <View className='h-px w-28 bg-white'></View>
                </View>
                <View className='h-1/5 w-11/12 mt-'>
                    <TouchableOpacity>
                        <View className='bg-white w-full h-12 rounded-3xl flex items-center flex-row justify-between px-2'>
                            <Text className='font-ibmMedium pl-24'>Login com o google</Text>
                            <Image className="w-6 h-6 mr-4" source={require('../assets/google_icon.png')}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  );
}