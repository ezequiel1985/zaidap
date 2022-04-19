import "./Item.css"
import { Link } from 'react-router-dom'

const Item = ({id, title, pictureUrl, description, price})=>{
    return(
        <section className="item-list">
            <picture className='item-list-img'>
                <img src={pictureUrl} alt={title}/>
            </picture>
                <h3>{title} a solo ${price}</h3>
                <p className="description">{description}</p>
            <button>
              <Link to={`/detail/${id}`} className="detalle">Ver detalle</Link>  
            </button>
        </section>
    )
}
export default Item