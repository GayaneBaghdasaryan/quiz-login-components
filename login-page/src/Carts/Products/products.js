import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './products.css'

export const Products = () => {
    const [field, setField] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/`)
        .then((res) => res.json())
        .then((res) => setField(res.products)
        )},[])
     const filteredItems = field.filter((item) => item.category ==='smartphones');
 
    return(
        <div className="products-page">
        <div className="top-board"> 
        <div className="header">
          <h1>Products</h1>           
        </div>
        </div>
        <div className='category'>
        <ul>
        {filteredItems && filteredItems.map((item, id) =>{
            return (
                <div className='menu' key={item.id + id}>
                 <li >
                    <Link to={`/products/${item.id}`}>{item.brand}</Link>  
                 </li>  
                </div>
            )               
        })} 
        </ul>
        </div>
               
        </div>
 
    )
}