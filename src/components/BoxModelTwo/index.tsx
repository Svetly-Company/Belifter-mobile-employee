import { View, Text, TouchableOpacity } from "react-native"
import { CaretRight, ChatCenteredDots, ChatCircleText } from "phosphor-react-native";
import { Link } from "expo-router";


interface boxModelParams {
    title: string,
    desc?: string,
}

export function BoxModelTwo( {title, desc } : boxModelParams) {
    return(
        <View className={"flex flex-wrap justify-center bg-gray-400 mt-2 px-6 rounded-3xl gap-2 h-24 w-11/12"}>
            <View className="flex flex-row items-center">
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

