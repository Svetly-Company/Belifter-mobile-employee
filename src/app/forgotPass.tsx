import {View, Text, StyleSheet} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default function ForgotPass(){

    return(
        <View className='flex-1 bg-gray-950 items-center flex'>
            <View className='ml-10 mr-10 gap-5 mt-14 h-3/4'>
                <Text className='text-white text-xl font-semibold'>Encontre sua conta</Text>
                <Text className='text-white text-base font-light'>Digite seu nome de usuário, email ou telefone vinculado à sua conta.</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Nome de usuário, email ou telefone' 
                    placeholderTextColor={'#A5A5A5'}
                />
            </View>
            <View className='ml-10 mr-10'>
                <TouchableOpacity style={styles.registerButton}>
                    <Text>Procurar</Text>
                </TouchableOpacity>
            </View>
           
        </View>
    )

}
const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 330,
        backgroundColor: '#151415',
        borderRadius: 15,
        color: '#fff',
        textAlign: 'left',
        padding: 6,
        paddingLeft: 12
    },
    registerButton: {
        backgroundColor: '#F73E43',
        width: 312,
        height: 45,
        borderRadius: 30,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        color: 'white',
    }
})