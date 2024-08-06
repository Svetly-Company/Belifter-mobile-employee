import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { ScrollView } from "react-native-gesture-handler";
import { Contacts } from "../../components/Contacts";

export default function Mensagens(){
  return(
    <SafeAreaView style={{flex: 1}}>
          <View className="bg-black flex-1">
            <ScrollView>
              <HeaderHome/>
              <View className="flex w-full px-5 mt-2">
                <Text className="text-white text-[22px] pt-5">Mensagens</Text>
                <View className="mt-2">
                  <Contacts name="Name" notify={true}/>
                  <Contacts name="Name" notify={true}/>
                  <Contacts name="Name" notify={true}/>
                  <Contacts name="Name" notify={true}/>
                  <Contacts name="Name" notify={true}/>
                  <Contacts name="Name" notify={true}/>
                </View>
              </View>
            </ScrollView>
          </View>
      </SafeAreaView>
  )
}