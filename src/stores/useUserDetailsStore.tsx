import { Guid } from "guid-typescript"
import create from "zustand"
import { UserFormData, UserDetailsStore, InitialUserData } from "../types/userTypes"


export const useUserDetailsStore = create<UserDetailsStore>((set, get) => (
    {
        user: InitialUserData
        , createUser: (userData: UserFormData) => {
            const userStore = get();
            if (userStore.user.name === InitialUserData.name) {
                userData.id = Guid.create();
                set({
                    user: userData
                })
            }
        }
        , getUser: () : UserFormData=> {
           const userStore = get();
           return userStore.user;
        },

    })

) 