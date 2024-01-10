import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface dataState {
    email: string
    image: string
    setData: (body: object) => void
}

export const useDataState = create<dataState>(){

}