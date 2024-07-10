import { Text, View, Image, TouchableOpacity, ImageSourcePropType, ImageBackground} from "react-native";
import { CaretCircleRight, ChatCircle, DotsThree, HeartStraight, Timer } from "phosphor-react-native";
import { useState } from "react";
import { TouchableHighlight } from "react-native-gesture-handler";

type PostImageProps = {
    image: ImageSourcePropType;
}

export function Post({image}:PostImageProps){
    let [status, setStatus] = useState(false);
    function toggleStatus(){
      setStatus(!status)
    }
    return(
    <View className="mt-8 mx-2 p-6 flex flex-col bg-black-100 rounded-3xl">
        <View className="flex-row justify-between items-center">
            <View className="flex flex-row gap-3 items-center">
                <Image source={require('../../assets/moca.jpg')} className="w-12 h-12 rounded-full" />
                <View>
                    <Text className="text-white text-base font-ibmRegular">Josivaldo Pereira</Text>
                    <View className="flex flex-row justify-between mt-2 items-center">
                        <Text className="text-gray-1050 text-xs font-ibmMedium">Há 5 Horas</Text>
                        <TouchableOpacity>
                            <Text className="text-gray-300  text-xs font-ibmMedium">Seguir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity> 
                <DotsThree color="white" weight="bold" size={30}/>
            </TouchableOpacity>
        </View>
        <View className="flex flex-col justify-center items-center mt-4">
            <Text className="text-white text-base font-ibmRegular">Legday de hoje, posterior tá ficando enorme</Text>
            <View className="w-full h-72 mt-6">
                <ImageBackground className="flex-1 justify-end" 
                source={image} resizeMode="cover" imageStyle={{borderRadius: 30}}>
                    <View className="flex flex-row justify-between bg-gray-1000/45 mx-2 my-1 px-6 py-2 rounded-full">
                        <View className="flex flex-row gap-1">
                            <Timer color="white" size={34}/>
                            <View className="flex flex-col justify-center items-center">
                                <Text className="text-gray-300 text-xs font-ibmRegularS">Duração</Text>
                                <Text className="text-slate-200 font-ibmRegular ">1h28min</Text>
                            </View>     
                        </View>
                        <View className="flex flex-row gap-1">
                            <Timer color="white" size={34}/>
                            <View className="flex flex-col justify-center items-center">
                                <Text className="text-gray-300 text-xs font-ibmRegularS">Duração</Text>
                                <Text className="text-slate-200 font-ibmRegular ">1h28min</Text>
                            </View>     
                        </View>
                        <TouchableHighlight>
                            <CaretCircleRight size={37} color="#3E3E3E" weight="fill"/>
                        </TouchableHighlight>
                        <View className="absolute h-7 w-5 bg-white rounded-full right-8 top-4 -z-10"/>
                    </View>
                </ImageBackground>
            </View>
            <View className="w-full flex flex-row justify-between px-6 items-center mt-4">
                <View className="flex flex-row gap-2 items-center">
                    <TouchableOpacity onPress={() => toggleStatus()}>
                        {status ? <HeartStraight size={21} color="#00BF63" weight="fill"/> : <HeartStraight size={21} color="white" weight="bold"/>}
                    </TouchableOpacity>
                    <Text className={`${status ? "text-green-450" :"text-gray-300"} transition-colors text-sm font-ibmRegularS`}>3 Curtidas</Text>
                </View>
                <View className="flex flex-row gap-2 items-center">
                    <TouchableOpacity>
                        <ChatCircle size={21} color="white" weight="bold"/>
                    </TouchableOpacity>
                    <Text className="text-gray-300 text-sm font-ibmRegularS">Comentários</Text>
                </View>
            </View>
        </View>
    </View>
    );
}