import { useNavigate } from "react-router-dom"

export const Bag = () => {
    const nav = useNavigate()
    const Back =()=> {
     nav('/carts')
    }
    return(
        <>
        <h1>Bag</h1>
        <button onClick={Back}>Back to manue</button>        
        </>

    )
}