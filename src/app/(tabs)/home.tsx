import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { BoxModel } from "../../components/BoxModel";
import { WeeklyDiary } from "../../components/WeeklyDiary";

export default function Home(){
  return(
    <SafeAreaView style={{flex: 1}}>
      <View className="bg-gray-950 flex-1">
        <HeaderHome />
        <WeeklyDiary/>
        <View className="mt-8 mx-4 border-b-2 pb-12 border-gray-400">
          <BoxModel title="Gerenciar alunos" desc="Gerenciamento dos seus alunos da academia"/>
          <BoxModel title="Atendimento" desc="Fale com um de nossos especialistas da academia" bgColor/>
        </View>
      </View>
    </SafeAreaView>
  )
}