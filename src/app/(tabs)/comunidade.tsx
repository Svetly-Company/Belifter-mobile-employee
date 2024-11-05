import { Text, View, Image, TextInput, TouchableOpacity, FlatList } from "react-native";
import { Bell, MagnifyingGlass, PaperPlaneTilt } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Post } from "../../components/Post";
import { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView } from "react-native-virtualized-view";
import { useQuery } from "react-query";
import { userStorage } from "../../storage/zustand/store";
import { ImageSourcePropType } from "react-native";

interface authorObject {
    name: string
}

export default function Comunidade(){
  
    interface PostObject 
    {author: authorObject, comments: [], content: string, idPost: number, likes: number, media: ImageSourcePropType}
   
    const user = userStorage((state) => state.user)

    const [posts, setPosts] = useState<PostObject[]>([])
  
    const {data : userPost, refetch} = useQuery('posts/all', async()=> {
        return await axios.get('https://belifter-server.onrender.com/posts/all',
            {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
    })

    
    
    useEffect(()=> {
        if(userPost){
            setPosts(userPost.data)
        }
        
    })

    // useEffect(()=>{
        
    //     const fetch = async () => {
    //         if(user) {
    //             loadPosts()
    //             return;
    //         } 
    //         loadUserData() 
            
    //     }
    //     fetch()

    //     console.log(posts)
    // }, [])

    // async function loadUserData(){
    //     const userData = await getUserData()
    //     setUser(userData)
    //     loadPosts()
    //     console.log(userData)
        
    // }

    // async function loadPosts(){
    //     try{
    //         if(user){
    //             const values = await axios.get('https://belifter-server.onrender.com/posts/all',
    //                 {
    //                     headers: {
    //                         'Authorization': `Bearer ${user.token}`
    //                     }
    //                 })
        
    //                 setPosts(values.data)
    //                 console.log(values.data)
    //         }
            
    //     }catch(Err){
    //         console.error(Err + 'Post')
    //     }
    // }
    


   
    return(
    <SafeAreaView style={{flex: 1}}>
        <ScrollView className="bg-gray-950 flex-1">
            <View className="p-7 flex-row justify-between items-center">
            <Image source={require('../../assets/BeLifter.png')} className="h-14 w-32"/>
                <View className="flex flex-row gap-3">
                    <TouchableOpacity>
                        <Bell color="white" weight="bold" size={28}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <PaperPlaneTilt color="white" weight="bold" size={28}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="flex flex-row mx-8 px-2 py-1 gap-1 items-center border border-white rounded-full">
                <TouchableOpacity>
                    <MagnifyingGlass color="white" size={19}/>
                </TouchableOpacity>
                <TextInput className="flex-1 text-lg color-white" placeholderTextColor={"white"} placeholder="Pesquisar"></TextInput>
            </View>
            <View className="flex-row gap-1 justify-center mb-4 mt-8">
                <TouchableOpacity>
                    <Text className="text-black font-ibmMedium rounded-full px-2 py-1 bg-white">Descobrir</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text className="font-ibmMedium rounded-full px-2 py-1 text-white">A seguir</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={posts}
                renderItem={({item}) => <Post image={item.media} content={item.content} id={item.idPost} comments={item.comments} author={item.author.name} refetch={refetch}  />}
                keyExtractor={item => item.idPost.toString()}
                style={{paddingBottom: 100}}
            />
            
        </ScrollView>
    </SafeAreaView>
    )
}