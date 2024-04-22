import { NavLink } from "react-router-dom"
import {FormProvider, useForm} from "react-hook-form"
import './Index.css'
import { useState } from "react"
import { UserFormData } from "../../types/userTypes"
import { useUserDetailsStore } from "../../stores/useUserDetailsStore"
enum levels {
    Unselected,
    Basic,
    Medium,
    High
}

function UnicodeAcceptedTest()  {
try {
    new RegExp('\\p{L}', 'u');
    return true;
  } catch (e) {
    return false;
  }
}
function Index() {
    const [user,createUser] = useUserDetailsStore((state) =>[
        state.user, state.createUser
]);

    const browserAcceptsUnicode: boolean = UnicodeAcceptedTest();
    const {register,handleSubmit,formState: {errors} } = useForm<UserFormData>();
    const onSubmit= (data:UserFormData) => { 
        console.log(data)
        setIsFormSubmitted(true)
        createUser(data)
     }
    
    const [isFormSubmitted,setIsFormSubmitted] = useState (false);
    return (
        <>
        {isFormSubmitted &&
        <div>
           <h2> Welcome {user.name}</h2>
        </div>
        }
        <form onSubmit={handleSubmit(onSubmit)} className="centered-form">
            <div >
                <label htmlFor="name">Name:
                    <input type="textbox"  {...register("name",{required:"Your name is required."
                    ,pattern :  { value : browserAcceptsUnicode ? /^(\p{L}+((-\p{L}+)|\s\p{L}+|'\p{L}+)*){3,}$/iu :  /^[A-Z]{3,}((-[A-Z]+)|\s[A-Z]+)*$/i , message: "Name should be at least three characters long" }
                     } ) } />
                </label>
                {errors.name  && <span>{errors.name.message}</span>}
            </div>
            <div>
                <label htmlFor="level">Level:
                    <select {...register("level",{ valueAsNumber:true, min:1, required:"Input"})}>
                        <option value={levels.Unselected}>Choose ...</option>
                        <option value={levels.Basic}>Basic</option>
                        <option value={levels.Medium}>Medium</option>
                        <option value={levels.High}>High</option>
                    </select>
                </label>
                {errors.level && <span>{errors.level.message}</span>}
            </div>
            <button type="submit" disabled={isFormSubmitted}>Go!</button>
        </form>
        { isFormSubmitted  &&
        <div>
            <div >
               <NavLink to={'/cryptoexchange'} > 
                <p>Mercados Crypto</p>
                </NavLink>
            </div>
            <div >
            <NavLink to={'/exchange'} > 
                <p>Mercado de Valores</p>
                </NavLink>
            </div>
        </div>
        }
        </>
    )
}

export default Index