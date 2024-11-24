import { Image, ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View} from "react-native";
import { ArrowCircleRight, CaretDown, CaretUp, Path, PencilSimple } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import { FlatList } from "react-native-gesture-handler";
import Exercise from "../Food";
import { id } from "rn-emoji-keyboard";

type exerciseProps = {
    id:number,
    name:string,
    volume:number,
    image?:string
}

type workoutProps = {
    id:string,
    matricula:string,
    name:string,
    desc:string,
    image?:string,
    exercises?: exerciseProps[],
    onClickAdd: Function,
    onClickDel: Function
}


export function Workouts({name, desc, image, exercises, onClickAdd, onClickDel, id, matricula}:workoutProps){

    const [toggle, setToggle] = useState(false)
    
    function handleSetToggle(){
        setToggle(!toggle)
    }

    const items = exercises?.length

    const route = matricula + id

    return(
        <View className='flex mx-2 rounded-3xl p-5 bg-gray-800 mt-5'>
          <View className='flex flex-row justify-between p-4 items-center border-b-2 border-gray-400'>
            <View className='flex flex-row gap-5 items-center'>
              <Image source={require('../../assets/homemTreinando.webp')} className="w-16 h-16 rounded-full" />
              <View className='flex items-start'>
                <Text className='font-ibmMedium text-xl text-gray-300'>{name}</Text>
                <Text className='font-ibmMedium text-gray-200'>{desc}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleSetToggle}>
              {toggle ? <CaretDown size={24} color='#D1D5DB' weight='bold'/> : <CaretUp size={24} color='#D1D5DB' weight='bold'/> }
            </TouchableOpacity>
          </View>
          {
            toggle ? 
            exercises?.map((item) => (
                <Exercise name={item.name} volume={item.volume} image={item.image} key={item.id} />
            ))
            :
            <View className='pt-2 px-4'>
                <Text className='font-ibmMedium text-xl text-gray-300'>{items ? `${items} Items` : '0 items'}</Text>
            </View>
          }
          {
            toggle ?
          <View className="flex items-center justify-center w-full mt-5 p-2">
            <TouchableOpacity onPress={() => onClickAdd()} style={{width:"100%"}}>
                <View className="bg-red-550 rounded-full flex w-full justify-center text-center items-center p-2">
                  <Text className="font-ibmMedium text-xl text-gray-300">Adicionar Exercicios</Text>
                </View>
              </TouchableOpacity>
            <View className="flex flex-row items-center justify-center w-full mt-5 gap-2 px-1">
              <Link href={{pathname: "(definitions)/[id]", params: {id: route}} } className="bg-gray-600 rounded-full flex w-1/2 justify-center text-center items-center p-2" >
                  <Text className="font-ibmMedium text-xl text-gray-300">Definições</Text>
              </Link>
              <TouchableOpacity onPress={() => onClickDel()} style={{width:"50%"}}>
                <View className="bg-gray-600 rounded-full flex w-full justify-center text-center items-center p-2">
                  <Text className="font-ibmMedium text-xl text-red-550">Descartar Treino</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          : ""
          }
        </View>
    );
}