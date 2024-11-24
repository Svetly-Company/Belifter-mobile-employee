import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PencilSimple } from 'phosphor-react-native'
import { router } from 'expo-router'

type exerciseProps = {
    name:string,
    volume:number,
    image?:string
}

export default function Exercise({name, volume, image}:exerciseProps) {
  return (
    <View className='flex flex-row justify-between p-4 items-center mt-3'>
        <View className='flex flex-row gap-5 items-center'>
            {image ? <Image source={{uri: image}} className="w-16 h-16 rounded-xl" /> : <Image source={require('../../assets/cruxifixo.webp')} className="w-16 h-16 rounded-xl" />}
            <View className='flex items-start'>
                <Text className='font-ibmMedium text-xl text-gray-300'>{name}</Text>
                <Text className='font-ibmMedium text-gray-200'>{`${volume.toString()} séries`}</Text>
            </View>
        </View>
    </View>
  )
}