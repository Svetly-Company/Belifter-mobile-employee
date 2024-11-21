import { Modal, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { BoxModel } from "../../components/BoxModel";
import { router} from 'expo-router';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { userStorage } from "../../storage/zustand/store";
import { ChatCenteredDots, MapPin, User } from "phosphor-react-native";
import { WeeklyDiary } from "../../components/WeeklyDiary";
import { useState } from "react";

export default function Home(){

  // const [user, setUser] = useState()

  const arr = [{gym: "BeStronger"}, {gym: "BeWeaker"}, {gym: "BeSmarter"}]

  const user = userStorage((state) => state.user)
  // useEffect(()=>{
  //   loadUserData()
  // }, [user])

  // async function loadUserData(){
  //   const userData = await getUserData()

  //   setUser(userData)
  // }
  const pan = Gesture.Pan().runOnJS(true).onEnd((e) => {
    if(e.translationX > 0){
      router.navigate("../post")
    }
  })

  function navigateToAtendimento(){
    router.navigate("../atendimento")
  }

  const [modalVisible, setModalVisible] = useState(false)

  const [gymName, setGymName] = useState("Nenhuma")

  return(
    <>
      <GestureDetector gesture={pan}>
        <SafeAreaView style={{flex: 1}}>
          <View className="bg-gray-950 flex-1">
              <HeaderHome user={user}/>
              <WeeklyDiary/>
            <View className="mx-4 pb-12">
              <BoxModel title="Unidade" icon={<MapPin weight="fill" size={32} />} buttonText={gymName} onClick={() => setModalVisible(!modalVisible)}/>
              <BoxModel title="Gerenciar Alunos" desc="Gerenciamento dos seus alunos da academia." icon={<User size={32} weight="fill" />} bgColor link="/clientes"/>
              <BoxModel title="Atendimento" desc="Fale com um de nossos especialistas da academia." icon={<ChatCenteredDots size={32} weight="fill"/>} bgColor link="/../atendimento"/>
            </View>
          </View>
        </SafeAreaView>
      </GestureDetector>
      <Modal animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        >
          <View className="flex flex-1 items-center justify-center bg-black/50">
            <View className="flex items-center bg-gray-800 p-5 rounded-xl border-2 border-gray-600">
              <TouchableOpacity onPress={() => {setModalVisible(!modalVisible);setGymName("Nenhuma")}} style={{flexDirection: "row", gap: 10, alignItems: "center", padding:20}}>
                {gymName == "Nenhuma" ? <View className={"h-3 w-3 rounded-full bg bg-red-600"}/> : ""}
                <Text className="font-ibmRegular text-white text-xl text-center">
                  Nenhuma
                </Text>
              </TouchableOpacity>
              {
                arr.map((x) => (
                  <TouchableOpacity onPress={() => {setModalVisible(!modalVisible);setGymName(x.gym)}} key={x.gym} style={{flexDirection: "row", gap: 10, alignItems: "center", padding:20}}>
                    {gymName == x.gym ? <View className={"h-2 w-2 rounded-full bg bg-red-600"}/> : ""}
                    <Text className="font-ibmRegular text-white text-xl  text-center border-t-2 border-gray-400">
                      {x.gym}
                    </Text>
                  </TouchableOpacity>
                ))
              }
            </View>
          </View>
      </Modal>
    </>
  )
}