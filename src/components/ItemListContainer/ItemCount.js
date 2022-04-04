import './ItemCount.css'
import {useState} from 'react'

const ItemCount =({initial, stock, onAdd})=> {
    const [count, setCount] = useState(1)

    const decrement =() => {
        if(count > initial){
        setCount(count - 1)
    }}
    const increment =() => {
        if(count < stock) {
        setCount(count + 1)
    }}

    return(
        <>
        
        <div className="container-item-count">
            <div className="container-button" >
                <button onClick={increment}> + </button>
                    <p> {count} </p>
                <button onClick={decrement}> - </button>
            </div>
            <button onClick={()=> onAdd(count)}> Agregar al carrito </button>
        </div>
        
        </>
    )
}
export default ItemCount