import { View, Text, Image } from 'react-native';
import { HeartStraight } from "phosphor-react-native";


export function Subcomment(){
    return(
        <View className='ml-16'>

            <View className='flex flex-row'>

                <View className="flex gap-3 ml-10 mt-5">

                    <Image source={require('../../assets/moca.jpg')} className="w-10 h-10 rounded-full" />
                  
                </View>
                    
                <View>

                    <View className='flex ml-2 mt-4 h-min'>
                            <View className='flex flex-row'>
                                <Text className="text-white font-ibmMedium ml-2 text-base">Josivaldo Pereira</Text>
                                <Text className="text-slate-300 text-sm mt-0.5 ml-7 font-ibmRegular">Há 5 Horas</Text>
                            </View>
                             
                            <Text className='text-white font-ibmRegular ml-2 text-base'>grato ❤️.</Text>
                    </View>

                </View>

                <View className='ml-14 mt-9'>
                    <HeartStraight size={19} color="white" weight="regular"/>
                </View>
            </View>

           
            
        </View>
    )
}
