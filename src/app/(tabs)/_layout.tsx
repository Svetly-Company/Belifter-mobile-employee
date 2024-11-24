import { Tabs } from "expo-router";
import { Barbell, ChatTeardropText, Globe, House, User, UserList } from "phosphor-react-native";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity, StyleSheet } from "react-native";
import {BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { QueryClientProvider, QueryClient } from "react-query";


const queryClient = new QueryClient()
export default function TabLayout(){
  return(
    <QueryClientProvider client={queryClient}> 
    <StatusBar backgroundColor={'#000'} style="light" translucent/>
    <Tabs screenOptions={({navigation, route}) => ({
      headerShown: false,
      tabBarLabel: navigation.isFocused() ? route.name : '',
      tabBarStyle: {
        backgroundColor: "#232324",
        display: 'flex',
        position: "absolute",
        bottom: 15,
        left: 28,
        right: 28,
        borderRadius: 35,
        height: 65,
        paddingHorizontal: 5,
        borderWidth: 0,
        borderColor: '#000'
        
      },
      tabBarLabelPosition: "beside-icon",
      tabBarLabelStyle: {
        textTransform: "capitalize",
        fontFamily: "Montserrat_500Medium",
        fontSize: 10
      },
      tabBarActiveTintColor: "#fff",
      
    })}>
      <Tabs.Screen name="home"  options={{
        tabBarIcon: ({size, color, focused}) => (
          <House size={size} color={color} weight="bold"/>
        ),
        tabBarButton: (props) => {
          return <TabButton {...props}/>
        }
      }}/>
      <Tabs.Screen name="comunidade" options={
        {
          tabBarIcon: ({size, color, focused}) => (
            <Globe size={size} color={color} weight="bold"/>
          
          ),
          tabBarButton: (props) => {
            return <TabButton {...props}/>
          }
        }
      }/>
      <Tabs.Screen name="clientes" options={{
        tabBarIcon: ({size, color, focused}) => (
          <UserList size={size} color={color} weight="bold"/>
        ),
        
        tabBarButton: (props) => {
          return <TabButton {...props}/>
        }
      }}/>

      <Tabs.Screen name="perfil" options={{
        tabBarIcon: ({size, color, focused}) => (
          <User size={size} color={color} weight="bold"/>
        ),

        tabBarButton: (props) => {
          return <TabButton {...props}/>
        }
      }} />
      <Tabs.Screen name="messages" options={{
        tabBarIcon: ({size, color, focused}) => (
          <ChatTeardropText size={size} color={color} weight="bold"/>
        ),
        
        tabBarButton: (props) => {
          return <TabButton {...props}/>
        }
      }}/>
    </Tabs>
    </QueryClientProvider>
  )
}

function TabButton({children, onPress, accessibilityState}: BottomTabBarButtonProps){
  const state = accessibilityState?.selected
  return(
    <TouchableOpacity style={state? styleTabButton.activeButton : styleTabButton.unActiveButton} onPress={onPress}>{children}</TouchableOpacity>
  )
}

const styleTabButton = StyleSheet.create( {
  activeButton: {
    flex: 2,   
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#F73E43',
    color: 'white',
    borderRadius: 35,
    padding: 17,
    margin: 6,
  },
  unActiveButton: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    paddingRight: 7,

  }


})
