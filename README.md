## ZAIDAP

Soy Ezequiel Jaureguiberry y el proyecto realizado es para el curso de React JS de CODERHOUSE. 
El mismo consiste en una tienda online de insumos de tecnología para atender a los clientes de cercania. En ella podrás navegar por 4 categorías de productos, armar tu carrito de productos con stock y adquirir tu orden de compra de los productos que has seleccionado. La orden de compra se encarga de verificar si hay stock de productos, bajar el stock de los productos cuando son confirmados en una orden de compra y emitir una orden de compra.


## Clonar el proyecto (branch desafio13) con git clone, ingresar a la carpeta del mismo e instalar librerias con:

npm install

## Correr el proyecto con:

npm start.
Si no se abre el navegador de forma automatica, abrir y ejecutar http://localhost:3000 

## Carpeta CartContext:
addItem = agrega productos al carrito, se utiliza en ItemDetail en función handleAdd donde en el 2do parametro seteamos que addItem pase la info de productObj.

getQuantity = //Muestra cantidad de productos en carrito en el CartWidgt

isInCart = Verifica si X producto ya está en el carrito para evitar duplicados. El metodo some recorre el array y devuelve true cuando encuentra coincidencia. Se utiliza en ItemDetail.

clearCart = Para vaciar el carrito, donde seteamos un array vacio.

removeItem = Para remover productos del carrito.

getTotal = Para obtener el valor final del carrito.

getQuantityProd = identificar la cantidad de productos que hay en carrito. Se utiliza en itemDetail para indicar cual es la cantidad inicial de initial. Se utiliza en ItemCount, se pasa al useState initial como valor inicial para identificar la cantidad de X productos que hay en cart.

## Carpeta Hooks
Se crea un custom hooks para verificar loading y que esté activo.

## Carpeta Services
Se extraen partes de las consultas a FIREBASE por si migramos de base de datos. Quedan pendiente migrar las funciones del registro de la orden, la baja del stock y la generación del código de compra.