import axios from "axios";
import Checkbox from "expo-checkbox";
import { router } from "expo-router";
import { Route } from "expo-router/build/Route";
import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, Image, ToastAndroid } from "react-native";

export default function RegisterScreen(){

  
  const[isChecked, setChecked] = useState(false)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState('');

  function handleCheckBox(){
    setChecked(!isChecked)
  }

  function handleSetEmail(text: string){
    setEmail(text);
  }

  function handleSetPassword(text: string){
      setPassword(text)
  }

  function handleSetName(text: string){
    setName(text)
  }
  async function registerUser(){
    try{
        if(!isChecked){
          ToastAndroid.show(`Aceite os termos para prosseguir!`, ToastAndroid.SHORT)
          return;
        }

        const val = await axios.post('https://belifter-server.onrender.com/account/create', {
            name,
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
        
        router.navigate('/loginScreen')
        
        
    }catch(err){
        ToastAndroid.show(`Erro ao preencher os campos ${err}`, ToastAndroid.SHORT)
    }
  }
  return (
    <View className="flex-1 bg-gray-950 p-4">
      <Text className="font-ibmMedium text-xl text-white pl-6 pt-8 mt-2">Criar uma nova conta</Text>
      <View className="mx-4 mt-8">
        <TextInput className="w-full bg-neutral-900 px-4 mb-11 py-2 rounded-2xl color-gray-200" 
        placeholderTextColor={"#A5A5A5"}
        placeholder="Nome de usuário"
        onChangeText={handleSetName}
        value={name}
        />
        <TextInput className="w-full bg-neutral-900 px-4 mb-11 py-2 rounded-2xl color-gray-200" 
        placeholderTextColor={"#A5A5A5"}
        placeholder="Email"
        onChangeText={handleSetEmail}
        value={email}
        />
        <TextInput className="w-full bg-neutral-900 px-4 mb-11 py-2 rounded-2xl color-gray-200"
        placeholderTextColor={"#A5A5A5"}
        placeholder="Senha"
        secureTextEntry
        onChangeText={handleSetPassword}
        value={password}
        />
        <View className="flex-row">
          <Checkbox 
          className="ml-4 border-1 mr-2"
          onValueChange={handleCheckBox}
          color={isChecked ? '#00BF63' : undefined}
          value={isChecked}
          />
          <Text style={{color: '#CDCDCD'}}>Eu aceito os 
            <Text style={{color: '#F73E43'}}> termos </Text>
            e a <Text style={{color: '#F73E43'}}>politica de privacidade</Text>
          </Text>
        </View>
        
        <TouchableOpacity style={{backgroundColor: "#F73E43", height: 46, alignItems:"center", justifyContent: "center", marginTop: 28, borderRadius: 40}} onPress={registerUser}>
          <Text className="text-white">Avançar</Text>
        </TouchableOpacity>

        <View className="flex-row items-center justify-around gap-22 w-full mt-28 ">
          <View className="h-px bg-white w-40"></View>
          <Text className="text-white text-sm">OU</Text>
          <View className="h-px bg-white w-40"></View>
        </View>

        <TouchableOpacity style={{backgroundColor: "#ffffff", flexDirection: 'row', height: 40, alignItems:"center", justifyContent: "center", marginTop: 80, borderRadius: 40}}>
          <Image className="w-6 h-6 mr-4" source={require('../assets/google_icon.png')}></Image>
          <Text className="font-medium">Continuar com o Google</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}