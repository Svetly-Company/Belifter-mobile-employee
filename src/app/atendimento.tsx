import { Link } from "expo-router";
import { CaretLeft } from "phosphor-react-native";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Atendimentos(){
    return(
        <View className="bg-[#0D0D0D] flex-1 flex gap-16">
            <View className="flex flex-row justify-start items-center mt-14 w-full h-min">

                <View className="flex justify-center items-center b-1 w-1/12">
                    <Link href="/home">
                        <CaretLeft size={30} color="#F73E43" />
                    </Link>
                </View>
                <View className="h-full flex flex-row gap-8 w-5/6 justify-center items-center">
                    <Text className="font-ibmMedium text-xl text-white capitalize">Atendimento</Text>
                </View>



            </View>

            <View className="items-center gap-3">
                <Image source={require('../assets/atendimento.png')} className="" />
                <Text className="font-ibmMedium text-3xl text-white capitalize">Atendimento</Text>
                <Text className="font-ibmMedium text-sm text-gray-100 font-extralight">Converse diretamente com a equipe da academia</Text>
                <View className="w-full items-center gap-6">
                    <TextInput
                    className="border border-[#322E33] rounded-xl w-10/12 pl-3 pt-1 text-white"
                    placeholder="Título da sua dúvida."
                    placeholderTextColor={'#DADADA'}
                    />
                    <TextInput
                    className="border border-[#322E33] rounded-xl w-10/12 pl-3 pt-2 h-60 align-top text-white"
                    placeholder="Digite a sua mensagem."
                    placeholderTextColor={'#DADADA'}
                    />
                    
                </View>

                <View style={[styles.bottomButton]}> 
                
                    <TouchableOpacity style={[styles.Button]}>
                    <Text style={[styles.textButton]}>Enviar mensagem</Text>
                    </TouchableOpacity>
                
                </View>
                
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    bottomButton:{
        height: 120,
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',
      },
      Button:{
        height: 40,
        width: 179,
        backgroundColor: 'rgb(247,62,67)',
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 60  
      },
      textButton:{
        marginTop: '4%',
        fontSize: 17,
        color: 'rgb(255,255,255)',
      },
});