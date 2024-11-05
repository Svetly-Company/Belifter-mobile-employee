import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { BoxModel } from "../../components/BoxModel";
import { router} from 'expo-router';
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { userStorage } from "../../storage/zustand/store";
import { ChatCenteredDots, MapPin, User } from "phosphor-react-native";
import { WeeklyDiary } from "../../components/WeeklyDiary";

export default function Home(){

  // const [user, setUser] = useState()


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

  return(
    
    <GestureDetector gesture={pan}>
      <SafeAreaView style={{flex: 1}}>
        <View className="bg-gray-950 flex-1">
            <HeaderHome user={user}/>
            <WeeklyDiary/>
          <View className="mx-4 pb-12">
            <BoxModel title="Unidade" icon={<MapPin weight="fill" size={32} />} link="/home"/>
            <BoxModel title="Gerenciar Alunos" desc="Gerenciamento dos seus alunos da academia." icon={<User size={32} weight="fill" />} bgColor link="/treino"/>
            <BoxModel title="Atendimento" desc="Fale com um de nossos especialistas da academia." icon={<ChatCenteredDots size={32} weight="fill"/>} bgColor link="/../atendimento"/>
          </View>
        </View>
      </SafeAreaView>
    </GestureDetector>
  )
}