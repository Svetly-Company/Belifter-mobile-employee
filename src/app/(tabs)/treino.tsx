import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome  from "../../components/HeaderHome";
import { BoxModelTwo } from "../../components/BoxModelTwo";


export default function Treino(){

    return(
      <SafeAreaView style={{flex: 1}}>
          <View className="bg-black flex-1">
            <ScrollView>

              <HeaderHome/>
              <View className="flex w-full">
                <Text className="text-white text-3xl mt-5 ml-6">Alunos</Text>
                <View className="mt-5 flex justify-center items-center">
                  <BoxModelTwo title="Name"/>
                  <BoxModelTwo title="Name"/>
                  <BoxModelTwo title="Name"/>
                  <BoxModelTwo title="Name"/>
                  <BoxModelTwo title="Name"/>
                  <BoxModelTwo title="Name"/>
                </View>
              </View>

            </ScrollView>
          </View>
      </SafeAreaView>
    )
}

/*<View className="bg-gray-950 flex-1">
        <Text className="text-red-600 text-[34px]"> &lt; </Text>
      </View>*/ 