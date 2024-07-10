import { Text, TouchableOpacity, View } from "react-native";
import { ArrowCircleRight } from "phosphor-react-native";
import { CheckDay } from "../CheckDay";
import { getWeek } from "../../classes/WeekDays/WeekDays";
export function Frequency(){
    let week = getWeek();
    return(
    <View className="flex gap-2 flex-col mt-8 px-8">
        <View className="flex flex-row">
            <Text className="flex-1 font-ibmRegular text-gray-300">Frequência de Treino</Text>
            <TouchableOpacity>
                <ArrowCircleRight color="white" size={15}/>
            </TouchableOpacity>
        </View>
        <View className="flex gap-3 mt-2 flex-row justify-center">
            <CheckDay date={week[0]} checked="sleep">DOM</CheckDay>
            <CheckDay date={week[1]} checked="true">SEG</CheckDay>
            <CheckDay date={week[2]} checked="false">TER</CheckDay>
            <CheckDay date={week[3]} checked="unchecked">QUA</CheckDay>
            <CheckDay date={week[4]} checked="unchecked">QUI</CheckDay>
            <CheckDay date={week[5]} checked="unchecked">SEX</CheckDay>
            <CheckDay date={week[6]} checked="sleep">SAB</CheckDay>
        </View>
    </View>
);}