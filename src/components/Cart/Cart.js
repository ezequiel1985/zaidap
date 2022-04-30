import "./Cart.css"
import { useContext, useEffect, useState } from "react"
import{ Link } from  "react-router-dom"
import CartContext from "../../context/CartContext"
import { addDoc, collection, Timestamp, updateDoc, doc, writeBatch, query, where, getDocs, documentId } from 'firebase/firestore'
import { firestoreDb} from '../../services/firebase/index'
import OrderForm from "../FinishOrder/FinishOrder"


const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(CartContext)
    
    
    // ### addDoc: Agregar doc a coleccion en FIRESTORE DATABASE con la => AddDocToCollection ###
    // const addDocToCollection = ()=> {
    //     const collectionRef = collection(firestoreDb, 'user')

    //     const objUser = {
    //         name: 'Eze',
    //         phone: '2615029155',
    //         email: 'prueba@eze.com',
    //         date: Timestamp.fromDate( new Date())
    //     }

    //     addDoc(collectionRef, objUser)
    //         .then(res => {
    //             console.log(res.id)
    //         })
    // }

    // ### updateDoc: Actualizar doc en coleccion de FIRESTORE DATABASE con la => updateDocFromCollection ###
    // const updateDocFromCollection = ()=>{
    //     const id = 'aNuxIjRUnfmmH5tYKoS8'

    //     const docRef = doc(firestoreDb, 'user', id) // en X base, a collection user, el id que declare en la const de arriba
        
    //     const fieldToUpdate ={
    //         name: 'Joaquien Zerbo',
    //         date: Timestamp.fromDate(new Date())
    //     }
    //     updateDoc(docRef, fieldToUpdate) // pasamos como argumentos primero la referencia y luego los campos a actualizar.
    //     .then(response => {
    //         console.log(response)
    //     }) 
    // }

    // ### writeBatch, query, where, getDocs, documentId: Para generar la order y disminuir stock en FIRESTORE DATABASE cuando compran un producto => createOrder ###
    //     const [loading, setLoading] = useState(false)
    
    //     const createOrder = () =>{
    //     setLoading(true)

    //     const objOrder = {
    //         items: cart,
    //         buyer: {
    //             name: 'Ezequiel',
    //             phone: '2615029155',
    //             email: 'eze@eze.com'
    //         },
    //         total: getTotal(),
    //         date: new Date()
    //     }

    //     const ids = cart.map(p => p.id)

    //     const batch = writeBatch(firestoreDb);

    //     const collectionRef = collection(firestoreDb, 'products');
        
    //     const outOfStock = [] // array vacio para pushear los productos que no tienen stock.

    //     getDocs(query(collectionRef, where(documentId(), 'in', ids))) // in es un operador de comparación. in = 'estén dentro'
    //         .then(response =>{
    //             response.docs.forEach(doc=>{
    //                 const dataDoc = doc.data()
    //                 const prodQuantity = cart.find(p => p.id === doc.id)?.quantity

    //                 if(dataDoc.stock >= prodQuantity) {
    //                     batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity}) // con ref obtengo la referencia exacta de la base de datos.  
    //                 }else{
    //                     outOfStock.push({id: doc.id, ...dataDoc})
    //                 }
    //             })
    //         }).then(()=>{
    //             if(outOfStock.length === 0){ // este if es si está todo bien con el stock ya que no se pusheo nada a la var outOfStock
    //                 const collectionRef = collection(firestoreDb, 'orders')
    //                 return addDoc(collectionRef, objOrder) // con el return llevo la respuesta al then que viene luego del else, así manejo tanto con el then tanto la respuesta del if como del else. Si esta ok retorna succesfull y si no esta ok retorna un reject.
    //             }else {
    //                 return Promise.reject( {name: 'outOfStockError', products: outOfStock} ) //Promise.reject() retorna un objeto Promise que es rechazado por la razón específicada.
    //             }
    //         }).then(({ id })=>{
    //             batch.commit() // si está todo ok, actualizo el stock.
    //             console.log( `El id de la orden es ${id}`)
    //         }).catch(error => {
    //             console.log(error)
    //         }).finally(()=>{
    //             setLoading(false) //arranca en true, y aquí lo cambio a false ya que obtuve la respuesta.
    //         })
    // }
    // if(loading){
    //     return <h1> Se esta generando su orden </h1>
    // }

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
            <button> <Link to='/order' style={{textDecoration:'none', alignItems:'center'}}>Terminar compra </Link></button>
            {/* <button onClick={() => addDocToCollection()} className="Button">Agregar documento a collecion </button> */}
            {/* <button onClick={() => updateDocFromCollection()} className="Button">Actualizar documento a collecion </button> */}
            {/* <button onClick={() => createOrder()} className="Button">Crear orden de compra </button> */}
        </div>
        
        </>
        )
}
export default Cart