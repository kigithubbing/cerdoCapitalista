import { NavLink } from "react-router-dom"
import { FormProvider, useForm } from "react-hook-form"
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

function UnicodeAcceptedTest() {
    try {
        new RegExp('\\p{L}', 'u');
        return true;
    } catch (e) {
        return false;
    }
}
function Index() {
    const [user, createUser] = useUserDetailsStore((state) => [
        state.user, state.createUser
    ]);

    const browserAcceptsUnicode: boolean = UnicodeAcceptedTest();
    const { register, handleSubmit, formState: { errors } } = useForm<UserFormData>();
    const onSubmit = (data: UserFormData) => {
        console.log(data)
        setIsFormSubmitted(true)
        createUser(data)
    }

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    return (
        <>
            {isFormSubmitted &&
                <div>
                    <h2> Welcome {user.name}</h2>
                </div>
            }
            <div className="box">
                <div className="center">
                    <h1>Home of capitalist swines.</h1>
                    <h4 style={{ marginTop: -30 }}>or those who want to become</h4>
                    <img height={150} src="src/assets/piggy/il_fullxfull.1270738567_ms47.webp" alt="Bourbon" />
                </div>
                <div className="center">
                    <form onSubmit={handleSubmit(onSubmit)} className="centered-form">
                        <label htmlFor="name">Name:
                            <input type="textbox"  {...register("name", {
                                required: "Your name is required."
                                , pattern: { value: browserAcceptsUnicode ? /^(\p{L}+((-\p{L}+)|\s\p{L}+|'\p{L}+)*){3,}$/iu : /^[A-Z]{3,}((-[A-Z]+)|\s[A-Z]+)*$/i, message: "Name should be at least three characters long" }
                            })} />
                        </label>
                        {errors.name && <span>{errors.name.message}</span>}
                            <label htmlFor="level">Level:
                                <select {...register("level", { valueAsNumber: true, min: 1, required: "Choose a level" })}>
                                    <option value="">Choose ...</option>
                                    <option value={levels.Basic}>Basic</option>
                                    <option value={levels.Medium}>Medium</option>
                                    <option value={levels.High}>High</option>
                                </select>
                            </label>
                            {errors.level && <span>{errors.level.message}</span>}
                        <button type="submit" disabled={isFormSubmitted}>Go!</button>
                    </form>
                </div>
            </div>
            {isFormSubmitted &&
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