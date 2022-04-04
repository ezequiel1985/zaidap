
import ItemCount from "./ItemCount"
import {useState} from 'react'

const ItemListContainer = (props) =>{
    const [show, setShow] = useState(true)

    const handleOnAdd =(quantity) => {
        console.log(`se agregan ${quantity} productos`)
    }

    return(
        <>
        <h1>{props.greeting}</h1>
        
        {show ? <ItemCount initial={1} stock={15} onAdd={handleOnAdd}/> : null } 
        </>

    )
}
export default ItemListContainer