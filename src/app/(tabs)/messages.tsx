import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { ScrollView } from "react-native-gesture-handler";
import { Contacts } from "../../components/Contacts";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { getUserData } from "../../storage/userData/getUserData";
import axios from "axios";

export default function Mensagens(){
  
  const [cont, setCont] = useState<propContatos[]>([])

  useEffect(()=>{
    loadUserData()
  }, [cont])

  async function loadUserData(){
    const userData = await getUserData()
    try{
      const val = await axios.get("https://belifter-server.onrender.com/chat", { 
        headers: { 'Authorization': `Bearer ${userData.token}`} 
      }).then((res) => {
        if(res.data.status){
          throw new Error(String(res.data.message))
        }
        return res.data;
      }).catch((err) => {throw err})
      setCont(val)
    }catch(err){
      setCont([])
    }
    
  }

  type propContatos = {
    id:number,
    lastMessageContent:string,
    lastMessageDate:string,
    name:string
  }
  
  return(
    <SafeAreaView style={{flex: 1}}>
          <View className="bg-black flex-1">
            <ScrollView>
              <HeaderHome/>
              <View className="flex w-full px-5 mt-2">
                <Text className="text-white text-[22px] pt-5">Mensagens</Text>
                <View className="mt-2 pb-28">               
                {
                  cont && cont.map((x) => (
                    <Link href={{pathname: "(chat)/[chatid]", params: {chatid: x.id}}}asChild key={x.id}>
                     <TouchableOpacity>
                      <Contacts name={x.name} lastMessage={x.lastMessageContent} notify/>
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