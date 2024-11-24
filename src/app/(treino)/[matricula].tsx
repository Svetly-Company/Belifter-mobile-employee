import { View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CaretCircleLeft, CaretCircleRight, CaretDown, CaretLeft, CaretUp, MagnifyingGlass, Plus, Image as ImageP } from 'phosphor-react-native'
import { Link, useLocalSearchParams } from 'expo-router'
import { Gesture, GestureDetector, ScrollView, TextInput } from 'react-native-gesture-handler'
import { Workouts } from '../../components/Workouts'
import GestureRecognizer from 'react-native-swipe-gestures'
import { exercicios, matriculaTreino, setExercicios } from '../../classes/Treinos/Improvisação'
import Exercise from '../../components/Exercise'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'

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
  
  
  const { matricula } = useLocalSearchParams()
  
  const meuTreino:treinoProps[] = matriculaTreino.find((element: {matricula: number}) => element.matricula.toString() == matricula )?.treinos ?? []
  
  const [image, setImage] = useState("");
  
  const [modalVisible3, setModalVisible3] = useState(false);
  
  const [modalVisible2, setModalVisible2] = useState(false);
  
  const [modalVisible1, setModalVisible1] = useState(false);
  
  const [modalVisible, setModalVisible] = useState(false);
  
  const [treinos, setTreinos] = useState<treinoProps[]>(meuTreino)
  
  const [selectedId, setSelectedId] = useState<number>()
  
  const [nameEx, setNameEx] = useState("")
  
  const [volumeEx, setVolumeEx] = useState("")
  
  const [name, setName] = useState("")
  
  const [desc, setDesc] = useState("")

  async function pickImage() {
     let res = await ImagePicker.launchImageLibraryAsync({
       mediaTypes: ImagePicker.MediaTypeOptions.All,
       allowsEditing: true,
       aspect: [20, 20],
       quality: 1
     })
 
     if (!res.canceled) {
       setImage(res.assets[0].uri)
     }
   }

   type img = {
    filename: string,
    imgUrl: string
   }
 
   async function uploadImage(uri : string):Promise<img>{
     try{
       const mediaUlr = await FileSystem.uploadAsync('https://belifter-server.onrender.com/upload/sendlink', image, {
         httpMethod: 'POST',
         uploadType: FileSystem.FileSystemUploadType.MULTIPART,
         fieldName: 'file'
       }).catch((err) => {throw err})
     
     return JSON.parse(mediaUlr.body)
 
     }catch(err){
       throw err
     }
  }

  async function handleSalvarEx(){
    if(image && nameEx && volumeEx){
      try{
        const mediaUrl = await uploadImage(image)
        console.log(mediaUrl.imgUrl)
        let arr = exercicios
        arr.push({id: (arr.length + 1), name: nameEx, volume: (parseInt(volumeEx) ?? 0), image: mediaUrl.imgUrl})
        setExercicios(arr)
      }catch(err) { throw err }
      setNameEx("")
      setVolumeEx("")
      setImage("")
      setModalVisible3(false)
    }
  }

  function handleClick(id:number){
    console.log(matricula)
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

  function handleSalvar(){
    let arr = treinos
    let indexOfTreino
    let indexOfExercise
    treinos.forEach((value, index) => {value.id == selectedId ? indexOfTreino = index : null})
    exerciseList.forEach((value, index) => {value.id == selectedIdExercises ? indexOfExercise = index : null})
    const id = ((arr[indexOfTreino ?? -1].arr?.length ?? -2) +1)
    const name = exerciseList[indexOfExercise ?? -1].name
    const volume = exerciseList[indexOfExercise ?? -1].volume
    const image = exerciseList[indexOfExercise ?? -1].image

    arr[indexOfTreino ?? -1].arr?.push({id: id, image: image, name: name, volume: volume})
    setTreinos(arr)
    setModalVisible2(false)
  }

  function handleAddTreino(){
    if(name && desc){
      let arr = treinos
      arr.push({id: (arr.length + 1), name: name, desc: desc, arr: [] })
      setTreinos(arr)
    }
    setModalVisible1(false)
  }

  const [exerciseList, setExerciseList] = useState<exerciseProps[]>(exercicios)

  useEffect(() => {
    setExerciseList(exercicios)
  }, [exercicios])

  const [selectedIdExercises, setSelectedIdExercises] = useState(-1)

  function handleSelect(id: number){
        setSelectedIdExercises(id)
  }

  interface ICreateInput {
    placeholder: string;
    nameAbove: string;
  }

  function CreateInput({ placeholder, nameAbove } : ICreateInput) {
    return (
        <View className='flex'>
            {nameAbove ? <Text className='font-semibold text-[#DADADA] text-xl'>{nameAbove}</Text> : null}
            <TextInput placeholder={placeholder} placeholderTextColor="#ADADAD"  className="border-b-[1px] text-lg border-b-white text-[#ADADAD]" />    
        </View>
    )
  }

  return (
    <>
      <View className='bg-gray-950 h-full pt-16 flex p-3'>
        <View className='flex absolute right-6 bottom-5 z-50'>
          <TouchableOpacity onPress={() => setModalVisible1(true)} style={{display: "flex",flexDirection:"row", backgroundColor:"#f73e43", borderRadius: 100, padding: 15, justifyContent: "center", alignItems:"center", gap: 4}}>
            <Text className='font-ibmMedium text-xl text-gray-300'>
              Novo Treino
            </Text>
            <Plus size={22} color='#d1d5db' weight='bold'/>
          </TouchableOpacity>
        </View>
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
              <Workouts onClickAdd={() => {setSelectedId(treino.id); setModalVisible2(true)}} onClickDel={() => handleClick(treino.id)} matricula={matricula?.toString() ?? ""} id={treino.id.toString()} name={treino.name} desc={treino.desc} exercises={treino.arr} key={treino.id}/>
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
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}
        onRequestClose={() => setModalVisible1(!modalVisible1)}
        >
        <View className="flex-1 justify-center items-center bg-black/70">
          <View className="w-80 p-5 rounded-lg">
            <TextInput
              className="h-10 border-red-550 rounded-md border mb-5 px-3 text-neutral-400"
              placeholderTextColor={"#fafafaa4"}
              placeholder="Insira o nome do treino"
              value={name}
              onChangeText={setName}
              />
            <TextInput
              className="h-10 border-red-550 rounded-md border mb-5 px-3 text-neutral-400"
              placeholderTextColor={"#fafafaa4"}
              placeholder="Insira a descrição do treino"
              value={desc}
              onChangeText={setDesc}
              />
            <TouchableOpacity style={{backgroundColor: '#F73E43', width: 240, height: 40, borderRadius: 4, alignItems: "center", justifyContent: 'center'}} onPress={() => handleAddTreino()}>
              <Text className="font-ibmMedium font-bold text-white">Concluido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      </GestureRecognizer>
      <Modal  
      animationType="fade"
      transparent={true}
      visible={modalVisible2}
      onRequestClose={() => setModalVisible2(!modalVisible2)}
      >
        <>
          <View className='flex w-full px-10 py-3 absolute bottom-2 z-50'>
              <TouchableOpacity onPress={handleSalvar} style={{display: "flex",flexDirection:"row", backgroundColor:"#f73e43", borderRadius: 100, padding: 8, justifyContent: "center", alignItems:"center", gap: 4}}>
                  <Text className='font-ibmMedium text-xl text-gray-300'>
                      Salvar
                  </Text>
              </TouchableOpacity>
          </View>
          <ScrollView className="bg-gray-950 flex-1 flex flex-col gap-2">
              <View className="p-8 flex flex-col rounded-b-3xl">
                  <View className="flex flex-row justify-between">
                      <View className="flex h-min flex-row items-center text-center gap-4">
                      <View className="">
                          <View className="bg-[#302C30] p-2 rounded-full">
                              <TouchableOpacity onPress={() => setModalVisible2(false)} className="z-20">
                                  <CaretLeft size={16} color="#fff" />
                              </TouchableOpacity> 
                          </View>
                      </View>
                      <View className="flex flex-row">
                          <View className="">
                              <Text className="font-ibmMedium text-xl text-white">Adicionar exercício</Text>
                          </View>
                      </View>
                      </View>
                      <View>
                      <TouchableOpacity onPress={() => setModalVisible3(true)}>
                          <View className="rounded-full bg-[#F73E43] p-2">
                              <Plus size={16} color="#fff" />
                          </View>
                      </TouchableOpacity>
                      </View>
                  </View>
              </View>
              <View className='flex px-8 justify-center'>
                  <Text className='font-ibmMedium text-xl px-4 text-white'>Exercicios</Text>
                  {
                      exerciseList.map(x => (
                          <TouchableOpacity onPress={() => handleSelect(x.id)} key={x.id}>
                              <View className='px-5 border-b-2 border-gray-400 flex flex-row items-center gap-3 py-1'>
                                  {
                                      selectedIdExercises == x.id ? <View className='h-16 w-1 mt-3 bg-red-550'/> : ""
                                  }
                                  <Exercise name={x.name} volume={x.volume} image={x.image} />
                              </View>
                          </TouchableOpacity>
                      ))
                  }
              </View>
          </ScrollView>
        </>
      </Modal>
      <Modal  
      animationType="fade"
      transparent={true}
      visible={modalVisible3}
      onRequestClose={() => setModalVisible3(!modalVisible3)}
      >
        <ScrollView className="bg-[#151415] flex-1 flex flex-col gap-2">
          <View className="p-8 flex flex-col rounded-b-3xl justify-between min-h-screen">
              <View className="flex h-min flex-row items-center text-center gap-4">
                  <View className="bg-[#302C30] p-2 rounded-full">
                    <TouchableOpacity onPress={() => setModalVisible3(false)}>
                            <CaretLeft size={16} color="#fff" />
                    </TouchableOpacity> 
                  </View>
                  <Text className="font-ibmMedium text-xl text-white">Criar Exercício</Text>
              </View>
              <View className='flex justify-center items-center w-full gap-4'>
                {
                  image ? <Image source={{uri: image}} className='rounded-full h-36 w-36'/> :
                  <View className='bg-[#6D6666] p-8 rounded-full'>
                      <ImageP size={64} color='#fff' />
                  </View>
                }
                  <TouchableOpacity onPress={pickImage}>
                          <Text className='text-[#F73E43] text-xl'>Adicionar imagem</Text>
                  </TouchableOpacity>
              </View>
              <View className='flex gap-6'>
                <View className='flex'>
                  <Text className='font-semibold text-[#DADADA] text-xl'>Nome</Text>
                  <TextInput placeholder="Nome do Exercicio" placeholderTextColor="#ADADAD" value={nameEx} onChangeText={setNameEx} className="border-b-[1px] text-lg border-b-white text-[#ADADAD]" />
                </View>
                <View className='flex'>
                  <Text className='font-semibold text-[#DADADA] text-xl'>Volume</Text>
                  <TextInput keyboardType='numeric' placeholder="Quantidade de Repetições" placeholderTextColor="#ADADAD" value={volumeEx} onChangeText={setVolumeEx} className="border-b-[1px] text-lg border-b-white text-[#ADADAD]" />
                </View>
                <CreateInput placeholder='Tipo de equipamento' nameAbove='Equipamento' />
                <CreateInput placeholder='Nome do Musculo' nameAbove='Grupo muscular primário' />
              </View>
              <View>
                  <TouchableOpacity onPress={() => handleSalvarEx()}>
                      <View className='flex flex-1 w-full justify-center items-center bg-[#F73E43] text-center p-2 rounded-full'>
                          <Text className='text-white text-2xl'>Salvar</Text>
                      </View>
                  </TouchableOpacity>
              </View>
          </View>
        </ScrollView>
      </Modal>
    </>
  )
}