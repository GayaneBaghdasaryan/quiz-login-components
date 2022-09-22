import { Navigate } from "react-router-dom";

import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { LoginContext } from "../Login/login";

export const Authorization = ({children}) => {
    const context = useContext(LoginContext)
    const location = useLocation()
    if(!context.value){
       return <Navigate to="/" state={{from: location}}/>
    }
    return children
}