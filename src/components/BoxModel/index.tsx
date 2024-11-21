import { View, Text, TouchableOpacity} from "react-native"
import { CaretRight } from "phosphor-react-native";
import { router } from "expo-router";


interface boxModelParams {
    title: string,
    desc?: string,
    buttonText?:string,
    icon: JSX.Element,
    bgColor?: boolean,
    link?: string,
    onClick?: Function
}

export function BoxModel( {title, desc, icon, bgColor=false, link, onClick, buttonText} : boxModelParams) {
    function handleClick(){
      link ?
      router.navigate(link)
      : (onClick ? onClick() : console.log("fof"))
    }

    return( 
        <View className={"flex-wrap " + (!bgColor ? 'bg-neutral-900 rounded-3xl' : 'bg-neutral-950 border-b-2 border-gray-400') + " mt-4 py-6 px-6 gap-2"}>
            <View className="flex-row justify-between items-center">
              <View className="bg-gray-100 p-2 rounded-2xl mr-2">
                {icon}
              </View>

              <View className="gap-1 flex-1 px-3">
                {desc ? <>
                  <Text className="font-ibmRegular text-white text-xl">{title}</Text>
                  <Text className="font-regular font-thin text-sm text-gray-300">{desc}</Text>
                </> :
                  <Text className="font-ibmRegular text-white text-xl">{title}</Text>
                }
                
              </View>
              <View className="flex flex-row items-center gap-3">
                {
                  buttonText ? <Text className="font-regular font-thin text-sm text-gray-300">{buttonText}</Text> : ""
                }
              <View className="flex-row p-2 bg-gray-600 rounded-2xl">
                <TouchableOpacity onPress={handleClick}>
                    <CaretRight color="white" size={22}/>
                </TouchableOpacity> 
              </View>
              </View>
            </View>

            
        </View>
    )
}