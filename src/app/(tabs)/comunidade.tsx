import { Text, View, ScrollView, TouchableHighlight, Image, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import { ArrowCircleRight, Bell, CaretCircleRight, CaretDown, CaretUp, DotsThree, MagnifyingGlass, PaperPlaneRight, PaperPlaneTilt, Timer } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Post } from "../../components/Post";


export default function Comunidade(){
    
    return(
    <SafeAreaView style={{flex: 1}}>
        <ScrollView className="bg-gray-950 flex-1">
            <View className="p-7 flex-row justify-between items-center">
            <Image source={require('../../assets/BeLifter.png')} className="h-14 w-32" />
                <View className="flex flex-row gap-3">
                    <TouchableOpacity>
                        <Bell color="white" weight="bold" size={28}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <PaperPlaneTilt color="white" weight="bold" size={28}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex flex-row mx-8 px-2 py-1 gap-1 items-center border border-white rounded-full">
                <TouchableOpacity>
                    <MagnifyingGlass color="white" size={19}/>
                </TouchableOpacity>
                <TextInput className="flex-1 text-lg color-white" placeholderTextColor={"white"} placeholder="Pesquisar"></TextInput>
            </View>
            <View className="flex-row gap-1 justify-center mb-4 mt-8">
                <TouchableOpacity>
                    <Text className="text-black font-ibmMedium rounded-full px-2 py-1 bg-white">Descobrir</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="font-ibmMedium rounded-full px-2 py-1 text-white">A seguir</Text>
                </TouchableOpacity>
            </View>
            <Post image={require('../../assets/mulherTreinando.webp')}/>
            <Post image={require('../../assets/homemTreinando.webp')}/>
            <Post image={require('../../assets/moca.jpg')}/>
        </ScrollView>
    </SafeAreaView>
    )
}