import { Text, View, ScrollView, TouchableHighlight, Image, Animated } from "react-native";
import { CaretDown, CaretUp } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome  from "../../components/HeaderHome";
import { WeeklyDiary } from "../../components/WeeklyDiary";
import { Workouts } from "../../components/Workouts";
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react";
import { BoxModelTwo } from "../../components/BoxModelTwo";


export default function Treino(){

    return(
        <SafeAreaView style={{flex: 1}}>
          <View className="bg-black flex-1">
            <ScrollView>

              <HeaderHome/>
              <Text className="text-white text-[22px] pt-5 pl-10">Alunos</Text>

              <View>
                <BoxModelTwo title="Name"/>
              </View>

              <View className="mt-10">
                <BoxModelTwo title="Name"/>
                <BoxModelTwo title="Name"/>
                <BoxModelTwo title="Name"/>
                <BoxModelTwo title="Name"/>
                <BoxModelTwo title="Name"/>
                <BoxModelTwo title="Name"/>
              </View>

            </ScrollView>
          </View>
      </SafeAreaView>
    )
}

/*<View className="bg-gray-950 flex-1">
        <Text className="text-red-600 text-[34px]"> &lt; </Text>
      </View>*/ 