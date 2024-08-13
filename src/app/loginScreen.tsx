import { Text, View, TextInput, TouchableOpacity, ToastAndroid, Image } from 'react-native';
import { router } from 'expo-router';
import { useState } from 'react';
import axios from 'axios';

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
        router.navigate('/home')
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
        <View className='bg-gray-950 h-full p-8 w-full text-center items-center content-center-center flex'>
            <Text className='color-white mx-4 self-start font-ibmMedium text-lg'>Faça login na sua conta</Text>
            <View className='flex w-full gap-2'>
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
                    onChangeText={handleSetPassword}
                    value={password}
                />  
                <View className='h-8 text-right items-end'>
                    <Text className='color-gray-100 font-ibmRegular text-sm '>Esqueci minha senha.</Text>
                </View>
                <TouchableOpacity onPress={verifyUser}>
                    <Text className='bg-red-550 w-full h-12 rounded-3xl text-center font-ibmMedium mt-24 align-middle color-white'>Entrar</Text>
                </TouchableOpacity> 
            </View>
            <View className='h-10 w-full flex flex-row items-center text-center justify-center content-center mt-24'>
                <View className='h-px w-28 bg-white'></View>
                <View className='w-16 text-center items-center'><Text className='color-white text-2xl font-ibmMedium'>ou</Text></View>
                <View className='h-px w-28 bg-white'></View>
            </View>
            <View className='h-1/5 w-11/12 mt-24'>
                <TouchableOpacity>
                    <View className='bg-white w-full h-12 rounded-3xl flex items-center flex-row justify-between px-2'>
                        <Text className='font-ibmMedium pl-24'>Login com o google</Text>
                        <Image className="w-6 h-6 mr-4" source={require('../assets/google_icon.png')}></Image>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
  );
}