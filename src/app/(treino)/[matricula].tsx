import { View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CaretCircleLeft, CaretCircleRight, CaretDown, CaretUp } from 'phosphor-react-native'
import { Link } from 'expo-router'
import { Gesture, GestureDetector, ScrollView } from 'react-native-gesture-handler'
import { Workouts } from '../../components/Workouts'
import GestureRecognizer from 'react-native-swipe-gestures'

type exerciseProps = {
  id:number,
  name:string,
  volume:number,
  image?:string
}
type treinoProps = {
  id:number,
  name:string,
  desc:string,
  arr?: exerciseProps[]
}

export default function Treino() {

  const [modalVisible, setModalVisible] = useState(false);

  const [treinos, setTreinos] = useState<treinoProps[]>([{id: 1, name: "Treino (A)", desc: "Abdomen, Peito e Triceps",
    arr: [{id: 1 ,name:"Cruxifixo", volume: 4,  image: undefined}, {id: 2, name:"Triceps Francês", volume: 4,  image: undefined},
    {id: 4, name:"Abdominal", volume: 3,  image: undefined}]}, {id: 2, name: "Treino (B)", desc: "Costas, Biceps e Ombro",
    arr: [{id: 1 ,name:"Remada", volume: 4,  image: undefined}, {id: 2, name:"Rosca Scott", volume: 4,  image: undefined},
    {id: 4, name:"Elevação Lateral", volume: 3,  image: undefined}]}, {id: 3, name: "Treino (C)", desc: "Quadriceps, Posterior e Gluteo"}])

  const [selectedId, setSelectedId] = useState<number>()

  function handleClick(id:number){
    setModalVisible(true)
    setSelectedId(id)
  }

  function handleDelete(){
    let arr = treinos
    let indexOf
    treinos.forEach((value, index) => {value.id == selectedId ? indexOf = index : null})
    delete arr[indexOf ?? -1]
    setTreinos(arr)
    setModalVisible(false)
  }

  return (
    <>
      <View className='bg-gray-950 h-full pt-14 flex p-3'>
        <ScrollView>
          <View className='flex flex-row w-full items-center gap-4'>
              <View className='bg-white h-4 w-4 rounded-full absolute left-3'/>
            <Link href="/../clientes">
              <CaretCircleLeft size={32} color='#302C30' weight='fill'/>
            </Link>
              <Text className='font-ibmMedium text-xl text-gray-300'>Administrar cliente</Text>
          </View>
          {
            treinos.map((treino) => (
              <Workouts onClick={() => handleClick(treino.id)} id={treino.id} name={treino.name} desc={treino.desc} exercises={treino.arr} key={treino.id}/>
            ))
          }
        </ScrollView>
      </View>
      <GestureRecognizer style={{flex: 1}} onSwipeDown={() => setModalVisible(false)}>
        <Modal  animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
          <View className='flex flex-1 items-center justify-end'>
            <View className='flex bg-gray-800 items-center w-full rounded-t-3xl p-5'>
              <View className='bg-[#322E33] w-20 h-1'/>
              <Text className='font-ibmMedium text-xl text-gray-300 m-3 p-7 w-full text-center border-b border-[#322E33]'>Descartar</Text>
              <View className='flex flex-col p-7 items-center justify-center'>
                <Text className='font-ibmMedium text-lg text-gray-300 w-full text-center'>Tem certeza de que quer descartar</Text>
                <Text className='font-ibmMedium text-lg text-gray-300 w-full text-center'>esse treinamento?</Text>
              </View>
              <View className='flex gap-3'>
                <TouchableOpacity onPress={() => handleDelete()}>
                  <View className="bg-red-550 rounded-full flex w-full justify-center text-center items-center p-2 px-28">
                    <Text className="font-ibmMedium text-xl text-gray-300">Descartar Treino</Text>
                  </View> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <View className="bg-gray-600 rounded-full flex w-full justify-center text-center items-center p-2 px-28">
                    <Text className="font-ibmMedium text-xl text-gray-300">Cancelar</Text>
                  </View> 
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </GestureRecognizer>
    </>
  )
}