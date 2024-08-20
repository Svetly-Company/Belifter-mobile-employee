import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { Link, useLocalSearchParams } from 'expo-router' 
import { SafeAreaView } from 'react-native-safe-area-context'
import { arr } from '../../../classes/WeekDays/WeekDays'
import { BoxModel } from '../../../components/BoxModel'
import { Bell, CaretLeft, Key, PaperPlaneRight, Smiley } from 'phosphor-react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { MessageBox } from '../../../components/MessageBox'
import EmojiPicker, { EmojiKeyboard, EmojiType } from 'rn-emoji-keyboard'
import { NativeEventWrapper } from 'react-native-reanimated/lib/typescript/reanimated2/hook/commonTypes'

export default function Chat() {
  const { chatid } = useLocalSearchParams();
  let id:number = 0;
  if(typeof chatid == "string"){
    id = Number(chatid)
  }
  let userId = 0
  let mess = [{id:0 , send: 1, message: "rubão brabo"}, {id: 1, send: 0, message: "bombom é mais"}]
  const ar = arr;
  const [isOpen, setIsOpen] = React.useState<boolean>(false)
  const [text, setText] = React.useState<string>("")
  const [key, setKey] = React.useState<string>("")
  return (
    <SafeAreaView style={{flex: 1}}>
      <View className="bg-gray-950 flex-1">
        <View className="flex ">
          <View className="bg-gray-950" style={styles.borderStyle}>
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
        <ScrollView className="flex w-full flex-col">
          {mess.map((x)=>(
            <MessageBox idSend={x.send} idUser={userId} message={x.message} key={x.id}/>
          ))}
        </ScrollView>
        <View className='flex flex-row items-center h-20 w-full bg-gray-950'>
          <View className="flex flex-row w-5/6 mx-2 px-2 py-1 gap-1 items-center border border-white rounded-full">
                <TextInput id='susamongus' className="flex-1 text-lg color-white px-1" placeholderTextColor={"white"} onKeyPress={(event) => { 
                    setKey(event.nativeEvent.key ?? "") 
                    setText(text + key)
                }} value={text} placeholder="Digite aqui...">{}</TextInput>
                <TouchableOpacity onPress={() => setIsOpen(true)}>
                  <Smiley color='white' size={29}/>
                  <EmojiPicker onEmojiSelected={(EmojiObject: EmojiType) => {setText(text + EmojiObject.emoji)}} open={isOpen} onClose={() => {setIsOpen(false)}} />
                </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View className="flex justify-center items-center bg-red-550 h-11 w-11 rounded-full">
              <TouchableOpacity onPress={() => setText("")}>
                <PaperPlaneRight weight='fill' color="white" size={24}/>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
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