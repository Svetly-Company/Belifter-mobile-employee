import { Text, View, TouchableOpacity, ImageBackground, Image} from 'react-native';
import { Link } from 'expo-router';

export default function LoginOptions() {

  return (
    <View className='font-ibmMedium flex-1 w-full h-full bg-black align-middle text-center content-center flex'>
      <ImageBackground source={require ("../assets/Background.webp")} className='flex-1 flex items-center text-center justify-end'>
        <Image source={require ("../assets/LogoLight.png")} className='h-96 w-96 absolute -top-20'></Image>
        <View className='h-36 gap-3 items-center content-center'>
            <Link href={"/registerScreen"} asChild>
              <TouchableOpacity> 
                    <Text className='w-96 h-12 bg-white rounded-3xl flex font-ibmMedium text-center align-middle text-lg'>Começar</Text>
              </TouchableOpacity>
            </Link>
          <Link href={"/loginScreen"}>
            <Text className='color-white font-ibmRegular'>Já tenho uma conta</Text>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}