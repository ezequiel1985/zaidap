import ItemCount from '../ItemCount/ItemCount'
import {useState, useEffect} from 'react'
import { getProductos } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"


const ItemListContainer = (props) =>{
    const [show, setShow] = useState(true)

    const handleOnAdd =(quantity) => {
        console.log(`se agregan ${quantity} productos`)
    }
    const [products, setProducts] = useState([])

     useEffect(()=>{
        getProductos().then(prods =>{
            setProducts(prods)
        }).catch(error =>{
            console.log(error)
        })
    },[])

    return(
        <>
        <h1>{props.greeting}</h1>
        <ItemList products={products}/>
        {show ? <ItemCount initial={1} stock={15} onAdd={handleOnAdd}/> : null } 
        </>

    )
}
export default ItemListContainer