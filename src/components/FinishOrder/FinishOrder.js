import "./FinishOrder.css"
import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import { firestoreDb} from '../../services/firebase/index'
import { collection, addDoc, getDocs, where, query,documentId, writeBatch } from "firebase/firestore"
import { Link } from 'react-router-dom'

//seteo el form vacio
const buyerForm= {
    name:"",
    telephone:"",
    email: "",
}


const FinishOrder = () => {
    // requiero las funciones de context que voy a utilizar.
    const { cart, clearCart ,getTotal } = useContext(CartContext)
    //seteo estados a utilizar.
    const [buyer, setBuyer] = useState(buyerForm)
    const [orderStatus, setOrderStatus] = useState(null)
    const [orderId, setOrderId] = useState(null)

    //capturo info del formulario a través de e.target
    const getForm = (e) => {
        const { name, value } = e.target;
        setBuyer({...buyer, [name]: value})
    }

    //reinicio datos cuando se envia el formulario
    const orderConfirmed = () => {
        setBuyer(buyerForm);
        clearCart()
        setOrderStatus('confirmado')
    }

    //Para crear order en FIREBASE
    const createOrder = async  () => {
    setOrderStatus('procesando')    
    const order = {
        ItemsOrder: cart.map(p=> {return ({id: p.id, title: p.title, price: p.price, quantity: p.quantity })}),
        form: buyer,
        total: getTotal(),
        date: new Date()
    }
    const collectionRefOrder = collection(firestoreDb, 'orders')
        setOrderId(( await addDoc(collectionRefOrder, order)).id)
        orderConfirmed(orderId)

}
//Para bajar stock en FIREBASE
const outStock = () =>{
    const ids = cart.map(p => p.id)
    const batch = writeBatch(firestoreDb);
    const collectionRefStock = collection(firestoreDb, 'products');

    getDocs(query(collectionRefStock, where(documentId(), 'in', ids)))
        .then(response =>{
            response.docs.forEach(doc=>{
                const dataDoc = doc.data()
                const prodQuantity = cart.find(p=> p.id === doc.id)?.quantity // trae la cantidad donde los id son iguales. 

                if(dataDoc.stock >= prodQuantity) {
                   batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity})
                   batch.commit()
                }
            })
        }).catch(err =>{
            console.log(err)
        })

}
const orderAndStock = () =>{
    createOrder();
    outStock();
}

if(orderStatus === 'confirmado') {
    return(
        <>
        <div>
        <h1>Gracias por tu compra.</h1>
        <p>Tu numero de orden es {orderId} .</p>
        <h3>No olvides tomar nota de tu orden para retirar tus productos</h3>
        <button><Link to='/' style={{textDecoration:'none', alignItems:'center', color:'#595959'}}>Pagina Principal</Link>  </button>
        </div>
        </>
    )
}else if(orderStatus === 'procesando'){
    return(
        <>
        <div>
            <h1>Estamos procesando tu orden.</h1>
        </div>
        </>
    )
}

    return(
        <>
            <div className="formContainer">
                <form className="formContainer__form">
                    <label>Nombre:</label>
                        <input  type="text"
                                name="name"
                                value={buyer.name}
                                onChange={getForm}
                                className="form__input" 
                                placeholder="Escribí tu nombre" 
                                 />
                    <label>Telefono:</label>
                        <input type="text"
                                name="telephone"
                                value={buyer.telephone}
                                onChange={getForm}
                                className="form__input" 
                                placeholder="Escribí tu telefono" />
                    <label>Email:</label>
                        <input type="text"
                                name="email"
                                value={buyer.email}
                                onChange={getForm}
                                className="form__input" 
                                placeholder="Escribí tu email" />
                    
                    <button onClick={() => orderAndStock()}> Ordenar </button>
                </form>
            </div>
        </>
    )
}
export default FinishOrder