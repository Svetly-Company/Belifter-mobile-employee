import { Image, Text, View, ImageBackground, TouchableOpacity, StyleSheet  } from "react-native";
import {Bell, CaretRight} from "phosphor-react-native"
import { Link, router } from "expo-router";

interface userProps{
  id: number,
  name: string
  email: string,
  exp: number,
  iat: number,
  token: string
}

interface identify{
  link: string
}

interface HeaderHomeParams{
  user?: userProps | undefined
  link?: string
}

export default function HeaderHome({user, link} : HeaderHomeParams){

  function handleNavigate(){
    router.navigate(link ? link : '/comunidade')
  }

  return(
    <View className="bg-neutral-900" style={styles.borderStyle}>
        {
          user ? 
          <View className="p-6 flex-row justify-around items-center">
          <TouchableOpacity onPress={() => router.navigate("../academyProfile")}>
            <Image source={require('../../assets/moca.jpg')} className="w-14 h-14 rounded-full" />
          </TouchableOpacity>
          <View className="items-center">
            <Text className="text-[#C6C6C6] font-ibmRegular">Bem vindo(a),</Text>
            <Text className="text-red-550 text-2xl font-ibmMedium font-semibold tracking-wide capitalize">{user.name}</Text>
          </View>
          <Bell color="white" weight="bold" size={28}/>

        </View>
        :
        <View className="p-6 flex-row justify-between items-center">
          <Image source={require('../../assets/moca.jpg')} className="w-14 h-14 rounded-full" />
          <Bell color="white" weight="bold" size={28}/>

        </View>
        }
    </View>
    
  )
}

const styles = StyleSheet.create({
  borderStyle: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});