import { Text, View, ScrollView, TouchableHighlight, Image } from "react-native";
import { CaretDown, CaretUp } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome  from "../../components/HeaderHome";
import { WeeklyDiary } from "../../components/WeeklyDiary";
import { Workouts } from "../../components/Workouts";
import { useState } from "react";


export default function Treino(){
    let [status, setStatus] = useState(false);
    function toggleStatus(){
      setStatus(!status)
    }
    return(
        <SafeAreaView style={{flex: 1}}>
          <ScrollView className="bg-gray-950 flex-1">
          <HeaderHome />
          <WeeklyDiary />
          <View className="flex gap-2 flex-col mt-8">
            <Text className=" px-8 lex-1 font-ibmRegular text-white text-x">Fichas de Treino</Text>
            <ScrollView horizontal={true} className="px-3 flex mt-2 flex-row">
              <Workouts source={require("../../assets/mulherTreinando.webp")} text="Treino A" description="Peito/Ombro"/>
              <Workouts source={require("../../assets/homemTreinando.webp")} text="Treino B" description="Quadriceps/Posterior"/>
            </ScrollView>
            <View className="flex gap-2 flex-col mt-8 px-8">
              <View className="flex flex-row justify-between">
                <Text className="text-gray-300 font-ibmMedium">Criada por:</Text>
                <View className="flex flex-row">
                  <Text className="font-ibmMedium text-gray-300">Ver histórico</Text>
                  <TouchableHighlight onPress={() =>toggleStatus()}>
                    { status ? <CaretUp color="white" size={19} weight="fill"/> : <CaretDown color="white" size={19} weight="fill"/>}
                  </TouchableHighlight>
                </View>
              </View>
              <View>
              {
                status ?
                <View className="flex flex-col my-2">
                  <View className="flex-row justify-between items-start px-5 h-52">
                    <View className="flex flex-row gap-5 items-center">
                      <Image source={require('../../assets/moca.jpg')} className="w-10 h-10 rounded-full" />
                      <Text className="text-gray-300 font-ibmRegular">Haulices Dalberto Solza</Text>
                    </View>
                    <Text className="text-gray-1050 font-ibmRegular">01/05</Text>
                  </View>
                </View>
                :
                <View className="h-52"/>
              }
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
}