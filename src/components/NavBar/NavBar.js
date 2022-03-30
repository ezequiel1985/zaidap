import CartWidget from './CartWidget'
import './NavBar.css'


const NavBar = () => {
    return(
            <nav>
                <img class="logo-img-none" src={'./images/logo-zaidap3.svg'} alt="" />
                <img src={'./images/logo-zaidap1.svg'} alt="" />
                <img class="logo-img-none"src={'./images/logo-zaidap2.svg'} alt="" />
                <div class="topnav" id="myTopnav">
                    <a href="/" class="active">Productos</a>
                    <a href="/">Contacto</a>
                    <a href="/" target="_blank">Ofertas</a>
                    <a href="https://api.whatsapp.com/send?phone=542615029188" target="_blank">Whatsapp</a>
                    <CartWidget />
                    {/*<a href="/" class="icon" onclick="myFunction()" target="_blank">
                    <img src='./images/cartIcon.svg'/>
                     4
                    </a>*/}
                </div>
            </nav>
            )
}
export default NavBar