import { View, Text, StyleSheet, Image, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Link, useLocalSearchParams } from 'expo-router' 
import { SafeAreaView } from 'react-native-safe-area-context'
import { CaretLeft, PaperPlaneRight, Smiley } from 'phosphor-react-native'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { MessageBox } from '../../../components/MessageBox'
import EmojiPicker, { pt, EmojiType } from 'rn-emoji-keyboard'
import { getUserData } from '../../../storage/userData/getUserData'
import axios from 'axios'

export default function Chat() {
  
  
  type sender = {
    idAccount:number
  }
  
  type propMessage = {
    idMessages:number,
    content:string,
    sender:sender
  }
  
  const [user, setUser] = useState({
    id: 0,
    token: ''
  })

  const { chatid } = useLocalSearchParams();

  const [chatName, setChatName] = useState("");

  const recId:number = parseInt(chatid?.toString() ?? "")

  const [messages, setMessages] = useState<propMessage[]>([])

  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [text, setText] = React.useState<string>("");
  
  useEffect(()=>{
    loadUserData()
  }, [messages])
  
  async function loadUserData(){
    const userData = await getUserData()
    try{
      const val = await axios.get(`https://belifter-server.onrender.com/chat/${chatid}`, {
        headers: { 'Authorization': `Bearer ${userData.token}`} 
      }).then((res) => {
        if(res.data.status){
          throw new Error(String(res.data.message))
        }
        return res.data;
      }).catch((err) => {throw err})

      const messages = val
      setMessages(messages)

      const val2 = await axios.get("https://belifter-server.onrender.com/chat", { 
        headers: { 'Authorization': `Bearer ${userData.token}`} 
      }).then((res) => {
        if(res.data.status){
          throw new Error(String(res.data.message))
        }
        return res.data;
      }).catch((err) => {throw err})
      const name:string = val2.find((element: { id: number }) => element.id == recId).name
      setChatName(name)
    }catch(err){
      setMessages([])
      setChatName(recId.toString())
    } 
    setUser(userData)
  }

  async function sendMessage(){
    const userData = await getUserData()
    try{
      const userMessage = {
        content: text,
        receiverId: recId,
      }

      const val = await axios.post("https://belifter-server.onrender.com/chat/send", userMessage, 
      {
        headers: { 'Authorization': `Bearer ${userData.token}`} 
      }).then(async (res) => {
        if(res.data.status){
          console.log("deu erro")
          throw new Error(String(res.data.message))
        }
        setText("")
        await loadUserData()
        return JSON.stringify(res.data)
      }).catch((err) => {throw err})
      const result = JSON.parse(val)
    }catch(err){

    }
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
                <Text className="text-white text-2xl font-ibmRegular">{chatName}</Text>
                <Text className="text-red-550 text-base font-ibmMedium font-semibold">online</Text>
              </View>
              <Image source={require('../../../assets/moca.jpg')} className="w-14 h-14 rounded-full" />
            </View>
          </View>
        </View>
        <ScrollView className="flex w-full flex-col gap-2">
          {messages && messages.map((x)=>(
            <MessageBox idSend={x.sender.idAccount} idUser={user.id} message={x.content} key={x.idMessages}/>
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
            <TouchableOpacity onPress={() => sendMessage()}>
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