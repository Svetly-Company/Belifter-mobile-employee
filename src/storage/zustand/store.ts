import { create } from "zustand";


interface userProps{
  id: number,
  name: string
  email: string,
  exp: number,
  iat: number,
  token: string
}

type userStore = {
  user: userProps,
  setUser: (item : any) => void
}

export const userStorage = create<userStore>((set) => ({
  user: { 
    id: 0,
    name: '',
    email: '',
    exp: 0,
    iat: 0,
    token: ''
  },
  setUser: (item) => set((state) => ({user: {...item}}))
  
}))