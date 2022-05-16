import './ItemCount.css'
import {useState} from 'react'

const ItemCount =({initial= 1, stock, onAdd})=> {
    const [quantity, setQuantity] = useState(initial)

    const decrement =() => {
        if(quantity > 1 ){
        setQuantity(quantity - 1)
    }}
    const increment =() => {
        if(quantity < stock) {
        setQuantity(quantity + 1)
    }}

    return(
        <>
        
        <div className="container-item-count">
            <div className="container-button" >
                <button onClick={increment}> + </button>
                    <p> {quantity} </p>
                <button onClick={decrement}> - </button>
            </div>
            <button className='agregar' onClick={()=> onAdd(quantity)}> Agregar al carrito </button>
        </div>
        
        </>
    )
}
export default ItemCount