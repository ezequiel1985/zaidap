import CartWidget from './CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from "../../asyncMock"

const NavBar = () => {
    const [categories,setCategories] = useState([])

    useEffect(()=>{
        getCategories().then(categories =>{
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
                    <CartWidget />
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