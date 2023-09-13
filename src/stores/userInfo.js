import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUserInfoStore = create(
  persist(
    set => ({
      userInfo: null,
      setUserInfo: userInfo => set(() => ({ userInfo }))
    }),
    { name: "userInfo" }
  )
);

export default useUserInfoStore;
