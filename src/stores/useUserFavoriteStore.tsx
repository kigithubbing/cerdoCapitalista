import {Guid } from "guid-typescript"
import { create } from "zustand";
import { UserFavorite, UserFavoriteStore, InitialUserFavorite } from "../types/userTypes";

export const useUserFavoriteStore = create<UserFavoriteStore>((set, get) => 
    ({ 
        userFavorite : InitialUserFavorite,
        setUserFavorite : (data : {id:Guid,fav:string}) => {
            const userFav = get()
            if (userFav.userFavorite.id !== Guid.createEmpty()) {
                userFav.userFavorite.favorite = [... new Set( [...userFav.userFavorite.favorite,data.fav] )]
                set ({
                    userFavorite : userFav.userFavorite
                })
            }
        }
        ,getUserFavorite : () : UserFavorite => {
            const retObj = get()
            return retObj.userFavorite
        }

    }) )