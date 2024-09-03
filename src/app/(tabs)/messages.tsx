import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { ScrollView } from "react-native-gesture-handler";
import { Contacts } from "../../components/Contacts";
import { Link } from "expo-router";
import { arr } from "../../classes/WeekDays/WeekDays";
import { useEffect, useState } from "react";
import { getUserData } from "../../storage/userData/getUserData";
import axios from "axios";

export default function Mensagens(){

  const [user, setUser] = useState({
    token: ''
  })

  useEffect(()=>{
    loadUserData()
  }, [user])

  async function loadUserData(){
    const userData = await getUserData()

    setUser(userData)
  }

  async function getContatos() {
    try{
      const contatos =  await axios.get("https://belifter-server.onrender.com/chat/", { 
        headers: { 'Authorization': `Bearer ${user.token}`} 
      }).then((res) => {
        if(res.data.status){
          throw new Error(String(res.data.message))
        }
        console.log(res.data)
        return JSON.stringify(res.data);
      })
      return contatos;
    }catch(err){
        throw err;
    };
  }
  let cont = user.token;
  let ar = arr
  return(
    <SafeAreaView style={{flex: 1}}>
          <View className="bg-black flex-1">
            <ScrollView>
              <HeaderHome/>
              <View className="flex w-full px-5 mt-2">
                <Text className="text-white text-[22px] pt-5">Mensagens</Text>
                <View className="mt-2 pb-28">
                  {ar.map((x) => (
                    <Link href={{pathname: "(chat)/[chatid]", params: {chatid: x.id}}}asChild key={x.id}>
                     <TouchableOpacity onPress={() => {console.log(cont)}}>
                      <Contacts name={x.name} notify/>
                     </TouchableOpacity>
                    </Link>
                  ))}
                </View>
              </View>
            </ScrollView>
          </View>
      </SafeAreaView>
  )
}