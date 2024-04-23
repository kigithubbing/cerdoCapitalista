export type fetchedObject ={
    returnedData: any[],
    isLoading : boolean,
    hasError: boolean,
    error : string
}

export type UserFormData = {
    name:string ,
    level:number
}

export interface UserDetailsStore{
    user: UserFormData;
    createUser: (userData: UserFormData) => void;
    getUser:  () => UserFormData;
    
}

export const InitialUserData : UserFormData = { name: "" , level : -1 }

