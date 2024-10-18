import { View, Text, TouchableOpacity, Image } from "react-native"
import { CaretRight, ChatCenteredDots, ChatCircleText } from "phosphor-react-native";
import { Link } from "expo-router";


interface contactsParams {
    name: string,
    lastMessage?: string,
    mediaUrl:string,
    notify?: boolean,
    lastDate?: string
}

export function Contacts( {name, lastMessage, mediaUrl, notify, lastDate} : contactsParams) {
    const media = mediaUrl ? mediaUrl : "https://reactnative.dev/img/tiny_logo.png"
    return(
        <View className="w-full">
            <View className={"flex-wrap bg-neutral-950 mt-4 py-6 px-6 rounded-3xl gap-2 w-full"}>
                <View className="flex-row justify-between items-center w-full">
                <Image source={{uri: media}} className="w-[50] h-[50] rounded-full" />

                <View className="gap-1 flex-1 flex ml-4">
                    <Text className="font-ibmRegular text-white text-[16px] ml-3">{name}</Text>
                    <Text numberOfLines={1} className="font-regular font-thin text-sm w-48 text-gray-300 ml-3">{lastMessage}</Text>
                </View>
                    <View className="flex items-center gap-4">
                        <View className={"h-3 w-3 rounded-full bg bg-red-600"}/>
                        <Text className="font-regular font-thin text-sm text-gray-300">10:20</Text>
                    </View>
                </View>
            </View>
            <View className="border border-b-gray-900"/>
        </View>
        
    )
}