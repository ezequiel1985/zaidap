import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const CartWidget =() => {

    const { getQuantity } = useContext(CartContext);

    return(
        <>
        <Link to='/cart' className="icon" style={{textDecoration:'none', color: 'white'}}>
            <img src='../images/cartIcon.svg' alt='Icon Cart'/>
          { getQuantity() }
        </Link>
        </>
    ) 
}
export default CartWidget