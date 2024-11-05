import { View, Text, Image, TextInput } from 'react-native';
import { HeartStraight } from "phosphor-react-native";
import { Comment} from '../Comment'
import { Subcomment } from '../subComment'
import { FlatList } from 'react-native';
import { userStorage } from '../../storage/zustand/store';
import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import { ScrollView } from 'react-native-virtualized-view';

type CommentProps = {
    authorId: number,
    authorName: string,
    content: string,
    profilePicture: string,
    
}

interface CommentsProp{
    idPost: number,
    comments: CommentProps[]
    refetch : any
}

// interface postComment {
//     id: number,
//     commentContent: string
// }

// interface PostObject 
// {author: Object, comments: [], content: string, idPost: number, likes: number, media: string}

export function Comments({idPost, comments,  refetch}:CommentsProp){
    const [commentContent, setCommentContent] = useState('')
    const user = userStorage((state) => state.user)


    // const {data : userPost} = useQuery('comment/all', async()=> {
    //     return await axios.post(`https://belifter-server.onrender.com/posts/${idPost}/comments/create`,{
    //         content: commentContent
    //     },
    //         {
    //             headers: {
    //                 'Authorization': `Bearer ${user.token}`
    //             }
    //         })
    // })


    async function handleSubmitComment(){
        try{
            // console.log(user.token, idPost, commentContent)
            const {data} = await axios.post(`https://belifter-server.onrender.com/posts/${idPost}/comments/create`, {
                content: commentContent},
                {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
                
            })
            refetch()
            console.log(data)
        }catch(e){
            console.error(e)
        }
        
    }
    function handleCommentChange(text : string){
        setCommentContent(text)
    }

    return(
        <View className='flex h-3/4'>
            <View className='overflow-y-auto flex-1'>

                <View className="items-center mt-3">
                    <View className='h-1.5 bg-slate-100 w-32 rounded-3xl'></View>

                    <Text className='text-white text-xl mt-2 font-ibmRegular'>Comentários</Text>
                </View>

                <ScrollView>
                    <FlatList
                        
                        data={comments}
                        renderItem={({item}) => <Comment comment={item.content} author={item.authorName}/>}
                        keyExtractor={(item, key) => `${item}-${key}`}
                    />
                </ScrollView>
                

            {/* {
                comments.map((item) => <Comment comment={item.content}></Comment>)
            } */}
                {/* <Comment></Comment>
                <Subcomment></Subcomment>

                <Comment></Comment>
                <Subcomment></Subcomment>

                <Comment></Comment>
                <Subcomment></Subcomment> */}
            </View>

            <View className='h-1/4 position: sticky bg-gray-800 flex flex-row content-between w-full'>
                <View className='ml-4 mt-12'>
                    <Image source={require('../../assets/moca.jpg')} className="w-12 h-12 rounded-full" />
                    
                </View>
                <View className='ml-3 mt-12'>
                    <TextInput 
                        className='border-b-2 border-white w-96 font-ibmRegular text-white'
                        placeholder='Adicione um comentário...'
                        placeholderTextColor={"#fff"}
                        value={commentContent}
                        onChangeText={handleCommentChange}
                        onSubmitEditing={handleSubmitComment}
                    />
                </View>
                
            </View>
        </View>
        
    )
}
