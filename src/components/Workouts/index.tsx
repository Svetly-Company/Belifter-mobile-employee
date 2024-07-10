import { ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View} from "react-native";
import { ArrowCircleRight } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";

type TWorkout = {
    source:ImageSourcePropType,
    text:string,
    description:string
}

export function Workouts({source, text, description}:TWorkout){
    return(
        <View className="w-72 h-72 px-4 border-box">
            <ImageBackground className="flex-1 "
            source={source} resizeMode="cover" imageStyle={{borderRadius: 20}}>
                <LinearGradient colors={['transparent', 'black']} start={{x: 0.5, y: 0.2}} className="flex flex-1 justify-end rounded-3xl p-4">
                    <View className="flex flex-row justify-between px-2">
                    <View>
                        <Text className="text-white text-sm font-ibmMedium drop-shadow-lg">{text}</Text>
                        <Text className="text-slate-200 font-ibmRegular font-thin text-sm drop-shadow-lg">{description}</Text>
                    </View>     
                        <TouchableOpacity><ArrowCircleRight color="white" size={30}/></TouchableOpacity>
                    </View>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}