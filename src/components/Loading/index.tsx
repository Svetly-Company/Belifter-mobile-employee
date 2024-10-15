import { View, Text } from 'react-native'
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import React from 'react'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CaretLeft } from 'phosphor-react-native'

export default function Loading() {
  return (
    <View className="p-6 flex-row justify-between items-center">
        <Link href="messages" asChild>
            <TouchableOpacity>
                <CaretLeft color="#F73E43" weight="regular" size={28}/>
            </TouchableOpacity>
        </Link>
        <View className="items-center justify-center">
            <ContentLoader 
            speed={1}
            width={150}
            height={30}
            foregroundColor="#F73E43"
            viewBox="0 0 150 30"
            backgroundColor="#111112"
            >
                <Rect x="0" y="20" rx="2" ry="2" width="150" height="10"/>
                <Rect x="0" y="0" rx="2" ry="2" width="150" height="10"/>
            </ContentLoader>
        </View>
        <ContentLoader 
        speed={1}
        width={50}
        height={50}
        foregroundColor="#F73E43"
        viewBox="0 0 60 60"
        backgroundColor="#111112"
        >
            <Circle cx="30" cy="30" r="30"/>
        </ContentLoader>
    </View>
  )
}