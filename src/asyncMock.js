// Reemplazamos asyncMock por Firebase de Google.
// El array [] es una "colección" y cada {} es un documento en en Firebase. 

const products = [
    { 
        id: "1", // el id lo va a definir siempre Firebase para que sea único.
        title: "Placa de video",
        category:'placa',
        description: "placa de video para video juegos futuristas",
        price: 1000,
        pictureUrl: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple_announce-iphone12pro_10132020.jpg.og.jpg?202108061040'
        // para las imagenes podemos agregar un  string como este o hacer referencia a la carpeta public "/images/img1" (en firebase va sin comillas)
    },
    {
        id: "2", title: "Teclado gamer",   category:'teclado',      description: "Teclado con ingreso USB para pc y notebbok",         price: 2000,         pictureUrl: "https://cdn.pocket-lint.com/r/s/1200x630/assets/images/155378-phones-review-hands-on-samsung-galaxy-s21-ultra-image1-luae09ici4.JPG"
    },
    {
        id: "3",         title: "Mouse hibrido",    category:'mouse',     description: "Mouse para diseño de alta presión y mauqetación web",         price: 3000,         pictureUrl: "https://img.freepik.com/foto-gratis/ciudad-inteligente-futurista-tecnologia-red-global-5g_53876-98438.jpg?t=st=1649109207~exp=1649109807~hmac=1b412612810de47b5f8f3db562f7b19ecf6aa8e5720801924db8df67d89d2d71&w=1380"
    },
    {
        id: "4",         title: "Monitor 22 pulgadas",    category:'monitor',    description: "Monitor 22 pulgadas curvo full screaen",        price: 4000,        pictureUrl: "https://img.freepik.com/foto-gratis/hombre-usando-tecnologia-inteligente-maqueta-psd-tableta-digital_53876-110815.jpg?t=st=1649109207~exp=1649109807~hmac=fdb79a2d4df4568b352595ba518097d7e8d58c9334023c13060c9b9c534e20d8&w=1380"
    }
]
// Con categories hacemos lo mismo que con products
const categories = [
    {id: 'placa', description: 'PLACAS'},
    {id: 'teclado', description: 'TECLADOS'},
    {id: 'mouse', description: 'MOUSES'},
    {id: 'monitor', description: 'MONITORES'}
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts =(categoryId) => {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products) // ¿ compara products.category vs categoryId (que es categories.id) ? 
        },1000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}
