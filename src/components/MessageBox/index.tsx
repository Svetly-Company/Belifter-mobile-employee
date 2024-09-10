import {Text, View} from "react-native";

type MessageBoxProps = {
    idSend: Number,
    idUser: Number,
    message: string,
    
}

export function MessageBox({idSend, idUser, message}:MessageBoxProps){
  return(
    <View className={`flex w-full items-start mb-2 ${(idSend == idUser ? "items-end" : "items-start")}`}>
        <View className={`p-5 rounded-3xl max-w-sm ${(idSend == idUser ? "rounded-br-none bg-red-550" : "rounded-bl-none bg-neutral-900")}`}>
          <Text className="text-white text-base font-ibmRegular">{message}</Text>
        </View>
    </View>
  )}