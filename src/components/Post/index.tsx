import { Text, View, Image, TouchableOpacity, ImageSourcePropType, Modal } from "react-native";
import { CaretCircleRight, ChatCircle, DotsThree, HeartStraight, Timer } from "phosphor-react-native";
import { useState } from "react";
import { ImageBackground } from "expo-image";
import { TouchableHighlight } from "react-native-gesture-handler";
import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Comments } from '../Comments';

interface PostImageProps {
    image: ImageSourcePropType,
    content: string,
    id: number,
    comments?: [],
    refetch?: any,
    author: string
}

const transparent = 'rgba{0,0,0,0.5)'

export function Post({image, content, id, comments, refetch, author}:PostImageProps){
    let [status, setStatus] = useState(false);

    function toggleStatus(){
      setStatus(!status)
    }

    const [openModal, setOpenModal] = useState(false);

    function renderModal() {
  
    
        return (
            <View style={{flex: 1}}>
                <GestureRecognizer
                    style={{flex: 1}}
                    onSwipeDown={() => setOpenModal(false)}
                >
                    <Modal 
                        visible={openModal}
                        animationType="slide" 
                        transparent={true} 
                    >
                        <View className="flex-1 justify-end items-center" style={{backgroundColor: 'transparent'}}>
                            <View className="bg-gray-800 p-15 w-full h-5/6 rounded-t-3xl">
                                {
                                    comments ? <Comments idPost={id} comments={comments} refetch={refetch}></Comments>  : <View> </View>

                                }
                                
                            </View>
                        </View>
                    </Modal>
                </GestureRecognizer>
    
                
            </View>
        );
    }

    return(
    <View className="mt-8 mx-2 p-6 flex flex-col bg-[#151415] rounded-3xl">
        <View className="flex-row justify-between items-center">
            <View className="flex flex-row gap-3 items-center">
                <Image source={require('../../assets/moca.png')} className="w-12 h-12 rounded-full" />
                <View>
                    <Text className="text-white text-base font-ibmRegular">{author}</Text>
                    <View className="flex flex-row justify-between mt-2 items-center">
                        <Text className="text-white text-xs font-ibmMedium mr-1">Há 5 Horas</Text>
                        <TouchableOpacity>
                            <Text className="text-gray-300  text-xs font-ibmMedium">Seguir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity> 
                <DotsThree color="white" weight="bold" size={30}/>
            </TouchableOpacity>
        </View>
        <View className="flex flex-col justify-center items-center mt-4">
            <Text className="text-white text-lg font-ibmRegular w-full">{content}</Text>
            <View className="w-full h-72 mt-6">
                <ImageBackground
                source={image} contentFit="cover" imageStyle={{borderRadius: 30}} style={{borderRadius: 30, flex: 1, justifyContent: "flex-end"}}>
                    <View className="flex flex-row justify-between bg-[#3E3E3E]/50 mx-2 my-1 px-6 py-2 rounded-full items-center">
                        <View className="flex flex-row gap-1">
                            <Timer color="white" size={34}/>
                            <View className="flex flex-col justify-center items-center">
                                <Text className="text-gray-300 text-xs font-ibmRegularS">Duração</Text>
                                <Text className="text-slate-200 font-ibmRegular ">1h28min</Text>
                            </View>     
                        </View>
                        <View className="flex flex-row gap-1">
                            <Timer color="white" size={34}/>
                            <View className="flex flex-col justify-center items-center">
                                <Text className="text-gray-300 text-xs font-ibmRegularS">Duração</Text>
                                <Text className="text-slate-200 font-ibmRegular ">1h28min</Text>
                            </View>     
                        </View>
                        <TouchableHighlight>
                            <CaretCircleRight size={37} color="#3E3E3E" weight="fill"/>
                        </TouchableHighlight>
                        <View className="absolute h-7 w-5 bg-white rounded-full right-8 top-4 -z-10"/>
                    </View>
                </ImageBackground>
            </View>
            <View className="w-full flex flex-row px-6 items-center mt-4">
                <View className="flex flex-row gap-2 items-center">
                    <TouchableOpacity onPress={() => toggleStatus()}>
                        {status ? <HeartStraight size={21} color="#00BF63" weight="fill"/> : <HeartStraight size={21} color="white" weight="bold"/>}
                    </TouchableOpacity>
                    <Text className={`${status ? "text-green-450" :"text-gray-300"} transition-colors text-sm font-ibmRegularS`}>3 Curtidas</Text>
                </View>
                <View className="flex flex-row gap-2 items-center ml-28">
                    <TouchableOpacity onPress={()=> setOpenModal(true)}>
                        <ChatCircle size={21} color="white" weight="bold"/>
                    </TouchableOpacity>
                    <Text className="text-gray-300 text-sm font-ibmRegularS">Comentários</Text>
                    {renderModal()}
                </View>
            </View>
        </View>
    </View>
    );
}