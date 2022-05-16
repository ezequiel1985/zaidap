import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { useState, useContext } from 'react'
import { getCategoriesNavbar} from '../../services/firebase/firestore'
import CartContext from '../../context/CartContext'
import { useAsync } from "../../hooks/useAsync"



const NavBar = () => {
    
    const { cart } = useContext(CartContext)
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    useAsync(
        setLoading,
        ()=>getCategoriesNavbar(categories),
        setCategories,
        () => console.log('Hubo un error en el Navbar')
    )
    
    return(
            <nav>
                <img className="logo-img-none" src={'./images/logo-zaidap3.svg'} alt="" />
                <img src={'./images/logo-zaidap1.svg'} alt="" />
                <img className="logo-img-none"src={'./images/logo-zaidap2.svg'} alt="" />
                
                <div className='Categories'>
                {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                >{cat.description}</NavLink> )}
                {cart.length === 0 ?
                     "" : 
                     <CartWidget />}
                </div>
            </nav>
            )
}
export default NavBar