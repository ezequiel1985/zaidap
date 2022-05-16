
import {useState} from 'react'
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import Slider from '../Slider/Slider'
import Spinner from '../spinner/Spinner'
import { useAsync } from "../../hooks/useAsync"
import { getProducts } from "../../services/firebase/firestore"


const ItemListContainer = (props) =>{
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const { categoryId } = useParams()
    useAsync(
        setLoading,
        () => getProducts(categoryId),
        setProducts,
        () => console.log('Se produjo un error en Item List Container'),
        [categoryId]
    )
    
    if(loading) {
        return (
                <div>
                    <h1>Cargando desde itemListContainer...</h1>
                </div>
        )
    }

    return(
        <>
        
        <ItemList products={products}/>
        <Slider></Slider>
        <Spinner/>
       
        </>

    )
}
export default ItemListContainer