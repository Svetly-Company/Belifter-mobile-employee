import { Tabs } from "expo-router";
import { Barbell, ChatTeardropText, Globe, House } from "phosphor-react-native";
import { StatusBar } from "expo-status-bar";
import { AccessibilityState, GestureResponderEvent, Text, TouchableOpacity, StyleSheet } from "react-native";
import {BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

export default function TabLayout(){
  return(
    <>
    <StatusBar backgroundColor={'#111112'} style="light" translucent/>
    <Tabs screenOptions={({navigation, route}) => ({
      headerShown: false,
      tabBarLabel: navigation.isFocused() ? route.name : '',
      tabBarStyle: {
        backgroundColor: "#232324",
        borderTopWidth: 0,
        position: "absolute",
        bottom: 40,
        left: 14,
        right: 14,
        borderRadius: 35,
        height: 65,
        
      },
      tabBarLabelPosition: "beside-icon",
      tabBarLabelStyle: {
        textTransform: "capitalize",
        verticalAlign: 'middle',
        fontFamily: "IBMPlexSans_500Medium",
        fontSize: 10,
        
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
      <Tabs.Screen name="treino" options={{
        tabBarIcon: ({size, color, focused}) => (
          <Barbell size={size} color={color} weight="bold"/>
        ),
        
        tabBarButton: (props) => {
          return <TabButton {...props}/>
        }
      }}/>
      <Tabs.Screen name="message" options={{
        tabBarIcon: ({size, color, focused}) => (
          <ChatTeardropText size={size} color={color} weight="bold"/>
        ),
        
        tabBarButton: (props) => {
          return <TabButton {...props}/>
        }
      }}/>
      <Tabs.Screen name="(chat)/[chatid]" options={{
        tabBarStyle: {display: "none"},
        href: null,
      }}/>
    </Tabs>
    </>
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
    flex:1, 
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F73E43',
    color: 'white',
    borderRadius: 30,
    gap: 6,
    padding: 20,
    margin: 3,
  },
  unActiveButton: {
    flex:1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }


})
