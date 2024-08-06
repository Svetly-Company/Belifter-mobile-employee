import { View, Text, TouchableOpacity } from "react-native"
import { CaretRight, ChatCenteredDots, ChatCircleText } from "phosphor-react-native";
import { Link } from "expo-router";


interface contactsParams {
    name: string,
    lastMessage?: string,
    notify: boolean,
    lastDate?: Date
}

export function Contacts( {name, lastMessage, notify, lastDate} : contactsParams) {
    return(
        <View>
            <TouchableOpacity>
                <View className={"flex-wrap bg-neutral-950 mt-4 py-6 px-6 rounded-3xl gap-2 h-[98px] w-[358]"}>
                    <View className="flex-row justify-between items-center">
                    <View className="bg-gray-100 p-2 rounded-[100] mr-2 h-[50] w-[50]">
                        
                        
                    </View>

                    <View className="gap-1 flex-1">
                        <Text className="font-ibmRegular text-white text-[16px] ml-3">{name}</Text>
                        <Text numberOfLines={1} className="font-regular font-thin text-sm w-48 text-gray-300 ml-3">Você: Amo o tal do bombs</Text>
                    </View>
                        <View className="flex items-center gap-4">
                            <View className={"h-3 w-3 rounded-full bg bg-red-600"}/>
                            <Text className="font-regular font-thin text-sm text-gray-300">4:20</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            <View className="border border-b-gray-900"/>
        </View>
        
    )
}