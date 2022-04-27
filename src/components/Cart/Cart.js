import "./Cart.css"
import { useContext, useEffect, useState } from "react"
import{ Link } from  "react-router-dom"
import CartContext from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

const Cart = () => {

    const { cart, removeItem, clearCart, getTotal } = useContext(CartContext)
    
    if(cart.length === 0) {
        return (
            <>
            <h1>No hay productos en el carrito de compras</h1>
            <button><Link to='/' style={{textDecoration:'none', alignItems:'center'}}>Ir a productos</Link> </button>
            </>
        )
    }

    return(
        <>
        <div>
            <h1>Carrito de compras</h1>
            <ul>
                {
                    cart.map(prod => <p key={prod.id}>Producto: {prod.title} 
                    - Cantidad: {prod.quantity}
                    - Precio unit: $ {prod.price} 
                    - Subtotal: $ {prod.quantity * prod.price} <button style={{textDecoration:'none', alignItems:'center'}} onClick={()=> removeItem(prod.id)}> Eliminar </button></p>)
                }
                
            </ul>
            <p> Total: {getTotal()}</p>
            <button style={{textDecoration:'none', alignItems:'center'}} onClick={()=> clearCart()}>Limpiar Carrito</button>   
            <button> <Link to='/' style={{textDecoration:'none', alignItems:'center'}}>Terminar compra </Link></button>
        </div>
        </>
        )
}
export default Cart