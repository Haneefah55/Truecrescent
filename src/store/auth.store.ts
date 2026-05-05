import { syncUser } from "@/actions/user.action";
import { create } from "zustand";

type User ={
  _id: string,
  clerkId: string
  email: string,
  username: string,
  createdAt: Date,
  role: string,
  cartItems: [],
  wishlist: [],
  shippingAddress: [],
}

type Authstate = {
  user: User | null,
  checkAuth: () => Promise<void>,
}

export const useAuthStore = create<Authstate>((set) =>({
  user: null,
  checkAuth: async () => {
    const result = await syncUser()
    console.log("result from syncUser in authStore", result)
    set({ user: result })
  }
}))