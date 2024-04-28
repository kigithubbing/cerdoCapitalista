import { Guid } from "guid-typescript"

export type fetchedObject ={
    returnedData: any[],
    isLoading : boolean,
    hasError: boolean,
    error : string
}

export type UserFormData = {
    id: Guid,
    name:string ,
    level:number
}

export interface UserDetailsStore{
    user: UserFormData;
    createUser: (userData: UserFormData) => void;
    getUser:  () => UserFormData;
}

export type UserFavorite = {
    id: Guid ,
    favorite : string []
}

export interface UserFavoriteStore {
    userFavorite : UserFavorite,
    setUserFavorite : (data : {id:Guid,fav:string}) => void ;
}

export const InitialUserData : UserFormData = { id:Guid.createEmpty(), name: "" , level : -1 }
export const InitialUserFavorite : UserFavorite = { id: Guid.createEmpty(), favorite: [] }

