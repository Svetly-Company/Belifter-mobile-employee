import AsyncStorage from "@react-native-async-storage/async-storage";
import { USER_COLLECTION } from "../storageConfig";

export async function getUserData(){
  try{
    
    const storage = await AsyncStorage.getItem(USER_COLLECTION)
    const userData = storage ? JSON.parse(storage) : ''
    return userData;
  }catch(err){
    throw err
  }
}