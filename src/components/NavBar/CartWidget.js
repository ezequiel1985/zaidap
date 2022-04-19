import './NavBar.css'
import CartContext from '../../context/CartContext';
import { useContext } from 'react';

const CartWidget =() => {

    const { getQuantity } = useContext(CartContext);

    return(
        <>
        <a href="/" className="icon" target="_blank">
            <img src='./images/cartIcon.svg'/>
        { getQuantity() }
        </a>
        </>
    ) 
}
export default CartWidget