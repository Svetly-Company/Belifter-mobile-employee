import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

interface gradientProps{
    text : string
    onPress?: () => void
}

export default function GradientButton(gradientProps : gradientProps) {
    return(
        <LinearGradient colors={['#00BF63', '#00592E']} start={{ x: 0.7, y: 0 }} style={styles.mainButton}>
            <TouchableOpacity
            onPress={gradientProps.onPress} 
            style={styles.mainButton}><Text style={styles.textEmail}>{gradientProps.text}</Text></TouchableOpacity>
          </LinearGradient>
    )
}


const styles = StyleSheet.create({
    textEmail: {
        opacity: 1,
        color: 'white',
      },
      mainButton: {
        width: 317,
        height: 40,
        backgroundColor : 'transparent',
        borderRadius: 10,
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
        marginHorizontal: 'auto',
      },
})