import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { ScrollView } from "react-native-gesture-handler";
import { Contacts } from "../../components/Contacts";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { getUserData } from "../../storage/userData/getUserData";
import axios from "axios";
import { CaretLeft } from "phosphor-react-native";

export default function Mensagens(){
  
  const [cont, setCont] = useState<propContatos[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(()=>{
    loadUserData()
  }, [])

  async function loadUserData(){
    const userData = await getUserData()
    const val:propContatos[] = await axios.get("https://belifter-server.onrender.com/chat", { 
      headers: { 'Authorization': `Bearer ${userData.token}`} 
    }).then((res) => {
      if(res.data.status){
        throw new Error(String(res.data.message))
      }
      return res.data;
    }).catch((err) => {throw err})
    setCont(val)
    setLoading(false)
  }

  type propContatos = {
    id:number,
    mediaUrl: string,
    lastMessageContent:string,
    lastMessageDate:string,
    name:string
  }
  
  return(
    <SafeAreaView style={{flex: 1}}>
          <View className=" bg-black flex-1">
            <ScrollView className="w-full">
              <View className="py-5 mt-5 px-3">
                <Link href="/home">
                  <CaretLeft size={32} color="#F73E43"/>
                </Link>
              </View>
              <View className="flex px-5 w-full">
                <Text className="text-white text-[22px] pt-5">Mensagens</Text>
                <View className="mt-2 justify-center items-center w-full">
                  {
                    loading ? 
                      <ActivityIndicator size="large" color="#F73E43" className="mt-72"/>
                    :
                    cont.map((x) => (
                      <Link href={{pathname: "(chat)/[chatid]", params: {chatid: x.id}}} asChild key={x.id}>
                      <TouchableOpacity>
                        <Contacts name={x.name} lastMessage={x.lastMessageContent} mediaUrl={x.mediaUrl} notify/>
                      </TouchableOpacity>
                      </Link>
                    )) 
                  }          
                </View>
              </View>
            </ScrollView>
          </View>
      </SafeAreaView>
  )
}