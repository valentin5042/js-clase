// const nombreProducto = 'monitor'
// const precio = 30
// const disponible = true


// const producto = {
//     nombre: 'monitor de 20 pulgadas',
//     precio: 30,
//     disponible: true
// }

// console.log(producto.nombre)
// console.log(producto.precio)
// console.log(producto.disponible)



// producto.imagen = 'imagen.png'

// delete producto.nombre;

// console.log(producto)


// destructuring
// const producto = {
//     nombre: 'monitor de 20 pulgadas',
//     precio: 30,
//     disponible: true
// }


// const { nombre, disponible } = producto;


// console.log(nombre)
// console.log(disponible)


// const producto = {
//     nombre: 'monitor de 20 pulgadas',
//     precio: 30,
//     disponible: true,
//     informacion: {
//         peso: '1kg',
//         medida: '1m'
//     }
// }

// console.log(producto)
// console.log(producto.informacion)
// console.log(producto.informacion.medida)
// console.log(producto.informacion.peso)

// const { nombre, informacion, informacion: { peso } } = producto;


// console.log(nombre)
// console.log(informacion)
// console.log(peso)



// const producto = {
//     nombre: 'monitor de 20 pulgadas',
//     precio: 30,
//     disponible: true
// }

// // Object.freeze( producto )

// Object.seal( producto )

// producto.disponible = false
// producto.precio = 500

// delete producto.disponible

// console.log(producto)

// const producto = {
//     nombre: 'monitor de 20 pulgadas',
//     precio: 30,
//     disponible: true
// }

// const medidas = {
//     peso: '1kg',
//     medida: '1 m'
// }

// const resultado = Object.assign(producto, medidas)

// const resultado2 = { ...producto, ...medidas }

// console.log(resultado)
// console.log(resultado2)



// const producto = {
//     nombre: 'monitor de 20 pulgadas',
//     precio: 30,
//     disponible: true,
//     mostrarInfo: function() {
//         return `el producto ${this.nombre} tiene un precio de ${this.precio}`
//     }
// }

// const producto2 = {
//     nombre: 'monitor de 20 pulgadas',
//     precio: 30,
//     disponible: true,
//     mostrarInfo: function() {
//         return `el producto ${this.nombre} tiene un precio de ${this.precio}`
//     }
// }

// console.log( producto.mostrarInfo() )


// const producto = {
//     nombre: 'monitor de 20 pulgadas',
//     precio: 30,
//     disponible: true,
// }

// console.log(Object.keys(producto))
// console.log(Object.values(producto))
// console.log(Object.entries(producto))


