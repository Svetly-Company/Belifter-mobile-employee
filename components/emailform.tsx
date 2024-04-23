import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import GradientButton from "./gradientButton";

interface emailProps {
    onPress: () => void
}

export default function Emailform(emailProps : emailProps) {
    return(
        <View style={styles.container}>
            <TouchableOpacity
            onPress={emailProps.onPress}
            style={styles.close}><Text style={styles.text}>X</Text></TouchableOpacity>
            <TextInput placeholder="Email" style={styles.input}></TextInput>
            <TextInput placeholder="Senha" style={styles.input}></TextInput>
            <Text style={[styles.text, styles.psText]}>Esqueceu a senha?</Text>
            <GradientButton text = 'Entrar'/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(17, 17, 18, 0.9)',
        height: 400,
        width: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'flex-end'
    },
    text: {
        color:'white',
        fontSize: 15,
    },
    input: {
        padding: 20,
        backgroundColor: 'transparent',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        color: 'white',
        width: '100%',
    },
    psText: {
        textAlign: 'right',
        marginBottom: 25,
    },
    close: {
        backgroundColor: 'rgba(27, 27, 28, 0.7)',
        width: 25,
        height: 25,
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})