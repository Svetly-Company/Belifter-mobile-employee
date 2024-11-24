import { View, Text, TouchableOpacity, Image } from "react-native"
import { CaretRight, ChatCenteredDots, ChatCircleText } from "phosphor-react-native";
import { Link } from "expo-router";


interface boxModelParams {
    title: string,
    desc?: string,
    status?: boolean,
    image: string
}

export function StudentBoxModel( {title, desc, status = false, image } : boxModelParams) {
    return(
      <View className={"flex flex-wrap justify-center bg-gray-800 mt-2 px-6 rounded-3xl h-32 w-11/12"}>
        <View className="flex flex-row items-center">
          <Image source={{uri: image}} className="rounded-[100] mr-2 h-[50] w-[50]"/>       
          <View className="gap-1 flex-1 ml-3">
            <Text className="font-ibmRegular text-white text-[16px]">{title}</Text>
            <Text className="font-regular font-thin text-base text-gray-300">Matricula: {desc}</Text>
            <View className="flex justify-center items-start">
              {
                status ? <Text className="font-regular font-thin text-base text-gray-50 p-px px-4 bg-red-550 rounded-full">Ativo</Text> :
                <Text className="font-regular font-thin text-base text-gray-50 p-px px-4 bg-gray-400 rounded-full">Desativo</Text>
              }
            </View>
          </View>
          <View className="flex-row p-2 bg-gray-400 rounded-full">
            <TouchableOpacity className="">
              {
                status ?
              <Link href={{pathname:"/../(treino)/[matricula]", params:{matricula: desc}}}>
                <CaretRight color="white" size={22}/>
              </Link> :
              <CaretRight color="white" size={22}/>
              }
            </TouchableOpacity> 
          </View>
        </View>
      </View>
    )
}

