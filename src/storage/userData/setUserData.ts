import AsyncStorage from "@react-native-async-storage/async-storage";
import {USER_COLLECTION } from "../storageConfig";

export async function setUserData(userData: string){
  try{
    
    AsyncStorage.setItem(USER_COLLECTION, userData)
  }catch(err){
    throw err
  }
}