import { CaretLeft } from "phosphor-react-native";
import { View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Atendimentos(){
    return(
        <View className="bg-gray-950 flex-1 flex">
            <View className="flex flex-row items-center justify-center">
                <View className="justify-end">
                    <CaretLeft size={32} color="#F73E43" />
                </View>
               
                <Text className="text-white font-semibold text-xl">Atendimento</Text>
            </View>

            <View>
                <Text>Atendimento</Text>
                <Text>Converse diretamente com a equipe da academia</Text>
                <TextInput/>
                <TextInput/>
            </View>
           
        </View>
    );
}