// const producto = {
//     nombre: 'monitor de 20 pulgadas',
//     precio: 30,
//     disponible: true,
// }

// console.log(producto)
// const numeros = [10, 20, 30 , 40 ,50];

// console.log(numeros)

// const meses = ['enero', 'febrero', 'marzo'];

// console.log(meses)

// const todo = ["enero", 20, true, {nombre: 'valentin'}]
// console.log(todo)

// const carrito = [];

// const product2 = {
//     nombre: 'monitor de 20 pulgadas',
//     precio: 30,
//     disponible: true,
// }

// const numeros = [10, 20, 30 , 40 ,50];

// console.table(numeros)

// console.log(numeros[0])
// console.log(numeros[3])

// const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio'];

// console.log(meses.length)

// for ( let i = 0; i < meses.length; i++ ) {
//     console.log(meses[i])
// }

// const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];


// meses[0] = 'Nuevo mes'
// meses[5] = 'hola'

// console.log(meses)


// const carrito = [];

// const producto = {
//     nombre: 'computadora',
//     precio: 600
// }

// const producto2 = {
//     nombre: 'celular',
//     precio: 800
// }


// carrito.push(producto);
// carrito.push(producto2)

// const producto3 = {
//     nombre: 'teclado',
//     precio: 50
// }

// carrito.unshift(producto3)

// console.table(carrito)

// const carrito = [];

// const producto = {
//     nombre: 'computadora',
//     precio: 600
// }

// const producto2 = {
//     nombre: 'celular',
//     precio: 800
// }

// let resultado = [ ...carrito, producto ];
// resultado = [ ...resultado, producto2];


// console.table(resultado)

// const carrito = [];

// const producto = {
//     nombre: 'computadora',
//     precio: 600
// }

// const producto2 = {
//     nombre: 'celular',
//     precio: 800
// }


// carrito.push(producto);
// carrito.push(producto2)

// const producto3 = {
//     nombre: 'teclado',
//     precio: 50
// }

// carrito.unshift(producto3)

// carrito.pop();
// carrito.shift()

// carrito.splice(1, 2)

// console.table(carrito)


// const numeros = [10, 20, 30, 40 ,50];

// const [ , , primero, segundo ] = numeros;

// console.log( segundo )
// console.log( primero )


// const carrito = [
//     {nombre: 'monitor curvo 22', precio: 500},
//     {nombre: 'monitor curvo 23', precio: 700},
//     {nombre: 'monitor curvo 26', precio: 800},
//     {nombre: 'monitor curvo 27', precio: 600},
//     {nombre: 'monitor curvo 36', precio: 400},
//     {nombre: 'monitor curvo 28', precio: 200},
// ]


// for ( let i = 0; i < carrito.length; i++ ) {
//     console.log(`Articulo ${ carrito[i].nombre} Precio: ${carrito[i].precio}`)
// }

// //ForEach

// carrito.forEach( function(producto) {
//     console.log(`Articulo ${ producto.nombre} Precio: ${producto.precio}`)
// })


const carrito = [
    {nombre: 'monitor curvo 22', precio: 500},
    {nombre: 'monitor curvo 23', precio: 700},
    {nombre: 'monitor curvo 26', precio: 800},
    {nombre: 'monitor curvo 27', precio: 600},
    {nombre: 'monitor curvo 36', precio: 400},
    {nombre: 'monitor curvo 28', precio: 200},
]

//ForEach
const nuevoArray = carrito.forEach( function(producto) {
    return (`Articulo ${ producto.nombre} Precio: ${producto.precio}`)
})

const nuevoArray2 = carrito.map( function(producto) {
    return (`Articulo ${ producto.nombre} Precio: ${producto.precio}`)
})


console.log(nuevoArray)
console.log(nuevoArray2)