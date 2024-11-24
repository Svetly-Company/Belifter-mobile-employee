import { View, Text, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { PencilSimple } from 'phosphor-react-native'
import { router } from 'expo-router'

type foodProps = {
  name:string,
  grams:string,
}

export default function Food({name, grams }:foodProps) {
  return (
    <View className='flex flex-row justify-between p-4 items-center mt-3'>
        <View className='flex flex-row gap-5 items-center'>
            <View className='flex items-start'>
                <Text className='font-ibmMedium text-xl text-gray-300'>{name}</Text>
                <Text className='font-ibmMedium text-green-600'>{`${grams.toString()}`}</Text>
            </View>
        </View>
    </View>
  )
}