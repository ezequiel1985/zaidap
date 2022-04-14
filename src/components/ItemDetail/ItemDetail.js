import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import{Link} from  "react-router-dom"

const ItemDetail = ({ title, category, price, description, pictureUrl,}) =>{

    const [quantity, setQuantity] = useState(0)
    
    const handleAdd = (count) => {
        console.log('Agregar al carrito ')
        setQuantity(count)
        console.log(count)
    }

    return (
        <>
            <div className='container-product'>
                <h1 className="title"> Hola</h1>
                <picture className='sombra'>
                    <img className="responsive" src={pictureUrl} alt={title}/>
                </picture>
                <p>{title} por ${price}</p>
                <p>{description}</p>
                <p>categoria: {category}</p>
            
            <footer>
            {quantity > 0 ? <button><Link to='/cart' style={{textDecoration:'none', alignItems:'center'}}>Ir al carrito</Link></button> : <ItemCount initial={0} stock={10} onAdd={handleAdd}/> }
            </footer>
            </div>
            </>
            )
}
export default ItemDetail