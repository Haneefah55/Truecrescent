import { create } from 'zustand'

interface SidebarStore {
  isOpen: boolean,
  toggle: () => void,
  setIsOpen: (isMobile: boolean) => void,
  
}

export const useSidebarStore = create<SidebarStore>((set, get) => ({
  isOpen: false,

  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  setIsOpen: (isMobile) => {
    if(isMobile) {
      set({ isOpen: false })
    } else {
      set({ isOpen: true })
    }
  }
}))