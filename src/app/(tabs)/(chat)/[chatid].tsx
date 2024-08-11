import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router' 
import { SafeAreaView } from 'react-native-safe-area-context'
import { arr } from '../../../classes/WeekDays/WeekDays'
import { BoxModel } from '../../../components/BoxModel'

export default function Chat() {
  const { chatid } = useLocalSearchParams();
  let id:number = 0;
  if(typeof chatid == "string"){
    id = Number(chatid)
  }
  const ar = arr;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View className="bg-gray-950 flex-1">
        <View className="mt-8 mx-4 border-b-2 pb-12 border-gray-400 flex justify-center items-center">
          <Link href="../message">
            <Text className="font-ibmRegular text-white text-5xl">{ar[id].name}</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  )
}