import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import './products.css'

export const Products = () => {
    const nav = useNavigate()
    const Back =()=> {
     nav('/carts')
    }

    const [field, setField] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products`)
        .then((res) => res.json())
        .then((res) => setField(res.products))
    },[])

    return(
        <div>
        <div className="top-board">
         <button onClick={Back}>Back to manue</button> 
        <div className="header">
          <h1>Products</h1>           
        </div>
        </div>
        <div className='category'>
        <ul>
        {field && field.map((item, id) =>{
            return (
                <div className='menu' key={item.id + id}>
                 <li >
                    <Link to={`/products/${item.id}`}>{item.brand}</Link>  
                 </li>  
                 <img src={item.images[0]} alt=""/>                    
                </div>
            )
        })} 
        </ul>
        </div>
               
        </div>
 
    )
}