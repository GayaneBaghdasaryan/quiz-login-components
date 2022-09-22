import { users } from "./users";
import './login.css'
import { createContext, useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import './login.css'
export const LoginContext = createContext()
export const Login = () =>{
   
    const nav = useNavigate()
    const context = useContext(LoginContext)
     
    const validateEmail = (email) =>{
        const getValidate = users.find(
            (val) => val.email === email 
        )
         
        if(getValidate !== undefined){
            context.setValue(true)
            nav('/carts')
        } else {
            context.setValue(false)
            
        }
    }
    return (
        <div className="login">
        <h1>Login</h1>
        <form onSubmit={(e)=>{
            e.preventDefault();
            validateEmail(e.target[0].value)
        }}>
            <div className="type-box">
            <input className="input" type="text" name='email' placeholder="e-mail" />
            <input className="submit" type="submit" value = "Enter"/>                
            </div>

        </form>
        </div>
    )
}

export const LoginProvider = ({children}) => {
    const [value , setValue] = useState(false);
    const obj = {value, setValue}
    return (
        <LoginContext.Provider value={obj}>
            {children}
        </LoginContext.Provider>
    )
}
