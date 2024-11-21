import { View, Text, useWindowDimensions, Modal, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { CaretLeft, HourglassMedium, NotePencil, Ruler, Scales } from "phosphor-react-native";
import { Image } from "expo-image";

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { useState } from "react";
import { router } from "expo-router";
import { userStorage } from "../storage/zustand/store";



interface routeProp{
  editable : boolean
}

// Scenes
function FirstRoute({editable} : routeProp){


  const [changeEvent, setChangeEvent] = useState<string>('')
  const [age, setAge] = useState('?')
  const [weight, setWeight] = useState('?')
  const [height, setHeight] = useState('?')
  const [modalVisible, setModalVisible] = useState(false)


  function handleSentModal() {
    setModalVisible(false)
  }


  function handleChangeInput(text : string){
    const numericVal = text.replace(/[^0-9]/g, "")


    if(changeEvent == 'age'){
      setAge(numericVal)
    }else if(changeEvent == 'weight'){
      setWeight(numericVal)
    }else{

      setHeight(numericVal)
    }


  }

  function handleChangeValues(type : string) {

    setChangeEvent(type)
    setModalVisible(true)

  }


  return (
    <View className="flex-1 bg-slate-[#0D0D0D] ">
      <View className="flex-row bg-[#151415] mx-8 my-4 items-center justify-center gap-10 px-6 py-6 rounded-3xl mt-12">
        <View className="border-r-2 px-8 border-[#302C30] items-center">
        <View className={`bg-[#302C3099] rounded-full p-3 ${editable ? "border border-[#F73E43]" : "border-0"}`}>
            <TouchableOpacity disabled={!editable} onPress={() => handleChangeValues('height')}>
              <Ruler color="#DADADA" size={32}/>
            </TouchableOpacity>
          </View>
          <Text className="text-[#C6C6C6] font-ibmRegular">{isNaN(Number(height)/100) ? "?" : (Number(height)/100)} m</Text>
        </View>

        <View className="px-1 border-[#302C30] items-center">
          <View className={`bg-[#302C3099] rounded-full p-3 ${editable ? "border border-[#F73E43]" : "border-0"}`}>
            <TouchableOpacity disabled={!editable} onPress={() => handleChangeValues('weight')}>
              <Scales color="#DADADA" size={32}/> 
            </TouchableOpacity>
            
          </View>

          <Text className="text-[#C6C6C6] font-ibmRegular">{weight} KG</Text>
        </View>

        <View className="border-l-2 px-8 border-[#302C30] items-center">
          <View className={`bg-[#302C3099] rounded-full p-3 ${editable ? "border border-[#F73E43]" : "border-0"}`}>
            <TouchableOpacity disabled={!editable} onPress={() => handleChangeValues('age')}>
              <HourglassMedium color="#DADADA" size={32}/>
            </TouchableOpacity>
          </View>
          <Text className="text-[#C6C6C6] font-ibmRegular">{age} Anos</Text>
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="flex-1 justify-center items-center bg-black/50">
          <View
            className="w-80 p-5 rounded-lg">
            <TextInput
              className="h-10 border-red-550 rounded-md border mb-5 px-3 text-neutral-400"
              keyboardType="numeric"
              placeholderTextColor={"#fafafaa4"}
              placeholder={
                {
                  'age': 'Insira sua idade(anos)',
                  'weight': 'Insira seu peso(KG)',
                  'height': 'Insira sua altura(cm)'
                }[changeEvent]
              }
              value={{
                'age': isNaN(Number(age)) ? "" : age,
                'weight': isNaN(Number(weight)) ? "" : weight,
                'height': isNaN(Number(height)) ? "" : height
              }[changeEvent]}
              onChangeText={handleChangeInput}
            />
            <TouchableOpacity style={{backgroundColor: '#F73E43', width: 240, height: 40, borderRadius: 4, alignItems: "center", justifyContent: 'center'}} onPress={handleSentModal}>
              <Text className="font-ibmMedium font-bold text-white">Concluido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </View>

    
  )
}
const SecondRoute = () => <View style={{flex: 1, backgroundColor: '#0D0D0D'}} />;


// Tab Views
const FirstTabView = ({editable} : routeProp) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Avaliação corporal'},
    {key: 'second', title: 'Histórico'},
  ]);
  const renderScene = SceneMap({
    first: () => <FirstRoute editable={editable}/>,
    second: SecondRoute,
  });

  return (
    <TabView
      style={{flex: 1, zIndex: 100}}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{height: 100, width: 100}}
      renderTabBar={(props) => (
        <TabBar 
        {...props}
        indicatorStyle={{backgroundColor: '#F73E43', width: '40%', marginHorizontal: 20}}  // Cor do indicador
        style={{backgroundColor: '#151415', borderBottomRightRadius: 20, borderBottomLeftRadius: 20}}                    // Cor do fundo da tab
        activeColor="#ffffff"                    // Cor da aba ativa
        inactiveColor="#b0bec5"                  // Cor da aba inativa
        />
      )}
    />
  );
};



export default function ProfileAcademy(){

  const [editable, setEditable] = useState(false)
  const user = userStorage((state) => state.user)

  return(
    <SafeAreaView style={{flex: 1, backgroundColor: "#0D0D0D"}}>
      <StatusBar backgroundColor={'#0D0D0D'} style="light" translucent/>
      <View className={"flex-1 bg-[#0D0D0D] "}>
        <View className="h-2/6 bg-[#151415] p-4 flex-row">
          <View >
            <TouchableOpacity onPress={()=> router.back()}>
              <CaretLeft color="white" size={36} weight="bold"></CaretLeft>
            </TouchableOpacity>
            
          </View>
          <View className="flex-1">
            <View className="items-center justify-center flex-1">
              <View>
                <Image source={require("../assets/moca.jpg")} style={{width: 120, height: 120, borderRadius: 100}}/>
                <View className="bg-[#F73E43] w-10 h-10 items-center justify-center rounded-full absolute bottom-0 right-0">
                  <TouchableOpacity onPress={() => setEditable(!editable)}>
                    <NotePencil color="white"></NotePencil>
                  </TouchableOpacity>
                  
                </View>
              </View>
              
              <Text className="font-ibmMedium text-[#DADADA] text-2xl">{user.name}</Text>
              <Text className="font-ibmRegular text-[#C6C6C6] text-base">Etec Fit</Text>
              
            </View>
          </View>
        </View>

        <FirstTabView editable={editable}/>



      </View>
    </SafeAreaView>
  )
}
