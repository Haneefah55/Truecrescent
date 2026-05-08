
import { getUser } from "@/actions/user.action";
import { create } from "zustand";



type User ={
  name: string,
  email: string,
  emailVerified: boolean,
  image?: string | null | undefined,
  createdAt: Date,
  updatedAt: Date,
  role: string,
  id: string,
}

type Authstate = {
  user: User | null | undefined,
  checkAuth: () => Promise<void>,
}

export const useAuthStore = create<Authstate>((set) =>({
  user: null,
  checkAuth: async () => {
    const result = await getUser()
    console.log("result from syncUser in authStore", result)
    set({ user: result?.user })
  }
}))/*  */ 