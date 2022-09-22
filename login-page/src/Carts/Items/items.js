import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import './items.css'

const Items = () => {
    const {id} = useParams();
    const [data, setData] = useState([])
    
    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res=> res.json())
        .then(res => setData(res))
    },[])
     
    const nav = useNavigate()
    const Back =()=> {
     nav('/products')
    }
    return(
        <div className="item-cart">
           {data && (
            <div className="products">
                <h1>{data.title}</h1>
                <img src={data.thumbnail} alt=''/> 
                <h2>{data.description}</h2> 
                <h3>Price` {data.price}$</h3>
            </div>
           )}

         <button className="item-button" onClick={Back}>Back to Products</button>
        </div>
    )
}
export default Items;