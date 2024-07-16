import { View, Text, TouchableOpacity } from "react-native"
import { CaretRight, ChatCenteredDots, ChatCircleText } from "phosphor-react-native";
import { Link } from "expo-router";


interface boxModelParams {
    title: string,
    desc?: string,
    bgColor?: boolean
}

export function BoxModel( {title, desc, bgColor=false} : boxModelParams) {
    return(
        <View className={"flex-wrap " + (!bgColor ? 'bg-neutral-900' : 'bg-neutral-950') + " mt-4 py-6 px-6 rounded-3xl gap-2"}>
            <View className="flex-row justify-between items-center">
              <View className="bg-gray-100 p-2 rounded-xl mr-2">
                {
                    !bgColor ? <ChatCenteredDots color="black" size={32}/> : <ChatCircleText color="black" size={32}/>
                }
                
              </View>

              <View className="gap-1 flex-1">
                <Text className="font-ibmRegular text-white text-xl">{title}</Text>
                <Text className="font-regular font-thin text-base text-gray-300">{desc}</Text>
              </View>

              <View className="flex-row p-2 bg-gray-600 rounded-2xl">
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