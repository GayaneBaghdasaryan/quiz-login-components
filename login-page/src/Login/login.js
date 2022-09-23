import { users } from "./users";
import './login.css'
import { createContext, useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import './login.css'
export const LoginContext = createContext()
export const Login = () =>{
   
    const nav = useNavigate();
    const context = useContext(LoginContext);
    const location = useLocation();

    const validateEmail = (email) =>{
        const getValidate = users.find(
            (val) => val.email === email 
        ) 
        if(getValidate != undefined){
            context.setValueEmail(true)
            nav('/products')
        } else {
            context.setValueEmail(false)
            
        }
       
    };
   
    const validatePassword = (password) =>{
        const getValidate = users.find(
            (val) => val.password === password 
        ) 
        if(getValidate != undefined){
            context.setValuePassword(true)
            nav('/about')
        } else {
            context.setValuePassword(false)
            
        }
       
    };

    return (
        <div className="login">
         <div className="login-header">
         <h1>Login</h1>
         </div>
         <div className="login-form">
         <form onSubmit={(e)=>{
            e.preventDefault();
            validateEmail(e.target[0].value)
            validatePassword(e.target[0].value)
        }}>
            <div className="type-box">
            <input className="input" type="text" name='email' placeholder="e-mail" />
            <input className="input" type="password" name='password' autoComplete="on" placeholder="password" />
            <input className="submit" type="submit" value = "Enter"/>                
            </div>

        </form>   
        </div>                  
            </div>
           
    )
}

export const LoginProvider = ({children}) => {
    const [valueEmail , setValueEmail] = useState(false);
    const [valuePassword , setValuePassword] = useState(false);
    const obj = {valueEmail , setValueEmail, valuePassword , setValuePassword }
    return (
        <LoginContext.Provider value={obj}>
            {children}
        </LoginContext.Provider>
    )
}
