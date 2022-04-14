import "./Item.css"

const Item = ({id, title, pictureUrl, description, price})=>{
    return(
        <section className="item-list">
            <picture className='item-list-img'>
                <img src={pictureUrl} alt={title}/>
            </picture>
            <h3>{title} a solo ${price}</h3>
            <p>{description}</p>
            <button>Ver detalle</button>
        </section>
    )
}
export default Item