import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { NavLink } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
//import { getCategories } from "../../asyncMock"
import CartContext from '../../context/CartContext'
import { firestoreDb } from '../../services/firebase'
import { getDocs, collection } from 'firebase/firestore'

const NavBar = () => {
    
    const { cart } = useContext(CartContext)

    const [categories,setCategories] = useState([])

    useEffect(()=>{
        // getCategories().then(categories =>{
        //     setCategories(categories)
        // })

        getDocs(collection(firestoreDb, 'categories')).then(response =>{
            const categories = response.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            setCategories(categories)
        })
    }, [])

    return(
            <nav>
                <img className="logo-img-none" src={'./images/logo-zaidap3.svg'} alt="" />
                <img src={'./images/logo-zaidap1.svg'} alt="" />
                <img className="logo-img-none"src={'./images/logo-zaidap2.svg'} alt="" />
                <div className="topnav" id="myTopnav">
                    <a href="/" className="active">Productos</a>
                    <a href="/">Contacto</a>
                    <a href="/" target="_blank">Ofertas</a>
                    <a href="https://api.whatsapp.com/send?phone=542615029188" target="_blank">Whatsapp</a>
                    {cart.length === 0 ?
                     "" : 
                     <CartWidget />}
                </div>
                <div className='Categories'>
                {categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
                className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
                >{cat.description}</NavLink> )}
                </div>
            </nav>
            )
}
export default NavBar