import "./ItemDetail.css"

const ItemDetail = ({id, title, price, description, pictureUrl}) =>{
    return (
            <div className='container-product'>
                <h1 className="title"> Hola {id}</h1>
                <picture className='sombra'>
                    <img className="responsive" src={pictureUrl} alt={title}/>
                </picture>
                <p>{title} por ${price}</p>
                <p>{description}</p>
            </div>
            )
}
export default ItemDetail