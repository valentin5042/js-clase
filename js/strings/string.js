//const producto = 'monitor de 23 pulgadas'

//const producto2 = "monitor de 25 pulgadas"
//const precio = 300

//const producto3 = new String('monitor de 28 pulgadas')

//console.log(producto.length)


//Nos dirá en que posición tiene el texto en caso de encontrarlo
//console.log(producto.indexOf("pulgadas"))
//console.log(producto.indexOf("tablet")) // -1 significa que no lo pudo encontrar


// Include

//console.log(producto.includes("monitor"));
//console.log(producto.includes("Monitor"));



//concatenar 

//const producto = 'monitor de 23 pulgadas '
//const precio = "300 usd"

// concat para concatenar
//console.log(producto.concat('En descuento'));
//console.log(producto.concat(precio));


//console.log(producto + precio)
//console.log("Nuestro " + producto + "tiene un precio de " + precio)
//console.log(producto , "tiene un precio de " , precio)


//console.log(`El producto ${producto} tiene un precio de $ ${precio}`);

// 
//const producto = '                   monitor de 23 pulgadas                       '
//const precio = "300 usd"


//console.log(producto.length)

//Eliminar al principio 
//console.log(producto.trimStart())
//console.log(producto.trimEnd())

//los métodos en js se pueden encadenar
//console.log(producto.trimStart().trimEnd())


//un método que ya tiene tiempo

//console.log(producto.trim().length)

// Repeat repite las cadenas de texto
//const producto = 'monitor de 23 pulgadas '
//const precio = "300 usd"

//const texto = "en promoción ".repeat(3)
//console.log(producto.repeat(3))
//console.log(producto.repeat(2.3))
//console.log(`${producto} ${precio} en promocion !!!`)

//split
//console.log(producto.split(" "))

//const pasaTiempo = 'leer, caminar, escuchar musica, escribir, aprender a programar, #holamundo'

//console.log(pasaTiempo.split("#"))


const producto = 'monitor de 23 pulgadas'
const precio = "300 usd"

console.log(producto.toUpperCase().includes('MONITOR'))
console.log(producto.toLowerCase().includes('monitor'))

