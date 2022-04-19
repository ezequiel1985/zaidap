import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState, useContext } from "react"
import{Link} from  "react-router-dom"
import CartContext from "../../context/CartContext"

const ItemDetail = ({ id, title, category, price, description, pictureUrl,}) =>{

    
    const { addItem, isInCart } = useContext(CartContext)
    
    const handleAdd = (count) => {
        console.log('Agregar al carrito ')
        const productObj = {
            id, title, price, quantity: count
        }

        addItem(productObj)
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
            {isInCart(id) ? <button><Link to='/cart' style={{textDecoration:'none', alignItems:'center'}}>Ir al carrito</Link></button> : <ItemCount initial={0} stock={10} onAdd={handleAdd}/> }
            </footer>
            </div>
            </>
            )
}
export default ItemDetail