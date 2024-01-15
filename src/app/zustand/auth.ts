import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface dataState {
    email: string
    image: string
    setData: (body: object) => void
}

export const useDataStore = create<dataState>()(
    persist(
        (set) => ({
            email: "",
            image: "",
            setData: (newData) => set({...newData})
        }),
        {
            name: "dataInfo",
            storage: createJSONStorage(() => sessionStorage)
        }
    )
)