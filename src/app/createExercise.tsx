import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { Link } from 'expo-router'
import { CaretLeft, Image, MagnifyingGlass, Plus } from 'phosphor-react-native'

interface ICreateInput {
    placeholder: string;
    nameAbove?: string;
}

function CreateInput({ placeholder, nameAbove } : ICreateInput) {
    return (
        <View className='flex'>
            {nameAbove ? <Text className='font-semibold text-[#DADADA] text-xl'>{nameAbove}</Text> : null}
            <TextInput placeholder={placeholder} placeholderTextColor="#ADADAD" className="border-b-[1px] text-lg border-b-white text-[#ADADAD]" />
        </View>
    )
}

export default function createExercise() {
  return (
    <ScrollView className="bg-[#151415] flex-1 flex flex-col gap-2">
        <View className="p-8 flex flex-col rounded-b-3xl justify-between min-h-screen">
            <View className="flex h-min flex-row items-center text-center gap-4">
                <View className="">
                    <View className="bg-[#302C30] p-2 rounded-full">
                        <TouchableOpacity className="z-20">
                            <Link href={"/home"}>
                                <CaretLeft size={16} color="#fff" />
                            </Link>
                        </TouchableOpacity> 
                    </View>
                </View>
                <View className="flex flex-row">
                    <View className="">
                        <Text className="font-ibmMedium text-xl text-white">Criar exercício</Text>
                    </View>
                </View>
            </View>
            <View className='flex justify-center items-center w-full gap-4'>
                <View className='bg-[#6D6666] p-8 rounded-full'>
                    <Image size={64} color='#fff' />
                </View>
                <TouchableOpacity>
                    <View className=''>
                        <Text className='text-[#F73E43] text-xl'>Adicionar imagem</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View className='flex gap-6'>
                <CreateInput placeholder='Nome do exercício' />
                <CreateInput placeholder='Máquina' nameAbove='Equipamento' />
                <CreateInput placeholder='Peitoral' nameAbove='Grupo muscular primário' />
                <CreateInput placeholder='Deltóides' nameAbove='Outros músculos' />
                <CreateInput placeholder='Hipertrofia' nameAbove='Tipo de exercício' />
            </View>
            <View>
                <TouchableOpacity>
                    <View className='flex flex-1 w-full justify-center items-center bg-[#F73E43] text-center p-2 rounded-full'>
                        <Text className='text-white text-2xl'>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  )
}