
// const cargarDatos = () => {
//     getProducts().then(prods => {
//         console.log('Volvio');
//         console.log(prods);

//         prods.map(({ name, description, price, img, category, stock }) => {

//             addDoc(collection(firestoreDB, "products"), { name, description, price, img, category, stock }).then(prods => {
//                 console.log('Volvio');
//                 console.log(prods);
//             }).catch(error => {
//                 console.error(error);
//             }).finally(() => {
//                 console.log('Finalizó la promesa');
//             });
//         });

//     }).catch(error => {
//         console.error(error);
//     }).finally(() => {
//         console.log('Finalizó la promesa');
//     });
// };