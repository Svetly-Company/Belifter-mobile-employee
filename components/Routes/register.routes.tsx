import { createNativeStackNavigator } from "@react-navigation/native-stack";
import loginOptions from "../Screens/loginOptions";

const Stack = createNativeStackNavigator();

export default function RegisterRoute() {
    return(
        <Stack.Navigator screenOptions={{title:''}}>
            <Stack.Screen
                name="Options"
                component={loginOptions}
            />
        </Stack.Navigator>
    )
}