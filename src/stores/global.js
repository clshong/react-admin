import { create } from "zustand";
import { persist } from "zustand/middleware";

const useGlobalStore = create(
  persist(
    set => ({
      primaryColor: "#00b96b",
      collapsed:false,
      setColor: color => set(() => ({ primaryColor: color })),
      setCollapsed:()=>set((state)=>({collapsed:state.collapsed = !state.collapsed}))
    }),
    {
      name: "primaryColor",
      // partialize 过滤属性，存储哪些字段到localStorage
      partialize: state => Object.fromEntries(Object.entries(state).filter(([key]) => ["primaryColor"].includes(key))),
      name:"collapsed",
      partialize:state=>state.collapsed
    },
  )
);

export default useGlobalStore;
