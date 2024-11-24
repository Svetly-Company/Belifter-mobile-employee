import { Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderHome  from "../../components/HeaderHome";
import { StudentBoxModel } from "../../components/StudentBoxModel";
import { userStorage } from "../../storage/zustand/store";


export default function Clientes(){

    const imgIsaq = "https://belifter-uploader.s3.sa-east-1.amazonaws.com/CYCpNpXqn97aQEaThCZlN6x5?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T010749Z&X-Amz-Expires=216000&X-Amz-Signature=2e374400d789b5c8b9b80e81c2dea0eeccb9b5eb5b43e820064035023f3a57af&X-Amz-SignedHeaders=host&x-id=GetObject"
    const imgJulio = "https://belifter-uploader.s3.sa-east-1.amazonaws.com/7qlyP5VXqfC3yib24X2XQnjq?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T014518Z&X-Amz-Expires=216000&X-Amz-Signature=9fd1c0c35d46eaf06c1d6f4525803c9cee2dbf45953fc96de91db58d1ef5b240&X-Amz-SignedHeaders=host&x-id=GetObject"
    const imgLeonardo = "https://belifter-uploader.s3.sa-east-1.amazonaws.com/xgLj3V61uOTctYh2hn1MEXpC?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T014343Z&X-Amz-Expires=216000&X-Amz-Signature=be40a0df5bce912cbe2b04fd938f64a1bb6b81a7ae4e392048c669bba44419e3&X-Amz-SignedHeaders=host&x-id=GetObject"
    const imgLuna = "https://belifter-uploader.s3.sa-east-1.amazonaws.com/sAibVEvQg52euakE1zwURGQO?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T014456Z&X-Amz-Expires=216000&X-Amz-Signature=e7c2c9687ed6b3884590aeb42f8c9895827b0b6d191b58344dc84312e6702c52&X-Amz-SignedHeaders=host&x-id=GetObject"
    const imgValentina = "https://belifter-uploader.s3.sa-east-1.amazonaws.com/qDfWsVARH44kRT8CC7ijNwTw?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIA6JKEYGIC4MFK2BQL%2F20241124%2Fsa-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241124T014436Z&X-Amz-Expires=216000&X-Amz-Signature=387ff4e9e3496c3aa99ccb075ba581e0abc2de26d333b64dc66683b886c89fb6&X-Amz-SignedHeaders=host&x-id=GetObject"

    const user = userStorage((state) => state.user)

    const tipoTreino = false

    const arr = [{nome: "Julia Domingos das Neves", desc:20795, status: true, image: imgJulio}, {nome: "Isaque Moscardo Nascimento", desc:20755, status: true, image: imgIsaq},{nome: "Leonardo Stanlov Santana", desc:20785, status: false, image: imgLeonardo}, {nome: "Valentina Sousa Marques", desc:20095, status: false, image: imgValentina}, {nome: "Luna Reggiani Moreira", desc:20395, status: true, image: imgLuna}]

    return(
      <SafeAreaView style={{flex: 1}}>
          <View className="bg-black flex-1">
            <ScrollView>

              <HeaderHome user={user}/>
              <View className="flex w-full">
                <Text className="text-white text-3xl mt-5 ml-6">Alunos</Text>
                <View className="mt-5 flex justify-center items-center">
                  {arr.map((x) => (
                    <StudentBoxModel tipoTreino={tipoTreino} image={x.image} title={x.nome} desc={x.desc.toString()} status={x.status} key={x.desc} />
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