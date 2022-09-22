import { useNavigate } from "react-router-dom"

export const About = () => {
    const nav = useNavigate()
    const Back =()=> {
     nav('/carts')
    }
    return(
        <>
        <h1>About</h1>
        <button onClick={Back}>Back to manue</button>        
        </>
 
    )
}