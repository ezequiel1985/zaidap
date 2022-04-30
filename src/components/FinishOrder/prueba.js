
const Cart = () => {
    const { cart, removeItem, clearCart, getTotal } = useContext(CartContext)
// ### writeBatch, query, where, getDocs, documentId: Para generar la order y disminuir stock en FIRESTORE DATABASE cuando compran un producto => createOrder ###
        const [loading, setLoading] = useState(false)
    
        const createOrder = () =>{
        setLoading(true)

        const objOrder = {
            items: cart,
            buyer: {
                name: 'Ezequiel',
                phone: '2615029155',
                email: 'eze@eze.com'
            },
            total: getTotal(),
            date: new Date()
        }

        const ids = cart.map(p => p.id)

        const batch = writeBatch(firestoreDb);

        const collectionRef = collection(firestoreDb, 'products');
        
        const outOfStock = [] // array vacio para pushear los productos que no tienen stock.

        getDocs(query(collectionRef, where(documentId(), 'in', ids))) // in es un operador de comparación. in = 'estén dentro'
            .then(response =>{
                response.docs.forEach(doc=>{
                    const dataDoc = doc.data()
                    const prodQuantity = cart.find(p => p.id === doc.id)?.quantity

                    if(dataDoc.stock >= prodQuantity) {
                        batch.update(doc.ref, {stock: dataDoc.stock - prodQuantity}) // con ref obtengo la referencia exacta de la base de datos.  
                    }else{
                        outOfStock.push({id: doc.id, ...dataDoc})
                    }
                })
            }).then(()=>{
                if(outOfStock.length === 0){ // este if es si está todo bien con el stock ya que no se pusheo nada a la var outOfStock
                    const collectionRef = collection(firestoreDb, 'orders')
                    return addDoc(collectionRef, objOrder) // con el return llevo la respuesta al then que viene luego del else, así manejo tanto con el then tanto la respuesta del if como del else. Si esta ok retorna succesfull y si no esta ok retorna un reject.
                }else {
                    return Promise.reject( {name: 'outOfStockError', products: outOfStock} ) //Promise.reject() retorna un objeto Promise que es rechazado por la razón específicada.
                }
            }).then(({ id })=>{
                batch.commit() // si está todo ok, actualizo el stock.
                console.log( `El id de la orden es ${id}`)
            }).catch(error => {
                console.log(error)
            }).finally(()=>{
                setLoading(false) //arranca en true, y aquí lo cambio a false ya que obtuve la respuesta.
            })
    }
    if(loading){
        return <h1> Se esta generando su orden </h1>
    }

    return(
        <>
        <div>
                        <p> Total: {getTotal()}</p>

            <button onClick={() => createOrder()} className="Button">Crear orden de compra </button>
        </div>
        
        </>
        )
}
