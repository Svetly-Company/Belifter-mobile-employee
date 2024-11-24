import { View, Text, TouchableOpacity } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Link, useLocalSearchParams } from 'expo-router'
import { CaretLeft, MagnifyingGlass, Plus } from 'phosphor-react-native'

export default function Exercises() {
    
    const { id } = useLocalSearchParams()

    const matricula = id?.slice(0,5) ?? ""

    return (
        <ScrollView className="bg-gray-950 flex-1 flex flex-col gap-2">
            <View className="p-10 pt-16 flex flex-col rounded-b-3xl">
                <View className="flex flex-row justify-between">
                    <View className="flex h-min flex-row items-center text-center gap-4">
                    <View className="">
                        <View className="bg-[#302C30] p-2 rounded-full">
                            <TouchableOpacity className="z-20">
                                <Link href={{pathname: "/(treino)/[matricula]", params: { matricula: matricula}}}>
                                    <CaretLeft size={16} color="#fff" />
                                </Link>
                            </TouchableOpacity> 
                        </View>
                    </View>
                    <View className="flex flex-row">
                        <View className="">
                            <Text className="font-ibmMedium text-xl text-white">Adicionar exercício</Text>
                        </View>
                    </View>
                    </View>
                    <View>
                    <TouchableOpacity>
                        <View className="rounded-full bg-[#F73E43] p-2">
                            <Plus size={16} color="#fff" />
                        </View>
                    </TouchableOpacity>
                    </View>
                </View>
                <View className='mt-8'>
                    <View className='flex flex-row gap-2 items-center px-4 py-2 bg-[#232324] rounded-xl'>
                        <MagnifyingGlass size={20} color='#ADADAD' />
                        <TextInput placeholderTextColor="#ADADAD" placeholder='Procurar exercício' className='text-[#ADADAD] text-lg' />
                    </View>
                </View>
                <View className='flex flex-row justify-between mt-4'>
                    <View className='bg-[#232324] py-4 px-8 rounded-full'>
                        <TouchableOpacity>
                            <Text className='text-xl text-[#ADADAD]'>Equipamento</Text>
                        </TouchableOpacity>
                    </View>
                    <View className='bg-[#232324] py-4 px-8 rounded-full'>
                        <TouchableOpacity>
                            <Text className='text-xl text-[#ADADAD]'>Músculos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
  )
}