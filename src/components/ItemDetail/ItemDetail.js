import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import{ Link } from  "react-router-dom"
import CartContext from "../../context/CartContext"

const ItemDetail = ({ id, title, category, price, description, pictureUrl, stock}) =>{

    
    const { addItem, isInCart, getQuantityProd } = useContext(CartContext)
    
    const handleAdd = (count) => {
        console.log('Agregar al carrito ')
        const productObj = {
            id, title, price, quantity: count,
        }

        addItem(productObj)
    }

    return (
        <>
            <div className='container-product'>
                <picture className='sombra'>
                    <img className="responsive" src={pictureUrl} alt={title}/>
                </picture>
                <p>{title} por ${price}</p>
                <p>{description}</p>
                <p>categoria: {category}</p>
                <p style={{color:'#595959', alignItems:'center'}}>Stock disponible: ({stock})</p>
            
            <footer>
            {/* {false ? <button><Link to='/cart' style={{textDecoration:'none', alignItems:'center'}}>Ir al carrito</Link></button> : <ItemCount initial={getQuantityProd(id)} stock={10} onAdd={handleAdd}/> }
            {isInCart(id) ? <button><Link to='/cart' style={{textDecoration:'none', alignItems:'center'}}>Finalizar compra </Link></button> : "" } */}
            <ItemCount initial={getQuantityProd(id)} stock={stock} onAdd={handleAdd}/>
            {isInCart(id) ? <button><Link to='/cart' style={{textDecoration:'none', alignItems:'center'}}>Ir al carrito</Link></button> : "" } 
            
            </footer>
            </div>
            </>
            )
}
export default ItemDetail