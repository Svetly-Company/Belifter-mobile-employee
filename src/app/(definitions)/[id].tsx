import { View, Text, Modal, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { CaretCircleLeft, CaretCircleRight, PencilSimple } from 'phosphor-react-native'
import { TextInput } from 'react-native'

export default function Definitions() {

  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [seconds, setSeconds] = useState("0")

  function handleChangeInput(text : string){
    const numericVal = text.replace(/[^0-9]/g, "")
    setSeconds(numericVal)
  }
  return (
    <>
      <View className='bg-gray-950 h-full pt-14 flex p-5'>
          <View className='flex flex-row w-full items-center gap-4'>
              <View className='bg-white h-4 w-4 rounded-full absolute left-3'/>
              <Link href="/../clientes">
                <CaretCircleLeft size={32} color='#302C30' weight='fill'/>
              </Link>
              <Text className='font-ibmMedium text-xl text-gray-300'>Configurações de Treinamento</Text>
          </View>
          <View className='flex items-center justify-between mt-5 w-full'>
          <View className='flex items-center justify-between flex-row w-full px-3'>
              <Text className='font-ibmMedium text-xl text-gray-300'>Tempo de descanso</Text>
              <View className='flex flex-row items-center'>
                <Text className='font-ibmMedium text-xl text-gray-300'>{`${seconds}s`}</Text>
                  <View>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                      <View className='bg-white h-4 w-4 rounded-full absolute left-2 top-[9]'/>
                      <CaretCircleRight size={32} color='#302C30' weight='fill'/>
                    </TouchableOpacity>
                  </View>
              </View>
            </View>
            <View className='flex items-center justify-between flex-row w-full mt-7 px-3'>
              <Text className='font-ibmMedium text-xl text-gray-300'>Repetições</Text>
              <View className='flex flex-row items-center'>
                <TextInput keyboardType='numeric'
                  placeholder='15-12-10-8'
                  placeholderTextColor="#3E3E3E" 
                  maxLength={2}
                  caretHidden
                  className='flex w-64 h-10 bg-gray-800 rounded-full text-center text-gray-300 border-gray-600 border'/>
              </View>
            </View>
            <View className='flex items-center bg-gray-800 mt-10 rounded-3xl'>
              <View className='flex flex-row w-full justify-between p-4 items-center'>
                <View className='flex flex-row gap-5 items-center'>
                    <View className='flex items-start'>
                        <Text className='font-ibmMedium text-xl text-gray-300'>Grupos Musculares</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={() => router.navigate('/(tabs)/clientes')}>
                  <View className="p-[5] bg-gray-400 rounded-full">
                      <PencilSimple size={14} color="#7A7A7A" weight="fill"/>
                  </View>
                </TouchableOpacity>
              </View>
              <Image source={require("../../assets/musculos.png")} className='w-64 h-80 m-10'/>
            </View>
          </View>
      </View>
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View
            className="w-80 p-5 rounded-lg">
            <TextInput
              className="h-10 border-red-550 rounded-md border mb-5 px-3 text-neutral-400"
              keyboardType="numeric"
              placeholderTextColor={"#fafafaa4"}
              placeholder="Insira o valor em segundos"
              value={seconds}
              onChangeText={handleChangeInput}
              />
            <TouchableOpacity style={{backgroundColor: '#F73E43', width: 240, height: 40, borderRadius: 4, alignItems: "center", justifyContent: 'center'}} onPress={() => setModalVisible(!modalVisible)}>
              <Text className="font-ibmMedium font-bold text-white">Concluido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  )
}