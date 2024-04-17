import { NavLink } from "react-router-dom"
import {FormProvider, useForm} from "react-hook-form"
import './Index.css'
import { useState } from "react"
enum levels {
    Unselected,
    Basic,
    Medium,
    High
}
type FormData = {
    name:string ,
    level:number
}
function Index() {

    const {register,handleSubmit,formState: {errors} } = useForm<FormData>();
    function setWholeData(data:FormData,submitted:boolean) {
        console.log(data)
        setFormData(data)
        setIsFormSubmitted(submitted)
    }
    const onSubmit= (data:FormData) => { setWholeData(data,true) }
    const onFailSubmit = (data:FormData) =>  { setWholeData(data,false) }
    
    const initialFormData:FormData = {name: '', level:0}
    const [formData,setFormData] = useState( initialFormData) ;
    const [isFormSubmitted,setIsFormSubmitted] = useState (false);
    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="centered-form">
            <div >
                <label htmlFor="name">Name:
                    <input type="textbox"  {...register("name",{required:"Your name is required.", pattern: /^[A-Z|a-z]{3,}(\s[A-Z|a-z]+)*/})} />
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