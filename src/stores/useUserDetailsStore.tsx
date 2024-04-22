import create from "zustand"
import { UserFormData ,UserDetailsStore} from "../types/userTypes"


export const useUserDetailsStore  =  create<UserDetailsStore>((set)=> ( 
    { 
    user: {name:"", level: -1}
    ,createUser : (userData: UserFormData)  => 
        set ({
            user : userData
        }),
     })
) 