import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router' 
import { SafeAreaView } from 'react-native-safe-area-context'
import { arr } from '../../../classes/WeekDays/WeekDays'
import { CaretLeft, PaperPlaneRight, Smiley } from 'phosphor-react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { MessageBox } from '../../../components/MessageBox'
import EmojiPicker, { pt, EmojiType } from 'rn-emoji-keyboard'

export default function Chat() {
  const { chatid } = useLocalSearchParams();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>("");
  const [mess, addMess] = React.useState<Array<propObject>>([])
  const [messageId, upMessageId] = React.useState<number>(0) 
  const ar = arr;
  let userId:number = 0
  let myId = 0;
  function sendText(){
    addMess(mess => [...mess, {sendId: userId, message: text, messageId: messageId}]);
    upMessageId(messageId + 1);
    setText("");
  }
  type propObject = {
    messageId:number,
    sendId:number,
    message:string
  }
  if(typeof chatid == "string"){
    userId = Number(chatid)
  }
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
                <Text className="text-white text-2xl font-ibmRegular">{ar[userId].name}</Text>
                <Text className="text-red-550 text-base font-ibmMedium font-semibold">online</Text>
              </View>
              <Image source={require('../../../assets/moca.jpg')} className="w-14 h-14 rounded-full" />
            </View>
          </View>
        </View>
        <ScrollView className="flex w-full flex-col">
          {mess.map((x)=>(
            <MessageBox idSend={x.sendId} idUser={userId} message={x.message} key={x.messageId}/>
          ))}
        </ScrollView>
        <View className='flex flex-row items-center h-20 w-full bg-gray-950'>
          <View className="flex flex-row w-5/6 mx-2 px-2 py-1 gap-1 items-center border border-white rounded-full">
                <TextInput className="flex-1 text-lg color-white px-1" placeholderTextColor={"white"} onChangeText={(newText) => {setText(newText)}} value={text} placeholder="Digite aqui...">{}</TextInput>
                <TouchableOpacity onPress={() => setIsOpen(true)}>
                  <Smiley color='white' size={29}/>
                  <EmojiPicker
                    enableSearchBar
                    hideSearchBarClearIcon
                    enableSearchAnimation
                    onEmojiSelected={(EmojiObject: EmojiType) => {setText(text + EmojiObject.emoji)}}
                    open={isOpen} 
                    onClose={() => {setIsOpen(false)}}
                    translation={pt}
                    categoryPosition='bottom'
                    theme={{
                      backdrop: '#16161888',
                      knob: '#F73E43',
                      container: '#282829',
                      header: '#fff',
                      skinTonesContainer: '#252427',
                      category: {
                        icon: '#F73E43',
                        iconActive: '#fff',
                        container: '#252427',
                        containerActive: '#F73E43',
                      },
                      customButton: {
                        icon: '#F73E43',
                        iconPressed: '#fff',
                        background: '#252427',
                        backgroundPressed: '#F73E43',
                      },
                      search: {
                        text: '#fff',
                        placeholder: '#ffffff2c',
                        icon: '#fff',
                        background: '#00000011',
                      },
                    }}/>
                </TouchableOpacity>
          </View>
            <TouchableOpacity onPress={sendText}>
              <View className="flex justify-center items-center bg-red-550 h-11 w-11 rounded-full">
                <PaperPlaneRight weight='fill' color="white" size={24}/>
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