import { Image, View } from "react-native";

export default function LoadingScreen(){
  return(
    <View className="flex-1 bg-[#0D0D0E] items-center justify-center">
      <Image style={{flex: 1}} source={require("../assets/logoLight.png")}></Image>
    </View>
  )
}