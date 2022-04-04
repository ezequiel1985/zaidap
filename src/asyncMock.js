const products = [
    { 
        id: 1,
        title: "Placa de video",
        description: "placa de video para video juegos futuristas",
        price: 1000,
        pictureUrl: ""
    },
    {
        id: 2,
        title: "Teclado gamer",
        description: "Teclado con ingreso USB para pc y notebbok",
        price: 2000,
        pictureUrl: ""
    },
    {
        id: 3,
        title: "Mouse hibrido",
        description: "Mouse para diseño de alta presión y mauqetación web",
        price: 3000,
        pictureUrl: ""
    },
    {
        id: 4,
        title: "Monitor 22 pulgadas",
        description: "Monitor 22 pulgadas curvo full screaen",
        price: 4000,
        pictureUrl: ""
    }
]

export const getProductos =() => {
    return new Promise (resolve => {
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}