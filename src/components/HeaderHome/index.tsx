import { Image, Text, View, ImageBackground, TouchableOpacity, StyleSheet  } from "react-native";
import {Bell, CaretRight} from "phosphor-react-native"
import { Link } from "expo-router";

export default function HeaderHome(){
  return(
    <View className="bg-neutral-900 pb-4" style={styles.borderStyle}>
        <View className="p-6 flex-row justify-around items-center">
          <Image source={require('../../assets/moca.jpg')} className="w-14 h-14 rounded-full" />
          <View className="items-center">
            <Text className="text-white text-xl font-ibmRegular">Bem-vindo</Text>
            <Text className="text-red-550 text-2xl font-ibmMedium font-semibold">Graciane Barbosa</Text>
          </View>
          <Bell color="white" weight="bold" size={28}/>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  borderStyle: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});