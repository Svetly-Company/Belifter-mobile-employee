import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router' 
import { SafeAreaView } from 'react-native-safe-area-context'
import { arr } from '../../../classes/WeekDays/WeekDays'
import { BoxModel } from '../../../components/BoxModel'
import { Bell, CaretLeft } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

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
        <View className="border-b-2 border-gray-400 flex ">
        <View className="bg-neutral-900" style={styles.borderStyle}>
        <View className="p-6 flex-row justify-between items-center">
          <Link href="messages" asChild>
            <TouchableOpacity>
              <CaretLeft color="#F73E43" weight="regular" size={28}/>
            </TouchableOpacity>
          </Link>
          <View className="items-center">
            <Text className="text-white text-2xl font-ibmRegular">{ar[id].name}</Text>
            <Text className="text-red-550 text-base font-ibmMedium font-semibold">online</Text>
          </View>
          <Image source={require('../../../assets/moca.jpg')} className="w-14 h-14 rounded-full" />
        </View>
    </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  borderStyle: {
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});