import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome  from "../../components/HeaderHome";
import { StudentBoxModel } from "../../components/StudentBoxModel";
import { userStorage } from "../../storage/zustand/store";


export default function Clientes(){

    const user = userStorage((state) => state.user)

    const arr = [{nome: "Julio", desc:20795, status: true}, {nome: "Lilian", desc:20755, status: true},{nome: "Maria", desc:20785, status: false}, {nome: "Pedro", desc:20095, status: false}, {nome: "João", desc:20395, status: true}]

    return(
      <SafeAreaView style={{flex: 1}}>
          <View className="bg-black flex-1">
            <ScrollView>

              <HeaderHome user={user}/>
              <View className="flex w-full">
                <Text className="text-white text-3xl mt-5 ml-6">Alunos</Text>
                <View className="mt-5 flex justify-center items-center">
                  {arr.map((x) => (
                    <StudentBoxModel title={x.nome} desc={x.desc.toString()} status={x.status} key={x.desc}/>
                  ))}
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