import { View, Text, TouchableOpacity } from "react-native"
import { CaretRight, ChatCenteredDots, ChatCircleText } from "phosphor-react-native";
import { Link } from "expo-router";


interface boxModelParams {
    title: string,
    desc?: string,
    bgColor?: boolean
}

export function BoxModelTwo( {title, desc, bgColor=false} : boxModelParams) {
    return(
        <View className={"flex-wrap " + (!bgColor ? 'bg-neutral-900' : 'bg-neutral-950') + " mt-4 py-6 px-6 rounded-3xl gap-2 h-[98px] w-[358] ml-8"}>
            <View className="flex-row justify-between items-center">
              <View className="bg-gray-100 p-2 rounded-[100] mr-2 h-[50] w-[50]">
                
                
              </View>

              <View className="gap-1 flex-1">
                <Text className="font-ibmRegular text-white text-[16px] ml-3">{title}</Text>
                <Text className="font-regular font-thin text-base text-gray-300 ml-3">Gerenciar treino</Text>
              </View>

              <View className="flex-row p-2 bg-red-600 rounded-2xl">
                <TouchableOpacity className="">
                  <Link href={"/treino"}>
                    <CaretRight color="white" size={22}/>
                  </Link>
                  
                </TouchableOpacity> 
              </View>
            </View>

            
        </View>
    )
}