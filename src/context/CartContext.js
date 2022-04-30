// SI TENEMOS 2 ESTADOS DENTRO DEL CARTcONTEXT ES UN PROBLEMA, ayq eu si el 2do depende del 1ro
//LOS ESTADOS SE ACTUALIZAN DESPUES DE QUE finalizan la ejecuación de LAS FUNCIONES.
 
import { createContext, useState } from "react";

const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    const[cart, setCart] = useState([])
    

    // agrega productos al carrito, se utiliza en ItemDetail en función handleAdd
    // donde en el 2do parametro seteamos que addItem pase la info de productObj.
    //En linea 33 de ItemDetail lo ejecutamos en onAdd llamando a handleAdd.    
    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else{
            const newProducts = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const newProduct = {
                        ...prod,
                        quantity: productToAdd.quantity
                    }
                    return newProduct
                }else{
                    return prod
                }
            })
            setCart(newProducts)
        }
        
    }
    //Muestra cantidad de productos en carrito en el CartWidgt
    const getQuantity = () => {
        let count = 0;
        cart.forEach(prod => {
            count += prod.quantity
        })
        return count
    }
    // Verifica si X producto ya está en el carrito para evitar duplicados.
    //el metodo some recorre el array y devuelve true cuando encuentra coincidencia. 
    // Se utiliza en ItemDetail
    const isInCart =(id) => {
        return cart.some(prod => prod.id === id)
    }
    // Para vaciar el carrito .
    const clearCart = () =>{
        setCart([])
    }
    // Para remover productos del carrito.
    const removeItem = (id) => {
        const products = cart.filter(prod => prod.id !== id)
        setCart(products)
    }
    //Para obtener el valor final del carrito.
    const getTotal = () =>{
        let total = 0;
        cart.forEach(prod =>{
            total = total + (prod.quantity * prod.price)
        })
        return total
    }
    // identificar la cantidad de productos que hay en carrito.
    //se utiliza en itemDetail para indicar cual es la cantidad de la var initial 
    // se utiliza en ItemCount, se pasa al useState initial como valor inicial para identificar la cantidad de X productos que hay en cart. 
    const getQuantityProd = (id) => {
        return cart.find(prod => prod.id === id)?.quantity
    }

    
    return(
        <CartContext.Provider value={{
            cart,
            addItem,
            getQuantity,
            isInCart,
            clearCart,
            removeItem,
            getTotal,
            getQuantityProd
        }}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContext