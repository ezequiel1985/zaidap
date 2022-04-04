import CartWidget from './CartWidget'
import './NavBar.css'


const NavBar = () => {
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
            </nav>
            )
}
export default NavBar