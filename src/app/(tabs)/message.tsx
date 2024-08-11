import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome from "../../components/HeaderHome";
import { ScrollView } from "react-native-gesture-handler";
import { Contacts } from "../../components/Contacts";
import { Link } from "expo-router";
import { arr } from "../../classes/WeekDays/WeekDays";

export default function Mensagens(){
  let ar = arr
  return(
    <SafeAreaView style={{flex: 1}}>
          <View className="bg-black flex-1">
            <ScrollView>
              <HeaderHome/>
              <View className="flex w-full px-5 mt-2">
                <Text className="text-white text-[22px] pt-5">Mensagens</Text>
                <View className="mt-2 pb-28">
                  {ar.map((x) => (
                    <Link href={{pathname: "(chat)/[chatid]", params: {chatid: x.id}}}asChild key={x.id}>
                     <TouchableOpacity>
                      <Contacts name={x.name} notify/>
                     </TouchableOpacity>
                    </Link>
                  ))}
                </View>
              </View>
            </ScrollView>
          </View>
      </SafeAreaView>
  )
}