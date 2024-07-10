import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { BoxModel } from "../../components/BoxModel";
import { Link } from 'expo-router';

export default function Home(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <View className="bg-gray-950 flex-1">
        <HeaderHome />
        <View className="mt-8 mx-4 border-b-2 pb-12 border-gray-400">
          <BoxModel title="Pendências" desc="Resolva suas pendências"/>
          <BoxModel title="Atendimento" desc="Fale com um de nossos especialistas da academia" bgColor/>
        </View>
      </View>
    </SafeAreaView>
  )
}