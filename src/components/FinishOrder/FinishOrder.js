import "./FinishOrder.css"
import CartContext from "../../context/CartContext"
import { useContext, useState } from "react"
import { firestoreDb} from '../../services/firebase/index'
import { collection, addDoc } from "firebase/firestore"

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
    const collectionRef = collection(firestoreDb, 'orders')
        setOrderId(( await addDoc(collectionRef, order)).id)
        orderConfirmed(orderId)
}
if(orderStatus === 'confirmado') {
    return(
        <>
        <div>
        <h1>Gracias por tu compra.</h1>
        <p>Tu numero de orden es {orderId} .</p>
        <h3>No olvides tomar nota de tu orden para retirar tus productos</h3>
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
                    
                    <button onClick={() => createOrder()}> Ordenar </button>
                </form>
            </div>
        </>
    )
}
export default FinishOrder