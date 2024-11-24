import { Image, ImageBackground, ImageSourcePropType, Text, TouchableOpacity, View} from "react-native";
import { ArrowCircleRight, CaretDown, CaretUp, Sun,  } from "phosphor-react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Link} from "expo-router";
import Food from "../Food";

type foodProps = {
  id:number,
  name:string,
  grams:string,
}

type DietProps = {
    id:string,
    matricula:string,
    name:string,
    foods?: foodProps[],
    onClickAdd: Function,
    onClickDel: Function
}


export function Diet({name, foods, onClickAdd, onClickDel, id, matricula}:DietProps){

    const [toggle, setToggle] = useState(false)
    
    function handleSetToggle(){
        setToggle(!toggle)
    }

    const items = foods?.length

    const route = matricula + id

    return(
        <View className='flex mx-2 rounded-3xl p-5 bg-gray-800 mt-5'>
          <View className='flex flex-row justify-between p-4 items-center border-b-2 border-gray-400'>
            <View className='flex flex-row gap-5 items-center'>
              <View className='flex justify-center items-center gap-3 flex-row'>
                <Sun size={18} color="yellow" weight="fill"/>
                <Text className='font-ibmMedium text-xl text-gray-300'>{name}</Text>
              </View>
            </View>
            <TouchableOpacity onPress={handleSetToggle}>
              {toggle ? <CaretDown size={24} color='#D1D5DB' weight='bold'/> : <CaretUp size={24} color='#D1D5DB' weight='bold'/> }
            </TouchableOpacity>
          </View>
          {
            toggle ? 
            foods?.map((item) => (
                <Food name={item.name} grams={item.grams} key={item.id} />
            ))
            :
            <View className='pt-2 px-4'>
                <Text className='font-ibmMedium text-xl text-gray-300'>{items ? `${items} Items` : '0 items'}</Text>
            </View>
          }
          {
            toggle ?
          <View className="flex items-center justify-center gap-3 w-full mt-5 p-2">
            <TouchableOpacity onPress={() => onClickAdd()} style={{width:"100%"}}>
                <View className="bg-red-550 rounded-full flex w-full justify-center text-center items-center p-2">
                  <Text className="font-ibmMedium text-xl text-gray-300">Adicionar Alimentos</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onClickDel()} style={{width:"100%"}}>
              <View className="bg-gray-600 rounded-full flex w-full justify-center text-center items-center p-2">
                <Text className="font-ibmMedium text-xl text-red-550">Descartar Dieta</Text>
              </View>
            </TouchableOpacity>
          </View>
          : ""
          }
        </View>
    );
}